export default function ContactHero() {
  return (
    <section className="bg-[#0a1628] pt-[130px] pb-[90px] px-[5%] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(24,95,165,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(24,95,165,0.06)_1px,transparent_1px)] bg-[60px_60px]"></div>
      <div className="absolute w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(196,154,53,0.1)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[680px] mx-auto relative z-[2]">
        <div className="inline-flex items-center gap-2 bg-[rgba(196,154,53,0.12)] border border-[rgba(196,154,53,0.3)] text-[#E8BC5A] text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-[100px] mb-7 animate-fade-in-up">
          <span className="w-1.5 h-1.5 bg-[#E8BC5A] rounded-full"></span>
          Contact
        </div>

        <h1 className="font-['Playfair_Display',serif] text-[clamp(38px,5vw,60px)] font-black leading-[1.1] text-white mb-5 animate-fade-in-up">
          Nous sommes là<br />pour <span className="text-[#E8BC5A]">vous répondre.</span>
        </h1>

        <p className="text-[17px] leading-[1.75] text-[rgba(255,255,255,0.55)] animate-fade-in-up">
          Une question sur nos cartes, un partenariat, ou un besoin de support — notre équipe vous répondra dans les plus brefs délais.
        </p>

        <span className="block w-12 h-[3px] bg-[#C49A35] rounded-[2px] mx-auto mt-6 animate-fade-in-up"></span>
      </div>
    </section>
  );
}