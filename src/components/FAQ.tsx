const faqs = [
  {
    question: "Faut-il payer pour devenir agent BOSS ?",
    answer: "Non. L'inscription en tant qu'agent BOSS est entièrement gratuite. Vous n'avez aucun frais d'entrée à payer."
  },
  {
    question: "Quel est le montant des commissions ?",
    answer: "Le détail des commissions vous sera communiqué lors de votre entretien avec l'équipe BOSS. Les taux sont compétitifs et progressifs selon vos performances."
  },
  {
    question: "Dois-je être à Kinshasa pour postuler ?",
    answer: "Pour le moment, nos opérations sont concentrées à Kinshasa. Si vous êtes dans une autre ville, postulez quand même — nous vous tiendrons informé(e) de notre expansion."
  },
  {
    question: "Puis-je postuler si je suis étudiant(e) ?",
    answer: "Absolument. Nous accueillons des profils divers — étudiants, salariés, entrepreneurs, freelances. Ce qui compte, c'est votre motivation et votre réseau."
  },
  {
    question: "Combien de temps dure le processus de sélection ?",
    answer: "Notre équipe vous contacte dans les 48h ouvrables après réception de votre candidature. L'ensemble du processus (entretien + onboarding) prend généralement 3 à 5 jours."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 px-[5%] bg-white">
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
            <p className="px-[28px] pb-[22px] text-sm leading-[1.75] text-[#5a6e8a] border-t border-[rgba(24,95,165,0.15)] pt-[18px]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}