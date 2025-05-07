
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Add fonts dynamically
  useEffect(() => {
    const dmSansFont = document.createElement('link');
    dmSansFont.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap";
    dmSansFont.rel = "stylesheet";
    
    const robotoFont = document.createElement('link');
    robotoFont.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap";
    robotoFont.rel = "stylesheet";
    
    document.head.appendChild(dmSansFont);
    document.head.appendChild(robotoFont);
    
    return () => {
      document.head.removeChild(dmSansFont);
      document.head.removeChild(robotoFont);
    };
  }, []);

  return (
    <div className="min-h-screen font-roboto bg-background transition-colors duration-300">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
