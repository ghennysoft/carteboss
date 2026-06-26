export default function OpportunityHero() {
  return (
    <section className="bg-[#0a1628] pt-[188px] pb-20 px-[5%] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(24,95,165,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(24,95,165,0.06)_1px,transparent_1px)] bg-[60px_60px]"></div>
      <div className="absolute w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(196,154,53,0.1)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[720px] mx-auto relative z-[2]">
        <div className="inline-flex items-center gap-2 bg-[rgba(196,154,53,0.12)] border border-[rgba(196,154,53,0.3)] text-[#E8BC5A] text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-[100px] mb-7 animate-fade-in-up">
          <span className="w-1.5 h-1.5 bg-[#E8BC5A] rounded-full"></span>
          Programme Agent BOSS
        </div>

        <h1 className="font-['Playfair_Display',serif] text-[clamp(38px,5vw,64px)] font-black leading-[1.1] text-white mb-5 animate-fade-in-up">
          Rejoignez l&apos;élite.<br />Devenez un <span className="text-[#E8BC5A]">Agent BOSS.</span>
        </h1>

        <p className="text-[17px] leading-[1.75] text-[rgba(255,255,255,0.55)] max-w-[540px] mx-auto animate-fade-in-up">
          Représentez la marque la plus innovante de Kinshasa, développez votre réseau et générez des revenus en aidant les professionnels à se connecter autrement.
        </p>

        <span className="block w-12 h-[3px] bg-[#C49A35] rounded-[2px] mx-auto mt-6 animate-fade-in-up"></span>
      </div>
    </section>
  );
}