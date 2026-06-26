import Link from "next/link";

export default function MapSection() {
  return (
    <section className="px-[5%] pb-[100px] bg-[#F7F9FC]">
      <div className="max-w-[1140px] mx-auto">
        <div className="rounded-[20px] overflow-hidden border border-[rgba(24,95,165,0.15)] bg-[#0a1628] h-[320px] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(24,95,165,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(24,95,165,0.04)_1px,transparent_1px)] bg-[40px_40px]"></div>

          <div className="relative z-[2] text-center">
            <div className="w-14 h-14 bg-[#C49A35] rounded-[50%_50%_50%_0] -rotate-45 mx-auto mb-5 flex items-center justify-center shadow-[0_8px_20px_rgba(196,154,53,0.4)]">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#0a1628] fill-none stroke-2 rotate-45">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>

            <h3 className="font-['Playfair_Display',serif] text-[22px] font-bold text-white mb-2">
              BOSS SARL — Kinshasa
            </h3>
            <p className="text-sm text-[rgba(255,255,255,0.5)]">Gombe, Kinshasa · République Démocratique du Congo</p>

            <Link
              href="https://maps.google.com/?q=Gombe,Kinshasa,DRC"
              target="_blank"
              className="inline-flex items-center gap-[7px] mt-[18px] bg-[#C49A35] text-[#0a1628] text-[13px] font-semibold px-5 py-2.5 rounded-[8px] no-underline hover:bg-[#E8BC5A] transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Ouvrir dans Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}