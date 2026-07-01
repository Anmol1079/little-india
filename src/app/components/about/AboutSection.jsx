"use client";

import React from 'react';
import Link from 'next/link';

// Fully updated with mouthwatering, high-resolution Indian cuisine assets
const CARDS_DATA = [
    {
      metric: "80+",
      label: "Seasonal Flavors",
      imgSrc: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=600",
      alt: "Delicate salmon nigiri close-up"
    },
    {
      metric: "120+",
      label: "Healthy Options",
      imgSrc: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600",
      alt: "Signature sushi roll topped with orange caviar"
    },
    {
      metric: "96%",
      label: "Positive Reviews",
      imgSrc: "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&q=80&w=600",
      alt: "Beautiful sliced seared tuna sashimi"
    },
    {
      metric: "12+",
      label: "Years Experience",
      imgSrc: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&q=80&w=600",
      alt: "Sushi piece being held with wooden chopsticks"
    }
  ];

export default function AboutSection() {
  return (
    <section className="w-full bg-[#ffffff] py-20 px-6 md:px-12 lg:px-20 select-none">
      <div className="max-w-[1500px] mx-auto flex flex-col items-center">
        
        {/* Centered Standardized Header Wrapper */}
        <div className="w-full pb-16">
          <div className="flex flex-col items-center text-center max-w-[1400px] mx-auto">
            
            {/* Tagline: Bold, tracked out, uppercase orange using layout's Plus Jakarta Sans */}
            <span className="text-[#E65C38] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase font-sans block mb-5">
              Who We Are
            </span>

            {/* Main Title: Heavy, large, dark, uppercase using layout's Inter */}
            <h2 className="font-title font-black text-[50px] sm:text-[60px] md:text-[60px] lg:text-[60px] text-stone-950 tracking-tight leading-none uppercase mb-10">
              About Us
            </h2>
            
            {/* Balanced editorial layout for the three paragraphs using layout's Plus Jakarta Sans */}
            <div className="flex flex-col gap-5 max-w-5xl mx-auto px-2">
              {/* Highlight Intro Statement */}
              <p className="font-sans text-stone-800 text-[18px] sm:text-[19px] lg:text-[21px] font-semibold leading-relaxed tracking-wide">
                One World Cuisine LLC DBA Little India Restaurant and Bar is one of the most authentic Indian restaurants in Denver, Colorado. Since 2010, we have proudly served the best Indian food in Denver, made with carefully selected Indian spices and ingredients sourced locally, in-house, or imported directly from India.
              </p>
              {/* Secondary Details */}
              <p className="font-sans text-stone-800 text-[18px] sm:text-[19px] lg:text-[21px] font-semibold leading-relaxed tracking-wide">
                Ranked among the top Indian restaurants in the Denver metro area, Little India Denver offers an exceptional dining experience with traditional North Indian recipes crafted by experienced chefs. Our menu features fresh, gluten-free, and vegan-friendly options prepared with minimal oil and no baking soda, ensuring delicious, healthy meals.
              </p>
            </div>

          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-14">
          {CARDS_DATA.map((card, idx) => (
            <div 
              key={idx} 
              className="relative aspect-[4/5] rounded-[20px] overflow-hidden group shadow-[0_12px_32px_rgba(0,0,0,0.04)] border border-stone-100"
            >
              {/* High performance smooth zoom on hover */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={card.imgSrc} 
                  alt={card.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>

              {/* Smooth linear gradient overlay at the bottom for high contrast text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent z-10" />

              {/* Metrics & labels overlaid at the bottom using standard layout fonts */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-left">
                {/* Metrics using layout's Inter */}
                <h3 className="font-title font-extrabold text-white text-[42px] leading-none mb-1.5">
                  {card.metric}
                </h3>
                {/* Labels using layout's Plus Jakarta Sans */}
                <p className="font-sans text-stone-200 text-[14.5px] font-medium tracking-wide">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
        <Link
                href="/menu"
                className="group bg-[#E94222] hover:bg-[#d14b35] text-white text-[13px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans"
              >
                <span>KNOW MORE</span>
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