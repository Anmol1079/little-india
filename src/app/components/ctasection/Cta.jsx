"use client";

import React from 'react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <div className="w-full flex flex-col bg-black text-[#f5f1eb] select-none">
      
      {/* Scope-contained style block for custom Anton & Montserrat typography */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-heavy {
          font-family: 'Anton', sans-serif;
        }
        .font-sans-custom {
          font-family: 'Montserrat', sans-serif;
        }
      ` }} />

      {/* BOTTOM SECTION: Fixed Background Reveal CTA Card */}
      <div className="relative w-full h-[440px] xs:h-[480px] md:h-[550px] overflow-visible [clip-path:inset(0_0_0_0)]">
        
        {/* Viewport-fixed Image Backdrop */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Dark vignette layers */}
          <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80" 
            alt="Flagship elegant dining interior" 
            className="w-full h-full object-cover filter saturate-[0.8] brightness-[0.7]"
          />
        </div>

        {/* Central Overlay Content */}
        <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between py-12 md:py-0 text-center md:text-left gap-6">
          
          {/* Text block: Title and description grouped closely */}
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-5 max-w-xl">
            <h2 className="font-heavy text-[36px] xs:text-[42px] md:text-5xl lg:text-6xl text-white uppercase leading-[0.92] tracking-wide">
              Ready to elevate<br />your dining?
            </h2>
            <p className="font-sans-custom text-[13px] xs:text-[13.5px] md:text-[13.5px] text-stone-200 font-medium leading-relaxed max-w-[92%] sm:max-w-md">
              Whether you're looking to host an intimate private gathering, book a cozy table for two, or feast at home, our culinary masters are here to guide your senses. Your perfect feast is just a click away.
            </p>
          </div>

          {/* CONTACT US BUTTON: Styled with the thick black border as seen in the screenshot */}
          <div className="shrink-0 mb-2 md:mb-0">
            <Link 
              href="#book-table" 
              className="group bg-[#E75B44] hover:bg-[#d14b35] text-white text-[11px] font-bold tracking-widest px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 border-[3.5px] border-stone-950 shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
            >
              <span>CONTACT US</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}