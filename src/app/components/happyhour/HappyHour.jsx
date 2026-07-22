'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';

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
    title: 'Chicken Ginger Kabob',
    price: '$5',
    description: 'Boneless chicken breast cubes marinated in ginger mint sauce.',
    image: '/menu/chicken-zinger-kabob-little-india-belmar.jpg'
  },
  {
    id: 'food-2',
    title: 'Tandoori Chicken',
    price: '$4',
    description: 'Bone-in marinated chicken.',
    image: '/menu/chicken-tandoori-little-india-belmar-scaled.jpg (1).webp'
  },
  {
    id: 'food-3',
    title: 'Chicken Tikka',
    price: '$6',
    description: 'Boneless marinated chicken breast cubes.',
    image: '/menu/chicken-tikka-little-india-belmar-scaled.jpg'
  },
  {
    id: 'food-4',
    title: 'Paneer Shashlik',
    price: '$8',
    description: 'Marinated paneer cubes served with masala sauce.',
    image: '/menu/paneer-shashilk-little-india-belmar-scaled.jpeg'
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

export default function HappyHourSection() {
  const [activeDrink, setActiveDrink] = useState(1); // Default to Cocktails
  const [activeFood, setActiveFood] = useState(0);   // Default to Samosas

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 text-[#333] overflow-hidden border-b border-stone-200">
      <div className="max-w-[1500px] mx-auto flex flex-col gap-12 relative">
        
        <div className="flex flex-col text-center w-full pb-10 border-b border-stone-200/40 relative">
          <SectionHeader
            align="center"
            theme="accent"
            uppercase={false}
            label="MON – FRI • 3:00 PM – 5:00 PM"
            title="Happy Hour"
            description="Good drinks. Great bites. Even better company. Unwind in a warm and inviting atmosphere where every sip and every flavor is crafted to elevate your evening experience."
            className="mb-0"
            labelClassName="text-[#E75B44]"
            titleClassName="sm:text-[56px] lg:text-[56px] leading-none"
            descriptionClassName="max-w-[1500px]"
          />
        </div>

        {/* ================= SECTION 1: DRINK SPECIALS (Image Right) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-center">
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-8 border-b border-stone-100 pb-4">
              <div className="w-10 h-10 bg-[#e94222] text-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <i className="fa-solid fa-glass-martini-alt text-sm"></i>
              </div>
              <h3 className="font-title font-bold text-3xl sm:text-4xl upp tw-tight text-stone-950">
                Drink Specials
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {DRINK_SPECIALS.map((item, idx) => (
                <div 
                  key={item.id}
                  onMouseEnter={() => setActiveDrink(idx)}
                  className="flex justify-between items-start gap-6 cursor-pointer group pb-1.5 border-b border-stone-100 pb-4"
                >
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <h4 className="font-bold text-[16px] sm:text-[17px] text-[#333] group-hover:text-[#E75B44] transition-colors duration-200">
                      {item.name || item.title}
                    </h4>
                    <p className="text-[15px] sm:text-[15px] text-stone-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-bold text-[15px] sm:text-[16px] text-[#333] shrink-0">
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
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${ activeDrink === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none' }`}
                />
              ))}
            </div>
            {/* Absolute Label Overlap */}
            <span className="absolute top-4 left-4 z-20 bg-[#e94222] text-white font-bold text-[11px] twst upp py-1.5 px-3 rounded shadow-md">
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
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${ activeFood === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none' }`}
                />
              ))}
            </div>
            {/* Absolute Label Overlap */}
            <span className="absolute top-4 left-4 z-20 bg-[#e94222] text-white font-bold text-[11px] twst upp py-1.5 px-3 rounded shadow-md">
              {FOOD_SPECIALS[activeFood].title}
            </span>
          </div>

          <div className="lg:col-span-7 flex flex-col lg:order-2 order-1">
            <div className="flex items-center gap-3 mb-8 border-b border-stone-100 pb-4">
              <div className="w-10 h-10 bg-[#e94222] text-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <i className="fa-solid fa-plate-wheat text-sm"></i>
              </div>
              <h3 className="font-title font-bold text-3xl sm:text-4xl upp tw-tight text-stone-950">
                Food Specials
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {FOOD_SPECIALS.map((item, idx) => (
                <div 
                  key={item.id}
                  onMouseEnter={() => setActiveFood(idx)}
                  className="flex justify-between items-start gap-6 cursor-pointer group pb-1.5 border-b border-stone-100 pb-4"
                >
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <h4 className="font-bold text-[16px] sm:text-[17px] text-[#333] group-hover:text-[#E75B44] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-[15px] sm:text-[15px] text-stone-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-bold text-[15px] sm:text-[16px] text-[#333] shrink-0">
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