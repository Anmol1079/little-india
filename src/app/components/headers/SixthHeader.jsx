"use client";

import React, { useState } from 'react';

// ==========================================
// KNIFE CONFIGURATION REGISTRY
// Switch styles easily by changing this value:
// Options: 'rusticDamascus', 'modernScandi', 'sleekClassic'
// ==========================================
const CHOSEN_STYLE = 'rusticDamascus';

const KNIFE_STYLES = {
  // Option 1: Handcrafted Single Custom Knife with Noble Wooden Handle (Unsplash)
  rusticDamascus: {
    src: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=1200&auto=format&fit=crop&q=80",
    aspectRatio: "aspect-[1000/200]",
    overlayStyles: {
      top: "6%",
      bottom: "6%",
      left: "1.5%",
      width: "65%",
      height: "88%",
    },
    clipPath: "polygon(0 0, 93.5% 0, 100% 100%, 0 100%)",
  },
  // Option 2: Modern Scandinavian Chef Knife with Minimalist Carbon Steel Blade (Unsplash)
  modernScandi: {
    src: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=1200&auto=format&fit=crop&q=80",
    aspectRatio: "aspect-[1000/190]",
    overlayStyles: {
      top: "3.5%",
      bottom: "3.5%",
      left: "1.0%",
      width: "66%",
      height: "88%",
    },
    clipPath: "polygon(0 0, 94.5% 0, 100% 100%, 0 100%)",
  },
  // Option 3: Sleek Classic Stainless Steel Cook Knife with Dark Bolster (Unsplash alternative)
  sleekClassic: {
    src: "https://images.unsplash.com/photo-1512903516382-12773959d96c?w=1200&auto=format&fit=crop&q=80",
    aspectRatio: "aspect-[1000/195]",
    overlayStyles: {
      top: "5%",
      bottom: "5%",
      left: "2.0%",
      width: "63%",
      height: "88%",
    },
    clipPath: "polygon(0 0, 92.5% 0, 100% 100%, 0 100%)",
  }
};

