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
    <section className="w-full h-[650px] sm:h-[700px] md:h-[750px] bg-[#fdfbf7] flex items-center justify-center overflow-hidden relative select-none border-b border-stone-200/50">
      
      {/* Scope-contained style block for custom Anton & Montserrat typography with LAB colors */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-heavy {
          font-family: 'Anton', sans-serif;
        }
        .font-sans-custom {
          font-family: 'Montserrat', sans-serif;
        }
        .brand-lab-text {
          color: #fbbf24;
          color: lab(72.7183% 31.8672 97.9407);
        }
        .brand-lab-bg {
          background-color: #fbbf24;
          background-color: lab(72.7183% 31.8672 97.9407);
        }
      ` }} />

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 relative">
        
        {/* LEFT COLUMN: Deep dark plum narrative panel (Spans 50%) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          className="col-span-1 bg-[#120813] flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 py-16 relative z-10 overflow-hidden"
        >
          
          {/* Faint Brand Watermark Image - Positioned at the back (z-0) under the text */}
          <motion.div 
            initial={{ scale: 1.15, opacity: 0 }}
            whileInView={{ scale: 1.1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: cubicBezierEase }}
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none scale-110"
          >
            <img 
              src="/Watermark.png" // Saved background monogram watermark
              alt="Little India Watermark"
              className="max-h-[85%] w-auto object-contain"
              draggable="false"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>

          <div className="relative z-10 flex flex-col gap-5 text-left max-w-xl">
            
            {/* Tagline Indicator with underline & circle decorative elements */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <motion.span 
                  variants={revealVariants}
                  className="text-[#E65C38] font-bold text-xs tracking-widest uppercase font-sans-custom block"
                >
                  Our Story
                </motion.span>
              </div>
            </div>

            {/* Headline Title */}
            <motion.h2 
              variants={revealVariants}
              className="font-heavy text-[60px] sm:text-[60px] lg:text-[60px] text-white uppercase leading-[0.95] tracking-[0.01rem] mt-2 mb-2"
            >
              Rooted in Tradition
            </motion.h2>

            {/* Custom Narrative Paragraphs (Montserrat layout) */}
            <div className="font-sans-custom text-[14px] sm:text-[14px] text-stone-400 font-semibold leading-relaxed flex flex-col gap-4">
              <motion.p variants={revealVariants}>
                Since opening our doors in 2017, Little India has been on a mission to bring the real flavors of India to Denver. Our recipes are passed down through generations, each dish telling a story of tradition, culture, and love.
              </motion.p>
              <motion.p variants={revealVariants}>
                We source the finest spices directly from India, grind them fresh in-house, and prepare every meal with the care and attention it deserves. This isn’t just food—it’s an experience that awakens all your senses.
              </motion.p>
            </div>

            {/* Horizontal Features Bar: bullet dots colored in brand orange-red #E65C38 */}
            <motion.div 
              variants={revealVariants}
              className="flex flex-wrap gap-x-8 gap-y-2 mt-4 font-sans-custom text-sm font-bold text-white select-none"
            >
              <span className="flex items-center gap-2">
                <span className="text-[#E65C38] text-lg leading-none">•</span> Fresh Spices
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#E65C38] text-lg leading-none">•</span> Expert Chefs
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#E65C38] text-lg leading-none">•</span> Made with Love
              </span>
            </motion.div>

            {/* Dedicated Divider line matching your screenshot */}
            <motion.hr variants={revealVariants} className="border-white/10 my-3" />

          </div>

        </motion.div>

        {/* RIGHT COLUMN: Modern Restaurant Room (Spans 50%) */}
        <div className="col-span-1 relative h-full w-full overflow-hidden hidden md:block">
          <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none"></div>
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
    </section>
  );
}