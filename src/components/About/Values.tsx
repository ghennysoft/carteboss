'use client'

export default function Values() {
  const values = [
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
      name: "Excellence",
      desc: "Nous refusons la médiocrité. Chaque détail compte, chaque interaction doit être irréprochable."
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3M6.343 6.343l-.707-.707M12 21v-1m-6.364-1.636l.707-.707M17.657 17.657l-.707-.707M12 8a4 4 0 110 8 4 4 0 010-8z"/></svg>,
      name: "Innovation",
      desc: "Nous pensons différemment pour créer des solutions qui transforment le quotidien professionnel."
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
      name: "Intégrité",
      desc: "La confiance se construit dans la transparence. Nous tenons nos promesses, toujours."
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
      name: "Impact",
      desc: "Chaque carte activée, c'est un professionnel qui avance. Nous mesurons notre succès à l'impact réel."
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8L3 21"/><path d="M12 8v4M12 16h.01"/></svg>,
      name: "Indépendance",
      desc: "Nous outillons les professionnels pour qu'ils bâtissent leur avenir sur leurs propres termes."
    }
  ]

  return (
    <section className="py-24 px-[5%] bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center">
          <span className="section-tag">Ce en quoi nous croyons</span>
          <h2 className="font-playfair text-[clamp(32px,3.5vw,48px)] font-bold">
            Nos <span className="text-blue">valeurs</span>
          </h2>
          <div className="gold-line mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-14">
          {values.map((value, index) => (
            <div key={index} className="bg-offWhite border border-border rounded-2xl p-9 text-center hover:shadow-[0_12px_40px_rgba(24,95,165,0.1)] hover:-translate-y-1 hover:bg-white transition-all cursor-default">
              <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mx-auto mb-5">
                <div className="text-gold-light">{value.icon}</div>
              </div>
              <div className="font-playfair text-lg font-bold text-text-dark mb-2.5">{value.name}</div>
              <div className="text-[13px] leading-relaxed text-text-muted">{value.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}