export default function SixthHeader() {
  const [activeTab, setActiveTab] = useState('HOME');
  const currentKnife = KNIFE_STYLES[CHOSEN_STYLE] || KNIFE_STYLES.rusticDamascus;

  const navItems = [
    { name: 'HOME', icon: 'home' },
    { name: 'MENU', icon: 'menu' },
    { name: 'RECIPES', icon: 'recipes' },
    { name: 'ABOUT', icon: 'about' },
    { name: 'EVENTS', icon: 'events' },
    { name: 'CONTACT', icon: 'contact' },
  ];

  return (
    <header className="relative w-full max-w-[1200px] mx-auto px-4 my-8">
      {/* Knife Container (Dynamic aspect ratio matching the selected knife profile) */}
      <div className={`relative w-full ${currentKnife.aspectRatio} select-none overflow-hidden drop-shadow-[0_12px_32px_rgba(0,0,0,0.08)] bg-transparent`}>
        
        {/* Real Knife Background Image */}
        <img
          src={currentKnife.src}
          alt={`${CHOSEN_STYLE} knife background`}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />

        {/* 
          Content Overlay 
          Positioned dynamically with the exact boundaries of the selected style's metal blade
        */}
        <div 
          className="absolute flex items-center"
          style={currentKnife.overlayStyles}
        >
          
          {/* 1. Left Section: Chef Hat Logo */}
          <div className="flex items-center justify-center w-[15%] h-full pl-6 pr-2">
            <div className="text-[#8c7355] transition-colors duration-300 hover:text-[#735d44]">
              <ChefHatIcon className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 lg:w-15 lg:h-15" />
            </div>
          </div>

          {/* 2. Thin Separator Line */}
          <div className="h-[35%] w-[1px] bg-[#cbc5b9] opacity-80" />

          {/* 3. Navigation Bar Container */}
          <nav className="relative flex-1 h-full flex items-center justify-between pl-4 pr-[8%] rounded-l-2xl overflow-hidden">
            
            {/* Slanted Background Layer - Blends seamlessly into the diagonal bolster edge */}
            <div 
              className="absolute inset-0 bg-[#F4F1EA]/95 z-0"
              style={{
                clipPath: currentKnife.clipPath
              }}
            />

            {/* Navigation Elements */}
            <div className="relative z-10 flex w-full h-full items-center justify-around py-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`flex flex-col items-center justify-center transition-all duration-300 relative group focus:outline-none ${
                      isActive
                        ? 'bg-white shadow-[0_3px_10px_rgba(0,0,0,0.02)] border border-[#e2ded6] rounded-xl px-4 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3'
                        : 'hover:opacity-80 px-2'
                    }`}
                  >
                    {/* Icon */}
                    {item.icon !== 'home' && (
                      <div className="mb-1 sm:mb-1.5 transition-transform duration-300 group-hover:scale-105">
                        {renderIcon(item.icon, isActive)}
                      </div>
                    )}
                    
                    {/* Text Label */}
                    <span
                      className={`text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-bold tw-[0.16em] transition-colors duration-300 ${
                        isActive ? 'text-[#2C2723]' : 'text-[#7D756D]'
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Active Underline */}
                    {isActive && (
                      <span className="w-5 sm:w-6 h-[2.5px] bg-[#bca27e] mt-1 sm:mt-1.5 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

          </nav>

        </div>
      </div>
    </header>
  );
}

// Crisp, vector-drawn icon rendering helpers
function renderIcon(iconName, isActive) {
  const strokeColor = isActive ? '#a48662' : '#7D756D';
  const strokeWidth = isActive ? "3.5" : "3";
  const sizeClasses = "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7";

  switch (iconName) {
    case 'menu':
      return (
        <svg className={sizeClasses} viewBox="0 0 100 100" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 75h70" />
          <path d="M22 62c0-20 12-28 28-28s28 8 28 28H22z" />
          <circle cx="50" cy="24" r="4.5" fill={strokeColor} />
        </svg>
      );
    case 'recipes':
      return (
        <svg className={sizeClasses} viewBox="0 0 100 100" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M25,75 L55,45" />
          <path d="M52,48 C55,42 63,35 70,42 C77,49 70,57 64,60 C58,63 55,51 52,48 Z" />
          <path d="M75,75 L51,51" />
          <path d="M48,48 C42,42 32,35 27,40 C22,45 28,55 35,60 C42,65 48,52 48,48 Z" />
          <path d="M45,45 C40,39 34,37 31,41 C28,45 35,51 40,55" />
        </svg>
      );
    case 'about':
      return (
        <svg className={sizeClasses} viewBox="0 0 100 100" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M50,80 L50,42" />
          <path d="M50,42 C46,31 46,20 50,15 C54,20 54,31 50,42 Z" />
          <path d="M50,56 C39,51 31,53 27,61 C35,67 44,63 50,56 Z" />
          <path d="M50,56 C61,51 69,53 73,61 C65,67 56,63 50,56 Z" />
        </svg>
      );
    case 'events':
      return (
        <svg className={sizeClasses} viewBox="0 0 100 100" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <rect x="30" y="25" width="40" height="55" rx="4" />
          <path d="M38,17 L38,28" />
          <path d="M50,17 L50,28" />
          <path d="M62,17 L62,28" />
          <path d="M42,42 L58,42" />
          <path d="M42,53 L58,53" />
          <path d="M42,64 L52,64" />
        </svg>
      );
    case 'contact':
      return (
        <svg className={sizeClasses} viewBox="0 0 100 100" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <rect x="23" y="28" width="54" height="42" rx="4" />
          <path d="M23,32 L50,52 L77,32" />
        </svg>
      );
    default:
      return null;
  }
}

function ChefHatIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M30,53 C21,48 21,33 32,30 C29,18 44,13 50,20 C56,13 71,18 68,30 C79,33 79,48 70,53" 
        stroke="currentColor" 
        strokeWidth="3.2"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path d="M29,53 L71,53" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M33,53 L33,67 C33,70 36,72 39,72 L61,72 C64,72 67,70 67,67 L67,53" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38,60 L62,60" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}