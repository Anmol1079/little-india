'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '../common/SectionHeader';

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

/** Turn a file path into a readable dish name, e.g. allu-tikki.jpg → Allu Tikki */
function nameFromSrc(src) {
  if (!src) return '';
  const file = src.split('/').pop() || '';
  const base = file
    .replace(/\.(jpg|jpeg|png|webp|avif|gif)(\.webp)?$/i, '')
    .replace(/-little-india.*$/i, '')
    .replace(/-scaled$/i, '')
    .replace(/[_-]+/g, ' ')
    .trim();
  if (!base || /^photo-/i.test(base)) return '';
  return base.replace(/\b\w/g, (c) => c.toUpperCase());
}

function withDishName(item) {
  return {
    ...item,
    title: item.title || nameFromSrc(item.src) || 'Signature Dish',
  };
}

// Detailed Image Databases for every single album category
const ALBUM_IMAGES = {
  "appetizers": [
    { src: "/gallery/appetizers/allu-tikki.jpg", title: "Allu Tikki" },
    { src: "/gallery/appetizers/calamari.jpg", title: "Calamari" },
    { src: "/gallery/appetizers/chicken-pakora.jpg", title: "Chicken Pakora" },
    { src: "/gallery/appetizers/coconut-shrimp.jpg", title: "Coconut Shrimp" },
    { src: "/gallery/appetizers/jaipuri-samosa.jpg", title: "Jaipuri Samosa" },
    { src: "/gallery/appetizers/onion-bhaji.jpg", title: "Onion Bhaji" },
    { src: "/gallery/appetizers/paneer-chilli.jpg.webp", title: "Paneer Chilli" },
    { src: "/gallery/appetizers/punjabi-samosa.jpg", title: "Punjabi Samosa" },
    { src: "/gallery/appetizers/tandoori-wings.jpg", title: "Tandoori Wings" },
    { src: "/gallery/appetizers/vegetable-pakora.jpg", title: "Vegetable Pakora" },
    { src: "/gallery/appetizers/momo.jpg.webp", title: "Momo" },
  ].map(withDishName),
  "entrees-from-clay-oven": [
    { src: "/menu/tandoori-mixed-grill-little-india-belmar-scaled.webp", title: "Tandoori Mixed Grill" },
    { src: "/menu/seekh-kabob-little-india-belmar.webp", title: "Seekh Kabob" },
    { src: "/menu/chicken-tikka-little-india-belmar-scaled.webp", title: "Chicken Tikka" },
    { src: "https://images.unsplash.com/photo-1610057099443-fde8c4d90ef8?auto=format&fit=crop&w=800&q=80", title: "Tandoori Chicken" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80", title: "Clay Oven Special" },
    { src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80", title: "Paneer Tikka" },
  ].map(withDishName),
  "family-package": [
    { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80", title: "Family Feast Platter" },
    { src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80", title: "Vegetarian Family Pack" },
    { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80", title: "Shared Curry Spread" },
    { src: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80", title: "Naan & Curry Combo" },
    { src: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80", title: "Biryani Family Pack" },
    { src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80", title: "Thali Experience" },
  ].map(withDishName),
  "naan": [
    { src: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80", title: "Garlic Naan" },
    { src: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80", title: "Butter Naan" },
    { src: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80", title: "Plain Naan" },
    { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80", title: "Peshwari Naan" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80", title: "Cheese Naan" },
    { src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80", title: "Onion Kulcha" },
  ].map(withDishName),
  "side-orders": [
    { src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80", title: "Raita" },
    { src: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80", title: "Mango Chutney" },
    { src: "https://images.unsplash.com/photo-1605333396515-47b577803e51?auto=format&fit=crop&w=800&q=80", title: "Papadum" },
    { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80", title: "Mixed Pickles" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80", title: "Mint Chutney" },
    { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80", title: "Basmati Rice" },
  ].map(withDishName),
  "soup-and-salads": [
    { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80", title: "Garden Salad" },
    { src: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80", title: "Kachumber Salad" },
    { src: "https://images.unsplash.com/photo-1605333396515-47b577803e51?auto=format&fit=crop&w=800&q=80", title: "Dal Soup" },
    { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80", title: "Tomato Shorba" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80", title: "Chicken Soup" },
    { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80", title: "House Salad" },
  ].map(withDishName),
};

const ALBUM_METADATA = {
  "appetizers": { title: "Appetizers", desc: "A colorful, crisp selection of our popular, authentic pan-fried starters." },
  "entrees-from-clay-oven": { title: "Clay Oven Specialties", desc: "Tandoori skewers and mixed grills roasted over 100% wood charcoal." },
  "family-package": { title: "Family Packages", desc: "Generous communal feasts structured for sharing with your loved ones." },
  "naan": { title: "Naans & Breads", desc: "Blistered flatbreads, hand-slapped and cured in our clay ovens." },
  "side-orders": { title: "Sides & Accompaniments", desc: "Fresh cooling sauces, chutneys, papadums, and house pickles." },
  "soup-and-salads": { title: "Soups & Salads", desc: "Clear lentil-broths and freshly chopped garden salads." }
};

export default function AlbumPage({ category, className = '' }) {
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

  const activeImage = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <section className={`w-full bg-[#FAF5EF] text-[#0C0B0A] overflow-hidden min-h-screen pb-12 md:pb-16 ${className}`.trim()}>

      {/* --- HERO BANNER & BREADCRUMB --- */}
      <div className="max-w-[1450px] mx-auto px-6 pb-6 flex flex-col gap-5 text-left">
        
        <SectionHeader
          as="h1"
          theme="accent"
          label="Visual Feast"
          title={meta.title}
          description={meta.desc}
          className="mb-0 max-w-[1400px] relative z-10"
          labelClassName="text-[13px] sm:text-[14px]"
          titleClassName="sm:text-[56px] leading-[1.05] max-w-5xl text-black"
          descriptionClassName="text-[15px] sm:text-[17px]"
        />
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
              {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-5 pb-4 pt-10 pointer-events-none">
                <p className="text-white text-[15px] sm:text-base font-bold leading-snug">
                  {img.title}
                </p>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- PREMIUM LIGHTBOX SYSTEM --- */}
      <AnimatePresence>
        {lightboxIndex !== null && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D0C0A]/95 backdrop-blur-md cursor-zoom-out"
          >
            
            {/* CLOSE BUTTON */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
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
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[70vh] aspect-video px-6 cursor-default"
            >
              <img
                src={activeImage.src}
                alt={activeImage.title || `${meta.title} - Image ${lightboxIndex + 1}`}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"; }}
              />
            </motion.div>

            {/* Slide Details — dish name above IMAGE X OF Y */}
            <div 
              className="mt-8 text-center text-white px-6 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-2">
                {activeImage.title}
              </h2>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C59B27] block">
                IMAGE {lightboxIndex + 1} OF {images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
