"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Custom Deceleration Cubic-Bezier Easing
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Parent Container Stagger Variants
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

// Child Slide Up Variants
const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

// Symmetrical Side Food Plate Entrance Variants
const plateLeftVariants = {
  hidden: { opacity: 0, x: -80, rotate: -12 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 1.2, ease: cubicBezierEase },
  },
};

const plateRightVariants = {
  hidden: { opacity: 0, x: 80, rotate: 12 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 1.2, ease: cubicBezierEase },
  },
};

// Thumbnail stagger animations
const thumbnailContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const thumbnailItemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezierEase },
  },
};

export default function LunchBuffetSection() {
  const [partySize, setPartySize] = useState(2);
  const [preferredDay, setPreferredDay] = useState('weekday');
  const [fullName, setFullName] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <section className="w-full bg-[#fef6df] text-stone-850 py-16 px-4 md:px-8 xl:px-16 relative overflow-hidden select-none border-b border-stone-200">
      
      {/* Scope-contained style block for custom Anton & Montserrat typography */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600;700;800&display=swap');
        
        .font-heavy {
          font-family: 'Anton', sans-serif;
        }
        .font-sans-custom {
          font-family: 'Montserrat', sans-serif;
        }
      ` }} />

      {/* Left and Right Animated Food Plates */}
      <motion.div 
        variants={plateLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute top-0 -left-20 w-72 h-72 opacity-95 pointer-events-none hidden xl:block z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" 
          alt="Decorative Salad Plate" 
          className="w-full h-full object-contain filter drop-shadow-xl"
        />
      </motion.div>
      
      <motion.div 
        variants={plateLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute bottom-0 -left-16 w-64 h-64 opacity-95 pointer-events-none hidden xl:block z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80" 
          alt="Decorative Bowl" 
          className="w-full h-full object-contain filter drop-shadow-xl"
        />
      </motion.div>

      <motion.div 
        variants={plateRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute top-0 -right-24 w-80 h-80 opacity-95 pointer-events-none hidden xl:block z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=400&q=80" 
          alt="Decorative Side Bowl" 
          className="w-full h-full object-contain filter drop-shadow-xl"
        />
      </motion.div>

      <motion.div 
        variants={plateRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute bottom-0 -right-20 w-80 h-80 opacity-95 pointer-events-none hidden xl:block z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80" 
          alt="Decorative Curry Feast" 
          className="w-full h-full object-contain filter drop-shadow-xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Info & Details */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          className="lg:col-span-5 flex flex-col gap-6 text-left"
        >
          
          {/* Daily Buffet Tagline */}
          <div className="flex gap-2">
            <motion.span 
              variants={revealVariants}
              className="text-[#E65C38] font-bold text-xs tracking-widest uppercase font-sans-custom block"
            >
              Daily buffet
            </motion.span>
          </div>

          {/* Imposing Condensed Main Title */}
          <motion.h2 
            variants={revealVariants}
            className="font-heavy text-[45px] sm:text-[60px] text-stone-950 uppercase leading-[0.95] tracking-[0.01rem]"
          >
            The Lunch Buffet
          </motion.h2>

          {/* Section Description */}
          <motion.p 
            variants={revealVariants}
            className="font-sans-custom text-[13.5px] text-stone-600 font-semibold leading-relaxed max-w-md"
          >
            A vibrant daily spread of rich aromatic curries, tandoori specialties, and fresh clay-oven naans. Experience the true warmth of authentic Indian spices during your lunch hour.
          </motion.p>

          {/* Facts Grid */}
          <motion.div 
            variants={revealVariants}
            className="grid grid-cols-2 gap-x-4 gap-y-6 pt-6 border-t border-stone-200 font-sans-custom"
          >
            
            {/* Days */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#4e5e20] flex items-center justify-center shrink-0 text-white shadow-sm">
                <svg className="w-4.5 h-4.5 fill-none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px]">Days Available</span>
                <span className="text-stone-900 font-bold text-[13.5px] mt-0.5">Mon – Fri</span>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#4e5e20] flex items-center justify-center shrink-0 text-white shadow-sm">
                <svg className="w-4.5 h-4.5 fill-none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px]">Hours</span>
                <span className="text-stone-900 font-bold text-[13.5px] mt-0.5">11:30 AM – 2:30 PM</span>
              </div>
            </div>

            {/* Style */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#4e5e20] flex items-center justify-center shrink-0 text-white shadow-sm">
                <svg className="w-4.5 h-4.5 fill-none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11M12 11a13.916 13.916 0 00-1.724-6.86L10.22 4M12 11a13.916 13.916 0 00-1.724-6.86l-.054-.09M12 11c0-3.517 1.009-6.799 2.753-9.571m-3.44 2.04l-.054-.09A13.916 13.916 0 0015 11" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px]">Buffet Style</span>
                <span className="text-stone-900 font-bold text-[13.5px] mt-0.5">All You Can Eat</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#4e5e20] flex items-center justify-center shrink-0 text-white shadow-sm">
                <svg className="w-4.5 h-4.5 fill-none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px]">Price</span>
                <span className="text-stone-900 font-bold text-[13.5px] mt-0.5">$16.95 Per Person</span>
              </div>
            </div>

          </motion.div>

          {/* Three rounded bottom thumbnails cascading */}
          <motion.div 
            variants={thumbnailContainerVariants}
            className="flex gap-4 mt-6 justify-evenly md:justify-start"
          >
            <motion.div 
              variants={thumbnailItemVariants} 
              whileHover={{ scale: 1.05, y: -2 }}
              className="w-20 h-20 rounded-[1.25rem] overflow-hidden border-4 border-white shadow-md shrink-0 cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=150" alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              variants={thumbnailItemVariants} 
              whileHover={{ scale: 1.05, y: -2 }}
              className="w-20 h-20 rounded-[1.25rem] overflow-hidden border-4 border-white shadow-md shrink-0 cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=150" alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              variants={thumbnailItemVariants} 
              whileHover={{ scale: 1.05, y: -2 }}
              className="w-20 h-20 rounded-[1.25rem] overflow-hidden border-4 border-white shadow-md shrink-0 cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=150" alt="" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

        </motion.div>

        {/* RIGHT COLUMN: Booking Card */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.9, ease: cubicBezierEase }}
          className="lg:col-span-7 flex flex-col gap-6 w-full lg:pl-10"
        >
          
          <div className="bg-[#fffdfa] border border-stone-200/60 rounded-[2.5rem] p-6 sm:p-12 shadow-[0_20px_50px_rgba(40,20,10,0.04)] w-full">
            
            <div className="text-center mb-8 pb-4 border-b border-stone-100">
              <h3 className="font-heavy text-2xl text-stone-900 uppercase tracking-wide leading-none mb-1">
                Reserve Your Buffet Table
              </h3>

              <p className="font-sans-custom text-xs text-stone-500 font-semibold mt-1">
                No deposit required. Simply walk in or save a table below.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6 text-xs font-sans-custom text-stone-600 font-semibold">
              
              {/* Name Field */}
              <div className="flex flex-col gap-2.5 text-left">
                <label className="text-stone-500 tracking-wider uppercase text-[10px] font-bold">Your Full Name</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Liya Patel, Marcus..." 
                  className="w-full bg-[#fdfaf6] border border-stone-200 focus:border-[#e65c38] rounded-xl p-4 text-stone-900 outline-none transition-colors text-sm font-sans-custom"
                  required
                />
              </div>

              {/* Party Size Selector */}
              <div className="flex flex-col gap-2.5 text-left">
                <label className="text-stone-500 tracking-wider uppercase text-[10px] font-bold">Party Size</label>
                <div className="flex flex-wrap gap-2.5">
                  {[2, 4, 6, 8, 10].map((size) => {
                    const isActive = partySize === size;
                    return (
                      <motion.button
                        key={size}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setPartySize(size)}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm border transition-all font-sans-custom ${
                          isActive 
                            ? 'bg-[#e65c38] text-white border-[#e65c38] shadow-md shadow-[#e65c38]/10' 
                            : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        {size}
                      </motion.button>
                    );
                  })}
                </div>
                <span className="text-[10px] text-stone-400 italic mt-1 font-semibold font-sans-custom">
                  {partySize} seats selected for your buffet table
                </span>
              </div>

              {/* Preferred Gathering Selector */}
              <div className="flex flex-col gap-2.5 text-left">
                <label className="text-stone-500 tracking-wider uppercase text-[10px] font-bold">Preferred Gathering</label>
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPreferredDay('weekday')}
                    className={`px-6 py-3 rounded-xl text-xs font-bold transition-all border font-sans-custom ${
                      preferredDay === 'weekday'
                        ? 'bg-[#4e5e20] text-white border-[#4e5e20] shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    Mon - Fri • Weekday Buffet
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPreferredDay('weekend')}
                    className={`px-6 py-3 rounded-xl text-xs font-bold transition-all border font-sans-custom ${
                      preferredDay === 'weekend'
                        ? 'bg-[#4e5e20] text-white border-[#4e5e20] shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    Sat - Sun • Weekend Grand Feast
                  </motion.button>
                </div>
              </div>

              {/* Kitchen Notes */}
              <div className="flex flex-col gap-2.5 text-left">
                <label className="text-stone-500 tracking-wider uppercase text-[10px] font-bold">Tell The Kitchen Anything</label>
                <textarea 
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Vegan, no dairy, celebrating an anniversary, allergic to shellfish..." 
                  className="w-full bg-[#fdfaf6] border border-stone-200 focus:border-[#e65c38] rounded-xl p-4 h-24 resize-none text-stone-900 outline-none transition-colors text-sm font-sans-custom"
                />
              </div>

              {/* Main Submit Action */}
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#e65c38] hover:bg-[#d04b27] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 font-sans-custom w-full cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                </svg>
                Reserve Your Buffet Table
              </motion.button>

              {/* Action Link to PDF Menu */}
              <div className="text-center mt-2">
                <a 
                  href="#pdf-menu" 
                  className="font-sans-custom text-xs font-bold text-stone-500 hover:text-[#e65c38] underline decoration-stone-300 transition-colors"
                >
                  Just Browsing the Menu — download PDF
                </a>
              </div>

            </form>
          </div>

        </motion.div>

      </div>
    </section>
  );
}