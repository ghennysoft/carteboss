'use client'

export default function Founder() {
  return (
    <section className="py-24 px-[5%] bg-offWhite">
      <div className="max-w-[1280px] mx-auto">
        <span className="section-tag">Le fondateur</span>
        <h2 className="font-playfair text-[clamp(32px,3.5vw,48px)] font-bold">
          La vision d&apos;un <span className="text-blue">homme.</span>
        </h2>
        <div className="gold-line"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-14">
          <div className="bg-navy rounded-2xl p-12 text-center relative overflow-hidden border border-gold/15">
            <div className="absolute inset-0 bg-gradient-radial from-blue/20 via-transparent to-transparent pointer-events-none"></div>
            <div className="w-25 h-25 rounded-full bg-navy-light border-2 border-gold/40 flex items-center justify-center font-playfair text-4xl font-bold text-gold-light mx-auto mb-5 relative z-10">
              EM
            </div>
            <div className="font-playfair text-2xl font-bold text-white mb-1.5 relative z-10">Emmanuel M.</div>
            <div className="text-[13px] text-gold-light tracking-[0.06em] uppercase font-medium mb-7 relative z-10">CEO &amp; Fondateur</div>
            <div className="w-10 h-px bg-gold/30 mx-auto mb-7 relative z-10"></div>
            <div className="font-playfair text-6xl text-gold/20 leading-[0.5] mb-4 relative z-10">&quot;</div>
            <div className="font-playfair text-[17px] italic font-normal text-white/75 leading-relaxed relative z-10">
              L&apos;avenir brille pour ceux qui <em className="not-italic text-gold-light font-bold">BOSS.</em>
            </div>
          </div>
          
          <div>
            <p className="text-base leading-relaxed text-text-muted mb-5">
              Emmanuel M. est le visionnaire derrière BOSS. Convaincu que <strong className="text-text-dark font-semibold">la première impression est souvent la seule chance</strong> de marquer les esprits, il a imaginé une solution qui place chaque professionnel en position de force dès le premier contact.
            </p>
            <p className="text-base leading-relaxed text-text-muted mb-5">
              En janvier 2026, il lance BOSS à Kinshasa avec une ambition claire : <strong className="text-text-dark font-semibold">révolutionner la façon dont les professionnels congolais — et africains — se connectent, se présentent et se développent.</strong>
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              Sa conviction est simple : dans un monde ultra-connecté, ceux qui maîtrisent leur image et leur réseau dominent leur marché. BOSS est l&apos;outil qui rend cela accessible à tous.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}