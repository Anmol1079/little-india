"use client";

import React, { useState } from 'react';

export default function SpecialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { number: '1.', text: 'SPECIAL LUNCH BUFFET' },
    { number: '2.', text: 'APPETITE' },
    { number: '3.', text: 'TANDOORI SPECIAL' },
    { number: '4.', text: 'SPECIALITY ENTREES' },
  ];

  // High-fidelity food imagery matching the menu item descriptions
  const foodImages = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', // Seafood salad with orange & fresh herbs
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', // Premium gourmet steak / dark plate layout
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80', // Epic rustic food feast with mushroom soup tones
    'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&w=800&q=80', // Glossy gourmet pasta with spinach greens
  ];

  // Enhanced stacked configurations for a natural, overlapping polaroid fan arrangement
  const cardConfigs = [
    // When Menu Item 0 is active
    [
      { zIndex: 'z-30', rotate: '-6deg', x: '-20px', y: '-10px', scale: 'scale-100', opacity: 'opacity-100' },
      { zIndex: 'z-20', rotate: '6deg', x: '30px', y: '15px', scale: 'scale-[0.96]', opacity: 'opacity-90' },
      { zIndex: 'z-10', rotate: '12deg', x: '65px', y: '30px', scale: 'scale-[0.92]', opacity: 'opacity-80' },
      { zIndex: 'z-5', rotate: '18deg', x: '95px', y: '45px', scale: 'scale-[0.88]', opacity: 'opacity-70' }
    ],
    // When Menu Item 1 is active
    [
      { zIndex: 'z-10', rotate: '-12deg', x: '-60px', y: '20px', scale: 'scale-[0.92]', opacity: 'opacity-80' },
      { zIndex: 'z-30', rotate: '-3deg', x: '10px', y: '-10px', scale: 'scale-100', opacity: 'opacity-100' },
      { zIndex: 'z-20', rotate: '8deg', x: '40px', y: '15px', scale: 'scale-[0.96]', opacity: 'opacity-90' },
      { zIndex: 'z-5', rotate: '15deg', x: '80px', y: '35px', scale: 'scale-[0.88]', opacity: 'opacity-75' }
    ],
    // When Menu Item 2 is active
    [
      { zIndex: 'z-5', rotate: '-18deg', x: '-100px', y: '30px', scale: 'scale-[0.88]', opacity: 'opacity-70' },
      { zIndex: 'z-10', rotate: '-10deg', x: '-50px', y: '15px', scale: 'scale-[0.92]', opacity: 'opacity-80' },
      { zIndex: 'z-30', rotate: '3deg', x: '15px', y: '-15px', scale: 'scale-100', opacity: 'opacity-100' },
      { zIndex: 'z-20', rotate: '10deg', x: '45px', y: '10px', scale: 'scale-[0.96]', opacity: 'opacity-90' }
    ],
    // When Menu Item 3 is active
    [
      { zIndex: 'z-5', rotate: '-22deg', x: '-130px', y: '40px', scale: 'scale-[0.85]', opacity: 'opacity-65' },
      { zIndex: 'z-10', rotate: '-15deg', x: '-80px', y: '25px', scale: 'scale-[0.88]', opacity: 'opacity-75' },
      { zIndex: 'z-20', rotate: '-8deg', x: '-30px', y: '10px', scale: 'scale-[0.92]', opacity: 'opacity-90' },
      { zIndex: 'z-30', rotate: '5deg', x: '20px', y: '-20px', scale: 'scale-100', opacity: 'opacity-100' }
    ]
  ];

  return (
    /* Full-width outer section containing background color */
    <section className="w-full bg-[#F2F2F2] text-[#0B0C0E] font-sans relative overflow-hidden select-none">
      
      {/* Custom Stylesheet */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      ` }} />

      {/* Centered container with max-width limits */}
      <div className="max-w-[1500px] mx-auto px-4 min-h-screen flex flex-col justify-between pt-16 pb-16">
        
        {/* 1. ASYMMETRICAL HEADER WITH DESCRIPTION */}
        <header className="w-full flex justify-between items-start px-6 md:px-16 py-6 md:py-8 border-b border-neutral-200/60 font-sans-custom">
          
          {/* Left Side: Bold 'Special Dishes' Title & Description */}
          <div className="flex flex-col group cursor-pointer max-w-[240px] sm:max-w-[1400px] md:max-w-[1500px]">
            <div className="flex items-baseline space-x-2 md:space-x-3">
              <h1 className="font-impact text-[60px] sm:text-[60px] md:text-[60px] text-[#0B0C0E] tracking-tight leading-none transition-colors duration-300 group-hover:text-[#E65C38]">
                SPECIAL DISHES
              </h1>
             
            </div>
            <p className="text-[16px] md:text-[16px] text-[#0B0C0E]/60 tracking-wider font-sans-custom mt-2 leading-relaxed font-semibold">
              A curated selection of our chef&apos;s signature recipes, blending traditional culinary heritage with contemporary flair.
            </p>
          </div>

        </header>

        {/* 2. MAIN CONTENT BODY */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 items-center px-6 md:px-16 py-12">
          
          {/* Left Side: Dynamic Menu List */}
          <div className="md:col-span-6 flex flex-col justify-center space-y-4 lg:space-y-6">
            {menuItems.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className="group flex items-center cursor-pointer transition-all duration-300 mb-[50px]"
                >
                  {/* Text Layout */}
                  <h2
                    className={`font-impact text-[3rem] sm:text-[3rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem] leading-none tracking-wide uppercase transition-colors duration-300 ${
                      isActive ? 'text-[#E65C38]' : 'text-[#0B0C0E]'
                    }`}
                  >
                    <span className="inline-block mr-4">{item.number}</span>
                    {item.text}
                  </h2>

                  {/* Smooth Sliding Active Arrow */}
                  <span
                    className={`text-2xl sm:text-3xl md:text-4xl text-[#E65C38] font-bold ml-6 transition-all duration-500 transform ${
                      isActive 
                        ? 'opacity-100 translate-x-2 scale-105' 
                        : 'opacity-0 -translate-x-4 scale-75 pointer-events-none'
                    }`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    →
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Side: Enhanced Oversized Stacking Card Deck */}
          <div className="md:col-span-6 flex justify-center items-center relative min-h-[480px] lg:min-h-[640px] xl:min-h-[700px] animate-float">
            <div className="relative w-[280px] h-[370px] sm:w-[340px] sm:h-[500px] lg:w-[470px] lg:h-[525px] xl:w-[470px] xl:h-[600px]">
              {foodImages.map((src, idx) => {
                const currentConfig = cardConfigs[activeIndex][idx];

                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 bg-white p-3 sm:p-4 lg:p-5 pb-8 sm:pb-12 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-black/5 transition-all duration-[800ms] ${currentConfig.zIndex} ${currentConfig.scale} ${currentConfig.opacity}`}
                    style={{
                      transform: `rotate(${currentConfig.rotate}) translate(${currentConfig.x}, ${currentConfig.y})`,
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {/* Image container replicating the white frame layout */}
                    <div className="w-full h-full relative overflow-hidden rounded-xl bg-stone-100">
                      <img
                        src={src}
                        alt={`Food item ${idx + 1}`}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}