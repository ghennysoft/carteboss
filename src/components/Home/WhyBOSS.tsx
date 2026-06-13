'use client'

export default function WhyBOSS() {
  const features = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
      title: "Gagnez du temps",
      description: "Partagez toutes vos informations en quelques secondes et concentrez-vous sur ce qui compte vraiment : vos relations."
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
      title: "Impressionnez dès le premier contact",
      description: "Offrez une expérience moderne et professionnelle qui marque les esprits et reflète votre ambition."
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
      title: "Développez votre réseau plus vite",
      description: "Connectez-vous facilement et élargissez votre réseau avec des contacts qualifiés grâce à la technologie NFC."
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
      title: "Créez des opportunités réelles",
      description: "Chaque contact devient une opportunité de collaboration, de vente ou de croissance. Ne laissez plus passer aucune chance."
    }
  ]

  return (
    <section className="py-[100px] px-[5%] bg-offWhite">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center">
          <span className="section-tag">Avantages</span>
          <h2 className="font-playfair text-[clamp(32px,3.5vw,52px)] font-bold">
            Pourquoi <span className="text-blue">BOSS ?</span>
          </h2>
          <div className="gold-line mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[60px]">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-border rounded-2xl p-9 hover:shadow-[0_12px_40px_rgba(24,95,165,0.1)] hover:-translate-y-1 transition-all">
              <div className="w-[52px] h-[52px] bg-blue-pale rounded-xl flex items-center justify-center mb-6">
                <div className="text-blue">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-2.5">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2.5 bg-navy text-white font-dm-sans text-sm font-semibold py-3.5 px-7 rounded-md hover:bg-navy/90 transition-all">
            Commencer maintenant →
          </a>
        </div>
      </div>
    </section>
  )
}