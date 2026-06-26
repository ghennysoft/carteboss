interface PageSwitcherProps {
  activeTab: "opportunite" | "carriere";
  onTabChange: (tab: "opportunite" | "carriere") => void;
}

export default function PageSwitcher({ activeTab, onTabChange }: PageSwitcherProps) {
  return (
    <div className="fixed top-[72px] left-0 right-0 z-90 bg-[rgba(10,22,40,0.98)] backdrop-blur-[12px] border-b border-[rgba(196,154,53,0.15)] flex justify-center px-[5%]">
      <div className="flex gap-1 py-3">
        <button
          onClick={() => onTabChange("opportunite")}
          className={`relative flex items-center gap-2 px-7 py-2.5 rounded-[8px] border-none cursor-pointer font-['DM_Sans',sans-serif] text-sm font-medium tracking-[0.02em] transition-all duration-200 ${
            activeTab === "opportunite"
              ? "bg-[rgba(196,154,53,0.12)] border border-[rgba(196,154,53,0.3)] text-[#E8BC5A]"
              : "bg-transparent text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.85)]"
          }`}
        >
          <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Opportunité
          <span className={`text-[10px] font-bold tracking-[0.06em] px-[7px] py-0.5 rounded-[100px] uppercase ${
            activeTab === "opportunite"
              ? "bg-[#C49A35] text-[#0a1628]"
              : "bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.4)]"
          }`}>
            Indépendant
          </span>
        </button>

        <button
          onClick={() => onTabChange("carriere")}
          className={`relative flex items-center gap-2 px-7 py-2.5 rounded-[8px] border-none cursor-pointer font-['DM_Sans',sans-serif] text-sm font-medium tracking-[0.02em] transition-all duration-200 ${
            activeTab === "carriere"
              ? "bg-[rgba(24,95,165,0.15)] border border-[rgba(24,95,165,0.35)] text-[#378ADD]"
              : "bg-transparent text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.85)]"
          }`}
        >
          <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="14" rx="2"/>
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
          </svg>
          Carrière
          <span className={`text-[10px] font-bold tracking-[0.06em] px-[7px] py-0.5 rounded-[100px] uppercase ${
            activeTab === "carriere"
              ? "bg-[#185FA5] text-white"
              : "bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.4)]"
          }`}>
            Employé
          </span>
        </button>
      </div>
    </div>
  );
}