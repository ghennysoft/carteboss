'use client'

export default function Testimonials() {
  const testimonials = [
    {
      text: "Depuis que j'utilise la carte BOSS, mes prospects retiennent mon contact. J'ai signé 3 nouveaux clients le mois dernier grâce à un simple tap.",
      name: "Mohamed K.",
      role: "Superviseur, Gombe — Kinshasa",
      initials: "MK"
    },
    {
      text: "Beaucoup de mes connexions ont été impressionnées par la carte. Ça crée immédiatement une image professionnelle et différenciante.",
      name: "Christian T.",
      role: "Agent commercial, Kalamu — Kinshasa",
      initials: "CT"
    },
    {
      text: "En tant que chef des opérations, je rencontre beaucoup de partenaires. La carte BOSS m'a permis de professionnaliser chaque échange instantanément, sans jamais perdre un contact.",
      name: "David K.",
      role: "Chef des opérations, Gombe — Kinshasa",
      initials: "DK"
    }
  ]

  return (
    <section className="py-[100px] px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-[60px]">
          <div>
            <span className="section-tag">Témoignages</span>
            <h2 className="font-playfair text-[clamp(32px,3.5vw,52px)] font-bold">
              Ils utilisent <span className="text-blue">déjà BOSS</span>
            </h2>
            <div className="gold-line"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[60px]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-offWhite border border-border rounded-2xl p-9">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-base">★</span>
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-text-dark mb-7">&quot;{testimonial.text}&quot;</blockquote>
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center font-semibold text-sm text-gold-light shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-text-dark">{testimonial.name}</div>
                  <div className="text-[13px] text-text-muted">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-navy rounded-2xl py-10 px-[60px] flex flex-wrap justify-around items-center gap-6">
          <div className="text-center">
            <span className="font-playfair text-[42px] font-bold text-gold-light block">+100</span>
            <span className="text-[13px] text-white/50 block mt-1">Professionnels connectés</span>
          </div>
          <div className="w-px h-[60px] bg-white/10 hidden md:block"></div>
          <div className="text-center">
            <span className="font-playfair text-[42px] font-bold text-gold-light block">Kinshasa</span>
            <span className="text-[13px] text-white/50 block mt-1">Notre ville de lancement</span>
          </div>
          <div className="w-px h-[60px] bg-white/10 hidden md:block"></div>
          <div className="text-center">
            <span className="font-playfair text-[42px] font-bold text-gold-light block">98%</span>
            <span className="text-[13px] text-white/50 block mt-1">Satisfaction client</span>
          </div>
          <div className="w-px h-[60px] bg-white/10 hidden md:block"></div>
          <div className="text-center">
            <span className="font-playfair text-[42px] font-bold text-gold-light block">3s</span>
            <span className="text-[13px] text-white/50 block mt-1">Pour partager un profil</span>
          </div>
        </div>
      </div>
    </section>
  )
}