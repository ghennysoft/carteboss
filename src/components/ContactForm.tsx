"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: false });
    }
  };

  const handleSubmit = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formState.name.trim()) newErrors.name = true;
    if (!formState.email.trim()) newErrors.email = true;
    if (!formState.subject) newErrors.subject = true;
    if (!formState.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      if (newErrors.name) document.getElementById("c_name")?.focus();
      return;
    }

    const subject = encodeURIComponent(
      "Contact BOSS SARL — " + formState.subject + " (" + formState.name + ")"
    );
    const body = encodeURIComponent(
      "MESSAGE VIA SITE BOSS SARL\n" +
      "============================\n\n" +
      "Nom     : " + formState.name + "\n" +
      "Email   : " + formState.email + "\n" +
      "Tel     : " + (formState.phone || "Non renseigné") + "\n" +
      "Objet   : " + formState.subject + "\n\n" +
      "MESSAGE\n-------\n" + formState.message
    );

    window.location.href = "mailto:lacartebossbsc@gmail.com?subject=" + subject + "&body=" + body;

    setIsSubmitted(true);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isSubmitted) {
    return (
      <div ref={formRef} className="bg-white border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[24px] p-[48px_52px] shadow-[0_16px_60px_rgba(24,95,165,0.07)]">
        <div className="text-center py-10">
          <div className="w-[68px] h-[68px] rounded-full bg-[rgba(22,163,74,0.1)] border-2 border-[rgba(22,163,74,0.3)] flex items-center justify-center mx-auto mb-5">
            <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] stroke-[#16a34a] fill-none stroke-2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h3 className="font-['Playfair_Display',serif] text-[26px] font-bold text-[#0a1628] mb-2.5">
            Message envoyé !
          </h3>
          <p className="text-sm leading-[1.75] text-[#5a6e8a]">
            Merci pour votre message. Notre équipe vous répondra à <strong className="text-[#0a1628]">{formState.email}</strong> dans les plus brefs délais.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={formRef} className="bg-white border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[24px] p-[48px_52px] shadow-[0_16px_60px_rgba(24,95,165,0.07)]">
      <h3 className="font-['Playfair_Display',serif] text-[26px] font-bold text-[#0a1628] mb-1.5">
        Envoyez-nous un message
      </h3>
      <p className="text-sm text-[#5a6e8a] leading-[1.65] mb-8">
        Remplissez ce formulaire et notre équipe vous répondra rapidement. Pour les demandes urgentes, appelez-nous directement.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div>
          <label htmlFor="c_name" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-[7px]">
            Nom complet <span className="text-[#C49A35] ml-0.5">*</span>
          </label>
          <input
            id="c_name"
            type="text"
            placeholder="Jean-Pierre Mukasa"
            value={formState.name}
            onChange={handleChange}
            className={`w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] ${errors.name ? '!border-[#e53e3e]' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="c_phone" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-[7px]">
            Téléphone
          </label>
          <input
            id="c_phone"
            type="tel"
            placeholder="+243 8XX XXX XXX"
            value={formState.phone}
            onChange={handleChange}
            className="w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)]"
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="c_email" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-[7px]">
          Adresse email <span className="text-[#C49A35] ml-0.5">*</span>
        </label>
        <input
          id="c_email"
          type="email"
          placeholder="votrenom@email.com"
          value={formState.email}
          onChange={handleChange}
          className={`w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] ${errors.email ? '!border-[#e53e3e]' : ''}`}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="c_subject" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-[7px]">
          Objet <span className="text-[#C49A35] ml-0.5">*</span>
        </label>
        <select
          id="c_subject"
          value={formState.subject}
          onChange={handleChange}
          className={`w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235a6e8a' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")] bg-no-repeat bg-[right_16px_center] pr-10 cursor-pointer ${errors.subject ? '!border-[#e53e3e]' : ''}`}
          style={{ backgroundPosition: "right 16px center", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235a6e8a' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")" }}
        >
          <option value="" disabled>Sélectionnez un objet</option>
          <option>Question sur une carte NFC</option>
          <option>Commander une carte</option>
          <option>Devenir agent BOSS</option>
          <option>Partenariat / Collaboration</option>
          <option>Support technique</option>
          <option>Livraison</option>
          <option>Autre</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="c_message" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-[7px]">
          Message <span className="text-[#C49A35] ml-0.5">*</span>
        </label>
        <textarea
          id="c_message"
          placeholder="Décrivez votre demande en détail..."
          value={formState.message}
          onChange={handleChange}
          rows={4}
          className={`w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] resize-y min-h-[120px] ${errors.message ? '!border-[#e53e3e]' : ''}`}
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-[#C49A35] text-[#0a1628] font-['DM_Sans',sans-serif] text-[15px] font-bold px-8 py-[15px] rounded-[10px] border-none cursor-pointer flex items-center justify-center gap-2.5 hover:bg-[#E8BC5A] hover:-translate-y-[1px] transition-all duration-200 mt-2"
      >
        Envoyer le message
        <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] stroke-current fill-none stroke-[2.5]">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>
      </button>
    </div>
  );
}