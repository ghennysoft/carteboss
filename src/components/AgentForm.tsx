"use client";

import { useState, useRef } from "react";

export default function AgentForm() {
  const [formState, setFormState] = useState({
    fullname: "",
    phone: "",
    email: "",
    city: "",
    occupation: "",
    heard: "",
    referred: "",
    referralName: "",
    motivation: "",
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

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, referred: e.target.value });
    if (e.target.value === "non") {
      setFormState({ ...formState, referralName: "" });
    }
  };

  const handleSubmit = () => {
    const requiredFields = ["fullname", "phone", "email", "city", "heard", "motivation"];
    const newErrors: Record<string, boolean> = {};
    let valid = true;

    requiredFields.forEach((id) => {
      if (!formState[id as keyof typeof formState]?.trim()) {
        newErrors[id] = true;
        valid = false;
      }
    });

    if (!formState.referred) {
      alert("Veuillez indiquer si vous avez été référé(e) par un agent.");
      return;
    }

    if (formState.referred === "oui" && !formState.referralName.trim()) {
      newErrors.referralName = true;
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    const name = formState.fullname.split(" ")[0];
    const subject = encodeURIComponent("Candidature Agent BOSS — " + formState.fullname);
    const body = encodeURIComponent(
      "NOUVELLE CANDIDATURE AGENT BOSS\n" +
      "================================\n\n" +
      "Nom complet : " + formState.fullname + "\n" +
      "Téléphone   : " + formState.phone + "\n" +
      "Email       : " + formState.email + "\n" +
      "Commune     : " + formState.city + "\n" +
      "Profession  : " + (formState.occupation || "Non précisée") + "\n" +
      "Source      : " + formState.heard + "\n" +
      "Référence   : " + (formState.referred === "oui" ? "Oui — " + formState.referralName : "Non") + "\n\n" +
      "MOTIVATION\n----------\n" + formState.motivation
    );

    window.location.href = "mailto:bosssarlhr@gmail.com?subject=" + subject + "&body=" + body;

    setIsSubmitted(true);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-[100px] px-[5%] bg-white" id="candidature" ref={formRef}>
        <div className="max-w-[820px] mx-auto">
          <div className="bg-white border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[24px] p-[56px_60px] shadow-[0_16px_60px_rgba(24,95,165,0.08)]">
            <div className="text-center py-12">
              <div className="w-[72px] h-[72px] rounded-full bg-[rgba(22,163,74,0.1)] border-2 border-[rgba(22,163,74,0.3)] flex items-center justify-center mx-auto mb-6">
                <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-[#16a34a] fill-none stroke-2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="font-['Playfair_Display',serif] text-[28px] font-bold text-[#0a1628] mb-3">
                Candidature envoyée !
              </h3>
              <p className="text-[15px] leading-[1.75] text-[#5a6e8a] max-w-[400px] mx-auto">
                Merci <strong className="text-[#0a1628]">{formState.fullname.split(" ")[0]}</strong>. Notre équipe RH examinera votre dossier et vous contactera dans les <strong>48 heures ouvrables</strong> à l&apos;adresse email fournie.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[100px] px-[5%] bg-white" id="candidature" ref={formRef}>
      <div className="max-w-[820px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#185FA5] mb-3.5">
            <span className="text-[#C49A35]">— </span>Candidature
          </span>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(30px,3.5vw,48px)] font-bold text-[#0a1628] leading-[1.2]">
            Remplissez votre <span className="text-[#185FA5]">dossier</span>
          </h2>
          <p className="text-[15px] text-[#5a6e8a] mt-3 leading-[1.7]">Votre candidature sera traitée dans les 48h ouvrables par notre équipe RH.</p>
          <span className="block w-12 h-[3px] bg-[#C49A35] rounded-[2px] mx-auto mt-5"></span>
        </div>

        <div className="bg-white border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[24px] p-[56px_60px] shadow-[0_16px_60px_rgba(24,95,165,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div>
              <label htmlFor="fullname" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
                Nom complet <span className="text-[#C49A35] ml-0.5">*</span>
              </label>
              <input
                id="fullname"
                type="text"
                placeholder="Ex: Jean-Pierre Mukasa"
                value={formState.fullname}
                onChange={handleChange}
                className={`w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] ${errors.fullname ? '!border-[#e53e3e]' : ''}`}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
                Numéro de téléphone <span className="text-[#C49A35] ml-0.5">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+243 8XX XXX XXX"
                value={formState.phone}
                onChange={handleChange}
                className={`w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] ${errors.phone ? '!border-[#e53e3e]' : ''}`}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
              Adresse email <span className="text-[#C49A35] ml-0.5">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="votrenom@email.com"
              value={formState.email}
              onChange={handleChange}
              className={`w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] ${errors.email ? '!border-[#e53e3e]' : ''}`}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="city" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
              Commune / Quartier à Kinshasa <span className="text-[#C49A35] ml-0.5">*</span>
            </label>
            <select
              id="city"
              value={formState.city}
              onChange={handleChange}
              className={`w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235a6e8a' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")] bg-no-repeat bg-[right_16px_center] pr-10 cursor-pointer ${errors.city ? '!border-[#e53e3e]' : ''}`}
            >
              <option value="" disabled>Sélectionnez votre commune</option>
              <option>Barumbu</option>
              <option>Bumbu</option>
              <option>Gombe</option>
              <option>Kalamu</option>
              <option>Kasa-Vubu</option>
              <option>Kimbaseke</option>
              <option>Kinshasa</option>
              <option>Kisenso</option>
              <option>Lemba</option>
              <option>Limete</option>
              <option>Lingwala</option>
              <option>Makala</option>
              <option>Maluku</option>
              <option>Masina</option>
              <option>Matete</option>
              <option>Mont-Ngafula</option>
              <option>Ndjili</option>
              <option>Ngaba</option>
              <option>Ngaliema</option>
              <option>Ngiri-Ngiri</option>
              <option>N&apos;Sele</option>
              <option>Selembao</option>
              <option>Tshangu</option>
              <option>Uvira</option>
              <option>Autre</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="occupation" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
              Profession actuelle
            </label>
            <input
              id="occupation"
              type="text"
              placeholder="Ex: Commercial, Entrepreneur, Étudiant..."
              value={formState.occupation}
              onChange={handleChange}
              className="w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="heard" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
              Comment avez-vous entendu parler de BOSS SARL ? <span className="text-[#C49A35] ml-0.5">*</span>
            </label>
            <select
              id="heard"
              value={formState.heard}
              onChange={handleChange}
              className={`w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235a6e8a' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")] bg-no-repeat bg-[right_16px_center] pr-10 cursor-pointer ${errors.heard ? '!border-[#e53e3e]' : ''}`}
            >
              <option value="" disabled>Choisissez une option</option>
              <option>Instagram</option>
              <option>TikTok</option>
              <option>LinkedIn</option>
              <option>Bouche à oreille</option>
              <option>Recommandation d&apos;un agent</option>
              <option>Événement / Conférence</option>
              <option>Autre</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
              Avez-vous été référé(e) par un agent BOSS ? <span className="text-[#C49A35] ml-0.5">*</span>
            </label>
            <div className="flex gap-4 mt-1">
              <label className={`flex-1 border-[1.5px] rounded-[10px] p-[13px_16px] cursor-pointer flex items-center gap-2.5 text-[15px] transition-all duration-200 ${
                formState.referred === "oui" ? "border-[#185FA5] bg-[#E6F1FB] text-[#185FA5] font-medium" : "border-[rgba(24,95,165,0.15)] bg-[#F7F9FC] text-[#5a6e8a]"
              }`}>
                <input type="radio" name="referred" value="oui" checked={formState.referred === "oui"} onChange={handleRadioChange} className="w-4 h-4 accent-[#185FA5] cursor-pointer" />
                Oui
              </label>
              <label className={`flex-1 border-[1.5px] rounded-[10px] p-[13px_16px] cursor-pointer flex items-center gap-2.5 text-[15px] transition-all duration-200 ${
                formState.referred === "non" ? "border-[#185FA5] bg-[#E6F1FB] text-[#185FA5] font-medium" : "border-[rgba(24,95,165,0.15)] bg-[#F7F9FC] text-[#5a6e8a]"
              }`}>
                <input type="radio" name="referred" value="non" checked={formState.referred === "non"} onChange={handleRadioChange} className="w-4 h-4 accent-[#185FA5] cursor-pointer" />
                Non
              </label>
            </div>

            {formState.referred === "oui" && (
              <div className="mt-4">
                <label htmlFor="referralName" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
                  Nom de l&apos;agent qui vous a référé(e) <span className="text-[#C49A35] ml-0.5">*</span>
                </label>
                <input
                  id="referralName"
                  type="text"
                  placeholder="Nom complet de l'agent"
                  value={formState.referralName}
                  onChange={handleChange}
                  className={`w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] ${errors.referralName ? '!border-[#e53e3e]' : ''}`}
                />
              </div>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="motivation" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
              Pourquoi souhaitez-vous devenir agent BOSS ? <span className="text-[#C49A35] ml-0.5">*</span>
            </label>
            <textarea
              id="motivation"
              placeholder="Partagez votre motivation en quelques lignes..."
              rows={4}
              value={formState.motivation}
              onChange={handleChange}
              className={`w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] resize-y min-h-[110px] ${errors.motivation ? '!border-[#e53e3e]' : ''}`}
            />
          </div>

          <hr className="border-t border-[rgba(24,95,165,0.15)] my-8" />

          <div className="bg-[#F7F9FC] border border-[rgba(24,95,165,0.15)] rounded-[10px] p-4 text-[13px] text-[#5a6e8a] leading-[1.65] flex gap-3 items-start mb-7">
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#185FA5] fill-none flex-shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4M12 16h.01"/>
            </svg>
            <span>
              Vos informations sont transmises uniquement à l&apos;équipe BOSS SARL (<strong className="text-[#0a1628]">bosssarlhr@gmail.com</strong>) et ne seront jamais partagées à des tiers. Vous serez contacté(e) dans les 48h ouvrables.
            </span>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-[#C49A35] text-[#0a1628] font-['DM_Sans',sans-serif] text-base font-bold px-8 py-4 rounded-[10px] border-none cursor-pointer flex items-center justify-center gap-2.5 hover:bg-[#E8BC5A] hover:-translate-y-[1px] transition-all duration-200"
          >
            Soumettre ma candidature
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-current fill-none stroke-[2.5]">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}