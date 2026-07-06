'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Custom Cubic-Bezier Deceleration Easing
const cubicEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicEase,
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function CtaSection() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-[#070707] select-none">
      
      {/* 1. Background Image using standard HTML tag with warm glowing restaurant lights */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Warm Cozy Restaurant Interior"
          className="w-full h-full object-cover opacity-35 filter brightness-[0.35] saturate-[0.8]"
        />
        {/* Soft, progressive gradient that melts cleanly into the solid black footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-[#070707]" />
      </div>

      {/* Handwriting Font Import */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .cta-cursive {
          font-family: 'Great Vibes', cursive;
        }
      `}} />

      {/* 2. Glassmorphic Central Card Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 text-center flex flex-col items-center shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
        >
          {/* Tagline */}
          <motion.span
            variants={childVariants}
            className="text-[#E94222] font-black text-sm sm:text-base tw-[0.25em] uppercase block mb-1"
          >
            HUNGRY?
          </motion.span>

          {/* Symmetrical Bold Title */}
          <motion.h2
            variants={childVariants}
            className="font-title font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-none tw-tight mb-4"
          >
            WE’RE READY
          </motion.h2>

          {/* Cursive Handwriting with Ornaments */}
          <motion.div 
            variants={childVariants}
            className="flex items-center justify-center gap-4 mb-5 select-none"
          >
            {/* Left Wing */}
            <svg className="w-8 sm:w-12 h-2 text-[#C08A27]/60" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M40 5 L10 5 Q5 5 0 9 M40 5 L15 2" />
            </svg>
            <span className="cta-cursive text-2xl sm:text-[34px] text-[#C08A27] leading-none">
              Come and Enjoy
            </span>
            {/* Right Wing */}
            <svg className="w-8 sm:w-12 h-2 text-[#C08A27]/60" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M0 5 L30 5 Q35 5 40 9 M0 5 L25 2" />
            </svg>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={childVariants}
            className="font-sans text-sm sm:text-[15px] text-stone-300 font-semibold leading-relaxed max-w-sm sm:max-w-md mb-8"
          >
            Order your favorite meals now and enjoy fresh, flavorful food delivered fast right to your doorstep.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={childVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            <Link
              href="/menu"
              className="group w-full sm:w-auto bg-[#E94222] hover:bg-[#d14b35] text-white text-[13px] font-bold twst px-8 py-4 rounded-full inline-flex items-center justify-center gap-2.5 transition-all duration-200 font-sans shadow-md"
            >
              <span>BOOK A TABLE</span>
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

            <Link
              href="/menu"
              className="group w-full sm:w-auto bg-transparent hover:bg-white border border-white/20 hover:border-white text-white hover:text-stone-950 text-[13px] font-bold twst px-8 py-4 rounded-full inline-flex items-center justify-center gap-2.5 transition-all duration-200 font-sans"
            >
              <span>VIEW MENU</span>
            </Link>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}