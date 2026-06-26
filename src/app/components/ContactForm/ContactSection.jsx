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
    <section className="w-full bg-[#FDFBF7] py-16 px-0 md:px-12 lg:px-20 text-[#0B0C0E] select-none overflow-hidden">
      
      {/* Typeface imports */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600;700&display=swap');
        .font-heavy {
          font-family: 'Anton', sans-serif;
        }
        .font-sans-custom {
          font-family: 'Montserrat', sans-serif;
        }
      ` }} />

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
            src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1600&q=80"
            alt="Gourmet food background"
            fill
            priority
            className="object-cover pointer-events-none"
          />
        </motion.div>

        {/* Soft atmospheric overlay */}
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />

        {/* 2. Overlapping Cream Card with Framer Motion Staggered Entrances */}
        <motion.div 
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10 m-6 md:m-12 lg:m-16 bg-[#FDFBF7] rounded-[2.5rem] p-8 md:p-14 max-w-full md:max-w-xl lg:max-w-2xl w-full shadow-[0_30px_100px_rgba(0,0,0,0.06)] border border-stone-200/50"
        >
          
          {/* Tagline Bracket */}
          <motion.span 
            variants={childElementVariants}
            className="text-[#E65C38] font-bold text-xs tracking-widest uppercase font-sans-custom block mb-4"
          >
            {"Get in Touch"}
          </motion.span>

          {/* Large Editorial Headline */}
          <motion.h2 
            variants={childElementVariants}
            className="font-heavy text-[45px] sm:text-[60px] lg:text-[60px] text-stone-950 uppercase leading-[0.88] mb-4 tracking-[0.01rem]"
          >
            Flavors in every bite
          </motion.h2>

          {/* Subtext description */}
          <motion.p 
            variants={childElementVariants}
            className="font-sans-custom text-[14px] text-stone-500 font-semibold mb-12 max-w-lg leading-relaxed"
          >
            Our dishes are made with only fresh and local ingredients.
          </motion.p>

          {/* 3. Upgraded Inner Grid */}
          <motion.div 
            variants={innerGridVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            
            {/* FIND US CARD */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.015)] border border-stone-200/40 flex flex-col justify-between">
              <div>
                <h3 className="font-heavy text-2xl text-stone-950 uppercase tracking-wide mb-6 leading-none">
                  Find Us
                </h3>

                <div className="flex flex-col">
                  {/* Address Row */}
                  <motion.div 
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="flex items-center gap-3.5 border-b border-dashed border-stone-200/80 pb-4 mb-4 cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#FFF6F0] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#E65C38]/10">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#E65C38]">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <a href="#map" className="font-sans-custom text-[14px] font-bold text-stone-800 group-hover:text-[#E65C38] transition-all duration-300 pb-0.5 leading-tight">
                      2-5-9 Itabashi, Tokyo
                    </a>
                  </motion.div>

                  {/* Phone Row */}
                  <motion.div 
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="flex items-center gap-3.5 border-b border-dashed border-stone-200/80 pb-4 mb-4 cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#FFF6F0] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#E65C38]/10">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#E65C38]">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <a href="tel:5555555555" className="font-sans-custom text-[14px] font-bold text-stone-800 group-hover:text-[#E65C38] transition-all duration-300 pb-0.5 leading-tight">
                      (555) 555-5555
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
                    <a href="mailto:dinevo.help@gmail.com" className="font-sans-custom text-[14px] font-bold text-stone-800 group-hover:text-[#E65C38] transition-all duration-300 pb-0.5 leading-tight">
                      dinevo.help@gmail.com
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* OPENING HOURS CARD */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.015)] border border-stone-200/40 flex flex-col justify-between">
              <div>
                <h3 className="font-heavy text-2xl text-stone-950 uppercase tracking-wide mb-6 leading-none">
                  Opening Hours
                </h3>

                <div className="flex flex-col font-sans-custom text-[14px] font-bold text-stone-800">
                  {/* Monday Row */}
                  <div className="flex justify-between items-center border-b border-dashed border-stone-200/80 pb-3 mb-3.5">
                    <span className="text-stone-500">Mon</span>
                    <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px] bg-stone-50 border border-stone-200/40 px-2 py-0.5 rounded select-none">Closed</span>
                  </div>

                  {/* Tue - Fri Row */}
                  <div className="flex justify-between items-center border-b border-dashed border-stone-200/80 pb-3.5 mb-3.5">
                    <span className="text-stone-500">Tue to Fri</span>
                    <span>11 AM – 10 PM</span>
                  </div>

                  {/* Sat - Sun Row */}
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500">Sat to Sun</span>
                    <span>12 PM – 7 PM</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}