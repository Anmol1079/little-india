"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LOCATIONS = [
  {
    id: 'west-highlands',
    neighborhood: 'WEST HIGHLANDS',
    opened: 'Open since 2017',
    tagline: 'The first dining room',
    description: "Where the menu was born. A small, lamp-lit room on West 38th with a tandoor that hasn't cooled since 2017. Walk-ins always welcome.",
    address: '3157 W 38th Ave, Denver',
    phone: '(303) 455-3127',
    hours: 'Daily 11:00 AM – 9:30 PM',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80', // Cozy ambient dining tables
    visitUrl: '#',
    directionsUrl: '#',
    orderUrl: '#'
  },
  // {
  //   id: 'bluebird-district',
  //   neighborhood: 'BLUEBIRD DISTRICT',
  //   opened: 'Open since 2022',
  //   tagline: 'Across from the theater',
  //   description: "A taller room on East Colfax, with a full bar and a view of the Bluebird's marquee through the front windows. Walk-ins at the bar, two-tops in the window.",
  //   address: '3100 E Colfax Ave, Denver',
  //   phone: '(303) 285-3700',
  //   hours: 'Daily 11:00 AM – 9:30 PM',
  //   image: 'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?w=800&auto=format&fit=crop&q=80', // Elegant taller bar and pub area
  //   visitUrl: '#',
  //   directionsUrl: '#',
  //   orderUrl: '#'
  // },
  // {
  //   id: 'south-denver',
  //   neighborhood: 'SOUTH DENVER',
  //   opened: 'Open since 2023',
  //   tagline: 'South Indian under one roof',
  //   description: "The newest room, and the only one serving fresh dosa and idli alongside the full menu. Family-sized booths, tap beer, a quieter pace.",
  //   address: '7355 Ralston Rd Unit H, Arvada',
  //   phone: '(303) 558-0992',
  //   hours: 'Daily 11:00 AM – 9:30 PM',
  //   image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80', // Modern, open space dining layout
  //   visitUrl: '#',
  //   directionsUrl: '#',
  //   orderUrl: '#'
  // }
];

