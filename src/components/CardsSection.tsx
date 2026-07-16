"use client";

import Image from "next/image";
import Link from "next/link";

export default function CardsSection() {
  return (
    <section className="py-[100px] px-[5%] bg-[#F7F9FC]" id="cartes">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-[72px]">
          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#185FA5] mb-3.5">
            <span className="text-[#C49A35]">— </span>Nos offres
          </span>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,3.5vw,52px)] font-bold text-[#0a1628] leading-[1.2]">
            Deux cartes, <span className="text-[#185FA5]">une seule ambition</span>
          </h2>
          <span className="block w-12 h-[3px] bg-[#C49A35] rounded-[2px] mx-auto mt-5"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {/* PVC Standard */}
          <div className="rounded-[24px] overflow-visible relative flex flex-col transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_32px_80px_rgba(0,0,0,0.14)] bg-white border-[1.5px] border-[rgba(24,95,165,0.15)] shadow-[0_8px_32px_rgba(24,95,165,0.07)] overflow-visible">
            <div className="px-7 py-2.5 text-[11px] font-bold tracking-[0.1em] uppercase rounded-[24px_24px_0_0] bg-[#E6F1FB] text-[#185FA5]">Standard</div>

            <div className="relative h-[260px] pt-5 flex items-center justify-center overflow-visible bg-transparent">
              <Image
                src="/pvc_card.png"
                alt="Carte BOSS PVC Standard"
                width={540}
                height={400}
                className="w-[88%] max-w-[340px] h-auto rounded-[16px] object-cover filter drop-shadow-[0_24px_48px_rgba(0,0,0,0.22)] drop-shadow-[0_8px_16px_rgba(0,0,0,0.14)] animate-float-card relative z-[2]"
              />
              <div className="absolute bottom-[-4px] right-4 z-[3] flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-[100px] bg-[#0a1628] text-[#E8BC5A] border border-[rgba(196,154,53,0.25)]">
                <span className="w-[7px] h-[7px] rounded-full bg-[#22c55e] animate-blink"></span>
                NFC Actif
              </div>
            </div>

            <div className="px-9 pb-9 flex-1 flex flex-col">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#185FA5] mb-2">PVC Standard</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(26px,2.5vw,34px)] font-bold leading-[1.15] text-[#0a1628] mb-1">La carte<br />accessible</div>
              <div className="text-sm text-[#5a6e8a] mb-5">Pour les professionnels qui démarrent</div>

              <ul className="list-none flex flex-col gap-3.5 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm leading-[1.55] text-[#2a3f6a]">
                  <span className="w-5 h-5 rounded-full bg-[#E6F1FB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-[#185FA5] fill-none stroke-[2.5]"><polyline points="20,6 9,17 4,12"/></svg>
                  </span>
                  Carte NFC en PVC haute résistance
                </li>
                <li className="flex items-start gap-3 text-sm leading-[1.55] text-[#2a3f6a]">
                  <span className="w-5 h-5 rounded-full bg-[#E6F1FB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-[#185FA5] fill-none stroke-[2.5]"><polyline points="20,6 9,17 4,12"/></svg>
                  </span>
                  Profil digital personnalisé (nom, titre, contact, réseaux)
                </li>
                <li className="flex items-start gap-3 text-sm leading-[1.55] text-[#2a3f6a]">
                  <span className="w-5 h-5 rounded-full bg-[#E6F1FB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-[#185FA5] fill-none stroke-[2.5]"><polyline points="20,6 9,17 4,12"/></svg>
                  </span>
                  Partage instantané en 1 tap NFC
                </li>
                <li className="flex items-start gap-3 text-sm leading-[1.55] text-[#2a3f6a]">
                  <span className="w-5 h-5 rounded-full bg-[#E6F1FB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-[#185FA5] fill-none stroke-[2.5]"><polyline points="20,6 9,17 4,12"/></svg>
                  </span>
                  Profil toujours à jour, modifiable en ligne
                </li>
                <li className="flex items-start gap-3 text-sm leading-[1.55] text-[#2a3f6a]">
                  <span className="w-5 h-5 rounded-full bg-[#E6F1FB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-[#185FA5] fill-none stroke-[2.5]"><polyline points="20,6 9,17 4,12"/></svg>
                  </span>
                  Compatible tous smartphones récents (iOS & Android)
                </li>
                <li className="flex items-start gap-3 text-sm leading-[1.55] text-[#2a3f6a]">
                  <span className="w-5 h-5 rounded-full bg-[#E6F1FB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-[#185FA5] fill-none stroke-[2.5]"><polyline points="20,6 9,17 4,12"/></svg>
                  </span>
                  Livraison à Kinshasa
                </li>
              </ul>

              <Link href="https://forms.gle/xigqiKCbDjYGzgxA8" className="block text-center px-6 py-3.5 rounded-[10px] font-['DM_Sans',sans-serif] text-[15px] font-semibold no-underline border-none cursor-pointer transition-all duration-200 hover:-translate-y-[1px] bg-[#0a1628] text-white hover:bg-[#1a2f58]">
                Commander la carte Standard →
              </Link>
            </div>
          </div>

          {/* Metal Premium */}
          <div className="rounded-[24px] overflow-visible relative flex flex-col transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_32px_80px_rgba(0,0,0,0.14)] bg-[#0a1628] border-[1.5px] border-[rgba(196,154,53,0.35)] shadow-[0_8px_40px_rgba(196,154,53,0.12)] overflow-visible">
            <div className="absolute top-[52px] right-[-1px] bg-[#C49A35] text-[#0a1628] text-[10px] font-bold tracking-[0.08em] uppercase px-3 py-1 rounded-[6px_0_0_6px] z-[3]">★ Populaire</div>
            <div className="px-7 py-2.5 text-[11px] font-bold tracking-[0.1em] uppercase rounded-[24px_24px_0_0] bg-[rgba(196,154,53,0.15)] text-[#E8BC5A] border-b border-[rgba(196,154,53,0.15)]">Premium</div>

            <div className="relative h-[260px] pt-5 flex items-center justify-center overflow-visible bg-transparent">
              <Image
                src="/metal_card.png"
                alt="Carte BOSS Métal Premium"
                width={540}
                height={400}
                className="w-[88%] max-w-[340px] h-auto rounded-[16px] object-cover filter drop-shadow-[0_24px_48px_rgba(196,154,53,0.25)] drop-shadow-[0_8px_20px_rgba(0,0,0,0.3)] animate-float-card relative z-[2]"
                style={{ animationDelay: "0.8s" }}
              />
              <div className="absolute bottom-[-4px] right-4 z-[3] flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-[100px] bg-[rgba(196,154,53,0.15)] text-[#E8BC5A] border border-[rgba(196,154,53,0.3)]">
                <span className="w-[7px] h-[7px] rounded-full bg-[#22c55e] animate-blink"></span>
                NFC Actif
              </div>
            </div>

            <div className="px-9 pb-9 flex-1 flex flex-col">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#C49A35] mb-2">Métal Premium</div>
              <div className="font-['Playfair_Display',serif] text-[clamp(26px,2.5vw,34px)] font-bold leading-[1.15] text-white mb-1">
                La carte<br /><span className="text-[#E8BC5A]">d&apos;élite</span>
              </div>
              <div className="text-sm text-[rgba(255,255,255,0.45)] mb-5">Pour ceux qui veulent marquer les esprits</div>

              <ul className="list-none flex flex-col gap-3.5 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm leading-[1.55] text-[rgba(255,255,255,0.65)]">
                  <span className="w-5 h-5 rounded-full bg-[rgba(196,154,53,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-[#E8BC5A] fill-none stroke-[2.5]"><polyline points="20,6 9,17 4,12"/></svg>
                  </span>
                  Carte en métal brossé poids premium (haptique luxe)
                </li>
                <li className="flex items-start gap-3 text-sm leading-[1.55] text-[rgba(255,255,255,0.65)]">
                  <span className="w-5 h-5 rounded-full bg-[rgba(196,154,53,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-[#E8BC5A] fill-none stroke-[2.5]"><polyline points="20,6 9,17 4,12"/></svg>
                  </span>
                  Gravure laser de votre logo
                </li>
                <li className="flex items-start gap-3 text-sm leading-[1.55] text-[rgba(255,255,255,0.65)]">
                  <span className="w-5 h-5 rounded-full bg-[rgba(196,154,53,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-[#E8BC5A] fill-none stroke-[2.5]"><polyline points="20,6 9,17 4,12"/></svg>
                  </span>
                  Profil digital complet + QR code doré intégré
                </li>
                <li className="flex items-start gap-3 text-sm leading-[1.55] text-[rgba(255,255,255,0.65)]">
                  <span className="w-5 h-5 rounded-full bg-[rgba(196,154,53,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-[#E8BC5A] fill-none stroke-[2.5]"><polyline points="20,6 9,17 4,12"/></svg>
                  </span>
                  Partage NFC instantané + lien de profil partageable
                </li>
                <li className="flex items-start gap-3 text-sm leading-[1.55] text-[rgba(255,255,255,0.65)]">
                  <span className="w-5 h-5 rounded-full bg-[rgba(196,154,53,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-[#E8BC5A] fill-none stroke-[2.5]"><polyline points="20,6 9,17 4,12"/></svg>
                  </span>
                  Support prioritaire & livraison express Kinshasa disponible
                </li>
              </ul>

              <Link href="https://forms.gle/xigqiKCbDjYGzgxA8" className="block text-center px-6 py-3.5 rounded-[10px] font-['DM_Sans',sans-serif] text-[15px] font-semibold no-underline border-none cursor-pointer transition-all duration-200 hover:-translate-y-[1px] bg-[#C49A35] text-[#0a1628] shadow-[0_4px_20px_rgba(196,154,53,0.3)] hover:bg-[#E8BC5A] hover:shadow-[0_6px_28px_rgba(196,154,53,0.4)]">
                Commander la carte Métal →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}