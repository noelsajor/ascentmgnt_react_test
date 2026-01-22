"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[rgba(12,13,15,0.88)] border-b border-[rgba(255,255,255,0.14)] shadow-[0_4px_24px_rgba(0,0,0,0.4)]' 
          : 'bg-[rgba(12,13,15,0.65)] border-b border-[rgba(255,255,255,0.08)]'
      } backdrop-blur-xl`}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold text-[#F2F2F2] tracking-tight hover:text-[#E9D090] transition-colors"
        >
          Ascent Mgnt
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            <li>
              <Link 
                href="#work" 
                className="text-[rgba(242,242,242,0.72)] text-[0.95rem] hover:text-[#F2F2F2] transition-colors focus-visible:outline-2 focus-visible:outline-[#E9D090] focus-visible:outline-offset-4 rounded"
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                href="#services" 
                className="text-[rgba(242,242,242,0.72)] text-[0.95rem] hover:text-[#F2F2F2] transition-colors focus-visible:outline-2 focus-visible:outline-[#E9D090] focus-visible:outline-offset-4 rounded"
              >
                Capabilities
              </Link>
            </li>
            <li>
              <Link 
                href="#process" 
                className="text-[rgba(242,242,242,0.72)] text-[0.95rem] hover:text-[#F2F2F2] transition-colors focus-visible:outline-2 focus-visible:outline-[#E9D090] focus-visible:outline-offset-4 rounded"
              >
                Studio
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="text-[rgba(242,242,242,0.72)] text-[0.95rem] hover:text-[#F2F2F2] transition-colors focus-visible:outline-2 focus-visible:outline-[#E9D090] focus-visible:outline-offset-4 rounded"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                href="#work" 
                className="inline-block px-7 py-3.5 bg-[#E9D090] text-[#0C0D0F] rounded-full font-semibold text-[0.95rem] shadow-[0_2px_8px_rgba(233,208,144,0.15)] hover:bg-[#F3E1B5] hover:shadow-[0_8px_24px_rgba(233,208,144,0.3)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">View Work</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-400"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
