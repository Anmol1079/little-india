"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Custom Deceleration Easing
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

export default function LunchBuffetSection() {
  const [partySize, setPartySize] = useState(2);
  const [preferredDay, setPreferredDay] = useState('weekday');
  const [fullName, setFullName] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <section className="w-full bg-[#F8F5E9] text-stone-800 py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden border-b border-stone-200">
      
      {/* Decorative leaf sketch on left margins */}
      <div className="absolute left-0 top-1/3 -translate-y-1/2 opacity-25 w-24 sm:w-32 h-auto pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth={1} className="w-full h-full text-[#333]">
          <path d="M10 190 Q40 100 10 10 M10 100 Q60 80 80 60 M10 150 Q50 140 70 120 M10 50 Q50 30 70 10" />
        </svg>
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ================= LEFT COLUMN: INFO & DETAILS ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          className="lg:col-span-4 flex flex-col gap-5 text-left"
        >
          {/* Daily Buffet Badge */}
          <motion.div variants={revealVariants} className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-[#B23E25] flex items-center justify-center text-white text-[10px] shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-[#B23E25] font-bold text-[15px] tw-[0.2em] upp">
              DAILY BUFFET
            </span>
          </motion.div>

          {/* Imposing Multi-Colored Header */}
          <motion.h2 
            variants={revealVariants}
            className="font-title font-bold leading-[0.92] upp text-[50px] sm:text-[56px] lg:text-[66px] tw-tight mb-2"
          >
            <span className="text-[#2E2A25]">THE LUNCH</span> <br />
            <span className="text-[#B23E25]">BUFFET</span>
          </motion.h2>

          {/* Symmetrical divider with centered leaf/star */}
          <motion.div variants={revealVariants} className="flex items-center gap-3 w-full max-w-[280px] my-1">
            <div className="h-[1px] bg-stone-300/80 flex-1"></div>
            <svg className="w-4.5 h-4.5 text-[#B23E25] opacity-80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
            </svg>
            <div className="h-[1px] bg-stone-300/80 flex-1"></div>
          </motion.div>

          {/* Section Description */}
          <motion.p 
            variants={revealVariants}
            className="text-[15px] text-stone-600 leading-relaxed max-w-sm font-normal"
          >
            A vibrant daily spread of rich aromatic curries, tandoori specialties, and fresh clay-oven naans. Experience the true warmth of authentic Indian spices during your lunch hour.
          </motion.p>

          {/* Symmetrical 2x2 Info Grid */}
          <motion.div 
            variants={revealVariants}
            className="grid grid-cols-2 gap-x-4 gap-y-6 pt-6 border-t border-stone-200/80"
          >
            {/* Days */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#B23E25] flex items-center justify-center shrink-0 text-white shadow-sm">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-stone-400 font-bold upp twr text-[9px]">Days Available</span>
                <span className="text-[#333] font-bold text-[15px]mt-0.5">Mon – Fri</span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#B23E25] flex items-center justify-center shrink-0 text-white shadow-sm">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-stone-400 font-bold upp twr text-[9px]">Hours</span>
                <span className="text-[#333] font-bold text-[15px]mt-0.5">11:30 AM – 2:30 PM</span>
              </div>
            </div>

            {/* Style */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#B23E25] flex items-center justify-center shrink-0 text-white shadow-sm">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M12 2a5 5 0 00-5 5v3H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2h-2V7a5 5 0 00-5-5zM9 7a3 3 0 016 0v3H9V7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-stone-400 font-bold upp twr text-[9px]">Buffet Style</span>
                <span className="text-[#333] font-bold text-[15px]mt-0.5">All You Can Eat</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#B23E25] flex items-center justify-center shrink-0 text-white shadow-sm">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-stone-400 font-bold upp twr text-[9px]">Price</span>
                <span className="text-[#333] font-bold text-[15px]mt-0.5">$16.95 Per Person</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Framed Mood Banner */}
          <motion.div 
            variants={revealVariants}
            className="border-2 border-dashed border-[#B23E25]/30 bg-[#FAF7EE] rounded-2xl p-4 flex items-center gap-4 mt-4 relative overflow-hidden"
          >
            {/* Left Steam Bowl SVG */}
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-stone-100 text-[#B23E25]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 0a3 3 0 01-3 3H9a3 3 0 01-3-3M12 3a3 3 0 013 3h1a3 3 0 013-3M4 19h16c1-5-1-10-8-10s-9 5-8 10zm4-4h8" />
              </svg>
            </div>
            {/* Mood Text */}
            <div className="flex flex-col">
              <span className="text-[#B23E25] font-bold text-[11px] twr upp">GOOD FOOD. GOOD MOOD.</span>
              <span className="text-[#333] text-[11.5px] font-semibold mt-0.5 leading-snug">
                Wholesome ingredients, bold spices and a buffet that feels like home.
              </span>
            </div>
            {/* Symmetrical gold/brown traditional pot sketch background element */}
            <div className="absolute right-0 bottom-0 w-16 h-16 opacity-10 pointer-events-none text-[#B23E25]">
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                <path d="M50 10 C30 10 30 30 30 50 C30 70 40 90 50 90 C60 90 70 70 70 50 C70 30 70 10 50 10" />
              </svg>
            </div>
          </motion.div>

        </motion.div>

        {/* ================= MIDDLE COLUMN: ARCH IMAGE & GRAPHICS ================= */}
        <div className="lg:col-span-4 flex flex-col items-center gap-6 relative">
          
          {/* Overlapping Mandala Emblem (Left side of Arch) */}
          <div className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 w-16 h-16 opacity-35 z-20 pointer-events-none text-[#B23E25] hidden xl:block">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full animate-[spin_20s_linear_infinite]">
              <circle cx="50" cy="50" r="45" strokeDasharray="4,4" />
              <circle cx="50" cy="50" r="30" />
              <path d="M50 0 L50 100 M0 50 L100 50 M15 15 L85 85 M15 85 L85 15" />
            </svg>
          </div>

          {/* Overlapping Leaves Branch Vector (Top right of Arch - Styled in Antique Gold) */}
          <div className="absolute right-[-2.5rem] top-[-3.5rem] w-28 h-28 opacity-90 z-20 pointer-events-none hidden xl:block text-[#B49774]">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-full h-full">
              <path d="M20 90 Q40 50 80 15" />
              <path d="M40 50 Q60 40 70 30" />
              <path d="M30 65 Q50 60 55 45" />
              <path d="M55 35 Q75 30 85 15" />
              {/* Symmetrical small leaf vector shapes */}
              <path d="M80 15 C75 25 65 20 80 15 M70 30 C65 38 58 32 70 30 M55 45 C50 52 45 47 55 45" fill="currentColor" fillOpacity="0.4" />
            </svg>
          </div>

          {/* Arch Widescreen Image frame */}
          <div className="w-[280px] sm:w-[320px] h-[360px] sm:h-[440px] rounded-t-full overflow-hidden border-[6px] border-white shadow-xl relative z-10 bg-stone-100">
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" 
              alt="Artisanal Indian buffet display in copper pots" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row of 3 vertical thumbnails rounded below the arch */}
          <div className="flex gap-4 relative z-10 select-none">
            <div className="w-16 h-20 rounded-[1.25rem] overflow-hidden border-2 border-white shadow-md bg-stone-50 shrink-0">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-20 rounded-[1.25rem] overflow-hidden border-2 border-white shadow-md bg-stone-50 shrink-0">
              <img src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=300" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-20 rounded-[1.25rem] overflow-hidden border-2 border-white shadow-md bg-stone-50 shrink-0">
              <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Script Callout Text */}
          <div className="flex flex-col items-center mt-2 relative select-none">
            <span className="italic font-bold text-[24px] text-[#333] leading-none">
              Flavours in every Bite
            </span>
            {/* Elegant organic hand-drawn underlining SVG vector strip */}
            <div className="w-36 h-2 mt-1.5 text-[#B23E25]/60">
              <svg viewBox="0 0 100 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-full h-full">
                <path d="M5 5 Q50 9 95 3" />
              </svg>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: RESERVATION CARD ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.9, ease: cubicBezierEase }}
          className="lg:col-span-4 flex flex-col w-full"
        >
          {/* Double-layered bordered aesthetic reservation card */}
          <div className="bg-[#fffdf8] border-[8px] border-[#F2EFE2] rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(40,20,10,0.05)] w-full">
            
            {/* Card Header inside the double outline */}
            <div className="text-center mb-6 pb-4 border-b border-stone-100 flex flex-col items-center select-none">
              {/* Steaming Cloche Icon (Styled in Coral Rust-Red) */}
              <div className="w-10 h-10 rounded-full bg-[#FAF7EE] border border-[#B23E25]/20 flex items-center justify-center mb-3 text-[#B23E25]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1" />
                  <path d="M4 18h16a1 1 0 001-1V9a5 5 0 00-5-5H8a5 5 0 00-5 5v8a1 1 0 001 1z" />
                </svg>
              </div>

              <h3 className="font-title font-bold text-xl text-[#333] upp twr leading-[1.1] mb-2">
                Reserve Your <br /> Buffet Table
              </h3>

              {/* Symmetrical micro line star divider inside card */}
              <div className="flex items-center gap-2.5 w-24 mb-1">
                <div className="h-[1px] bg-stone-200 flex-1"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#B23E25]/60"></div>
                <div className="h-[1px] bg-stone-200 flex-1"></div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5 text-[15px] text-stone-600 font-bold">
              
              {/* Name Field */}
              <div className="flex flex-col gap-2 text-left">
                <label className="text-[#333] twst upp text-[10px] font-extrabold">Your Full Name</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Liya Patel, Marcus..." 
                  className="w-full bg-[#FCF9F2] border border-stone-200 focus:border-[#B23E25] rounded-xl p-4 text-[#333] outline-none transition-colors text-sm font-semibold"
                  required
                />
              </div>

              {/* Party Size Selector */}
              <div className="flex flex-col gap-2 text-left">
                <label className="text-[#333] twst upp text-[10px] font-extrabold">Party Size</label>
                <div className="flex flex-wrap gap-2">
                  {[2, 4, 6, 8, 10].map((size) => {
                    const isActive = partySize === size;
                    return (
                      <motion.button
                        key={size}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setPartySize(size)}
                        className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm border transition-all ${ isActive ? 'bg-[#B23E25] text-white border-[#B23E25] shadow-md shadow-[#B23E25]/15' : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400' }`}
                      >
                        {size}
                      </motion.button>
                    );
                  })}
                </div>
                <span className="text-[10px] text-stone-400 italic mt-0.5 font-bold">
                  {partySize} seats selected for your buffet table
                </span>
              </div>

              {/* Preferred Gathering Selector */}
              <div className="flex flex-col gap-2.5 text-left">
                <label className="text-[#333] twr upp text-[10px] font-extrabold">Preferred Gathering</label>
                <div className="flex flex-col gap-2">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPreferredDay('weekday')}
                    className={`w-full px-5 py-3 rounded-xl text-[11px] font-bold transition-all border text-left flex justify-between items-center ${ preferredDay === 'weekday' ? 'bg-[#B23E25] text-white border-[#B23E25] shadow-md' : 'bg-white text-[#333] border-stone-200 hover:border-stone-400' }`}
                  >
                    <span>Mon - Fri • Weekday Buffet</span>
                    {preferredDay === 'weekday' && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPreferredDay('weekend')}
                    className={`w-full px-5 py-3 rounded-xl text-[15px] font-bold transition-all border ${ preferredDay === 'weekend' ? 'bg-[#B23E25] text-white border-[#B23E25] shadow-md' : 'bg-white text-[#333] border-stone-200 hover:border-stone-400' }`}
                  >
                    Sat - Sun • Weekend Grand Feast
                  </motion.button>
                </div>
              </div>

              {/* Kitchen Notes */}
              <div className="flex flex-col gap-2.5 text-left">
                <label className="text-[#333] twr upp text-[10px] font-bold">Tell The Kitchen Anything</label>
                <textarea 
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Vegan, no dairy, celebrating an anniversary, allergic to shellfish..." 
                  className="w-full bg-[#FCF9F2] border border-stone-200 focus:border-[#B23E25] rounded-xl p-4 h-24 resize-none text-[#333] outline-none transition-colors text-sm"
                />
              </div>

              {/* Main Submit Action */}
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#B23E25] hover:bg-[#9E3420] text-white font-bold text-[15px] upp twst py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 w-full cursor-pointer"
              >
                <svg className="w-4.5 h-4.5 fill-none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Reserve Your Buffet Table
              </motion.button>

              {/* Action Link to PDF Menu */}
              <div className="text-center mt-2">
                <a 
                  href="#pdf-menu" 
                  className="text-[11px] font-bold text-[#333] hover:text-[#B23E25] transition-colors"
                >
                  Just Browsing the Menu — <span className="underline decoration-stone-300">download PDF</span>
                </a>
              </div>

            </form>
          </div>

        </motion.div>

      </div>
    </section>
  );
}