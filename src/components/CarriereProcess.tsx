const steps = [
  { number: 1, title: "Soumettez votre CV", description: "Remplissez le formulaire ci-dessous et joignez votre CV." },
  { number: 2, title: "Étude du dossier RH", description: "Notre équipe RH analyse votre profil dès réception." },
  { number: 3, title: "Entretien RH", description: "Si votre profil correspond, vous serez convoqué(e) pour un entretien." },
  { number: 4, title: "Intégration", description: "Formation, remise du kit et démarrage de votre mission commerciale." }
];

export default function CarriereProcess() {
  return (
    <section className="py-[100px] px-[5%] bg-[#122040]">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-15">
          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#378ADD] mb-3.5">
            <span className="text-[rgba(255,255,255,0.3)]">— </span>Processus
          </span>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(30px,3.5vw,48px)] font-bold text-white leading-[1.2]">
            Comment <span className="text-[#378ADD]">postuler</span>
          </h2>
          <span className="block w-12 h-[3px] bg-[#185FA5] rounded-[2px] mx-auto mt-5"></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          <div className="hidden lg:block absolute top-[27px] left-[12.5%] right-[12.5%] h-px bg-[linear-gradient(90deg,rgba(24,95,165,0.3),rgba(55,138,221,0.6),rgba(24,95,165,0.3))]"></div>
          
          {steps.map((step) => (
            <div key={step.number} className="text-center px-4 relative">
              <div className="w-[54px] h-[54px] rounded-full bg-[#185FA5] text-white font-['Playfair_Display',serif] text-[20px] font-black flex items-center justify-center mx-auto mb-5 relative z-10 shadow-[0_0_0_6px_rgba(24,95,165,0.15)]">
                {step.number}
              </div>
              <h4 className="text-[15px] font-semibold text-white mb-2">{step.title}</h4>
              <p className="text-[13px] leading-[1.7] text-[rgba(255,255,255,0.45)]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}