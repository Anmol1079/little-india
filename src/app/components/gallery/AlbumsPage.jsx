'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Easing definition
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Animation variants
const revealContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

// Detailed Image Databases for every single album category
const ALBUM_IMAGES = {
  "appetizers": [
    { src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80" }
  ],
  "entrees-from-clay-oven": [
    { src: "/menu/tandoori-mixed-grill-little-india-belmar-scaled.jpg" },
    { src: "/menu/seekh-kabob-little-india-belmar.jpg" },
    { src: "/menu/chicken-tikka-little-india-belmar-scaled.jpg" },
    { src: "https://images.unsplash.com/photo-1610057099443-fde8c4d90ef8?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80" }
  ],
  "family-package": [
    { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80" }
  ],
  "naan": [
    { src: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80" }
  ],
  "side-orders": [
    { src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1605333396515-47b577803e51?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80" }
  ],
  "soup-and-salads": [
    { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1605333396515-47b577803e51?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80" },
    { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80" }
  ]
};

const ALBUM_METADATA = {
  "appetizers": { title: "Appetizers Gallery", desc: "A colorful, crisp selection of our popular, authentic pan-fried starters." },
  "entrees-from-clay-oven": { title: "Clay Oven Specialties", desc: "Tandoori skewers and mixed grills roasted over 100% wood charcoal." },
  "family-package": { title: "Family Packages", desc: "Generous communal feasts structured for sharing with your loved ones." },
  "naan": { title: "Naans & Breads", desc: "Blistered flatbreads, hand-slapped and cured in our clay ovens." },
  "side-orders": { title: "Sides & Accompaniments", desc: "Fresh cooling sauces, chutneys, papadums, and house pickles." },
  "soup-and-salads": { title: "Soups & Salads", desc: "Clear lentil-broths and freshly chopped garden salads." }
};

export default function AlbumPage({ category }) {
  const images = ALBUM_IMAGES[category] || ALBUM_IMAGES["appetizers"];
  const meta = ALBUM_METADATA[category] || ALBUM_METADATA["appetizers"];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Keyboard navigation for Lightbox (Left / Right Arrow, Escape)
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') setLightboxIndex((lightboxIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, images]);

  return (
    <section className="w-full bg-[#FAF5EF] text-[#0C0B0A] font-sans overflow-hidden min-h-screen pb-12 md:pb-16">

      {/* --- HERO BANNER & BREADCRUMB --- */}
      <div className="max-w-[1450px] mx-auto px-6 pt-12 md:pt-16 pb-6 flex flex-col gap-5 text-left">
        
        <motion.div
          variants={revealContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-[1400px] flex flex-col items-baseline gap-5 relative z-10"
        >
          <span className="text-[#e65c38] font-bold text-[13px] sm:text-[14px] tw-[0.25em] up font-gallery-sans block text-transform uppercase tw-wider">
            Visual Feast
          </span>
          <h1 className="font-gallery-title font-black text-[40px] sm:text-[60px] lg:text-[60px] leading-[1.05] up tw-wide max-w-5xl text-black">
            {meta.title}
          </h1>
          <p className="font-gallery-sans text-[15px] sm:text-[17px] text-[#333] leading-relaxed max-w-2xl font-medium">
            {meta.desc}
          </p>
        </motion.div>
      </div>

      {/* --- ALBUM IMAGES GRID --- */}
      <div className="max-w-[1450px] mx-auto px-6 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[2rem] overflow-hidden border border-stone-200/40 bg-white group cursor-pointer shadow-md"
              onClick={() => setLightboxIndex(idx)}
            >
              <img
                src={img.src}
                alt={img.title || `${meta.title} - Image ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-103"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"; }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- PREMIUM LIGHTBOX SYSTEM --- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)} // Clicking outside on the dark backdrop closes it
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D0C0A]/95 backdrop-blur-md cursor-zoom-out"
          >
            
            {/* CLOSE BUTTON */}
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Prevents close event collision with backdrop click
                setLightboxIndex(null);
              }}
              className="fixed top-[86px] right-6 md:top-[86px] md:right-8 z-[200] bg-black/70 hover:bg-[#E94222] rounded-full p-4 hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl border border-white/10 cursor-pointer flex items-center justify-center"
              aria-label="Close Lightbox"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="3" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Nav Arrow: Left */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 bg-black/40 text-white rounded-full p-3.5 hover:bg-[#e65c38] transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="#ffffff" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            {/* Nav Arrow: Right */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % images.length);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-black/40 text-white rounded-full p-3.5 hover:bg-[#e65c38] transition-all cursor-pointer"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="#ffffff" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Central Focal Image Display */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: cubicBezierEase }}
              onClick={(e) => e.stopPropagation()} // Stop propagation so clicking inside the image area doesn't close backdrop
              className="relative w-full max-w-4xl max-h-[70vh] aspect-video px-6 cursor-default"
            >
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].title || `${meta.title} - Image ${lightboxIndex + 1}`}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"; }}
              />
            </motion.div>

            {/* Slide Details */}
            <div 
              className="mt-8 text-center text-white px-6 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs up font-bold tw-[0.2em] text-[#C59B27] font-album-sans tw-widest block uppercase">
                IMAGE {lightboxIndex + 1} OF {images.length}
              </span>
              {/* <h2 className="text-xl sm:text-2xl font-album-title font-black up tw-wide mt-1">
                {images[lightboxIndex].title || `${meta.title} #${lightboxIndex + 1}`}
              </h2> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}