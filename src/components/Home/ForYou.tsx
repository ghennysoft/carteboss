'use client'

export default function ForYou() {
  return (
    <section className="py-[100px] px-[5%] bg-offWhite">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center">
          <span className="section-tag">Solutions</span>
          <h2 className="font-playfair text-[clamp(32px,3.5vw,52px)] font-bold">
            Conçu <span className="text-blue">pour vous</span>
          </h2>
          <div className="gold-line mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[60px]">
          {/* Client Card */}
          <div className="rounded-2xl overflow-hidden relative min-h-[320px] flex flex-col justify-end p-10 bg-navy border border-gold/20">
            <div className="absolute top-[30px] right-[30px] w-20 h-20 border border-white/8 rounded-full">
              <div className="absolute inset-3 border border-white/6 rounded-full"></div>
            </div>
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium py-1.5 px-3.5 rounded-full mb-5 self-start">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Pour les clients
            </span>
            <h3 className="font-playfair text-[28px] font-bold text-white mb-3">Vous êtes un client ?</h3>
            <p className="text-[15px] leading-relaxed text-white/60 mb-7">Modernisez votre image, partagez vos informations en un tap et développez votre réseau en toute simplicité.</p>
            <a href="#" className="inline-flex items-center gap-2 border border-gold text-gold-light bg-transparent font-dm-sans text-sm font-medium py-2.5 px-5 rounded-md hover:bg-gold/15 transition-colors self-start">
              Découvrir plus →
            </a>
          </div>
          
          {/* Agent Card */}
          <div className="rounded-2xl overflow-hidden relative min-h-[320px] flex flex-col justify-end p-10 bg-blue border border-white/10">
            <div className="absolute top-[30px] right-[30px] w-20 h-20 border border-white/8 rounded-full">
              <div className="absolute inset-3 border border-white/6 rounded-full"></div>
            </div>
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium py-1.5 px-3.5 rounded-full mb-5 self-start">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
              </svg>
              Pour les agents
            </span>
            <h3 className="font-playfair text-[28px] font-bold text-white mb-3">Vous êtes un agent ?</h3>
            <p className="text-[15px] leading-relaxed text-white/60 mb-7">Rejoignez notre réseau d&apos;agents et bénéficiez d&apos;opportunités exclusives pour développer vos revenus et votre activité.</p>
            <a href="#" className="inline-flex items-center gap-2 border border-white/40 text-white bg-transparent font-dm-sans text-sm font-medium py-2.5 px-5 rounded-md hover:bg-white/10 hover:border-white/70 transition-colors self-start">
              Devenir agent →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}