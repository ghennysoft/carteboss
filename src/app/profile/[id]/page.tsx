"use client"

import NavBar from '../../../components/navbar';
import Footer from '../../../components/footer';
import api from '@/utils/axiosConfig';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

// Mock data - normally from API
interface UserProps{
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  gender: string,
  address: string,
  date_of_birth: string,
  role: string,
  profile_picture: string,
  identity_card: string,
}

const Profile = () => {
  const [token, setToken] = useState("");
  const [refresh, setRefresh] = useState("");
  const [user, setUser] = useState<UserProps>();
  console.log({user, token, refresh});
  const params = useParams()

  useEffect(() => {
    const getUser = async () => {
      const res = await api.get('api/auth/users/'+params?.id)
      setUser(res?.data);
      setToken(window.localStorage.getItem('token') || "");
      setRefresh(window.localStorage.getItem('refreshToken') || "");
      return res?.data;
    }
    getUser();
  }, [params.id])

  return (
    <div className="antialiased bg-body text-body font-body">
      {/* Header */}
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 overflow-hidden">
        {
          user?.profile_picture
          ? <img className="absolute bottom-0 left-0" src={user?.profile_picture} alt="" />
          :  <p className='text-center'>
              <span className='bg-gray-500 p-10 rounded-full text-white text-3xl font-bold'>{user?.first_name?.slice(0,1)}{user?.last_name?.slice(0,1)}</span>
            </p>
        }
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mt-10">
            <p className="text-2xl text-black font-medium">
              <b>{user?.first_name} {user?.last_name}</b>
            </p>
          </div>
        </div>
      </section>

      {user?.role == "admin" || user?.role == "agent" && <div className='text-center pb-10'>
        <a target='_blank' href={`${process.env.NEXT_PUBLIC_CLIENT_URL}?token=${token}&refresh=${refresh}&user=${user.id}`} className="inline-flex group py-2.5 px-4 items-center justify-center text-sm font-medium  hover:text-white border hover:bg-blue-950 rounded-full transition duration-200">
          Accéder au tableau de bord
        </a>
      </div>}

      {/* About Content Section */}
      <section className="pb-12 lg:pb-24">
        <table className='mx-auto'>
          <tbody>
            <tr>
              <td>Numéro de téléphone &nbsp;&nbsp;&nbsp;</td>
              <td>:&nbsp; {user?.phone}</td>
            </tr>
            <tr>
              <td>Genre &nbsp;&nbsp;&nbsp;</td>
              <td>:&nbsp; {user?.gender === "M" ? "Homme" : "Femme"}</td>
            </tr>
            <tr>
              <td>Email &nbsp;&nbsp;&nbsp;</td>
              <td>:&nbsp; {user?.email}</td>
            </tr>
            {user && <tr>
              <td>Date de naissance &nbsp;&nbsp;&nbsp;</td>
              <td>:&nbsp; {new Date(user.date_of_birth).toLocaleDateString()}</td>
            </tr>}
            <tr>
              <td>Adresse &nbsp;&nbsp;&nbsp;</td>
              <td>:&nbsp; {user?.address}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;