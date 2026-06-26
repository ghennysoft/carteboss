import Image from "next/image";
import Link from "next/link";

export default function ServiceHero() {
  return (
    <section className="min-h-[52vh] bg-[#0a1628] flex items-center pt-[130px] pb-20 px-[5%] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(24,95,165,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(24,95,165,0.06)_1px,transparent_1px)] bg-[60px_60px]"></div>
      <div className="absolute w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(196,154,53,0.1)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[760px] mx-auto relative z-[2]">
        <div className="inline-flex items-center gap-2 bg-[rgba(196,154,53,0.12)] border border-[rgba(196,154,53,0.3)] text-[#E8BC5A] text-[12px] font-medium tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-[100px] mb-7 animate-fade-in-up">
          <span className="w-1.5 h-1.5 bg-[#E8BC5A] rounded-full"></span>
          Nos Cartes NFC
        </div>

        <h1 className="font-['Playfair_Display',serif] text-[clamp(40px,5vw,66px)] font-black leading-[1.1] text-white mb-5 animate-fade-in-up">
          Choisissez votre <span className="text-[#E8BC5A]">identité.</span>
        </h1>

        <p className="text-[17px] leading-[1.75] text-[rgba(255,255,255,0.55)] max-w-[560px] mx-auto mb-9 animate-fade-in-up">
          Deux gammes pensées pour chaque ambition — du professionnel moderne à l&apos;élite du réseau. Une technologie NFC, deux niveaux de prestige.
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap animate-fade-in-up">
          <Link href="#cartes" className="inline-flex items-center gap-2.5 bg-[#C49A35] text-[#0a1628] font-['DM_Sans',sans-serif] text-[15px] font-semibold px-7 py-3.5 rounded-[8px] no-underline border-none cursor-pointer hover:bg-[#E8BC5A] hover:-translate-y-[1px] transition-all duration-200">
            Voir les cartes
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="#comparaison" className="inline-flex items-center gap-2 border-[1.5px] border-[rgba(255,255,255,0.4)] text-white bg-transparent font-['DM_Sans',sans-serif] text-sm font-medium px-6 py-3 rounded-[8px] no-underline cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.7)] transition-all duration-200">
            Comparer les offres →
          </Link>
        </div>

        {/* <div className="mt-[52px] relative z-[2]">
          <Image
            src="/Untitled_design.png"
            alt="Cartes BOSS NFC — PVC Standard et Métal Premium"
            width={420}
            height={280}
            className="max-w-[420px] w-[90%] mx-auto filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-float-hero"
          />
        </div> */}
      </div>
    </section>
  );
}