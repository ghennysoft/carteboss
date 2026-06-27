'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/6 pt-[72px] pb-10 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[60px] mb-[60px]">
          <div>
            <Image 
              src="/logo.png" 
              alt="BOSS" 
              width={100} 
              height={100}
              className="brightness-0 invert mb-1"
            />
            <p className="text-sm leading-relaxed text-white/40 mt-4 mb-6 max-w-[260px]">
              La carte de visite intelligente qui transforme chaque contact en opportunité de croissance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 border border-white/12 rounded-lg flex items-center justify-center text-white/50 text-sm hover:border-gold hover:text-gold transition-all">in</a>
              <a href="#" className="w-9 h-9 border border-white/12 rounded-lg flex items-center justify-center text-white/50 text-sm hover:border-gold hover:text-gold transition-all">f</a>
              <a href="#" className="w-9 h-9 border border-white/12 rounded-lg flex items-center justify-center text-white/50 text-sm hover:border-gold hover:text-gold transition-all">▶</a>
              <a href="#" className="w-9 h-9 border border-white/12 rounded-lg flex items-center justify-center text-white/50 text-sm hover:border-gold hover:text-gold transition-all">♪</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold tracking-[0.08em] uppercase text-white/30 mb-5">Profil</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-sm text-white/55 hover:text-gold-light transition-colors">Créer un compte</a></li>
              <li><a href="#" className="text-sm text-white/55 hover:text-gold-light transition-colors">Se connecter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold tracking-[0.08em] uppercase text-white/30 mb-5">Ressources</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-sm text-white/55 hover:text-gold-light transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-white/55 hover:text-gold-light transition-colors">Actualités</a></li>
              <li><a href="/about" className="text-sm text-white/55 hover:text-gold-light transition-colors">À propos</a></li>
              <li><a href="/contact" className="text-sm text-white/55 hover:text-gold-light transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-white/55 hover:text-gold-light transition-colors">Centre d&apos;aide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold tracking-[0.08em] uppercase text-white/30 mb-5">Devenir agent</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-sm text-white/55 hover:text-gold-light transition-colors">Carrières</a></li>
              <li><a href="#" className="text-sm text-white/55 hover:text-gold-light transition-colors">Actualités</a></li>
              <li><a href="#" className="text-sm text-white/55 hover:text-gold-light transition-colors">Événements</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold text-white mb-2">Restez à l&apos;affût des offres</h4>
            <p className="text-[13px] leading-relaxed text-white/40 mb-4">Nous ajoutons constamment de nouvelles fonctionnalités pour améliorer votre expérience.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Votre email" className="flex-1 bg-white/6 border border-white/10 rounded-md py-2.5 px-3.5 font-dm-sans text-sm text-white outline-none focus:border-gold transition-colors placeholder:text-white/30" />
              <button className="bg-gold text-navy border-none rounded-md py-2.5 px-[18px] font-dm-sans text-sm font-semibold hover:bg-gold-light transition-colors whitespace-nowrap">S&apos;abonner</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/6 pt-8 flex justify-between items-center gap-6 flex-wrap">
          <p className="text-[13px] text-white/30">© 2026 BOSS. Tous droits réservés.</p>
          <div className="flex gap-6 flex-wrap">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Conditions d&apos;utilisation</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Accord nouvel associé</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Politique de remboursement</a>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-[#1a1f71] rounded-md py-1.5 px-2.5 flex items-center">
              <span className="font-['Arial',sans-serif] text-[13px] font-black italic text-white tracking-[1px]">VISA</span>
            </div>
            <div className="bg-[#252525] rounded-md py-1.5 px-2 flex items-center">
              <div className="relative w-9 h-[22px]">
                <svg width="36" height="22" viewBox="0 0 36 22">
                  <circle cx="13" cy="11" r="9" fill="#EB001B"/>
                  <circle cx="23" cy="11" r="9" fill="#F79E1B"/>
                  <path d="M18 4.3a9 9 0 010 13.4A9 9 0 0118 4.3z" fill="#FF5F00"/>
                </svg>
              </div>
            </div>
            <div className="bg-[#ff6600] rounded-md py-1.5 px-2.5 flex items-center gap-1.5">
              <div className="relative w-3.5 h-3.5 ">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <circle cx="7" cy="7" r="6.5" fill="white" opacity="0.9"/>
                  <circle cx="7" cy="7" r="4" fill="#ff6600"/>
                </svg>
              </div>
              <span className="font-dm-sans text-[11px] font-bold text-white whitespace-nowrap">Orange Money</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}