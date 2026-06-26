'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  {
    id: 1,
    title: 'SAKURA MOCKTAIL',
    description: 'Fresh tuna blended with chili mayo.',
    price: '$15.00',
    rating: 4.8,
    reviews: 40,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'GARLIC BUTTER',
    description: 'Creamy mixed with lime dressing.',
    price: '$16.00',
    rating: 4.8,
    reviews: 40,
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'TERIYAKI SALMON',
    description: 'Fresh teriyaki glazed salmon with seasonal herbs.',
    price: '$15.00',
    rating: 4.8,
    reviews: 40,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'GRILLED LAMB CHOPS',
    description: 'Succulent lamb chops grilled with rosemary infusion.',
    price: '$13.00',
    rating: 4.8,
    reviews: 40,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'TIRAMISU FUSION',
    description: 'Classic Italian tiramisu with a modern tropical twist.',
    price: '$15.00',
    rating: 4.8,
    reviews: 40,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
  },
];

// Helper to render the 5-star rating graphic
const Stars = () => (
  <div className="flex items-center gap-0.5 justify-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-3.5 h-3.5 brand-lab-text fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Framer Motion Variants for Staggered Viewport Reveal
const revealContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1], // Deceleration curve
    },
  },
};

export default function MenuDish() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full bg-[#fef6df] py-16 px-4 md:px-8 lg:px-16 text-stone-900 select-none overflow-hidden">
      
      {/* Scope-contained style block for custom Anton & Montserrat typography and LAB colors */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600;700&display=swap');
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
        .brand-color-hover-text:hover {
          color: #fbbf24 !important;
          color: lab(72.7183% 31.8672 97.9407) !important;
        }
      ` }} />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Block with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="flex flex-col max-w-[600px] sm:max-w-[1400px] md:max-w-[1500px]">
            <span className="text-[#E65C38] font-bold text-xs tracking-widest uppercase font-sans-custom block mb-3">
              Explore
            </span>
            
            <h2 className="font-heavy text-[45px] sm:text-[60px] text-stone-950 uppercase leading-[0.95] mb-4 tracking-[0.01rem]">
              Menus
            </h2>

            <p className="font-sans-custom text-[15px] text-stone-500 font-semibold leading-relaxed mt-2">
              Explore a selection of carefully crafted dishes inspired by tradition and elevated with a modern touch.
            </p>
          </div>
        </motion.div>

        {/* Responsive Flex/Grid Layout with Staggered Children */}
        <div className="flex flex-col gap-8">
          
          {/* Row 1: 3 Columns */}
          <motion.div 
            variants={revealContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuItems.slice(0, 3).map((item) => (
              <motion.div key={item.id} variants={revealItemVariants}>
                <MenuItemCard 
                  item={item} 
                  isHovered={hoveredId === item.id}
                  onHover={setHoveredId}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2: 2 Columns */}
          <motion.div 
            variants={revealContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-[66%] lg:mx-auto lg:w-full"
          >
            {menuItems.slice(3, 5).map((item) => (
              <motion.div key={item.id} variants={revealItemVariants}>
                <MenuItemCard 
                  item={item} 
                  isHovered={hoveredId === item.id}
                  onHover={setHoveredId}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

// Individual card component with hover mechanics
function MenuItemCard({ item, isHovered, onHover }) {
  return (
    <div 
      className="relative flex flex-col group cursor-pointer transition-all duration-500 ease-out"
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0px)',
      }}
    >
      {/* Base Card Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-md min-h-[450px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-[900ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle Dark Overlay on hover to emphasize details */}
        <div 
          className="absolute inset-0 bg-black/10 transition-opacity duration-500 pointer-events-none" 
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>

      {/* Base Card Metadata */}
      <div className="mt-4 flex flex-col gap-1 border-b border-stone-200 pb-3">
        <h3 className="font-heavy text-2xl text-stone-950 uppercase tracking-wide leading-none mb-1 transition-colors duration-300 group-hover:text-[#E65C38]">
          {item.title}
        </h3>
        <p className="font-sans-custom text-sm font-bold text-stone-700 leading-none">
          {item.price}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <Stars />
          <span className="font-sans-custom text-xs font-semibold text-stone-600">
            {item.rating} Stars ({item.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Floating details overlay on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: '-45%', x: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
            exit={{ opacity: 0, scale: 0.96, y: '-45%', x: '-50%' }}
            transition={{ 
              type: 'spring',
              stiffness: 300,
              damping: 24,
            }}
            className="absolute top-1/2 left-1/2 w-[88%] bg-white rounded-2xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.18)] z-20 flex flex-col items-center text-center border border-stone-100/50"
          >
            {/* Title */}
            <h4 className="font-heavy text-2xl text-stone-950 uppercase tracking-wide leading-none mb-2">
              {item.title}
            </h4>
            
            {/* Description */}
            <p className="font-sans-custom text-[12px] text-stone-500 font-semibold leading-relaxed mb-4 max-w-[90%]">
              {item.description}
            </p>

            {/* Inset Miniature Image */}
            <div className="relative w-28 h-20 rounded-xl overflow-hidden mb-4 bg-stone-50 shadow-inner">
              <Image
                src={item.image}
                alt={`${item.title} thumbnail`}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>

            {/* Price */}
            <p className="font-sans-custom text-lg font-bold text-stone-950 mb-2">
              {item.price}
            </p>

            {/* Action button */}
            <div className="inline-flex self-center backdrop-blur-md rounded-full p-1 shadow-md pointer-events-auto">
              <Link
                href="/menu"
                className="group bg-[#E75B44] hover:bg-[#d14b35] text-white text-[11px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200"
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
            </div>

            {/* Ratings inside Hover Card */}
            <div className="flex items-center gap-1.5 mt-1 border-t border-stone-100 pt-3 w-full justify-center">
              <Stars />
              <span className="font-sans-custom text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                {item.rating} Stars ({item.reviews} reviews)
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}