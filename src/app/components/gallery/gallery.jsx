'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '../common/SectionHeader';

// Dynamic Gallery Categories
const GALLERY_CATEGORIES = [
  {
    id: "appetizers",
    title: "Appetizers",
    category: "appetizers",
    desc: "Crispy, flavorful starters to begin your journey.",
    image: "/gallery/appetizers.webp",
    fallbackImage: "/gallery/appetizers.webp",
    count: "6 Photos",
    url: "/gallery/appetizers"
  },
  {
    id: "entrees-from-clay-oven",
    title: "Entrées From Clay Oven",
    category: "curries",
    desc: "Slow-cooked to perfection in traditional clay oven.",
    image: "/gallery/entrees.webp",
    fallbackImage: "/gallery/entrees.webp",
    count: "8 Photos",
    url: "/gallery/entrees-from-clay-oven"
  },
  {
    id: "family-package",
    title: "Family Packages",
    category: "curries",
    desc: "Perfectly portioned feasts for sharing.",
    image: "/gallery/veg-family-pack-1.webp",
    fallbackImage: "/gallery/veg-family-pack-1.webp",
    count: "9 Photos",
    url: "/gallery/family-package"
  },
  {
    id: "naan",
    title: "Naan & Flatbreads",
    category: "breads",
    desc: "Freshly baked breads, the perfect companion.",
    image: "/gallery/naan.webp",
    fallbackImage: "/gallery/naan.webp",
    count: "5 Photos",
    url: "/gallery/naan"
  },
  {
    id: "side-orders",
    title: "Sides & Condiments",
    category: "sides",
    desc: "The little extras that complete every meal.",
    image: "/gallery/side-orders.webp",
    fallbackImage: "/gallery/side-orders.webp",
    count: "6 Photos",
    url: "/gallery/side-orders"
  },
  {
    id: "soup-and-salads",
    title: "Soups & Salads",
    category: "soups",
    desc: "Light, healthy and full of goodness.",
    image: "/gallery/soup-and-salads.webp",
    fallbackImage: "/gallery/soup-and-salads.webp",
    count: "7 Photos",
    url: "/gallery/soup-and-salads"
  },
  {
    id: "speciality",
    title: "Speciality",
    category: "speciality",
    desc: "Sweet endings to a memorable experience.",
    image: "/gallery/specialty.webp",
    fallbackImage: "/gallery/specialty.webp",
    count: "6 Photos",
    url: "/gallery/speciality"
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    category: "vegetarian",
    desc: "Sweet endings to a memorable experience.",
    image: "/gallery/vegetarian.webp",
    fallbackImage: "/gallery/vegetarian.webp",
    count: "6 Photos",
    url: "/gallery/vegetarian"
  }
];

