'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DRINK_SPECIALS = [
  {
    id: 'drink-1',
    title: 'Mixed Drinks',
    price: '$5',
    description: 'Breckenridge Vodka • Jim Beam Bourbon • Sauza Tequila',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'drink-2',
    title: 'Craft Cocktails',
    price: '$6',
    description: 'Moscow Mule • Signature Margarita',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'drink-3',
    title: 'Draft Beers',
    price: '$5',
    description: 'Trumer Pils • Indian Bottle Beers',
    image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'drink-4',
    title: 'House Wine',
    price: '$6',
    description: 'Imported Red & White selection directly from Indian Estates',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'drink-5',
    title: 'Mango Lassi Shakes',
    price: '$4',
    description: 'Traditional mango yogurt shake blended fresh with cardamom',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80'
  }
];

const FOOD_SPECIALS = [
  {
    id: 'food-1',
    title: 'Vegetable Samosa',
    price: '$5',
    description: 'Deep-fried pastries stuffed with spiced potato & peas.',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'food-2',
    title: 'Onion Bhaji',
    price: '$4',
    description: 'Crispy onion fritters in spiced chickpea batter.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'food-3',
    title: 'Chicken Pakora',
    price: '$6',
    description: 'Crispy fried chicken in spiced chickpea batter.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'food-4',
    title: 'Tandoori Wings',
    price: '$8',
    description: 'Smoky tandoori wings grilled in traditional clay oven.',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80'
  }
];

// Custom Deceleration Cubic-Bezier Easing (Smooth slow-out)
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Animation Configurations
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

const headerItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

const panelLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: cubicBezierEase },
  },
};

const panelRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: cubicBezierEase },
  },
};

export default function HappyHourSection() {
  const [activeDrink, setActiveDrink] = useState(1); // Default to Cocktails
  const [activeFood, setActiveFood] = useState(0);   // Default to Samosas

  return (
    <section className="w-full bg-[#fbf9f6] py-20 px-6 md:px-12 lg:px-20 text-stone-900 select-none overflow-hidden border-b border-stone-200">
      
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
      />

      <div className="max-w-[1500px] mx-auto flex flex-col gap-12 relative">
        
        {/* TOP SECTION: Header Info */}
        <motion.div 
          variants={revealContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col text-center w-full pb-10 border-b border-stone-200/40 relative"
        >
          {/* Integrated Tagline & Timing details */}
          <motion.span 
            variants={headerItemVariants}
            className="text-[#E75B44] font-bold text-xs sm:text-[13px] tracking-[0.15em] uppercase font-sans block mb-3"
          >
            MON – FRI • 3:00 PM – 5:00 PM
          </motion.span>

          {/* Clean bold header using layout's Inter */}
          <motion.h2 
            variants={headerItemVariants}
            className="font-title font-black text-5xl sm:text-6xl lg:text-[68px] leading-none text-stone-950 tracking-tight mb-4"
          >
            Happy Hour
          </motion.h2>

          {/* Subtitle using layout's Plus Jakarta Sans */}
          <motion.p 
            variants={headerItemVariants}
            className="font-sans font-semibold text-[14.5px] leading-relaxed text-stone-500 max-w-[1500px]"
          >
            Good drinks. Great bites. Even better company. Unwind in a warm and inviting atmosphere where every sip and every flavor is crafted to elevate your evening experience.
          </motion.p>
        </motion.div>

        {/* 1. Large Widescreen Banner Container */}
        {/* <div className="w-full h-[280px] sm:h-[380px] md:h-[460px] rounded-[2rem] overflow-hidden mb-16 shadow-[0_15px_50px_rgba(0,0,0,0.04)] relative">
          <img 
            src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1600&q=80"
            alt="Signature aesthetic Happy Hour drinks and food"
            className="w-full h-full object-cover object-center pointer-events-none"
          />
        </div> */}

        {/* ================= SECTION 1: DRINK SPECIALS (Image Right) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-center">
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-8 border-b border-stone-100 pb-4">
              <div className="w-10 h-10 bg-[#e94222] text-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <i className="fa-solid fa-glass-martini-alt text-sm"></i>
              </div>
              <h3 className="font-title font-black text-3xl sm:text-4xl uppercase tracking-tight text-stone-950">
                Drink Specials
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {DRINK_SPECIALS.map((item, idx) => (
                <div 
                  key={item.id}
                  onMouseEnter={() => setActiveDrink(idx)}
                  className="flex justify-between items-start gap-6 cursor-pointer group pb-1.5"
                >
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <h4 className="font-sans font-bold text-[16px] sm:text-[17px] text-stone-900 group-hover:text-[#E75B44] transition-colors duration-200">
                      {item.name || item.title}
                    </h4>
                    <p className="font-sans text-[13px] sm:text-[14px] text-stone-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-sans font-bold text-[15px] sm:text-[16px] text-stone-900 shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Container - With Stacked Preloaded Opacity Crossfade */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[500px] overflow-hidden rounded-3xl shadow-lg bg-stone-100">
            <div className="relative w-full h-full">
              {DRINK_SPECIALS.map((item, idx) => (
                <img 
                  key={idx}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    activeDrink === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
            {/* Absolute Label Overlap */}
            <span className="absolute top-4 left-4 z-20 bg-[#e94222] text-white font-bold text-[11px] tracking-widest uppercase py-1.5 px-3 rounded shadow-md font-sans">
              {DRINK_SPECIALS[activeDrink].title}
            </span>
          </div>
        </div>

        {/* ================= HORIZONTAL SEPARATOR LINE ================= */}
        <hr className="border-stone-200/50 w-full" />

        {/* ================= SECTION 2: FOOD SPECIALS (Image Left) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-center">
          {/* Left Image Container - With Stacked Preloaded Opacity Crossfade */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[500px] overflow-hidden rounded-3xl shadow-lg bg-stone-100 lg:order-1 order-2">
            <div className="relative w-full h-full">
              {FOOD_SPECIALS.map((item, idx) => (
                <img 
                  key={idx}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    activeFood === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
            {/* Absolute Label Overlap */}
            <span className="absolute top-4 left-4 z-20 bg-[#e94222] text-white font-bold text-[11px] tracking-widest uppercase py-1.5 px-3 rounded shadow-md font-sans">
              {FOOD_SPECIALS[activeFood].title}
            </span>
          </div>

          <div className="lg:col-span-7 flex flex-col lg:order-2 order-1">
            <div className="flex items-center gap-3 mb-8 border-b border-stone-100 pb-4">
              <div className="w-10 h-10 bg-[#e94222] text-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <i className="fa-solid fa-plate-wheat text-sm"></i>
              </div>
              <h3 className="font-title font-black text-3xl sm:text-4xl uppercase tracking-tight text-stone-950">
                Food Specials
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {FOOD_SPECIALS.map((item, idx) => (
                <div 
                  key={item.id}
                  onMouseEnter={() => setActiveFood(idx)}
                  className="flex justify-between items-start gap-6 cursor-pointer group pb-1.5"
                >
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <h4 className="font-sans font-bold text-[16px] sm:text-[17px] text-stone-900 group-hover:text-[#E75B44] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[13px] sm:text-[14px] text-stone-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-sans font-bold text-[15px] sm:text-[16px] text-stone-900 shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}