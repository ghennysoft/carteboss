'use client'

export default function Expansion() {
  const cities = [
    { name: "Kinshasa", status: "active", badge: "Actif" },
    { name: "Lubumbashi", status: "soon", badge: "Bientôt" },
    { name: "Matadi", status: "soon", badge: "Bientôt" },
    { name: "RDC — national", status: "future", badge: "2028+" },
    { name: "Afrique", status: "future", badge: "Vision" }
  ]

  const timeline = [
    { year: "2026 — Kinshasa", desc: "Lancement et consolidation. Bâtir la communauté BOSS dans la capitale." },
    { year: "2027 — Lubumbashi &amp; Matadi", desc: "Extension vers les autres grands centres économiques du Congo." },
    { year: "2028–2031 — Le Congo entier &amp; l'Afrique", desc: "Déploiement national puis continental. BOSS pour chaque professionnel africain." }
  ]

  return (
    <section className="py-24 px-[5%] bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <span className="section-tag text-gold-light! before:text-white/30!">Notre trajectoire</span>
        <h2 className="font-playfair text-[clamp(32px,3.5vw,48px)] font-bold text-white">
          Kinshasa aujourd&apos;hui,<br /><span className="text-gold-light">l&apos;Afrique demain.</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-14">
          <div>
            <p className="text-base leading-relaxed text-white/55 mb-6">
              BOSS a démarré là où tout commence : <strong className="text-white font-semibold">Kinshasa, la capitale de la RDC.</strong> Depuis janvier 2026, nous construisons une communauté de plus de 100 professionnels qui ont choisi l&apos;excellence comme standard.
            </p>
            <p className="text-base leading-relaxed text-white/55 mb-6">
              Notre ambition ne s&apos;arrête pas là. Dans les <strong className="text-white font-semibold">3 à 5 prochaines années,</strong> nous voulons porter le mouvement BOSS dans toutes les grandes villes du Congo, puis à travers le continent africain.
            </p>
            
            <div className="mt-2">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-5 items-start mb-7">
                  <div className="w-9 h-9 bg-gold/12 border border-gold/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-light">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1">{item.year}</h4>
                    <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-navy-mid rounded-2xl border border-gold/10 p-10">
            <div className="text-xs font-semibold tracking-[0.08em] uppercase text-white/30 mb-2">Présence &amp; expansion</div>
            {cities.map((city, index) => (
              <div key={index} className="flex items-center justify-between py-3.5 border-b border-white/6 last:border-none">
                <div className="flex items-center gap-2.5">
                  <span className={`w-2 h-2 rounded-full ${city.status === 'active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : city.status === 'soon' ? 'bg-gold' : 'bg-white/20'}`}></span>
                  <span className="text-[15px] font-medium text-white">{city.name}</span>
                </div>
                <span className={`text-[11px] font-medium py-1 px-2.5 rounded-full ${city.status === 'active' ? 'bg-green-500/12 text-green-500 border border-green-500/25' : city.status === 'soon' ? 'bg-gold/12 text-gold-light border border-gold/25' : 'bg-white/5 text-white/40 border border-white/10'}`}>
                  {city.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}