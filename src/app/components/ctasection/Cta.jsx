"use client";

import React from 'react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section 
      className="relative w-full py-24 select-none border-b border-stone-200 bg-cover bg-center flex items-center justify-center min-h-[440px] xs:min-h-[480px] md:min-h-[550px]"
      style={{
        backgroundImage: "url('/cta-back.png')" // Place your cta-bg image inside the /public folder
      }}
    >
      
      {/* Central Content Box - Perfectly Centered Over the Background Artwork */}
      <div className="flex flex-col items-center text-center w-full max-w-xl mx-auto px-6 relative z-30 pointer-events-auto">
      

        {/* Tagline "HUNGRY?" using layout's Plus Jakarta Sans */}
        <span className="text-[#5D110E] font-black text-lg sm:text-[22px] tracking-[0.25em] uppercase font-sans block mb-1">
          HUNGRY?
        </span>

        {/* Symmetrical Bold Title using layout's Inter */}
        <h2 className="font-title font-black text-5xl sm:text-6xl md:text-[68px] leading-none text-black uppercase tracking-tight mb-4">
          WE’RE READY
        </h2>

        {/* Italic Script Callout with Hand-drawn wings */}
        <div className="flex items-center gap-4 mb-6 select-none">
          {/* Left wing SVG */}
          <svg className="w-6 sm:w-10 h-2 text-[#C08A27]/60" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M40 5 L10 5 Q5 5 0 9 M40 5 L15 2" />
          </svg>
          <span className="font-sans italic font-bold text-2xl sm:text-[32px] text-[#C08A27] leading-none">
            Come and Enjoy
          </span>
          {/* Right wing SVG */}
          <svg className="w-6 sm:w-10 h-2 text-[#C08A27]/60" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M0 5 L30 5 Q35 5 40 9 M0 5 L25 2" />
          </svg>
        </div>

        {/* Subtext Paragraph using layout's Plus Jakarta Sans */}
        <p className="font-sans text-[13.5px] sm:text-[14.5px] text-stone-600 font-semibold leading-relaxed max-w-sm sm:max-w-md mb-8">
          Order your favorite meals now and enjoy fresh, flavorful food delivered fast right to your doorstep.
        </p>

        {/* Luxurious CTA Button with Inset Dashed Outline */}
        <div className="flex justify-center">
        <Link
                href="/menu"
                className="group bg-[#E94222] hover:bg-[#d14b35] text-white text-[13px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans"
              >
                <span>BOOA A TABLE</span>
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

    </section>
  );
}