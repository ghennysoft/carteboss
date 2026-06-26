export default function CarriereHero() {
  return (
    <section className="bg-[#0a1628] pt-[188px] pb-20 px-[5%] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(55,138,221,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(55,138,221,0.05)_1px,transparent_1px)] bg-[60px_60px]"></div>
      <div className="absolute w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(55,138,221,0.12)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[720px] mx-auto relative z-[2]">
        <div className="inline-flex items-center gap-2 bg-[rgba(24,95,165,0.15)] border border-[rgba(24,95,165,0.35)] text-[#378ADD] text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-[100px] mb-7 animate-fade-in-up">
          <span className="w-1.5 h-1.5 bg-[#378ADD] rounded-full"></span>
          Carrière BOSS SARL
        </div>

        <h1 className="font-['Playfair_Display',serif] text-[clamp(36px,5vw,60px)] font-black text-white leading-[1.1] mb-5 animate-fade-in-up">
          Construisez votre <span className="text-[#378ADD]">carrière</span><br />avec BOSS.
        </h1>

        <p className="text-[17px] leading-[1.75] text-[rgba(255,255,255,0.55)] max-w-[560px] mx-auto animate-fade-in-up">
          Rejoignez notre équipe commerciale en tant qu&apos;agent salarié. Vous aurez un quota mensuel, un kit terrain complet et l&apos;opportunité de grandir au sein d&apos;une entreprise en pleine expansion à Kinshasa.
        </p>

        <span className="block w-12 h-[3px] bg-[#185FA5] rounded-[2px] mx-auto mt-6 animate-fade-in-up"></span>
      </div>
    </section>
  );
}