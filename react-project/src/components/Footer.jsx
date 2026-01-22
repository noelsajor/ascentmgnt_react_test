import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#121417] text-[rgba(242,242,242,0.72)] py-24 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-[#F2F2F2] text-xl mb-6">Ascent Mgnt</h3>
            <p className="mb-6 leading-relaxed">
              Premium Shopify design studio. We create brand-led commerce experiences through 
              identity systems, packaging design, and custom Shopify development.
            </p>
            <div className="mt-8">
              <h4 className="text-[#F2F2F2] mb-4">Studio Inquiries</h4>
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
                className="w-full px-6 py-3 border border-[rgba(255,255,255,0.08)] bg-[#171A1F] text-[#F2F2F2] rounded-xl mb-4 text-[0.95rem] transition-all focus:outline-none focus:border-[#E9D090] focus:shadow-[0_0_0_3px_rgba(233,208,144,0.1)] placeholder:text-[rgba(242,242,242,0.72)]"
              />
              <button className="w-full px-7 py-3.5 bg-[#E9D090] text-[#0C0D0F] rounded-full font-semibold text-[0.95rem] shadow-[0_2px_8px_rgba(233,208,144,0.15)] hover:bg-[#F3E1B5] hover:shadow-[0_8px_24px_rgba(233,208,144,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                Send Inquiry
              </button>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-[#E9D090] mb-6 text-sm font-semibold uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#services" 
                  className="text-[rgba(242,242,242,0.72)] hover:text-[#F2F2F2] transition-colors text-[0.95rem] focus-visible:outline-2 focus-visible:outline-[#E9D090] focus-visible:outline-offset-2 rounded"
                >
                  Shopify Design
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-[rgba(242,242,242,0.72)] hover:text-[#F2F2F2] transition-colors text-[0.95rem] focus-visible:outline-2 focus-visible:outline-[#E9D090] focus-visible:outline-offset-2 rounded"
                >
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-[rgba(242,242,242,0.72)] hover:text-[#F2F2F2] transition-colors text-[0.95rem] focus-visible:outline-2 focus-visible:outline-[#E9D090] focus-visible:outline-offset-2 rounded"
                >
                  Packaging Design
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-[rgba(242,242,242,0.72)] hover:text-[#F2F2F2] transition-colors text-[0.95rem] focus-visible:outline-2 focus-visible:outline-[#E9D090] focus-visible:outline-offset-2 rounded"
                >
                  Theme Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h4 className="text-[#E9D090] mb-6 text-sm font-semibold uppercase tracking-wider">
              Studio
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#work" 
                  className="text-[rgba(242,242,242,0.72)] hover:text-[#F2F2F2] transition-colors text-[0.95rem] focus-visible:outline-2 focus-visible:outline-[#E9D090] focus-visible:outline-offset-2 rounded"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link 
                  href="#process" 
                  className="text-[rgba(242,242,242,0.72)] hover:text-[#F2F2F2] transition-colors text-[0.95rem] focus-visible:outline-2 focus-visible:outline-[#E9D090] focus-visible:outline-offset-2 rounded"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-[rgba(242,242,242,0.72)] hover:text-[#F2F2F2] transition-colors text-[0.95rem] focus-visible:outline-2 focus-visible:outline-[#E9D090] focus-visible:outline-offset-2 rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-8 text-center text-sm">
          <p>&copy; 2026 Ascent Mgnt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
