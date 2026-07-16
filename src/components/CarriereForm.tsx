"use client";

import { useState, useRef } from "react";

export default function CarriereForm() {
  const [formState, setFormState] = useState({
    fullname: "",
    phone: "",
    email: "",
    position: "",
    experience: "",
    heard: "",
    motivation: "",
  });

  const [fileName, setFileName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileRef.current){
      fileRef.current.click();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = () => {
    const { fullname, phone, email, position, heard, motivation } = formState;

    if (!fullname || !phone || !email || !position || !heard || !motivation) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const subject = encodeURIComponent("Candidature Carrière BOSS SARL — " + fullname + " — " + position);
    const body = encodeURIComponent(
      "CANDIDATURE AGENT COMMERCIAL BOSS SARL\n" +
      "========================================\n\n" +
      "Nom complet  : " + fullname + "\n" +
      "Téléphone    : " + phone + "\n" +
      "Email        : " + email + "\n" +
      "Poste        : " + position + "\n" +
      "Expérience   : " + (formState.experience || "Non précisé") + "\n" +
      "Source       : " + heard + "\n\n" +
      "LETTRE DE MOTIVATION\n---------------------\n" + motivation + "\n\n" +
      (fileName ? "[CV joint: " + fileName + "]" : "[Aucun CV joint]")
    );

    window.location.href = "mailto:bosssarlhr@gmail.com?subject=" + subject + "&body=" + body;

    setIsSubmitted(true);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-[100px] px-[5%] bg-white" id="postuler" ref={formRef}>
        <div className="max-w-[820px] mx-auto">
          <div className="bg-white border-[1.5px] border-[rgba(24,95,165,0.2)] rounded-[24px] p-[56px_60px] shadow-[0_16px_60px_rgba(24,95,165,0.08)]">
            <div className="text-center py-12">
              <div className="w-[72px] h-[72px] rounded-full bg-[rgba(22,163,74,0.1)] border-2 border-[rgba(22,163,74,0.3)] flex items-center justify-center mx-auto mb-6">
                <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-[#16a34a] fill-none stroke-2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="font-['Playfair_Display',serif] text-[28px] font-bold text-[#0a1628] mb-3">
                Dossier envoyé !
              </h3>
              <p className="text-[15px] leading-[1.75] text-[#5a6e8a] max-w-[400px] mx-auto">
                Merci <strong className="text-[#0a1628]">{formState.fullname.split(" ")[0]}</strong>. Notre équipe RH examinera votre CV et vous contactera dès que possible à l&apos;adresse email fournie.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[100px] px-[5%] bg-white" id="postuler" ref={formRef}>
      <div className="max-w-[820px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#185FA5] mb-3.5">
            <span className="text-[#C49A35]">— </span>Candidature
          </span>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(30px,3.5vw,48px)] font-bold text-[#0a1628] leading-[1.2]">
            Soumettez votre <span className="text-[#185FA5]">dossier</span>
          </h2>
          <p className="text-[15px] text-[#5a6e8a] mt-3 leading-[1.7]">Envoyez-nous votre CV — notre équipe RH vous contactera dès que votre profil sera examiné.</p>
          <span className="block w-12 h-[3px] bg-[#C49A35] rounded-[2px] mx-auto mt-5"></span>
        </div>

        <div className="bg-white border-[1.5px] border-[rgba(24,95,165,0.2)] rounded-[24px] p-[56px_60px] shadow-[0_16px_60px_rgba(24,95,165,0.08)]">
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
                className="w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
                Téléphone <span className="text-[#C49A35] ml-0.5">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+243 8XX XXX XXX"
                value={formState.phone}
                onChange={handleChange}
                className="w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)]"
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
              className="w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="position" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
              Poste souhaité <span className="text-[#C49A35] ml-0.5">*</span>
            </label>
            <select
              id="position"
              value={formState.position}
              onChange={handleChange}
              className="w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] appearance-none bg-no-repeat bg-position-[right_16px_center] pr-10 cursor-pointer"
            >
              <option value="" disabled>Sélectionnez un poste</option>
              <option>Agent Indépendant</option>
              <option>Agent Commercial — Terrain</option>
              <option>Agent Commercial — Gombe</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="experience" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
              Années d&apos;expérience en vente
            </label>
            <select
              id="experience"
              value={formState.experience}
              onChange={handleChange}
              className="w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] appearance-none bg-no-repeat bg-[right_16px_center] pr-10 cursor-pointer"
            >
              <option value="" disabled>Sélectionnez</option>
              <option>Moins de 1 an</option>
              <option>1 — 2 ans</option>
              <option>3 — 5 ans</option>
              <option>Plus de 5 ans</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="heard" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
              Comment avez-vous entendu parler de BOSS SARL ? <span className="text-[#C49A35] ml-0.5">*</span>
            </label>
            <select
              id="heard"
              value={formState.heard}
              onChange={handleChange}
              className="w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] appearance-none bg-no-repeat bg-[right_16px_center] pr-10 cursor-pointer"
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
            <label htmlFor="motivation" className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
              Lettre de motivation <span className="text-[#C49A35] ml-0.5">*</span>
            </label>
            <textarea
              id="motivation"
              placeholder="Présentez-vous et expliquez pourquoi vous souhaitez rejoindre l'équipe BOSS SARL..."
              rows={5}
              value={formState.motivation}
              onChange={handleChange}
              className="w-full font-['DM_Sans',sans-serif] text-[15px] text-[#0a1628] bg-[#F7F9FC] border-[1.5px] border-[rgba(24,95,165,0.15)] rounded-[10px] p-[13px_16px] outline-none transition-all focus:border-[#185FA5] focus:bg-white focus:shadow-[0_0_0_3px_rgba(24,95,165,0.08)] resize-y min-h-[130px]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[13px] font-semibold text-[#0a1628] tracking-[0.03em] mb-2">
              CV (PDF ou Word) <span className="text-[#C49A35] ml-0.5">*</span>
            </label>
            <div onClick={handleClick} className={`border-2 border-dashed rounded-[12px] p-8 text-center cursor-pointer transition-all duration-200 ${fileName ? 'border-[#185FA5] bg-[#daeaf8]' : 'border-[rgba(24,95,165,0.3)] bg-[#E6F1FB] hover:border-[#185FA5] hover:bg-[#daeaf8]'}`}>
              <input
                type="file"
                id="cvFile"
                ref={fileRef}
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                style={{ position: "absolute", top: "0px", left: "0px", right: "0px", bottom: "0px", inset: 0, opacity: 0, cursor: "pointer", width: "100%", height: "100%" }}
              />
              <div className="w-11 h-11 bg-[rgba(24,95,165,0.1)] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-[#185FA5] fill-none stroke-[1.8]">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
              </div>
              <div className="text-[15px] font-semibold text-[#0a1628] mb-1">Cliquez pour télécharger votre CV</div>
              <div className="text-[13px] text-[#5a6e8a]">PDF, DOC ou DOCX · Max 5 MB</div>
              {fileName && <div className="mt-2.5 text-[13px] font-semibold text-[#185FA5]">✓ {fileName}</div>}
            </div>
          </div>

          <hr className="border-t border-[rgba(24,95,165,0.15)] my-8" />

          <div className="bg-[#F7F9FC] border border-[rgba(24,95,165,0.15)] rounded-[10px] p-4 text-[13px] text-[#5a6e8a] leading-[1.65] flex gap-3 items-start mb-7">
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#185FA5] fill-none flex-shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4M12 16h.01"/>
            </svg>
            <span>
              Votre dossier sera transmis à l&apos;équipe RH BOSS SARL (<strong className="text-[#0a1628]">bosssarlhr@gmail.com</strong>). Vous serez contacté(e) dès que votre CV aura été examiné. La durée peut varier selon le volume de candidatures reçues.
            </span>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-[#185FA5] text-white font-['DM_Sans',sans-serif] text-base font-bold px-8 py-4 rounded-[10px] border-none cursor-pointer flex items-center justify-center gap-2.5 hover:bg-[#378ADD] hover:-translate-y-[1px] transition-all duration-200"
          >
            Envoyer ma candidature
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-current fill-none stroke-[2.5]">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}