// Stateful Stacking Card with Montserrat + Anton typography
function LocationStackCard({ loc, index, isOpenNow, isMobile }) {
  const cardRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [brightness, setBrightness] = useState(1);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // If we are on mobile, do not run the sticky scroll scaling calculations
    if (isMobile) {
      setScale(1);
      setBrightness(1);
      return;
    }

    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const stickyTop = 100 + index * 32; 
      
      const scrolledPast = stickyTop - rect.top;
      
      if (scrolledPast > 0) {
        const factor = Math.min(1, scrolledPast / 400);
        setScale(1 - factor * 0.06); 
        setBrightness(1 - factor * 0.12);
      } else {
        setScale(1);
        setBrightness(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [index, isMobile]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative md:sticky w-full h-auto md:h-[500px] lg:h-[520px] rounded-[32px] overflow-hidden border border-stone-200/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.09)] transition-all duration-300 ease-out grid grid-cols-1 md:grid-cols-12 bg-white"
      style={
        isMobile
          ? {} // No custom top offsets, scales, or filters applied on mobile
          : {
              top: `${100 + index * 32}px`,
              transform: `scale(${scale})`,
              filter: `brightness(${brightness})`,
              transformOrigin: 'top center',
            }
      }
    >
      {/* Left Column: Image Area */}
      <div className="md:col-span-6 relative w-full h-[220px] md:h-full overflow-hidden group bg-stone-100">
        <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />

        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-200 text-stone-400 p-4">
            <svg className="w-12 h-12 mb-2 stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider font-sans-custom text-stone-500">Image Unavailable</span>
          </div>
        ) : (
          <img
            src={loc.image}
            alt={loc.neighborhood}
            onError={() => setImageError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 z-0"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        )}

        <div className="absolute top-6 left-6 z-20 bg-stone-900/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-wider brand-lab-text font-sans-custom">
          {loc.opened}
        </div>
      </div>

      {/* Right Column: Content Area */}
      <div className="md:col-span-6 flex flex-col justify-center px-6 sm:px-10 md:px-12 py-6 md:py-8 gap-5 bg-[#FAEBD4] h-auto md:h-full md:overflow-y-auto">
        <div className="flex items-center gap-3">
          <span className="text-[#e75b44] text-xs font-bold tracking-widest uppercase font-sans-custom">
            {loc.neighborhood}
          </span>
          <span className="text-stone-300">|</span>
          <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide font-sans-custom">
            <span className={`inline-block w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-red-600'}`}></span>
            <span className={isOpenNow ? 'text-emerald-600' : 'text-red-600'}>
              {isOpenNow ? 'Open Now' : 'Closed'}
            </span>
          </div>
        </div>

        <h3 className="font-heavy text-3xl sm:text-4xl text-stone-950 uppercase leading-[0.95] tracking-[0.01rem]">
          {loc.tagline}
        </h3>

        <p className="font-sans-custom text-[14px] text-stone-500 font-semibold leading-relaxed">
          {loc.description}
        </p>

        <div className="font-sans-custom flex flex-col gap-3.5 pt-2 border-t border-stone-100 text-[13px] font-bold text-stone-800">
          <div className="flex items-start gap-3.5">
            <svg className="w-5 h-5 text-[#e75b44] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{loc.address}</span>
          </div>
          
          <div className="flex items-start gap-3.5">
            <svg className="w-5 h-5 text-[#e75b44] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{loc.phone}</span>
          </div>

          <div className="flex items-start gap-3.5">
            <svg className="w-5 h-5 text-[#e75b44] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{loc.hours}</span>
          </div>
        </div>

        {/* Outer alignment container */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-2">
           <motion.div 
             whileHover={{ scale: 1.03 }}
             whileTap={{ scale: 0.98 }}
             className="flex justify-center"
           >
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

           </motion.div>
          
          {/* Modified links alignment: added left padding 'pl-5' and increased spacing to 'gap-5' on mobile only */}
          <div className="font-sans-custom flex items-center gap-5 text-xs font-bold text-stone-500 pl-5 sm:pl-0">
            <a href={loc.visitUrl} className="hover:text-[#e75b44] transition-colors flex items-center gap-1 group uppercase">
              VISIT PAGE <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <span className="text-stone-200">|</span>
            <a href={loc.directionsUrl} className="hover:text-[#e75b44] transition-colors flex items-center gap-1 group uppercase">
              DIRECTIONS <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function LocationsSection() {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Determine screen size to conditionalize layouts
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const checkOpenStatus = () => {
      const denverTime = new Date().toLocaleString("en-US", { timeZone: "America/Denver" });
      const currentHour = new Date(denverTime).getHours();
      const currentMinutes = new Date(denverTime).getMinutes() / 60;
      const decimalTime = currentHour + currentMinutes;

      if (decimalTime >= 11 && decimalTime < 21.5) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="w-full bg-white text-stone-800 py-16 px-4 md:px-8 xl:px-16 font-sans overflow-visible">
      <style dangerouslySetInnerHTML={{ __html: `
        .brand-lab-text { color: #e75b44; }
        .brand-lab-border { border-color: #e75b44; }
        .brand-lab-bg { background-color: #e75b44; }
      ` }} />

      <div className="max-w-[1500px] mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 d-flex flex-column align-items-center justify-center"
        >
           <div className="flex flex-col items-start mb-4">
            <span className="text-[#E65C38] font-bold text-xs tracking-widest uppercase font-sans-custom block">
              Find Us
            </span>
          </div>

          <div className="flex items-baseline space-x-2 md:space-x-3 mt-1">
            <h2 className="font-heavy font-black text-[45px] sm:text-[60px] text-stone-950 uppercase leading-[0.95] tracking-[0.01rem]">
             Retaurant Location
            </h2>
          </div>
          <p className="text-[13.5px] sm:text-sm text-stone-500 font-semibold font-sans-custom mt-4 leading-relaxed max-w-7xl">
            Order online, reserve a table, or surprise someone special with a gift card. 
            Find an Indian restaurant near you or explore Indian food near you.
          </p>
        </motion.div>

        {/* Stacking Location Cards Deck Container */}
        <div className="relative z-10 w-full flex flex-col gap-12">
          {LOCATIONS.map((loc, index) => (
            <LocationStackCard 
              key={loc.id} 
              loc={loc} 
              index={index} 
              isOpenNow={isOpenNow} 
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}