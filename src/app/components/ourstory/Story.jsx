"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';

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

// Added isH1 parameter defaulting to false
export default function OurStorySection({ isH1 = false, className = '' }) {
  
  return (
    <section className={`w-full bg-white text-stone-800 overflow-hidden relative ${className}`.trim()}>
      
      {/* Symmetrical Left and Right Grid Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 relative items-stretch">
        
        {/* ================= LEFT COLUMN: NARRATIVE PANEL (Cream) ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          className="col-span-1 lg:col-span-6 flex flex-col justify-center px-8 sm:px-16 lg:pl-24 lg:pr-32 py-12 md:py-16 relative z-10 overflow-hidden text-left"
        >
          <div className="relative z-10 flex flex-col gap-6 max-w-2xl">
            <SectionHeader
              animated={false}
              uppercase={false}
              as={isH1 ? 'h1' : 'h2'}
              theme="brand"
              label="OUR STORY"
              title="Authentic Indian Cuisine in Denver"
              className="mb-0"
              titleClassName="sm:text-[56px] lg:text-[56px] text-black mb-0"
            />

            {/* Custom Narrative Paragraphs */}
            <div className="text-[16px] md:text-[18px] text-stone-600 leading-relaxed flex flex-col gap-5">
              <motion.p className="font-normal" variants={revealVariants}>
                Since opening our doors in 2010, Little India Denver Restaurant has been dedicated to bringing the true taste of authentic Indian cuisine to Denver. Inspired by generations of traditional recipes, every dish reflects the rich heritage, culture, and bold flavors of India—crafted to deliver an unforgettable dining experience.
              </motion.p>
              <motion.p className="font-normal" variants={revealVariants}>
                We carefully source premium spices directly from India, grind them fresh in-house, and prepare every meal with precision and passion. From aromatic curries to flavorful tandoori specialties, each bite captures the essence of Indian cooking. More than just a meal, we offer a complete culinary journey that delights your senses and celebrates authenticity.
              </motion.p>
            </div>

            {/* Symmetrical Features Row - Color Coded with Icons */}
            <motion.div 
              variants={revealVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4"
            >
              {/* Feature 1 */}
              <div className="flex flex-col items-start text-left gap-3">
                <div className="w-12 h-12 rounded-full bg-[#e94222] flex items-center justify-center shrink-0 text-white shadow-sm">
                  <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 0a3 3 0 01-3 3H9a3 3 0 01-3-3M12 3a3 3 0 013 3h1a3 3 0 013-3M4 19h16c1-5-1-10-8-10s-9 5-8 10zm4-4h8" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#333] font-bold tw-normal text-[16px]">Fresh Spices</span>
                  <span className="text-stone-600 font-bold text-[15px] leading-tight mt-1">Sourced from India, ground in-house</span>
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
                  <span className="text-[#333] font-bold tw-normal text-[16px]">Experts Chefs</span>
                  <span className="text-stone-600 font-bold text-[15px] leading-tight mt-1">Crafting authentic flavors with passion</span>
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
                  <span className="text-[#333] font-bold tw-normal text-[16px]">Made with Love</span>
                  <span className="text-stone-600 font-bold text-[15px] leading-tight mt-1">Every dish prepared with care & devotion</span>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: FLAGSHIP ROOM (With Native Arched Clip) ================= */}
        <div className="col-span-1 lg:col-span-6 relative h-full w-full overflow-hidden rounded-l-[12rem] lg:rounded-l-[16rem] hidden lg:block min-h-[700px] shadow-inner">
          <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none"></div>
          <motion.img 
            src="/story.png" 
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