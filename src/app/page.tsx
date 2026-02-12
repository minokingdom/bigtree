import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UrgencySection from "@/components/UrgencySection";
import FeatureSection from "@/components/FeatureSection";
import SpecSection from "@/components/SpecSection";
import BenefitSection from "@/components/BenefitSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 text-slate-200 selection:bg-gold-500/30">
      <Header />
      <Hero />
      <UrgencySection />
      <FeatureSection />
      <SpecSection />
      <BenefitSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
