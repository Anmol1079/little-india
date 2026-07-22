'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '../common/SectionHeader';

const MENU_CATEGORIES = {
  'Appetizer': {
    image: '/menu/chicken-zinger-kabob-little-india-belmar.jpg',
    count: 2,
    tagline: 'Savor crisp, spiced tandoor-baked starters.'
  },
  'Biryani': {
    image: '/menu/chicken-tikka-little-india-belmar-scaled.jpg',
    count: 2,
    tagline: 'Fragrant saffron rice slow-cooked with fresh spices.'
  },
  'Tandoori Specialties': {
    image: '/menu/seekh-kabob-little-india-belmar.jpg',
    count: 2,
    tagline: 'Traditional clay-oven roasted delicacies.'
  },
  'Soup & Salad': {
    image: '/menu/fish-tandoori-scaled.jpg',
    count: 2,
    tagline: 'Light, comforting starters and fresh pairings.'
  },
  'Non-Veg Entrees': {
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    count: 2,
    tagline: 'Rich, flavorful, slow-braised meat curries.'
  },
  'Vegetarian Entrees': {
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    count: 2,
    tagline: 'Delightful paneer and slow-cooked lentil creations.'
  },
  'Specialty Entrees': {
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    count: 2,
    tagline: 'Chef-inspired sea bass and sweet mango profiles.'
  },
  'Oven Hot Breads': {
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
    count: 2,
    tagline: 'Clay-oven baked naans, fresh out of the tandoor.'
  },
  'Side Orders': {
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    count: 2,
    tagline: 'Cool yogurt blends and sweet-tangy spiced chutneys.'
  },
  'Desserts': {
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    count: 2,
    tagline: 'Sweet, cardamom-infused authentic Indian postres.'
  },
  'Lunch Buffet': {
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    count: 1,
    tagline: 'Our daily rotating spread of tandoori favorites.'
  }
};

const revealContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const revealItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function MenuCategoriesPage() {
  return (
    <section className="w-full bg-[#fff6ea] py-16 px-6 md:px-12 lg:px-20 text-[#333] min-h-screen font-[family-name:var(--font-inter)]">
      <div className="max-w-[1500px] mx-auto">
        
        <SectionHeader
          as="h1"
          animated={false}
          uppercase={false}
          theme="light"
          label="Exploration"
          title="Browse Our Menu Dishes"
          description="Select a category below to explore our handpicked selection of authentic tandoor dishes, robust curries, fresh breads, and handcrafted desserts."
          className="mb-16 max-w-[800px]"
          labelClassName="text-xs"
          titleClassName="text-4xl sm:text-6xl leading-[1.05] mb-5"
          descriptionClassName="text-sm sm:text-base"
        />

        {/* Categories Grid */}
        <motion.div
          variants={revealContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(MENU_CATEGORIES).map(([catName, details]) => (
            <motion.div key={catName} variants={revealItemVariants}>
              {/* Dynamic redirection link: spaces become %20 automatically */}
              <Link href={`/menu/${encodeURIComponent(catName)}`}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-md group cursor-pointer">
                  <Image
                    src={details.image}
                    alt={catName}
                    fill
                    className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Backdrop shading */}
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                  
                  {/* Category Details Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                    <div className="flex justify-end">
                      <span className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold tw-wider up">
                        {details.count} {details.count === 1 ? 'Item' : 'Items'}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-bold text-2xl up tw-wide group-hover:text-[#FF7D54] transition-colors duration-300 leading-none">
                        {catName}
                      </h3>
                      <p className="text-xs text-white/80 leading-relaxed max-w-[90%] font-normal">
                        {details.tagline}
                      </p>
                      
                      <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#FF7D54] group-hover:translate-x-1.5 transition-transform duration-300">
                        <span>VIEW DISHES</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}