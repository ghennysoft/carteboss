'use client'

export default function PageHero() {
  return (
    <div className="min-h-[52vh] bg-navy flex items-end px-[5%] pt-[120px] pb-[72px] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-blue/20 via-transparent to-transparent -right-20 -top-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <p className="text-xs text-white/35 tracking-[0.08em] uppercase mb-5">
          BOSS &nbsp;/&nbsp; <span className="text-gold-light">À propos</span>
        </p>
        <h1 className="font-playfair text-[clamp(48px,6vw,84px)] font-black leading-[1.05] text-white">
          Notre <em className="not-italic text-gold-light">histoire,</em><br />notre mouvement.
        </h1>
        <div className="w-16 h-[3px] bg-gold rounded-full mt-7"></div>
      </div>
    </div>
  )
}