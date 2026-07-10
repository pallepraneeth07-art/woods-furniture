import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CollectionsSection />
      <CraftsmanshipSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}