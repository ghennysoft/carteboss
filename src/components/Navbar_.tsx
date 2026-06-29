'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-[5%] h-[72px] bg-navy/97 backdrop-blur-sm border-b border-gold/20">
        <div className="flex items-center gap-2.5 ">
          <Image 
            src="/logo.png" 
            alt="BOSS" 
            width={150} 
            height={150}
            className="brightness-0 invert"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-9 list-none">
          <li><Link href="/" className="text-white/75 text-sm font-normal tracking-wide hover:text-gold-light transition-colors">Accueil</Link></li>
          <li><Link href="/about" className="text-white/75 text-sm font-normal tracking-wide hover:text-gold-light transition-colors">À propos</Link></li>
          <li><Link href="/services" className="text-white/75 text-sm font-normal tracking-wide hover:text-gold-light transition-colors">Services</Link></li>
          <li><Link href="/devenir-agent" className="text-white/75 text-sm font-normal tracking-wide hover:text-gold-light transition-colors">Devenir un Agent</Link></li>
          <li><Link href="/contact" className="text-white/75 text-sm font-normal tracking-wide hover:text-gold-light transition-colors">Nous contacter</Link></li>
          <li>
            <a 
              href="#" 
              className="bg-transparent border border-gold text-gold py-2 px-5 rounded-md font-medium hover:bg-gold hover:text-navy transition-all"
            >
              Connexion agent
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-101"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`
          fixed inset-0 bg-navy/98 backdrop-blur-lg z-99 transition-all duration-300 lg:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        style={{ top: '72px' }}
      >
        <ul className="flex flex-col items-center gap-6 pt-12 px-5">
          <li>
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white/80 text-lg font-medium tracking-wide hover:text-gold-light transition-colors"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white/80 text-lg font-medium tracking-wide hover:text-gold-light transition-colors"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white/80 text-lg font-medium tracking-wide hover:text-gold-light transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/devenir-agent" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white/80 text-lg font-medium tracking-wide hover:text-gold-light transition-colors"
            >
              Devenir un Agent
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white/80 text-lg font-medium tracking-wide hover:text-gold-light transition-colors"
            >
              Nous contacter
            </Link>
          </li>
          <li className="pt-4">
            <Link 
              href="#" 
              onClick={() => setIsMenuOpen(false)}
              className="inline-block bg-transparent border border-gold text-gold py-2.5 px-8 rounded-md font-medium hover:bg-gold hover:text-navy transition-all"
            >
              Connexion agent
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}