const cubicBezierEase = [0.16, 1, 0.3, 1];

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

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // Active state managing dynamic layouts

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredCategories = GALLERY_CATEGORIES.filter((cat) => {
    if (filter === 'all') return true;
    return cat.category === filter || cat.id === filter;
  });

  return (
    <section className="w-full bg-[#FFF6EA] text-[#FAF6EE] overflow-hidden min-h-screen pb-16 pt-32 md:pt-36">
      


      {/* --- HERO HEADER --- */}
      <div className="w-full px-6 md:px-12 lg:px-20 text-left relative">
        
        {/* Transparent Gold Mandala Overlay */}
        {/* <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
          <svg className="w-[650px] h-[600px] fill-current text-[#C59B27]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div> */}

        <SectionHeader
          as="h1"
          theme="accent"
          label="Visual Feast"
          title="Our Culinary Gallery"
          description="Explore our diverse visual menu. Click on any category below to enter its dedicated high-resolution photo collection."
          className="mb-0 max-w-[1400px] relative z-10 mx-auto"
          labelClassName="text-[13px] sm:text-[14px]"
          titleClassName="sm:text-[56px] leading-[1.05] max-w-5xl text-black"
          descriptionClassName="text-[15px] sm:text-[17px]"
        />
      </div>

      {/* --- FILTER & VIEWS ROW --- */}
      {/* <div className="max-w-[1450px] mx-auto px-6 pt-6 flex flex-col xl:flex-row items-center justify-between pb-6 gap-6">
        
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-stone-900/90 rounded-full font-gallery-sans text-[11px] sm:text-[12px] font-bold border border-white/5 shadow-inner">
          {[
            { id: "all", label: "ALL ALBUMS" },
            { id: "curries", label: "CURRIES & ENTREES" },
            { id: "breads", label: "BREADS" },
            { id: "sides", label: "SIDES & SALADS" },
            { id: "soups", label: "SOUPS" },
            { id: "appetizers", label: "APPETIZERS" },
            { id: "desserts", label: "DESSERTS" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFilterChange(tab.id)}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 up tw-wider ${filter === tab.id ? 'bg-[#c13419] text-white shadow-md' : 'text-stone-400 hover:text-stone-200'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-stone-800 bg-stone-900/80 p-1.5 rounded-full">
           
            <button 
              onClick={() => setViewMode('grid')}
              className={`w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${viewMode === 'grid' ? 'bg-white text-[#c13419]' : 'text-white hover:text-[#c13419]'}`} 
              aria-label="Grid view"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
      
            <button 
              onClick={() => setViewMode('list')}
              className={`w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${viewMode === 'list' ? 'bg-white text-[#c13419]' : 'text-white hover:text-[#c13419]'}`} 
              aria-label="List view"
            >
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div> */}

      {/* --- GRID OF ALBUMS (Interactive Toggle Grid / List System) --- */}
      <div className="max-w-[1450px] mx-auto px-6 pt-10">
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            /* --- LAYOUT 1: GRID MODE --- */
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: cubicBezierEase }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch w-full"
            >
              {filteredCategories.map((cat) => (
                <div
                  key={cat.id}
                  className={`relative overflow-hidden rounded-[2rem] border border-stone-800/80 bg-stone-950 group cursor-pointer shadow-2xl transition-colors duration-300 ${cat.id === "desserts" ? "md:col-span-2 h-[340px]" : "h-[300px] sm:h-[350px] md:h-[400px] "}`}
                >
                  <Link href={cat.url} className="absolute inset-0 z-35"></Link>

                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.88] saturate-[1.03] transition-transform duration-1000 ease-out scale-110 group-hover:scale-115"
                    onError={(e) => { if (cat.fallbackImage) e.currentTarget.src = cat.fallbackImage; }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-black/65 backdrop-blur-md border-t border-white/5 py-6 px-8 flex justify-between items-center z-10 transition-colors duration-300 group-hover:bg-[#121110]/85">
                    <div className="flex flex-col text-left gap-1">
                      <h2 className="font-gallery-title font-bold text-[18px] sm:text-[20px] text-white up leading-none group-hover:text-[#C59B27] transition-colors duration-300">
                        {cat.title}
                      </h2>
                      <p className="font-gallery-sans text-[12px] sm:text-[13px] text-stone-400 leading-none mt-1 font-normal">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-gallery-sans text-[11px] sm:text-[12px] font-bold text-[#C59B27] up tw-widest shrink-0">
                        {cat.count}
                      </span>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C59B27]/40 flex items-center justify-center text-[#C59B27] shrink-0 group-hover:bg-[#C59B27] group-hover:text-[#0D0C0A] transition-all duration-300 shadow-lg">
                        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* --- LAYOUT 2: LIST MODE --- */
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: cubicBezierEase }}
              className="flex flex-col gap-4 w-full"
            >
              {filteredCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="relative overflow-hidden rounded-[1.5rem] border border-stone-850 bg-stone-900/90 p-4 flex flex-col sm:flex-row items-center justify-between gap-6 group cursor-pointer hover:border-[#C59B27]/40 transition-colors duration-300"
                >
                  <Link href={cat.url} className="absolute inset-0 z-35"></Link>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
                    {/* List image thumbnail */}
                    <div className="relative w-full sm:w-44 h-28 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="absolute inset-0 w-full h-full object-cover filter brightness-[0.9] transition-transform duration-700 ease-out group-hover:scale-103"
                        onError={(e) => { if (cat.fallbackImage) e.currentTarget.src = cat.fallbackImage; }}
                      />
                    </div>
                    
                    {/* List Text descriptions */}
                    <div className="flex flex-col text-left gap-1">
                      <h3 className="font-gallery-title font-bold text-[18px] sm:text-[20px] text-white up leading-none group-hover:text-[#C59B27] transition-colors duration-300">
                        {cat.title}
                      </h3>
                      <p className="font-gallery-sans text-[12.5px] sm:text-[13.5px] text-stone-400 mt-1 leading-snug font-normal">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  {/* List metadata counts & Symmetrical Golden Hover circle */}
                  <div className="flex items-center gap-4 shrink-0 pr-4">
                    <span className="font-gallery-sans text-[11px] sm:text-[12px] font-bold text-[#C59B27] up tw-widest leading-none">
                      {cat.count}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C59B27]/40 flex items-center justify-center text-[#C59B27] group-hover:bg-[#C59B27] group-hover:text-[#0D0C0A] transition-all duration-300 shadow-md">
                      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}