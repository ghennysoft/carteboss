"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import PageSwitcher from "@/components/PageSwitcher";
import OpportunitePage from "@/components/OpportunitePage";
import CarrierePage from "@/components/CarrierePage";
import Footer from "@/components/footer";

export default function DevenirAgentPage() {
  const [activeTab, setActiveTab] = useState<"opportunite" | "carriere">("opportunite");

  return (
    <main>
      <Navbar />
      <PageSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === "opportunite" ? (
        <OpportunitePage />
      ) : (
        <CarrierePage />
      )}
      
      <Footer />
    </main>
  );
}