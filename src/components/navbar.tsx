'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-[5%] h-[72px] bg-navy/97 backdrop-blur-sm border-b border-gold/20">
      <div className="flex items-center gap-2.5">
        <Image 
          src="/images/BOSS_LOGO.png" 
          alt="BOSS" 
          width={38} 
          height={38}
          className="brightness-0 invert"
        />
      </div>
      <ul className="flex items-center gap-9 list-none">
        <li><Link href="/" className="text-white/75 text-sm font-normal tracking-wide hover:text-gold-light transition-colors">Accueil</Link></li>
        <li><Link href="/about" className="text-white/75 text-sm font-normal tracking-wide hover:text-gold-light transition-colors">À propos</Link></li>
        <li><a href="#" className="text-white/75 text-sm font-normal tracking-wide hover:text-gold-light transition-colors">Services</a></li>
        <li><a href="#" className="text-white/75 text-sm font-normal tracking-wide hover:text-gold-light transition-colors">Devenir un Agent</a></li>
        <li><a href="#" className="text-white/75 text-sm font-normal tracking-wide hover:text-gold-light transition-colors">Nous contacter</a></li>
        <li>
          <a 
            href="#" 
            className="bg-transparent border border-gold text-gold py-2 px-5 rounded-md font-medium hover:bg-gold hover:text-navy transition-all"
          >
            Connexion agent
          </a>
        </li>
      </ul>
    </nav>
  )
}