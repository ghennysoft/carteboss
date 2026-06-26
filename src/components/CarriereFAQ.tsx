const faqs = [
  {
    question: "Quelle est la différence entre un agent Opportunité et un agent Carrière ?",
    answer: "L'agent <strong>Opportunité</strong> est un entrepreneur indépendant qui gagne des commissions sur ses ventes — sans quota, sans kit fourni (sauf formation et PDF de présentation). L'agent <strong>Carrière</strong> est un agent commercial salarié avec un quota mensuel, un kit terrain complet et un encadrement RH direct."
  },
  {
    question: "Faut-il avoir de l'expérience en vente pour postuler ?",
    answer: "Une expérience en vente est un atout, mais pas une obligation. Nous recherchons avant tout des profils motivés, avec de bonnes aptitudes relationnelles. La formation sera dispensée lors de l'onboarding."
  },
  {
    question: "Quel format de CV acceptez-vous ?",
    answer: "Nous acceptons les CV en format PDF, DOC ou DOCX. Vous pouvez également envoyer votre CV directement à <strong>bosssarlhr@gmail.com</strong> si vous rencontrez des difficultés avec le formulaire."
  },
  {
    question: "Dans quel délai serai-je contacté(e) après l'envoi de mon CV ?",
    answer: "Nous étudions chaque candidature avec soin. Vous serez contacté(e) dès que votre dossier aura été examiné. Ce délai peut varier selon le volume de candidatures reçues."
  }
];

export default function CarriereFAQ() {
  return (
    <section className="py-20 px-[5%] bg-[#F7F9FC]">
      <div className="max-w-[760px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#185FA5] mb-3.5">
            <span className="text-[#C49A35]">— </span>FAQ
          </span>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3vw,44px)] font-bold text-[#0a1628] leading-[1.2]">
            Questions <span className="text-[#185FA5]">fréquentes</span>
          </h2>
          <span className="block w-12 h-[3px] bg-[#C49A35] rounded-[2px] mx-auto mt-5"></span>
        </div>

        {faqs.map((faq, index) => (
          <details key={index} className="bg-white border border-[rgba(24,95,165,0.15)] rounded-[14px] mb-3 overflow-hidden group">
            <summary className="p-[22px_28px] text-[15px] font-medium text-[#0a1628] cursor-pointer flex justify-between items-center gap-4 user-select-none list-none">
              {faq.question}
              <span className="w-7 h-7 rounded-full bg-[#E6F1FB] flex items-center justify-center flex-shrink-0 transition-all duration-200 group-open:bg-[#185FA5] group-open:rotate-45">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#185FA5] fill-none stroke-[2.5] group-open:stroke-white">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </span>
            </summary>
            <p className="px-[28px] pb-[22px] text-sm leading-[1.75] text-[#5a6e8a] border-t border-[rgba(24,95,165,0.15)] pt-[18px]" dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </details>
        ))}
      </div>
    </section>
  );
}