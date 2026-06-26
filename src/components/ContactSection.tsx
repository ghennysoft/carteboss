import InfoCard from "./InfoCard";
import SocialPanel from "./SocialPanel";
import HoursCard from "./HoursCard";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-[100px] px-[5%] bg-[#F7F9FC]">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-0">
          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#185FA5] mb-3.5">
            <span className="text-[#C49A35]">— </span>Coordonnées
          </span>
          <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3vw,44px)] font-bold text-[#0a1628] leading-[1.2]">
            Comment nous <span className="text-[#185FA5]">joindre</span>
          </h2>
          <span className="block w-12 h-[3px] bg-[#C49A35] rounded-[2px] mx-auto mt-5"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 mt-14 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            <InfoCard
              iconType="phone"
              title="Téléphone"
              value="+243 897 297 295"
              href="tel:+243897297295"
              subtitle="Lun–Ven : 8h30–17h00 · Sam : 8h00–14h00"
            />

            <InfoCard
              iconType="email"
              title="Email"
              value="bosssarlhr@gmail.com"
              href="mailto:bosssarlhr@gmail.com"
              subtitle="Réponse sous 24–48h ouvrables"
            />

            <InfoCard
              iconType="location"
              title="Localisation"
              value="Kinshasa, République Démocratique du Congo"
              subtitle="Opérations principalement à Gombe"
            />

            <SocialPanel />
            <HoursCard />
          </div>

          {/* Right Column */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}