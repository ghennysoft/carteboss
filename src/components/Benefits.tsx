const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#185FA5] fill-none stroke-[1.6]">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Commission attractive",
    description: "Gagnez une commission sur chaque carte vendue. Plus vous vendez, plus vous gagnez — sans plafond."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#185FA5] fill-none stroke-[1.6]">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Développez votre réseau",
    description: "En équipant des professionnels, vous devenez vous-même une référence incontournable dans votre secteur."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#185FA5] fill-none stroke-[1.6]">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Formation & outils fournis",
    description: "BOSS vous fournit tous les outils de vente, supports de présentation et formations pour réussir."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#185FA5] fill-none stroke-[1.6]">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Flexibilité totale",
    description: "Travaillez à votre rythme, depuis où vous voulez. Aucun quota obligatoire pour commencer."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#185FA5] fill-none stroke-[1.6]">
        <path d="M9 12l2 2 4-4"/>
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.51 0 2.93.37 4.18 1.03"/>
        <path d="M16 5l2 2 4-4"/>
      </svg>
    ),
    title: "Marque déjà reconnue",
    description: "Vous vendez un produit innovant qui se vend lui-même. La carte NFC parle à chaque professionnel."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#185FA5] fill-none stroke-[1.6]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Support dédié BOSS",
    description: "Une équipe à votre écoute pour vous aider à conclure vos ventes et gérer vos clients."
  }
];

export default function Benefits() {
  return (
    <section className="py-[100px] px-[5%] bg-[#F7F9FC]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-0">
          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#185FA5] mb-3.5">
            <span className="text-[#C49A35]">— </span>Pourquoi rejoindre
          </span>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(30px,3.5vw,48px)] font-bold text-[#0a1628] leading-[1.2]">
            Les avantages de <span className="text-[#185FA5]">l&apos;agent BOSS</span>
          </h2>
          <span className="block w-12 h-[3px] bg-[#C49A35] rounded-[2px] mx-auto mt-5"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white border border-[rgba(24,95,165,0.15)] rounded-[20px] p-[36px_32px] hover:shadow-[0_20px_50px_rgba(24,95,165,0.1)] hover:-translate-y-1 transition-all duration-250">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-[#E6F1FB] border border-[rgba(24,95,165,0.12)] flex items-center justify-center mb-[22px]">
                {benefit.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-[#0a1628] mb-2.5">{benefit.title}</h3>
              <p className="text-sm leading-[1.75] text-[#5a6e8a]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}