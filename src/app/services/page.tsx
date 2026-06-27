"use client";

import Navbar from "@/components/navbar";
import ServiceHero from "@/components/ServiceHero";
import CardsSection from "@/components/CardsSection";
import ComparisonTable from "@/components/ComparisonTable";
import UseCases from "@/components/UseCases";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/footer";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServiceHero />
      <CardsSection />
      <ComparisonTable />
      <UseCases />
      <CTABanner />
      <Footer />
    </main>
  );
}