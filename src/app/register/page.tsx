"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react";
import api from "../../utils/axiosConfig"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { BASE_API_URL } from "../../utils/constante";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Schéma de validation Zod
const registerSchema = z.object({
    first_name: z.string()
        .min(1, "Le prénom est requis")
        .min(2, "Le prénom doit contenir au moins 2 caractères"),
    last_name: z.string()
        .min(1, "Le nom est requis")
        .min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string()
        .min(1, "L'adresse email est requise"),
    phone: z.string()
        .min(1, "Le numéro de téléphone est requis"),
    gender: z.string()
        .min(1, "Le genre est requis"),
    address: z.string()
        .min(1, "L'adresse est requis"),
    date_of_birth: z.string()
        .min(1, "La date de naissance est requise"),
    password: z.string()
        .min(6, "Le mot de passe doit contenir au moins 6 caractères")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
            message: "Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre"
        }),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"]
})

type RegisterFormData = z.infer<typeof registerSchema>

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = async (data: RegisterFormData) => {
        setLoading(true);
        if (data.password !== data.confirmPassword) {
            setLoading(false);
            setMessage('Le mot de passe de confirmation est différent');
            return;
        }
        setMessage('');
        const submitData = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            gender: data.gender,
            address: data.address,
            date_of_birth: data.date_of_birth,
            password: data.password,
            confirmPassword: data.confirmPassword,
            
            // profile_picture: null,
            // identity_card: null,
        };
        console.log(submitData);

        try {
            const response = await api.post(BASE_API_URL+"/api/auth/register/", submitData)
      
            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('token', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)

            setLoading(false);
            setMessage('');

            router.push('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setMessage('Erreur de création de compte!');
        }
    }

    const passwordValue = watch("password");

    return (
        <div className="w-screen px-3">
            <div className="shadow-xl bg-white my-5 mx-auto sm:w-[25rem]">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="w-full sm:mx-auto sm:w-full sm:max-w-sm">
                        <img src="/logo2.png" width={200} alt="logo la carte boss" className="mx-auto" />
                    </div>
                    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                            {message && <div className="flex w-full justify-center rounded-md">
                                <small className='alert alert-danger p-2'>{message}</small>
                            </div>}
                            
                            <div>
                                <div className="relative mt-2 block mb-5 bg-gray-300 py-3 px-4 rounded-full focus:outline-0">
                                    <input 
                                        id="first_name" 
                                        type="text" 
                                        {...register("first_name")}
                                        placeholder="Prénom"
                                        className="block w-full focus:outline-0 bg-transparent" 
                                        autoFocus
                                    />
                                    {errors.first_name && (
                                        <small className="text-red-500 text-xs mt-1">{errors.first_name.message}</small>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="relative mt-2 block mb-5 bg-gray-300 py-3 px-4 rounded-full focus:outline-0">
                                    <input 
                                        id="last_name" 
                                        type="text" 
                                        placeholder="Nom"
                                        {...register("last_name")}
                                        className="block w-full focus:outline-0 bg-transparent" 
                                    />
                                    {errors.last_name && (
                                        <small className="text-red-500 text-xs mt-1">{errors.last_name.message}</small>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="relative mt-2 block mb-5 bg-gray-300 py-3 px-4 rounded-full focus:outline-0">
                                    <input 
                                        id="email" 
                                        type="email" 
                                        placeholder="Adresse email"
                                        {...register("email")}
                                        className="block w-full focus:outline-0 bg-transparent" 
                                    />
                                    {errors.email && (
                                        <small className="text-red-500 text-xs mt-1">{errors.email.message}</small>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="relative mt-2 block mb-5 bg-gray-300 py-3 px-4 rounded-full focus:outline-0">
                                    <input 
                                        id="phone" 
                                        type="text" 
                                        placeholder="Numéro de télépone"
                                        {...register("phone")}
                                        className="block w-full focus:outline-0 bg-transparent" 
                                    />
                                    {errors.phone && (
                                        <small className="text-red-500 text-xs mt-1">{errors.phone.message}</small>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="relative mt-2 block mb-5 bg-gray-300 py-3 px-4 rounded-full focus:outline-0">
                                    <select 
                                        name="gender" id="gender" 
                                        {...register("gender")}
                                        defaultValue={""}
                                        className="block w-full focus:outline-0 bg-transparent"
                                    >
                                        <option value="" disabled>----- Coisissez votre genre -----</option>
                                        <option value="M">Homme</option>
                                        <option value="F">Femme</option>
                                    </select>
                                    {errors.gender && (
                                        <small className="text-red-500 text-xs mt-1">{errors.gender.message}</small>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="relative mt-2 block mb-5 bg-gray-300 py-3 px-4 rounded-full focus:outline-0">
                                    <input 
                                        id="address" 
                                        type="address" 
                                        placeholder="Adresse physique"
                                        {...register("address")}
                                        className="block w-full focus:outline-0 bg-transparent" 
                                    />
                                    {errors.address && (
                                        <small className="text-red-500 text-xs mt-1">{errors.address.message}</small>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="relative mt-2 block mb-5 bg-gray-300 py-3 px-4 rounded-full focus:outline-0">
                                    <input 
                                        id="date_of_birth" 
                                        type="date" 
                                        placeholder="Date de naissance"
                                        {...register("date_of_birth")}
                                        className="block w-full focus:outline-0 bg-transparent" 
                                    />
                                    {errors.date_of_birth && (
                                        <small className="text-red-500 text-xs mt-1">{errors.date_of_birth.message}</small>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="relative mt-2 block mb-5 bg-gray-300 py-3 px-4 rounded-full focus:outline-0">
                                    <input 
                                        id="password" 
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="Mot de passe"
                                        {...register("password")}
                                        className="block w-full focus:outline-0 bg-transparent" 
                                    />
                                    {showPassword
                                        ? <Eye onClick={()=>setShowPassword(!showPassword)} className="absolute top-4 right-3 cursor-pointer"  />
                                        : <EyeOff onClick={()=>setShowPassword(!showPassword)} className="absolute top-4 right-3 cursor-pointer"  />
                                    }
                                </div>
                                {errors.password && (
                                    <small className="text-red-500 text-xs mt-1">{errors.password.message}</small>
                                )}
                            </div>

                            <div>
                                <div className="relative mt-2 block mb-5 bg-gray-300 py-3 px-4 rounded-full focus:outline-0">
                                    <input 
                                        id="confirmPassword" 
                                        placeholder="Confirmation mot de passe"
                                        type={showConfirmPassword ? "text" : "password"} 
                                        {...register("confirmPassword")}
                                        className="block w-full focus:outline-0 bg-transparent" 
                                    />
                                    {showConfirmPassword
                                        ? <Eye onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="absolute top-4 right-3 cursor-pointer"  />
                                        : <EyeOff onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="absolute top-4 right-3 cursor-pointer"  />
                                    }
                                </div>
                                {errors.confirmPassword && (
                                    <small className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</small>
                                )}
                            </div>

                            <div>
                                {
                                    loading
                                    ? <button disabled className="button-disabled flex w-full justify-center py-3 px-4 rounded-full focus:outline-0 cursor-pointer" style={{border: '1px solid #ddd'}}>
                                        Chargement...
                                        </button>
                                    : <button type="submit" className="flex w-full justify-center border border-[#26265eff] bg-[#26265eff] text-white py-3 px-4 rounded-full focus:outline-0 cursor-pointer">
                                        Créer un compte
                                        </button>
                                }
                            </div>
                            <hr className="border-gray-400 my-5" />
                            <div>
                                <Link href={"/login"} className="flex w-full justify-center border border-[#26265eff] bg-white text-[#26265eff] py-3 px-4 rounded-full focus:outline-0">
                                    Connexion
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register