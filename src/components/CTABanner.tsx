import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-[100px] px-[5%] bg-[#F7F9FC]">
      <div className="max-w-[860px] mx-auto bg-[#0a1628] rounded-[24px] p-[72px_60px] text-center relative overflow-hidden border border-[rgba(196,154,53,0.2)]">
        <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(196,154,53,0.07)_0%,transparent_65%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="relative z-[1]">
          <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3vw,44px)] font-bold text-white mb-4">
            Prêt à <span className="text-[#E8BC5A]">impressionner</span> dès le premier tap ?
          </h2>
          <p className="text-base leading-[1.75] text-[rgba(255,255,255,0.5)] max-w-[520px] mx-auto mb-10">
            Rejoignez +100 professionnels de Kinshasa qui ont déjà transformé leur façon de se présenter. Votre carte vous attend.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link href="https://forms.gle/xigqiKCbDjYGzgxA8" target="_blank" className="inline-flex items-center gap-2.5 bg-[#C49A35] text-[#0a1628] font-['DM_Sans',sans-serif] text-[15px] font-semibold px-7 py-3.5 rounded-[8px] no-underline border-none cursor-pointer hover:bg-[#E8BC5A] hover:-translate-y-[1px] transition-all duration-200">
              Obtenir ma carte
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border-[1.5px] border-[rgba(255,255,255,0.4)] text-white bg-transparent font-['DM_Sans',sans-serif] text-sm font-medium px-6 py-3 rounded-[8px] no-underline cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.7)] transition-all duration-200">
              Nous contacter →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}