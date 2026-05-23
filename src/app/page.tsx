"use client"

import Image from 'next/image';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import { useState, ReactNode } from 'react';
import Link from 'next/link';
import { BriefcaseBusiness, Clock, Quote, Target, User, Users, Users2, UserStar } from 'lucide-react';

interface AccordionProps {
  title: string,
  children: ReactNode,
}

export default function Home() {
  // Composant Accordion pour la FAQ
  const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full py-6 px-8 mb-4 items-start justify-between text-left shadow-md rounded-2xl"
      >
        <div>
          <div className="pr-5">
            <h5 className="text-lg font-medium">{title}</h5>
          </div>
          <div 
            className={`overflow-hidden pr-5 duration-500 ${isOpen ? 'h-auto mt-4' : 'h-0'}`}
          >
            <p className="text-gray-700">{children}</p>
          </div>
        </div>
        <span className="shrink-0">
          {!isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="" className='cursor-pointer'>
              <path d="M12 5.69995V18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.69995 12H18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="" className='cursor-pointer'>
              <path d="M5.69995 12H18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      </button>
    );
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      {/* Header */}
      <div className="relative text-white" style={{ backgroundImage: "url(/hero.png)", backgroundSize: "cover" }}>
        <NavBar />
        <div className="container lg:px-10 py-10 relative grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="max-w-lg xl:max-w-xl mx-auto text-center lg:text-left">
            <h1 className="font-heading text-5xl font-bold xs:text-7xl xl:text-7xl tracking-tight mb-8">
              Tranformez chaque contact en <span className='text-orange-400'>opportunité.</span>
            </h1>
            <p className="max-w-md xl:max-w-none text-lg opacity-80 mb-10">
              Digitalisez vos cartes de visite, développez votre réseau et créez des ouvelles opportunités avec BOSS.
            </p>
            <p className="max-w-md xl:max-w-none text-lg backdrop-opacity-50 mb-10">
              Affirmez votre professionnalisme dès le prémier contact grâce à une solution moderne, élégante et performante.
            </p>
            <strong>Rapide. Sécurisée. Toujours à jour.</strong> <br /> <br />
            <a href="#!" className="inline-flex py-3 px-5 items-center justify-center text-lg font-medium bg-orange-400 rounded-lg transition duration-200">
              Obtenir ma carte &nbsp;
              <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="">
                  <path d="M4.75 10H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <section className="p-4 bg-white">
        <div className="lg:pt-16 lg:pb-24 lg:px-5 xs:px-8 xl:px-12 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="">
              <h2 className="font-semibold text-3xl mb-16 text-center">Comment ça marche ?</h2>
              <div className="grid md:grid-cols-3">
                {/* Process */}
                <div className="relative w-full px-4 mb-8 md:mb-12 text-center">
                  <div className='absolute flex justify-center items-center p-3 bg-orange-400 text-white rounded-full w-5 h-5 -top-2 left-6'>1</div>
                  <div className='flex flex-col items-center'>
                    <Image src="/Process_1.png" alt="Process 1" width={300} height={300} className='w-full rounded-md h-50' style={{ objectFit: "cover" }} />
                    <div className="mt-6">
                      <h5 className="text-lg font-semibold mb-3">Remplissez le formulaire</h5>
                      <p className="mb-6">Fournissez vos informations via notre formulaire simple, rapide et securisé.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative w-full px-4 mb-8 md:mb-12 text-center">
                  <div className='absolute flex justify-center items-center p-3 bg-orange-400 text-white rounded-full w-5 h-5 -top-2 left-6'>2</div>
                  <div className='flex flex-col items-center'>
                    <Image src="/Process_2.png" alt="Process 2" width={300} height={300} className='w-full rounded-md h-50' style={{ objectFit: "cover" }} />
                    <div className="mt-6">
                      <h5 className="text-lg font-semibold mb-3">Activez votre carte</h5>
                      <p className="mb-6">Recevez votre produit BOSS, activez-le et accéder aux avantages et aux outils à l&apos;image.</p>
                    </div>
                  </div>
                </div>

                <div className="relative w-full px-4 mb-8 md:mb-12 text-center">
                  <div className='absolute flex justify-center items-center p-3 bg-orange-400 text-white rounded-full w-5 h-5 -top-2 left-6'>3</div>
                  <div className='flex flex-col items-center'>
                    <Image src="/Process_3.png" alt="Process 3" width={300} height={300} className='w-full rounded-md h-50' style={{ objectFit: "cover" }} />
                    <div className="mt-6">
                      <h5 className="text-lg font-semibold mb-3">Connectez-vous</h5>
                      <p className="mb-6">Connectez-vous facilement et partagez votre profil en un clic. Développez votre réseau avec impact.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <Link href={'/#!'} className='bg-orange-400 text-white py-2 px-10 rounded-md'>
                  Découvrir BOSS 
                  {/* &nbsp;
                  <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="">
                      <path d="M4.75 10H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="mt-5">
        <div className="container mx-auto px-4">
          <h2 className="font-semibold text-3xl mb-16 text-center">Pourquoi BOSS ?</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 mb-10 gap-5">
            <div className="w-full px-4 font-semibold mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="flex justify-center">
                  <Clock size={80} className='text-orange-400' />
                </h5>
                <span className="block my-5 text-lg">Gagnez du temps</span>
                <span className="text-sm opacity-75">
                  Partagez vos informations en quelques secondes et concentrez-vous sur l&apos;essentiel.
                </span>
              </div>
            </div>
            <div className="w-full px-4 font-semibold mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="flex justify-center">
                  <UserStar size={80} className='text-orange-400' />
                </h5>
                <span className="block my-5 text-lg">Impressionnez dès le premier contact</span>
                <span className="text-sm opacity-75">
                  Offrez une expérience moderne et professionnel qui marque les esprits.
                </span>
              </div>
            </div>
            <div className="w-full px-4 font-semibold mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="flex justify-center">
                  <Users2 size={80} className='text-orange-400' />
                </h5>
                <span className="block my-5 text-lg">Développez votre réseau plus vite</span>
                <span className="text-sm opacity-75">
                  Connectez-vous facilement et élargissez votre réseau avec des contacts qualifiés.
                </span>
              </div>
            </div>
            <div className="w-full px-4 font-semibold mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="flex justify-center">
                  <Target size={80} className='text-orange-400' />
                </h5>
                <span className="block my-5 text-lg">Créez des opportunités réelles</span>
                <span className="text-sm opacity-75">
                  Chaque contact devient une opportunité de collaboration, de vente et de croissance.
                </span>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <Link href={'/#!'} className='bg-orange-400 text-white py-2 px-10 rounded-md'>
              Commencer maintenant 
              {/* &nbsp;
              <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="">
                  <path d="M4.75 10H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span> */}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="mt-20">
        <div className="container mx-auto p-5 bg-gray-100 rounded-lg gap-5">
          <h2 className='text-xl text-center font-semibold mb-2'>Ils utilisent déjà BOSS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3">
            <div className="flex mb-3 md:col-span-2 lg:col-span-1">
              <div>
                <img src="/temoignage_1.png" width={100} height={80} alt="image" />
              </div>
              <div className='ml-5'>
              <span className="text-orange-400  "><Quote fill='lab(70.0429% 42.5156 75.8207)' strokeWidth={0} /></span>
                <span className="block py-3 text-md">La carte BOSS fonctionne très bien.</span>
                <b className="text-sm text-orange-400">- Mohamed K.</b>
              </div>
            </div>
            <div className="flex mb-3 md:col-span-2 lg:col-span-1">
              <div>
                <img src="/temoignage_2.png" width={300} height={80} alt="image" />
              </div>
              <div className='ml-5'>
                <span className=""><Quote fill='lab(70.0429% 42.5156 75.8207)' strokeWidth={0} /></span>
                <span className="block py-3 text-md">Beaucoup de mes connexions ont appreciées et étaient impressionnées par la carte.</span>
                <b className="text-sm text-orange-400">- Christian T.</b>
              </div>
            </div>
            <div className="flex justify-center md:col-span-4 lg:col-span-1">
              <span className='flex border rounded-lg p-5'>
                <Users width={50} height={50} />
                <span className='pl-5'>
                  <b className="text-5xl text-orange-400">+100</b>
                  <b className="block pt-3">Professionnels <br /> déjà connectés.</b>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* For You Section */}
      <section className="my-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 -mx-4 gap-5">
            <div className="w-full p-4 pb-0 font-semibold bg-orange-50 rounded-lg">
              <div className="flex justify-between">
                <p className="">
                  <User className='w-11 h-11 p-2 rounded-full bg-black text-white' />
                  <span className="block mt-4 mb-3 text-lg">Vous êtes un client ?</span>
                  <span className="text-sm pr-5 opacity-75">
                    Modernisez votre image, partagez vos informations facilement et développez votre réseau en toute simplicité.
                  </span>
                  <Link href={"/"} className="block text-orange-400 mt-5">Découvrir plus</Link>
                </p>
                <Image src={"/concu1.png"} width={200} height={200} alt='image' />
              </div>
            </div>
            <div className="w-full p-4 pb-0 font-semibold bg-blue-50 rounded-lg">
              <div className="flex justify-between">
                <p className="">
                  <BriefcaseBusiness className='w-11 h-11 p-2 rounded-full bg-black text-white' />
                  <span className="block mt-4 mb-3 text-lg">Vous êtes un agent ?</span>
                  <span className="text-sm pr-5 opacity-75">
                    Réjoignez notre réseau d&apos;agents et bénéficiez d&apos;opportunités exclusive pour développer vos révenus.
                  </span>
                  <Link href={"/"} className="block text-orange-400 mt-5">Devenir agent</Link>
                </p>
                <Image src={"/concu2.png"} width={200} height={200} alt='image' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};