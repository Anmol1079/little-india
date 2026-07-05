'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const LOCATIONS = [
  {
    id: 'lakewood',
    neighborhood: 'LAKEWOOD',
    opened: 'Open since 1998',
    tagline: 'Savour Taste Of Tradition',
    description: "Authentic Indian cuisine, thoughtfully crafted with time-honored traditions, heartfelt passion, and the finest handpicked ingredients. Each dish is a celebration of rich heritage, where aromatic spices, vibrant flavors, and meticulous preparation come together to create a truly immersive culinary experience. From the warmth of our hospitality to the depth of every bite, we invite you to indulge in a journey.",
    address: '425 South Teller Street, Lakewood, Colorado',
    phone: '+1 303-937-9777',
    email: 'info@littleindiadenvercolorado.com',
    hours: 'Monday - Sunday ( 11:00 AM - 9:30 PM )',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80', // Cozy ambient dining tables
    visitUrl: '#',
    directionsUrl: '#',
    orderUrl: '#'
  }
];

// Stateful Stacking Card
function LocationStackCard({ loc, index, isMobile, isOpenNow }) {
  const cardRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  // Set up useScroll on the card element relative to the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 100px", "end start"]
  });

  // Calculate scaling and brightness using transform
  const scaleValue = useTransform(scrollYProgress, [0, 0.5], [1, 0.94]);
  const brightnessValue = useTransform(scrollYProgress, [0, 0.5], [1, 0.88]);
  const filterValue = useTransform(brightnessValue, (b) => `brightness(${b})`);

  // Fallback values on mobile
  const scale = isMobile ? 1 : scaleValue;
  const filter = isMobile ? 'none' : filterValue;

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
              scale: scale,
              filter: filter,
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
            <span className="text-[15px] font-semibold upp tracking-wider font-sans-custom text-stone-500">Image Unavailable</span>
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

        <div className="absolute top-6 left-6 z-20 bg-stone-900/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[15px] font-semibold tracking-wider brand-lab-text font-sans-custom">
          {loc.opened}
        </div>
      </div>

      {/* Right Column: Content Area */}
      <div className="md:col-span-6 flex flex-col justify-center px-6 sm:px-10 md:px-12 py-8 md:py-8 gap-6 bg-[#fff6ea] h-auto md:h-full md:overflow-y-auto">
        
        {/* Title & Tagline */}
        <div className="space-y-3">
          {/* <div className="flex items-center gap-1.5 text-[15px] font-medium tracking-wide font-sans-custom">
            <span className={`inline-block w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-red-600'}`}></span>
            <span className={isOpenNow ? 'text-emerald-600' : 'text-red-600'}>
              {isOpenNow ? 'Open Now' : 'Closed'}
            </span>
          </div> */}
          <h3 className="font-heavy text-[28px] sm:text-3xl md:text-4xl text-stone-950 leading-tight tracking-tight font-black">
            {loc.tagline}
          </h3>
          <p className="font-sans text-[16px] md:text-[16px] text-stone-500 font-semibold leading-relaxed">
            {loc.description}
          </p>
        </div>

        {/* Contact Details Stack */}
        <div className="flex flex-col gap-4 text-sm font-bold text-stone-850">
          
          {/* Address */}
          <div className="flex items-center gap-3.5">
            <svg className="w-5 h-5 text-[#E94222] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-sans font-bold text-stone-850">{loc.address}</span>
          </div>
          
          {/* Phone */}
          <div className="flex items-center gap-3.5">
            <svg className="w-5 h-5 text-[#E94222] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-sans font-bold text-stone-850">{loc.phone}</span>
          </div>

          {loc.email && (
            <div className="flex items-center gap-3.5">
              <svg className="w-5 h-5 text-[#E94222] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="font-sans font-bold text-stone-850 break-all">{loc.email}</span>
            </div>
          )}

          <div className="flex items-center gap-3.5 text-sm font-bold text-stone-850">
            <svg className="w-5 h-5 text-[#E94222] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-sans font-bold text-stone-850">{loc.hours}</span>
          </div>

        </div>

        {/* Operating Hours Block */}
        {/* <div className="flex flex-col gap-2 pt-2 border-t border-stone-100">
          <div className="text-[15px] font-black tracking-widest text-stone-950 upp">
            Operating Hours
          </div>
          <div className="flex items-center gap-3.5 text-sm font-bold text-stone-900">
            <svg className="w-5 h-5 text-[#E94222] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-sans font-bold text-stone-850">{loc.hours}</span>
          </div>
        </div> */}

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-6 pt-4 border-t border-gray-200">
          
          {/* Know More Pill Button */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex justify-center"
          >
            <Link
              href="/menu"
              className="w-full sm:w-fits group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold tracking-widest px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors duration-200 font-sans shadow-md"
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
          
          {/* Quick Links */}
          <div className="font-sans flex items-center gap-4 text-[15px] font-extrabold text-stone-500 pl-4 sm:pl-0">
            <a href={loc.visitUrl} className="hover:text-[#E94222] transition-colors flex items-center gap-1 group upp">
              VISIT PAGE <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <span className="text-stone-200">|</span>
            <a href={loc.directionsUrl} className="hover:text-[#E94222] transition-colors flex items-center gap-1 group upp">
              DIRECTIONS <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default function LocationsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

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

      // Monday - Sunday 11:00 AM - 9:30 PM (11 to 21.5 decimal hours)
      setIsOpenNow(decimalTime >= 11 && decimalTime < 21.5);
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
          className="text-center mb-16 d-flex flex-column align-items-center justify-center"
        >
           <div className="flex flex-col items-center mb-4">
            <span className="text-[#E65C38] font-bold text-[15px] tracking-widest upp font-sans-custom block">
              Find Us
            </span>
          </div>

          <div className="flex items-center space-x-2 md:space-x-3 mt-1 justify-center">
            <h2 className="font-heavy font-black text-[40px] sm:text-[60px] text-stone-950 upp leading-[0.95] tracking-[0.01rem]">
             Restaurant Location
            </h2>
          </div>
          <p className="text-[16px] md:text-[18px] text-stone-500 font-semibold font-sans-custom mt-4 leading-relaxed max-w-7xl">
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
              isMobile={isMobile}
              isOpenNow={isOpenNow}
            />
          ))}
        </div>
      </div>
    </section>
  );
}