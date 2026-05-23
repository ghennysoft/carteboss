"use client"

import { User } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface UserProps{
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
}

export default function NavBar() {
  const [user, setUser] = useState<UserProps>();
  const [token, setToken] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Initialiser les états côté client seulement
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
    const storedToken = window.localStorage.getItem('token');
    setToken(storedToken);
    
    if (storedToken) {
      const storedUser = window.localStorage.getItem('user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.error("Error parsing user data", e);
        }
      }
    }
  }, []);

  // Fermer le menu mobile quand on clique sur un lien
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <section className="relative">
        <nav className="py-6">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between">
              <Link href="/" className="inline-block">
                <img src="/logo.png" width={150} height={80} alt="Logo" />
              </Link>
              
              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
                <li className="mr-8">
                  <Link className="inline-block hover:blue-950 font-medium" href="/">Accueil</Link>
                </li>
                <li className="mr-8">
                  <Link className="inline-block hover:blue-950 font-medium" href="/">A&nbsp;propos</Link>
                </li>
                <li className="mr-8">
                  <Link className="inline-block hover:blue-950 font-medium" href="/">Services</Link>
                </li>
                <li className="mr-8">
                  <Link className="inline-block hover:blue-950 font-medium" href="/">Devenir&nbsp;un&nbsp;Agent</Link>
                </li>
                <li className="mr-8">
                  <Link className="inline-block hover:blue-950 font-medium" href="/">Nous&nbsp;contacter</Link>
                </li>
              </ul>

              <div className="flex items-center justify-end">
                <div className="hidden lg:block">
                  <a 
                    href="#!" 
                    className="inline-flex group py-2.5 px-4 items-center justify-center text-sm font-medium border-orange-400 rounded-full transition duration-200"
                  >
                    <User size={18} className='text-orange-400 mr-2' />
                    <span className="mr-2">Connexion Agent</span>
                  </a>
                </div>
                
                <button 
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  className="lg:hidden"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="">
                    <path d="M5.19995 23.2H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.19995 16H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.19995 8.79999H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-full z-50`}>
          <div 
            onClick={() => setMobileNavOpen(false)}
            className="fixed inset-0 bg-violet-900 opacity-20"
          ></div>
          <nav className="relative flex flex-col pt-5 pb-7 px-5 w-full h-full bg-white overflow-y-auto">
            <div className="flex items-center justify-between">
              <Link href="/" className="inline-block">
                <img src="/logo2.png" width={120} height={80} alt="Logo" />
              </Link>
              <div className="flex items-center">
                <button onClick={() => setMobileNavOpen(false)}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="">
                    <path d="M23.2 8.79999L8.80005 23.2M8.80005 8.79999L23.2 23.2" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="pt-8 pb-12 mb-auto">
              <ul className="flex-col">
                <li className="mb-6">
                  <Link className="inline-block text-blue-950 font-medium" href="/">Accueil</Link>
                </li>
                <li className="mb-6">
                  <Link className="inline-block text-blue-950 font-medium" href="/">A propos</Link>
                </li>
                <li className="mb-6">
                  <Link className="inline-block text-blue-950 font-medium" href="/">Services</Link>
                </li>
                <li className="mb-6">
                  <Link className="inline-block text-blue-950 font-medium" href="/">Devenir un Agent</Link>
                </li>
                <li className="mb-6">
                  <Link className="inline-block text-blue-950 font-medium" href="/">Nous contacter</Link>
                </li>
              </ul>
              {isClient && token && user ? (
                <a href={`/profile/${user.id}`} className="inline-flex group py-2.5 px-4 items-center justify-center text-sm font-medium hover:text-white border hover:bg-blue-950 rounded-full transition duration-200">
                  Profile
                </a>
              ) : (
                <a href="/" className="inline-flex py-2.5 px-4 mr-6 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200">
                  Connexion agent
                </a>
              )}
            </div>

            <div className="flex items-center justify-between">
              {/* Social media icons */}
              <div className="flex items-center">
                <a href="#!" className="inline-block mr-4">
                  {/* Facebook SVG */}
                </a>
                <a href="#!" className="inline-block mr-4">
                  {/* Instagram SVG */}
                </a>
                <a href="#!" className="inline-block">
                  {/* LinkedIn SVG */}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}