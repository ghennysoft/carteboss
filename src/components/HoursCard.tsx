export default function HoursCard() {
  return (
    <div className="bg-white border border-[rgba(24,95,165,0.15)] rounded-[18px] p-[28px_30px]">
      <h4 className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#2a3f6a] mb-[18px]">
        Heures de disponibilité
      </h4>

      <div className="flex justify-between items-center py-2.5 border-b border-[rgba(24,95,165,0.15)] text-sm">
        <span className="text-[#2a3f6a] font-medium">Lundi — Vendredi</span>
        <span className="text-[#0a1628] font-semibold">
          8h30 — 17h00
          <span className="inline-flex items-center gap-1.5 bg-[rgba(22,163,74,0.1)] border border-[rgba(22,163,74,0.2)] text-[#16a34a] text-[11px] font-semibold px-2.5 py-0.5 rounded-[100px] ml-2">
            <span className="w-1.5 h-1.5 bg-[#16a34a] rounded-full animate-blink"></span>
            Ouvert
          </span>
        </span>
      </div>

      <div className="flex justify-between items-center py-2.5 border-b border-[rgba(24,95,165,0.15)] text-sm">
        <span className="text-[#2a3f6a] font-medium">Samedi</span>
        <span className="text-[#0a1628] font-semibold">8h00 — 14h00</span>
      </div>

      <div className="flex justify-between items-center py-2.5 text-sm">
        <span className="text-[#2a3f6a] font-medium">Dimanche</span>
        <span className="text-[#5a6e8a] font-normal">Fermé</span>
      </div>
    </div>
  );
}