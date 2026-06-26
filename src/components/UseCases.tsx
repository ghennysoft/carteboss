const useCases = [
  {
    tag: "Standard",
    tagClass: "text-[#378ADD] border-[rgba(55,138,221,0.3)] bg-[rgba(55,138,221,0.08)]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#E8BC5A] fill-none stroke-[1.5]">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: "Agents commerciaux",
    description: "Démarquez-vous dès la première rencontre. Partagez votre contact en un tap et concentrez-vous sur la vente."
  },
  {
    tag: "Premium",
    tagClass: "text-[#E8BC5A] border-[rgba(196,154,53,0.3)] bg-[rgba(196,154,53,0.08)]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#E8BC5A] fill-none stroke-[1.5]">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: "Dirigeants & Cadres",
    description: "Représentez votre statut avec une carte en métal qui reflète votre niveau d'ambition et de professionnalisme."
  },
  {
    tag: "Les deux",
    tagClass: "text-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#E8BC5A] fill-none stroke-[1.5]">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Entrepreneurs",
    description: "Que vous démarriez ou que vous scaliez, BOSS s'adapte à votre niveau et grandit avec votre réseau."
  },
  {
    tag: "Standard",
    tagClass: "text-[#378ADD] border-[rgba(55,138,221,0.3)] bg-[rgba(55,138,221,0.08)]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#E8BC5A] fill-none stroke-[1.5]">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Freelances & Consultants",
    description: "Multipliez les contacts qualifiés lors d'événements et convertissez chaque échange en opportunité de mission."
  },
  {
    tag: "Premium",
    tagClass: "text-[#E8BC5A] border-[rgba(196,154,53,0.3)] bg-[rgba(196,154,53,0.08)]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#E8BC5A] fill-none stroke-[1.5]">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "VIP & Influenceurs",
    description: "Une carte qui fait parler d'elle avant même que vous n'ouvriez la bouche. Le métal parle de lui-même."
  },
  {
    tag: "Les deux",
    tagClass: "text-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#E8BC5A] fill-none stroke-[1.5]">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
    title: "Équipes d'entreprise",
    description: "Équipez toute votre équipe avec une image cohérente. Commandes groupées disponibles sur demande."
  },
];

export default function UseCases() {
  return (
    <section className="py-[100px] px-[5%] bg-[#0a1628]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center">
          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#E8BC5A] mb-3.5">
            <span className="text-[rgba(255,255,255,0.3)]">— </span>Cas d&apos;usage
          </span>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,3.5vw,52px)] font-bold text-white leading-[1.2]">
            Pour <span className="text-[#E8BC5A]">qui ?</span>
          </h2>
          <span className="block w-12 h-[3px] bg-[#C49A35] rounded-[2px] mx-auto mt-5"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] mt-15 bg-[rgba(255,255,255,0.04)] rounded-[20px] overflow-hidden">
          {useCases.map((item, index) => (
            <div key={index} className="bg-[#122040] p-[44px_36px] relative transition-colors duration-200 hover:bg-[#1a2f58]">
              <span className={`absolute top-5 right-5 text-[10px] font-semibold tracking-[0.07em] uppercase px-2.5 py-1 rounded-[100px] border ${item.tagClass}`}>
                {item.tag}
              </span>
              <div className="w-[52px] h-[52px] bg-[rgba(196,154,53,0.1)] border border-[rgba(196,154,53,0.2)] rounded-[14px] flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2.5">{item.title}</h3>
              <p className="text-sm leading-[1.75] text-[rgba(255,255,255,0.45)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}