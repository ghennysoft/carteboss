'use client'

export default function HowItWorks() {
  return (
    <section className="py-[100px] px-[5%] bg-navy text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-3">
          <span className="section-tag text-gold-light! before:text-white/30!">Processus</span>
        </div>
        <h2 className="font-playfair text-[clamp(32px,3.5vw,52px)] font-bold text-center text-white">
          Comment ça <span className="text-gold-light">marche ?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-[60px] bg-white/5 rounded-2xl overflow-hidden">
          <div className="bg-navy-mid p-12 relative hover:bg-navy-light transition-colors">
            <div className="font-playfair text-[80px] font-black text-gold/8 absolute top-6 right-8 leading-none select-none">01</div>
            <div className="w-[52px] h-[52px] bg-gold/12 border border-gold/20 rounded-xl flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-light">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Remplissez le formulaire</h3>
            <p className="text-[15px] leading-relaxed text-white/50">Fournissez vos informations via notre formulaire simple, rapide et sécurisé. Moins de 3 minutes.</p>
          </div>
          
          <div className="bg-navy-mid p-12 relative hover:bg-navy-light transition-colors">
            <div className="font-playfair text-[80px] font-black text-gold/8 absolute top-6 right-8 leading-none select-none">02</div>
            <div className="w-[52px] h-[52px] bg-gold/12 border border-gold/20 rounded-xl flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-light">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
                <path d="M7 7h.01M11 7h6"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Activez votre carte</h3>
            <p className="text-[15px] leading-relaxed text-white/50">Recevez votre carte BOSS, activez-la et accédez à tous les outils et avantages de l&apos;écosystème.</p>
          </div>
          
          <div className="bg-navy-mid p-12 relative hover:bg-navy-light transition-colors">
            <div className="font-playfair text-[80px] font-black text-gold/8 absolute top-6 right-8 leading-none select-none">03</div>
            <div className="w-[52px] h-[52px] bg-gold/12 border border-gold/20 rounded-xl flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-light">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Connectez-vous</h3>
            <p className="text-[15px] leading-relaxed text-white/50">Partagez votre profil en un tap NFC, développez votre réseau et transformez chaque rencontre en opportunité réelle.</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="/services" className="inline-flex items-center gap-2.5 bg-gold text-navy font-dm-sans text-sm font-semibold py-3.5 px-7 rounded-md hover:bg-gold-light hover:-translate-y-px transition-all">
            Découvrir BOSS →
          </a>
        </div>
      </div>
    </section>
  )
}