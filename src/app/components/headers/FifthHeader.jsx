'use client';

import React, { useState } from 'react';

// --- Minimalist SVG Icons Replicated from Screenshot ---

const LogoIcon = () => (
  <svg 
    className="w-7 h-7 text-[#a38c6b]" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2"
  >
    {/* Stylized dome logo */}
    <path d="M6 15c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5v1H6v-1z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 18h8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MenuIcon = ({ active }) => (
  <svg 
    className={`w-5 h-5 transition-colors duration-300 ${
      active ? 'text-[#a68658]' : 'text-stone-400 group-hover:text-stone-700'
    }`} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2"
  >
    {/* Simple dome/cloche */}
    <path d="M6 15a6 6 0 0 1 12 0" strokeLinecap="round" />
    <path d="M5 17h14" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="8" r="1" />
  </svg>
);

const RecipesIcon = ({ active }) => (
  <svg 
    className={`w-5 h-5 transition-colors duration-300 ${
      active ? 'text-[#a68658]' : 'text-stone-400 group-hover:text-stone-700'
    }`} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2"
  >
    {/* Minimalist crossed utensils */}
    <path d="M6 18l5-5M18 18l-5-5" strokeLinecap="round" />
    <path d="M5 5c-1 1-.5 2.5.5 3.5s2.5 1 3.5 0 .5-2.5-.5-3.5-2.5-1-3.5 0z" />
    <path d="M19 5c1-1 2.5-1 3.5 0s1 2.5 0 3.5-2.5.5-3.5-.5-1-2.5 0-3.5z" />
  </svg>
);

const AboutIcon = ({ active }) => (
  <svg 
    className={`w-5 h-5 transition-colors duration-300 ${
      active ? 'text-[#a68658]' : 'text-stone-400 group-hover:text-stone-700'
    }`} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2"
  >
    {/* Minimalist vertical stem-and-loop leaf sprout */}
    <path d="M12 4v16" strokeLinecap="round" />
    <path d="M8 12c0-1.5 1.5-2.5 4-2.5s4 1 4 2.5-1.5 2.5-4 2.5-4-1-4-2.5z" strokeLinecap="round" />
  </svg>
);

const EventsIcon = ({ active }) => (
  <svg 
    className={`w-5 h-5 transition-colors duration-300 ${
      active ? 'text-[#a68658]' : 'text-stone-400 group-hover:text-stone-700'
    }`} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2"
  >
    {/* Simple binder/notepad */}
    <rect x="7" y="7" width="10" height="11" rx="1" />
    <path d="M10 4v3M14 4v3" strokeLinecap="round" />
  </svg>
);

const ContactIcon = ({ active }) => (
  <svg 
    className={`w-5 h-5 transition-colors duration-300 ${
      active ? 'text-[#a68658]' : 'text-stone-400 group-hover:text-stone-700'
    }`} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2"
  >
    {/* Wide clean envelope */}
    <rect x="5" y="8" width="14" height="9" rx="1" />
    <path d="M5 10l7 3.5 7-3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function FifthHeader() {
  const [activeTab, setActiveTab] = useState('contact'); // Matches the selected state in your screenshot

  const navItems = [
    { id: 'home', label: 'HOME', icon: null },
    { id: 'menu', label: 'MENU', icon: MenuIcon },
    { id: 'recipes', label: 'RECIPES', icon: RecipesIcon },
    { id: 'about', label: 'ABOUT', icon: AboutIcon },
    { id: 'events', label: 'EVENTS', icon: EventsIcon },
    { id: 'contact', label: 'CONTACT', icon: ContactIcon },
  ];

  return (
    <div className="w-full bg-[#f5f3ef] py-12 px-4 flex justify-center items-center">
      {/* Horizontal Scroll safety container for small screens */}
      <div className="w-full max-w-6xl overflow-x-auto scrollbar-none py-2">
        
        {/* Knife Navigation Wrapper */}
        <div className="relative w-full aspect-[1012/158] min-w-[950px] select-none font-sans">
          
          {/* 1. Underlying Knife Image (Includes the background padding) */}
          <img 
            src="/knife-1.png" 
            alt="Knife Backdrop" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* 
            2. Calibrated Overlay Layer
            - top-[14%] bottom-[14%]: Limits the height to the exact metallic edges of the blade
            - right-[28.5%]: Ends right before the slanted bolster to prevent collision
          */}
          <div className="absolute top-[14%] bottom-[14%] left-0 right-[28.5%] flex items-center pl-[5.5%] pr-[1.5%] z-20">
            
            {/* Logo Section */}
            <div className="flex items-center gap-4 shrink-0">
              <LogoIcon />
              {/* Vertical Divider line */}
              <div className="h-8 w-[1px] bg-stone-300/40" />
            </div>

            {/* Interactive Menu Items */}
            <div className="flex-1 flex items-stretch justify-around h-full py-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                const IconComponent = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`group relative flex flex-col items-center justify-center min-w-[95px] px-2 h-full rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-stone-200/40' 
                        : 'hover:bg-white/20'
                    }`}
                  >
                    {IconComponent && <IconComponent active={isActive} />}
                    
                    <span className={`tw-[0.25em] text-[10px] font-semibold transition-colors duration-300 ${
                      IconComponent ? 'mt-1.5' : 'mt-0'
                    } ${
                      isActive ? 'text-stone-800' : 'text-stone-400 group-hover:text-stone-700'
                    }`}>
                      {item.label}
                    </span>

                    {/* Gold Accent Bar */}
                    {isActive && (
                      <div className="absolute bottom-2 w-6 h-[2px] bg-[#a68658] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}