import { BubbleBackground } from "@/components/ui/bubble-background";

export default function Hero() {
  return (
    <BubbleBackground interactive={true} className="overflow-hidden py-32">
      <div className="relative z-10 container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none text-[#F2F2F2]">
            Premium Shopify Design Studio
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-[rgba(242,242,242,0.72)] max-w-3xl mx-auto leading-relaxed">
            We create brand-led Shopify experiences that feel expensive and convert naturally. 
            Brand identity, packaging, and custom Shopify builds for discerning DTC brands.
          </p>
          
          <ul className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-12 text-base md:text-lg text-[rgba(242,242,242,0.72)]">
            <li>Brand-led Shopify experiences</li>
            <li>Crafted systems across web + packaging</li>
            <li>Clean, fast, accessible builds</li>
          </ul>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-4">
            <a 
              href="#work" 
              className="inline-block px-8 py-4 bg-[#E9D090] text-[#0C0D0F] rounded-full font-semibold text-base shadow-md hover:bg-[#F3E1B5] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              View Selected Work
            </a>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3.5 bg-transparent text-[#F2F2F2] rounded-full font-semibold text-sm border border-[rgba(255,255,255,0.08)] hover:bg-[#171A1F] hover:border-[#E9D090] transition-all duration-300 hover:-translate-y-0.5"
            >
              Request Studio Intro Call
            </a>
          </div>
          
          <p className="text-sm text-[#E9D090] italic">
            Limited client slots per month to protect quality
          </p>
        </div>
      </div>
    </BubbleBackground>
  );
}
