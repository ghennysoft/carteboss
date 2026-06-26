"use client";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactSection />
      <MapSection />
      <Footer />
    </main>
  );
}