'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen bg-navy flex items-center px-[5%] pt-[100px] pb-[60px] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="absolute w-[700px] h-[700px] bg-gradient-radial from-blue/18 via-transparent to-transparent right-[-100px] top-[-100px] pointer-events-none"></div>
      <div className="absolute w-[400px] h-[400px] bg-gradient-radial from-gold/10 via-transparent to-transparent right-[30%] bottom-[10%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-gold/12 border border-gold/30 text-gold-light text-xs font-medium tracking-[0.08em] uppercase py-1.5 px-3.5 rounded-full mb-7 animate-fade-in-up animation-delay-100">
            <span className="w-1.5 h-1.5 bg-gold-light rounded-full"></span>
            Carte de visite professionnelle NFC
          </div>
          <h1 className="font-playfair text-[clamp(44px,5vw,72px)] font-black leading-[1.1] text-white mb-6 animate-fade-in-up animation-delay-200">
            Transformez chaque contact en <em className="not-italic text-gold-light">opportunité.</em>
          </h1>
          <p className="text-[17px] leading-relaxed text-white/60 max-w-[480px] mb-4 animate-fade-in-up animation-delay-300">
            Digitalisez votre carte de visite, développez votre réseau et créez de nouvelles opportunités avec BOSS — la solution moderne, élégante et performante.
          </p>
          <p className="text-sm font-medium tracking-[0.05em] text-white/40 uppercase mb-10 animate-fade-in-up animation-delay-350">
            Rapide &nbsp;·&nbsp; Sécurisée &nbsp;·&nbsp; Toujours à jour
          </p>
          <div className="flex items-center gap-5 flex-wrap animate-fade-in-up animation-delay-400">
            <a target="_blank" href="https://forms.gle/xigqiKCbDjYGzgxA8" className="inline-flex items-center gap-2.5 bg-gold text-navy font-dm-sans text-sm font-semibold py-3.5 px-7 rounded-md hover:bg-gold-light hover:-translate-y-px transition-all">
              Obtenir ma carte
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center gap-2.5 bg-transparent text-white/75 font-dm-sans text-sm font-normal hover:text-white transition-colors">
              <span className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </span>
              Voir en vidéo
            </a>
          </div>
          <div className="flex gap-10 mt-[60px] pt-10 border-t border-white/8 animate-fade-in-up animation-delay-500">
            <div>
              <span className="font-playfair text-3xl font-bold text-gold-light block">+100</span>
              <span className="text-[13px] text-white/45 block mt-0.5">Professionnels connectés</span>
            </div>
            <div>
              <span className="font-playfair text-3xl font-bold text-gold-light block">Kinshasa</span>
              <span className="text-[13px] text-white/45 block mt-0.5">Disponible dès maintenant</span>
            </div>
            <div>
              <span className="font-playfair text-3xl font-bold text-gold-light block">3s</span>
              <span className="text-[13px] text-white/45 block mt-0.5">Pour partager votre profil</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center animate-fade-in-up animation-delay-900">
          <div className="relative w-[380px] h-[280px]">
            <div className="absolute w-[320px] h-[200px] bg-gold/12 rounded-[18px] bottom-0 right-0 rotate-[8deg]"></div>
            <Image 
              src="/metal.PNG" 
              alt="Carte BOSS" 
              width={340} 
              height={240}
              className="absolute rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(196,154,53,0.2)] -rotate-[4deg] top-5 left-5 object-cover animate-float"
            />
            <div className="absolute -bottom-2.5 right-2.5 bg-navy-light border border-gold/30 text-gold-light text-xs font-medium py-2 px-4 rounded-full flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></span>
              NFC Actif
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}