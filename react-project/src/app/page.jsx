import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Process from "@/components/Process";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0D0F]">
      <Hero />
      <SocialProof />
      <Portfolio />
      <Services />
      <CaseStudy />
      <Process />
      <Offers />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
