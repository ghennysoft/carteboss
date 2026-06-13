'use client'

export default function Team() {
  const team = [
    { role: "CEO &amp; Fondateur", name: "Emmanuel M." },
    { role: "Directeur Financier", name: "Confidentiel" },
    { role: "Directeur des Opérations", name: "Confidentiel" },
    { role: "Directrice RH", name: "Confidentiel" },
    { role: "Directeur Marketing", name: "Confidentiel" },
    { role: "Co-fondateurs", name: "Confidentiel" }
  ]

  return (
    <section className="py-24 px-[5%] bg-offWhite">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <span className="section-tag">Derrière BOSS</span>
          <h2 className="font-playfair text-[clamp(32px,3.5vw,48px)] font-bold">
            Une équipe <span className="text-blue">engagée.</span>
          </h2>
          <div className="gold-line mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14">
          {team.map((member, index) => (
            <div key={index} className="bg-white border border-border rounded-2xl p-7 text-center hover:shadow-[0_8px_30px_rgba(24,95,165,0.1)] hover:-translate-y-1 transition-all">
              <div className="w-[60px] h-[60px] rounded-full bg-navy border-2 border-gold/20 flex items-center justify-center mx-auto mb-4">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-light">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="text-[13px] font-semibold text-text-dark mb-1">{member.role}</div>
              <div className="text-[11px] text-text-muted tracking-[0.04em]">{member.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}