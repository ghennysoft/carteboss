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
                <img src="/social/instagram.png" width={25} alt="instagram" className='rounded-full' />
                <span>INSTAGRAM</span>
              </div>
              <div className='flex items-center gap-2 mb-2 opacity-80'>
                <img src="/social/facebook.png" width={25} alt="facebook" className='rounded-full' />
                <span>FACEBOOK</span>
              </div>
              <div className='flex items-center gap-2 mb-2 opacity-80'>
                <img src="/social/youtube.jpg" width={25} alt="youtube" className='rounded-full' />
                <span>YOUTUBE</span>
              </div>
              <div className='flex items-center gap-2 mb-2 opacity-80'>
                <img src="/social/tiktok.jpg" width={25} alt="tiktok" className='rounded-full' />
                <span>TIKTOK</span>
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
            <div className='mb-10 col-span-2 lg:col-span-1'>
              <h5 className='font-semibold mb-4'>Restez à l&apos;afflut des offres et des mises à jour logicielles</h5>
              <span className='mb-2 opacity-80'>Nous ajoutons consamment des nouvelles fonctionnaliés pour améliorer votre expérience de réseautage.</span>
              <form action="">
                <input type="text" placeholder="Entrez l'email" />
              </form>
            </div>
          </div>

          <br /><br />
          
          <div className="lg:flex text-sm text-gray-500 mb-3 text-center">
            <span className='block mb-3 text-white opacity-80'>© {new Date().getFullYear()} BOSS. TOUT DROITS RESERVES. &nbsp;&nbsp;&nbsp;</span>
            <span className=''>POLITIQUE DE CONFIDENTIALITE</span>&nbsp;|&nbsp; 
            <span className=''>CONDITIONS D&apos;UTILISATION</span>&nbsp;|&nbsp;
            <span className=''>ACCORD NOUVEL ASSOCIE</span>&nbsp;|&nbsp;
            <span className=''>POLITIQUE DE REMBOURSEMENT</span> &nbsp;&nbsp;&nbsp; 
            <span className='flex justify-center lg:justify-start gap-2 mt-3 lg:mt-0'>
              <img src="/social/visa.png" width={80} alt="visa"  style={{ height: "50px" }}/>
              <img src="/social/mastercard.png" width={80} alt="mastercard"  style={{ height: "50px" }}/>
              <img src="/social/orange.jpg" width={80} alt="orange"  style={{ height: "50px" }}/>
            </span> 
          </div>

          <div className="text-center mt-20">
            <span className='opacity-80'>Designed by{' '} </span>
            <a className="inline-block text-orange-400 font-medium" href="https://www.ghennysoft.com" target="_blank" rel="noopener noreferrer">
              GhennySoft
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};