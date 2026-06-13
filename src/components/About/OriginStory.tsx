'use client'

import Image from 'next/image'

export default function OriginStory() {
  return (
    <section className="py-24 px-[5%] bg-white">
      <div className="max-w-[7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-2xl overflow-hidden opacity-0 animate-fade-in-up">
            <Image 
              src="/about.jpg" 
              alt="Lancement de BOSS — Kinshasa, janvier 2026" 
              width={600} 
              height={400}
              className="w-full rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-navy/90 to-transparent py-8 px-7 flex items-center gap-3">
              <Image src="/logo.png" alt="BOSS" width={28} height={28} className="brightness-0 invert bg-blue-850" />
              <span className="text-xs text-white/50 tracking-[0.05em]">Kinshasa, Janvier 2026 — Lancement officiel</span>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in-up animation-delay-150">
            <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold text-xs font-medium tracking-[0.06em] uppercase py-1.5 px-3.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              Fondée en janvier 2026
            </span>
            <h2 className="font-playfair text-[clamp(32px,3.5vw,48px)] font-bold text-text-dark">
              Nés d&apos;un constat <span className="text-blue">simple.</span>
            </h2>
            <div className="gold-line"></div>
            <p className="text-base leading-relaxed text-text-muted mb-5">
              Dans un monde où <strong className="text-text-dark font-semibold">l&apos;image et les connexions sont essentielles,</strong> les outils traditionnels ne suffisent plus. La carte de visite en papier se perd, se mouille, s&apos;oublie — et avec elle, une opportunité disparaît.
            </p>
            <p className="text-base leading-relaxed text-text-muted mb-5">
              Combien de fois avez-vous tendu une carte que l&apos;autre personne a glissée dans une poche pour ne jamais la retrouver ? Avec BOSS, <strong className="text-text-dark font-semibold">un simple tap suffit.</strong> Vos informations, vos réseaux, votre profil complet — sauvegardés directement dans le téléphone de votre interlocuteur. <strong className="text-text-dark font-semibold">Vous devenez difficile à oublier.</strong>
            </p>
            <p className="text-base leading-relaxed text-text-muted mb-5">
              BOSS est née de cette vision : offrir aux professionnels d&apos;aujourd&apos;hui une solution moderne, efficace et à la hauteur de leur ambition.
            </p>
            <div className="font-playfair text-xl italic font-bold text-navy border-l-3 border-gold pl-5">
              BOSS, c&apos;est plus qu&apos;une carte.<br />C&apos;est un mouvement.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}