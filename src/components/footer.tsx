"use client"

import Link from 'next/link';

export default function Footer() {
  return (
    <div className="antialiased bg-body text-body font-body">
      {/* Footer */}
      <section className="relative py-12 lg:py-12 bg-black text-white overflow-hidden">
        <div className="container px-4 mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            <div className='mb-10'>
              <h5 className='font-semibold text-orange-400 mb-4'>PROFILE</h5>
              <p className='mb-2 opacity-80'>CREER UN COMPTE</p>
              <p className='mb-2 opacity-80'>SE CONNECTER</p>
            </div>
            <div className='mb-10'>
              <h5 className='font-semibold text-orange-400 mb-4'>CONNECTER</h5>
              <div className='flex items-center gap-2 mb-2 opacity-80'>
                <span>IN</span>
                <span>INSTAGRAM</span>
              </div>
            </div>
            <div className='mb-10'>
              <h5 className='font-semibold text-orange-400 mb-4'>RESSOURCES</h5>
              <p className='mb-2 opacity-80'>BLOG</p>
              <p className='mb-2 opacity-80'>ACTUALITE</p>
              <p className='mb-2 opacity-80'>A PROPOS</p>
              <p className='mb-2 opacity-80'>CONTACT</p>
              <p className='mb-2 opacity-80'>EXPEDITION</p>
              <p className='mb-2 opacity-80'>RETOURS</p>
              <p className='mb-2 opacity-80'>CENTRE D&apos;AIDE</p>
            </div>
            <div className='mb-10'>
              <h5 className='font-semibold text-orange-400 mb-4'>DEVENIR AGENT</h5>
              <p className='mb-2 opacity-80'>CARRIERES</p>
              <p className='mb-2 opacity-80'>EVENEMENTS</p>
            </div>
            <div className='mb-10 col-span-2 md:col-span-1'>
              <h5 className='font-semibold mb-4'>Restez à l&apos;afflut des offres et des mises à jour logicielles</h5>
              <span className='mb-2 opacity-80'>Nous ajoutons consamment des nouvelles fonctionnaliés pour améliorer votre expérience de réseautage.</span>
              <form action="">
                <input type="text" placeholder="Entrez l'email" />
              </form>
            </div>
          </div>

          <br /><br />
          <div className="text-center">
            Designed by{' '}
            <a className="inline-block text-gray-600 hover:blue-950 font-medium" href="https://www.ghennysoft.com" target="_blank" rel="noopener noreferrer">
              GhennySoft
            </a>
            {/* {' '}• Distributed by{' '}
            <a className="inline-block text-gray-600 hover:blue-950 font-medium" href="https://www.ThemeWagon.store" target="_blank" rel="noopener noreferrer">
              ThemeWagon
            </a> */}
          </div>
          <p className="text-sm text-gray-500 mb-3 text-center">© {new Date().getFullYear()} La carte Boss. Tout droits reservé.</p>
        </div>
      </section>
    </div>
  );
};