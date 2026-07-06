'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Framer Motion Animation Variants
const cardContainerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // Custom premium easeOut
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const childElementVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const innerGridVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ContactSection() {
  return (
    <section className="w-full bg-[#FDFBF7] py-16 px-0 md:px-12 lg:px-20 text-[#0B0C0E] overflow-hidden">
      
      {/* 1. Rounded-Frame Background Image Container */}
      <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] min-h-[680px] lg:min-h-[750px] flex items-center justify-start">
        
        {/* Animated background image */}
        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/get-in-touch.jpg"
            alt="Gourmet food background"
            fill
            priority
            className="object-cover pointer-events-none"
          />
        </motion.div>

        {/* Soft atmospheric overlay */}
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />

        {/* 2. Overlapping Cream Card with Framer Motion Staggered Entrances */}
        <div className="w-full lg:w-[62%] p-4 sm:p-6 md:p-10 lg:p-12 flex items-center justify-start z-10">
          
          <motion.div 
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="bg-[#FDFBF7] rounded-[2rem] p-6 sm:p-10 md:p-12 w-full shadow-[0_15px_60px_rgba(0,0,0,0.04)] border border-stone-200/35"
          >
            {/* Tagline */}
            <motion.span 
              variants={childElementVariants}
              className="text-[#E65C38] font-bold text-[15px] twst upp font-sans block mb-3.5"
            >
              Get in Touch
            </motion.span>

            {/* Editorial Headline */}
            <motion.h2 
              variants={childElementVariants}
              className="font-title font-black text-4xl sm:text-[46px] md:text-[50px] text-stone-950 leading-[1.1] mb-3.5 tw-tight"
            >
             Best Indian Restaurant in Denver
            </motion.h2>

            {/* Subtext description */}
            <motion.p 
              variants={childElementVariants}
              className="font-sans text-[16px] sm:text-[16px] text-stone-500 font-semibold mb-8 max-w-xl leading-relaxed"
            >
              Our dishes are made with only fresh and local ingredients.
            </motion.p>

            {/* Inner Cards Grid */}
            <motion.div 
              variants={innerGridVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
            >
              
              {/* FIND US CARD */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.01)] border border-stone-200/40 flex flex-col justify-between">
                <div>
                  <h3 className="font-title font-black text-lg text-stone-950 tw mb-6 leading-none">
                    Find Us
                  </h3>

                  <div className="flex flex-col">
                    {/* Address Row */}
                    <motion.div 
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="flex gap-3.5 border-b border-stone-100 pb-4 mb-4 cursor-pointer group items-center"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FFF6F0] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#E65C38]/10 mt-0.5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#E65C38]">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <a href="#map" className="font-sans text-[15px] sm:text-sm font-bold text-stone-800 group-hover:text-[#E65C38] transition-all duration-300 leading-snug">
                        425 South Teller Street, Lakewood, Colorado
                      </a>
                    </motion.div>

                    {/* Phone Row */}
                    <motion.div 
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="flex items-center gap-3.5 border-b border-stone-100 pb-4 mb-4 cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FFF6F0] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#E65C38]/10">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#E65C38]">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <a href="tel:+1 303-937-9777" className="font-sans text-[15px] sm:text-sm font-bold text-stone-800 group-hover:text-[#E65C38] transition-all duration-300 leading-none">
                        +1 303-937-9777
                      </a>
                    </motion.div>

                    {/* Email Row */}
                    <motion.div 
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="flex items-center gap-3.5 cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FFF6F0] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#E65C38]/10">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#E65C38]">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <a href="mailto:info@littleindiadenvercolorado.com" className="font-sans text-[15px] sm:text-sm font-bold text-stone-800 group-hover:text-[#E65C38] transition-all duration-300 break-all leading-normal">
                        info@littleindiadenvercolorado.com
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* OPENING HOURS CARD */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.01)] border border-stone-200/40 flex flex-col justify-between">
                <div>
                  <h3 className="font-title font-black text-lg text-stone-950 tw mb-6 leading-none">
                    Opening Hours
                  </h3>

                  <div className="flex flex-col font-sans text-sm font-bold text-stone-800">
                    {/* Monday Row */}
                    <div className="flex justify-between items-center border-b border-stone-100 pb-4 mb-4 min-h-[50px]">
                      <span className="text-stone-500">Mon</span>
                      <span className="text-stone-400 font-bold uppercase text-[13px] bg-stone-50 border border-stone-200/40 px-2 py-0.5 rounded">
                        Closed
                      </span>
                    </div>

                    {/* Tue - Fri Row */}
                    <div className="flex justify-between items-center border-b border-stone-100 pb-4 mb-4 min-h-[50px]">
                      <span className="text-stone-500">Tue to Fri</span>
                      <span className="text-neutral-900">11 AM – 10 PM</span>
                    </div>

                    {/* Sat - Sun Row */}
                    <div className="flex justify-between items-center min-h-[50px]">
                      <span className="text-stone-500">Sat to Sun</span>
                      <span className="text-neutral-900">12 PM – 7 PM</span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

          </motion.div>
          
        </div>

      </div>
    </section>
  );
}