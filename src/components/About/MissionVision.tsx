'use client'

export default function MissionVision() {
  return (
    <section className="py-24 px-[5%] bg-navy">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center">
          <span className="section-tag !text-gold-light before:!text-white/30">Ce qui nous guide</span>
          <h2 className="font-playfair text-[clamp(32px,3.5vw,48px)] font-bold text-white">
            Mission &amp; <span className="text-gold-light">Vision</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-14 rounded-2xl overflow-hidden bg-white/4">
          <div className="bg-navy-mid p-14 relative overflow-hidden">
            <div className="font-playfair text-[120px] font-black text-gold/5 absolute -bottom-5 right-5 leading-none select-none">M</div>
            <div className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mb-7">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-light">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <h3 className="font-playfair text-[28px] font-bold text-white mb-5">Notre Mission</h3>
            <p className="text-base leading-relaxed text-white/55 relative z-10">
              Concevoir des solutions innovantes qui révèlent le potentiel humain et transforment chaque connexion en levier de réussite et d&apos;indépendance.
            </p>
          </div>
          
          <div className="bg-navy-light p-14 relative overflow-hidden">
            <div className="font-playfair text-[120px] font-black text-gold/5 absolute -bottom-5 right-5 leading-none select-none">V</div>
            <div className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mb-7">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-light">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 className="font-playfair text-[28px] font-bold text-white mb-5">Notre Vision</h3>
            <p className="text-base leading-relaxed text-white/55 relative z-10">
              Former une génération de leaders en transformant de simples outils en leviers d&apos;influence, de croissance et d&apos;excellence — à travers toute l&apos;Afrique.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}