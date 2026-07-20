"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MegaHeader from '../components/headers/MegaHeader';
import FooterWithCta from '../components/footer/FooterWithCta';

// Sourcing categories with signature images from your MENU_CATEGORIES data
const CATEGORIES_CONFIG = {
  'appetizer': {
    name: 'Appetizer',
    desc: 'Crispy starters, golden fritters, and clay tandoor-fired bites to begin your feast.',
    image: '/menu/chicken-zinger-kabob-little-india-belmar.jpg',
    dishCount: 2,
  },
  'biryani': {
    name: 'Biryani',
    desc: 'Fragrant basmati rice slow-cooked with aromatic spices, fresh herbs, and tender paneer or chicken.',
    image: '/menu/chicken-tikka-little-india-belmar-scaled.jpg',
    dishCount: 2,
  },
  'tandoori-specialties': {
    name: 'Tandoori Specialties',
    desc: 'Marinated meats, skewered seafood, and paneer roasted to perfection in our traditional tandoor.',
    image: '/menu/seekh-kabob-little-india-belmar.jpg',
    dishCount: 2,
  },
  'soup-and-salad': {
    name: 'Soup & Salad',
    desc: 'Light house bowls, cooling sides, and fish steaks cooked tandoori-style.',
    image: '/menu/fish-tandoori-scaled.jpg',
    dishCount: 2,
  },
  'non-veg-entrees': {
    name: 'Non-Veg Entrees',
    desc: 'Rich, slow-simmered classic butter chicken and succulent braised lamb shoulder curries.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  },
  'vegetarian-entrees': {
    name: 'Vegetarian Entrees',
    desc: 'Nourishing cottage cheese tikka masala and overnight slow-cooked dal makhani.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  },
  'specialty-entrees': {
    name: 'Specialty Entrees',
    desc: 'Goan coconut milk fish curries and juicy chicken strips simmered in savory mango glaze.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  },
  'oven-hot-breads': {
    name: 'Oven Hot Breads',
    desc: 'Soft flatbreads, minced garlic naans, and sweet Peshwari stuffings baked fresh in the tandoor.',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  },
  'side-orders': {
    name: 'Side Orders',
    desc: 'Sweet-tangy mango chutneys and cool whisked yogurts blended with spices to balance your curry.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  },
  'desserts': {
    name: 'Desserts',
    desc: 'Warm cardamom milk balls, sweet kulfi ice creams, and traditional treats.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function MenuPage() {
  const [hoveredSlug, setHoveredSlug] = useState(null);

  return (
    <>
      <MegaHeader />

      <section className="w-full bg-[#fff6ea] py-30 md:pb-16 pb-12 px-6 md:px-12 lg:px-20 text-stone-900 font-[family-name:var(--font-inter)] min-h-screen">
        <div className="max-w-[1500px] mx-auto">
          
          {/* Header Block */}
          <div className="flex flex-col mb-10 max-w-[800px]">
            <span className="text-[#B83A18] font-bold text-xs md:text-sm tw-[0.25em] block mb-3">
              Explore Offerings
            </span>
            <h1 className="font-black text-[40px] sm:text-[60px] lg:text-[60px] text-stone-950 leading-[1.1] tw-wide mb-4">
              Our Menu Categories
            </h1>
            <p className="text-[16px] md:text-[18px] text-stone-500 font-semibold leading-relaxed">
              Select a category below to explore traditional North Indian curries, fresh tandoori specialities, and oven-hot clay breads.
            </p>
          </div>

          {/* Categories Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch"
          >
            {Object.entries(CATEGORIES_CONFIG).map(([slug, cat]) => (
              <motion.div
                key={slug}
                variants={itemVariants}
                onMouseEnter={() => setHoveredSlug(slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                className="relative bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/50 flex flex-col justify-between p-5 transition-all duration-500 ease-out h-full hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
                style={{
                  transform: hoveredSlug === slug ? 'translateY(-4px)' : 'translateY(0px)',
                }}
              >
                <div>
                  {/* Category Image Wrapper */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-sm mb-5">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#B83A18] tw-wider shadow-sm">
                      {cat.dishCount} {cat.dishCount === 1 ? 'Dish' : 'Dishes'}
                    </div>
                  </div>

                  {/* Category Text */}
                  <h2 className="font-black text-xl text-stone-950 tw-wide mb-2 ">
                    {cat.name}
                  </h2>
                  <p className="text-[13px] text-stone-500 font-medium leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                {/* View Dishes Link Button (Corrected Placement & Href) */}
                <div className=" justify-center">
                  <Link
                    href={`/menu/${slug}`}
                    className="group bg-[#E75B44] hover:bg-[#d14b35] text-white text-[11px] font-bold twst px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 w-full justify-center"
                  >
                    <span>VIEW CATEGORY</span>
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
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <FooterWithCta />
    </>
  );
}