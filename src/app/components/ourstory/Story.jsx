"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Custom Deceleration Cubic-Bezier Easing (Smooth slow-out)
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Parent Container Stagger Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Child Slide Up Variants
const revealVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

export default function OurStorySection() {
  return (
    <section className="w-full bg-white text-stone-800 overflow-hidden relative select-none">
      
      {/* Symmetrical Left and Right Grid Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 relative items-stretch">
        
        {/* ================= LEFT COLUMN: NARRATIVE PANEL (Cream) ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          className="col-span-1 lg:col-span-5 flex flex-col justify-center px-8 sm:px-16 lg:pl-24 lg:pr-32 py-24 relative z-10 overflow-hidden text-left"
        >
          {/* Faint Brand Watermark Image - Positioned at the back (z-0) under the text */}
          {/* <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04] scale-95">
            <img 
              src="/Watermark.png" 
              alt="Little India Watermark"
              className="max-h-[85%] w-auto object-contain"
              draggable="false"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div> */}

          <div className="relative z-10 flex flex-col gap-6 max-w-xl">
            
            {/* Tagline Indicator with Symmetrical Star Divider */}
            <div className="flex flex-col gap-3">
              <span className="text-[#e94222] font-extrabold text-[15px] sm:text-[15px] tracking-[0.2em] upp font-sans">
                OUR STORY
              </span>
              {/* <div className="flex items-center gap-3 w-full max-w-[120px] -mt-1">
                <div className="h-[1px] bg-stone-300 flex-1"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#e94222]/60"></div>
                <div className="h-[1px] bg-stone-300 flex-1"></div>
              </div> */}
            </div>

            {/* Headline Title */}
            <div className="relative w-full">
              <motion.h2 
                variants={revealVariants}
                className="font-title font-black text-[45px] sm:text-[55px] lg:text-[62px] text-black leading-[0.95] tracking-tight upp"
              >
                Rooted In Tradition
              </motion.h2>
            </div>

            {/* Custom Narrative Paragraphs */}
            <div className="font-sans text-[15px] text-stone-600 font-semibold leading-relaxed flex flex-col gap-5">
              <motion.p variants={revealVariants}>
                Since opening our doors in 2017, Little India has been on a mission to bring the real flavors of India to Denver. Our recipes are passed down through generations, each dish telling a story of tradition, culture, and love.
              </motion.p>
              <motion.p variants={revealVariants}>
                We source the finest spices directly from India, grind them fresh in-house, and prepare every meal with the care and attention it deserves. This isn’t just food—it’s an experience that awakens all your senses.
              </motion.p>
            </div>

            {/* Symmetrical Features Row - Color Coded with Icons */}
            <motion.div 
              variants={revealVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 select-none font-sans"
            >
              {/* Feature 1 */}
              <div className="flex flex-col items-start text-left gap-3">
                <div className="w-12 h-12 rounded-full bg-[#e94222] flex items-center justify-center shrink-0 text-white shadow-sm">
                  <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 0a3 3 0 01-3 3H9a3 3 0 01-3-3M12 3a3 3 0 013 3h1a3 3 0 013-3M4 19h16c1-5-1-10-8-10s-9 5-8 10zm4-4h8" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-stone-900 font-black tracking-wide text-[16px] upp">Fresh Spices</span>
                  <span className="text-stone-600 font-bold text-[15px] leading-tight mt-1 font-sans">Sourced from India, ground in-house</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start text-left gap-3">
                <div className="w-12 h-12 rounded-full bg-[#e94222] flex items-center justify-center shrink-0 text-white shadow-sm">
                  <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.083 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div className="flex flex-col">
                <span className="text-stone-900 font-black tracking-wide text-[16px] upp font-sans">Experts Chefs</span>
                  <span className="text-stone-600 font-bold text-[15px] leading-tight mt-1 font-sans">Crafting authentic flavors with passion</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start text-left gap-3">
                <div className="w-12 h-12 rounded-full bg-[#e94222] flex items-center justify-center shrink-0 text-white shadow-sm">
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-stone-900 font-black tracking-wide text-[16px] upp font-sans">Made with Love</span>
                  <span className="text-stone-600 font-bold text-[15px] leading-tight mt-1 font-sans">Every dish prepared with care & devotion</span>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* ================= FLOATING STACK ON THE SEAM (Overlaps Columns) ================= */}
        {/* <div className="absolute left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 items-center hidden xl:flex">
   
          <div className="w-[195px] h-[145px] rounded-xl overflow-hidden border-4 border-white shadow-xl relative scale-95 hover:scale-100 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80" 
              alt="Artisanal Indian Spices" 
              className="w-full h-full object-cover" 
            />
          </div>

        
          <div className="w-[245px] bg-[#e94222] p-6 rounded-2xl shadow-2xl border border-white/10 text-center flex flex-col items-center gap-3 relative">
            <span className="text-[#B49774] text-4xl font-serif leading-none h-4">“</span>
            <p className="font-sans italic text-white text-[16.5px] leading-relaxed font-semibold">
              Bringing the heart of India to your table.
            </p>
         
            <div className="flex items-center gap-2.5 w-20 mt-2">
              <div className="h-[1px] bg-[#B49774]/40 flex-1"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#e94222]"></div>
              <div className="h-[1px] bg-[#B49774]/40 flex-1"></div>
            </div>
          </div>

          <div className="w-[195px] h-[145px] rounded-xl overflow-hidden border-4 border-white shadow-xl relative scale-95 hover:scale-100 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80" 
              alt="Gourmet Curry Bowl" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div> */}

        {/* ================= RIGHT COLUMN: FLAGSHIP ROOM (With Native Arched Clip) ================= */}
        <div className="col-span-1 lg:col-span-7 relative h-full w-full overflow-hidden rounded-l-[12rem] lg:rounded-l-[16rem] hidden lg:block min-h-[700px] shadow-inner">
          <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none"></div>
          <motion.img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" 
            alt="Little India Flagship Dining Room" 
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: cubicBezierEase }}
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* ================= BOTTOM GREEN OVERLAY BANNER ================= */}
      {/* <div className="absolute bottom-0 left-0 bg-[#e94222] text-[#B49774] py-5 px-8 flex items-center gap-5 rounded-tr-[2.5rem] z-20 shadow-lg border-t border-r border-white/5 pr-14 select-none hidden lg:flex">

        <div className="w-10 h-10 shrink-0 text-[#B49774]">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="w-full h-full">
            <path d="M20 90 L80 90 M30 90 L30 50 L40 50 L40 90 M60 90 L60 50 L70 50 L70 90 M40 50 Q50 30 60 50 M25 50 L75 50 M25 50 L25 35 Q50 25 75 35 L75 50 M45 35 L45 25 M55 35 L55 25 M40 25 L60 25 M50 25 L50 15" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="font-sans text-[#FAF7EE] text-[15px] italic font-semibold leading-none">
            "MORE THAN A MEAL, it's a journey through India."
          </span>
        </div>
      </div> */}

    </section>
  );
}