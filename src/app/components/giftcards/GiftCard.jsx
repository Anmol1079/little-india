"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '../common/SectionHeader';

// Defined animation variants to prevent undefined reference errors
const revealContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function GiftCard() {
  return (
    <>
      {/* Load fonts directly to ensure they render identical to the mockup */}
      
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&display=swap" 
      />

      <style dangerouslySetInnerHTML={{__html: `

        .font-great-vibes { font-family: 'Great Vibes', cursive; }

      `}} />

      {/* Main container with 690px fixed desktop height */}
      <div className="w-full max-w-[1500px] mx-auto flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-xl h-auto lg:h-[710px] bg-[#FAF6F0] border border-stone-200/80">
        
        {/* Left Column (Maintains the exact 812px wide aspect-ratio to show the background image fully) */}
        <div 
          className="relative w-full lg:w-[812px] lg:shrink-0 h-[520px] lg:h-full bg-cover bg-center flex flex-col justify-end p-8 pb-12 lg:p-12 lg:pb-16"
          style={{ backgroundImage: "url('gift-card/giftcard.png')" }}
        >
          {/* Gradient overlay for background contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Text block grouped compactly at the bottom on the red fabric */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-4 mt-auto">
            <span className="text-white/90 text-xs tw-[0.25em] font-medium up drop-shadow-sm">
              Send a Gift Card to Your
            </span>
            
            {/* Elegant divider and script text */}
            <div className="flex items-center justify-center w-full max-w-[300px] md:max-w-[360px] mx-auto">
              <div className="flex-1 h-[1px] bg-[#C59B27]/70" />
              <span className="text-[#E5C158] mx-3 text-[10px] select-none">✦</span>
              <span className="font-great-vibes text-4xl md:text-[46px] text-[#E5C158] leading-none drop-shadow-md select-none">
                Loved Ones
              </span>
              <span className="text-[#E5C158] mx-3 text-[10px] select-none">✦</span>
              <div className="flex-1 h-[1px] bg-[#C59B27]/70" />
            </div>
          </div>
        </div>

        {/* Right Column (Vertically centered layout to cleanly manage the space) */}
        <div className="flex-1 bg-white p-8 md:p-14 lg:px-14 xl:px-20 flex flex-col justify-center relative overflow-hidden h-full">
          
          {/* Bottom-left beige diagonal decorative background block */}
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#EFE7D8]/60 transform -rotate-45 translate-y-12 -translate-x-12 pointer-events-none" />

          {/* Subtle top-right watermark */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.02] pointer-events-none transform translate-x-10 -translate-y-10">
            <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#8A151A]">
              <path d="M50 0 C60 20, 80 20, 100 50 C80 80, 60 80, 50 100 C40 80, 20 80, 0 50 C20 20, 40 20, 50 0 Z" />
            </svg>
          </div>

          <div className="relative z-10 w-full">
            
            <SectionHeader
              as="h1"
              align="center"
              theme="light"
              label="Little India"
              title="Gift Cards"
              className="mb-6 lg:mb-8"
              titleClassName="sm:text-[55px] lg:text-[55px]"
            />

            {/* Main Copy Content */}
            <div className="space-y-5 text-[18px] md:text-[16px] lg:text-[16px] text-[#4A4A4A] leading-7 max-w-[620px] mx-auto text-left">
              <p className="font-normal">
                Give the gift of authentic Indian flavors with a Little India Gift Card! Whether for a birthday, anniversary, holiday or to show appreciation, our gift cards are the perfect way to share a delicious dining experience.
              </p>
              <p className="font-normal">
                With a Little India Gift Card, your friends and family can enjoy a variety of flavorful dishes, from rich curries to sizzling tandoori specialties. Our menu features fresh, high-quality ingredients, bringing the true essence of Indian cuisine to every meal.
              </p>
              <p className="font-normal">
                Easy to purchase and redeem, our gift cards are a thoughtful and convenient way to treat someone to a memorable dining experience.
              </p>
              <p className="pt-2 font-normal">
                Let them discover the vibrant <span className="text-[#8A151A] font-bold">flavors of India</span> at one of Denver's <span className="text-[#8A151A] font-bold">finest Indian restaurants!</span>
              </p>

              {/* Red Send Now Button */}
              <div className="pt-5 flex justify-evenly">
              <Link
              href="#"
              className="group w-full sm:w-auto bg-[#E94222] hover:bg-[#d14b35] text-white text-[13px] font-bold twst px-8 py-4 rounded-full inline-flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md"
            >
              <span>SEND NOW</span>
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

      </div>
    </>
  );
}