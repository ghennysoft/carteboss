const comparisons = [
  { feature: "Puce NFC intégrée", pvc: true, metal: true },
  { feature: "Profil digital personnalisé", pvc: true, metal: true },
  { feature: "Mise à jour du profil en ligne", pvc: true, metal: true },
  { feature: "Compatible iOS & Android", pvc: true, metal: true },
  { feature: "Matière métal brossé", pvc: false, metal: true },
  { feature: "Gravure laser personnalisée", pvc: false, metal: true },
  { feature: "QR code doré intégré", pvc: false, metal: true },
  { feature: "Support prioritaire", pvc: false, metal: true },
];

export default function ComparisonTable() {
  return (
    <section className="py-[100px] px-[5%] bg-white" id="comparaison">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-15">
          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#185FA5] mb-3.5">
            <span className="text-[#C49A35]">— </span>Comparatif
          </span>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,3.5vw,52px)] font-bold text-[#0a1628] leading-[1.2]">
            Ce que vous <span className="text-[#185FA5]">obtenez</span>
          </h2>
          <span className="block w-12 h-[3px] bg-[#C49A35] rounded-[2px] mx-auto mt-5"></span>
        </div>

        <div className="max-w-[900px] mx-auto rounded-[20px] overflow-hidden border-[1.5px] border-[rgba(24,95,165,0.15)] shadow-[0_8px_40px_rgba(24,95,165,0.06)]">
          <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#0a1628]">
            <div className="px-7 py-6 text-[13px] font-semibold tracking-[0.04em] uppercase text-[rgba(255,255,255,0.4)]">Fonctionnalité</div>
            <div className="px-7 py-6 text-[13px] font-semibold tracking-[0.04em] uppercase text-[#378ADD] text-center">PVC Standard</div>
            <div className="px-7 py-6 text-[13px] font-semibold tracking-[0.04em] uppercase text-[#E8BC5A] text-center bg-[rgba(196,154,53,0.08)] border-l border-[rgba(196,154,53,0.15)]">Métal Premium</div>
          </div>

          {comparisons.map((item, index) => (
            <div key={index} className={`grid grid-cols-[2fr_1fr_1fr] border-b border-[rgba(24,95,165,0.15)] last:border-b-0 ${index % 2 === 1 ? 'bg-[#fafcff]' : ''}`}>
              <div className="px-7 py-[18px] text-sm font-medium text-[#0a1628] flex items-center">{item.feature}</div>
              <div className="px-7 py-[18px] text-sm text-[#5a6e8a] flex items-center justify-center">
                <span className={item.pvc ? "text-[#16a34a] text-lg" : "text-[#cbd5e1] text-lg"}>
                  {item.pvc ? "✓" : "—"}
                </span>
              </div>
              <div className="px-7 py-[18px] text-sm bg-[rgba(196,154,53,0.03)] border-l border-[rgba(196,154,53,0.1)] flex items-center justify-center">
                <span className={item.metal ? "text-[#C49A35] text-lg" : "text-[#cbd5e1] text-lg"}>
                  {item.metal ? "✓" : "—"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}