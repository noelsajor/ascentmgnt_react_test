import Hero from "@/components/Hero";
import { 
  SocialProof, 
  Portfolio, 
  Services, 
  CaseStudy, 
  Process, 
  Offers, 
  Testimonials, 
  FAQ, 
  FinalCTA 
} from "@/components/PlaceholderSections";

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
