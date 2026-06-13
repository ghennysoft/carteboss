'use client'

export default function CtaStrip() {
  return (
    <div className="bg-gold py-20 px-[5%]">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center gap-10 flex-wrap">
        <div>
          <h2 className="font-playfair text-[clamp(28px,3vw,42px)] font-black text-navy leading-tight">
            Prêt à rejoindre le mouvement ?
          </h2>
          <p className="text-base text-navy/65 mt-2">Plus de 100 professionnels à Kinshasa ont déjà fait le choix de BOSS.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2.5 bg-navy text-white font-dm-sans text-sm font-semibold py-3.5 px-7 rounded-md hover:bg-navy-light transition-all whitespace-nowrap">
          Obtenir ma carte →
        </a>
      </div>
    </div>
  )
}