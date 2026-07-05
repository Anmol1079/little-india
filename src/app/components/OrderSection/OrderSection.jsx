'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const orderOptions = [
  {
    id: '01/04',
    title: 'Order Online',
    description: 'Authentic Indian dishes, fresh and delivered to your door.',
    actionText: 'CHOOSE LOCATION',
    href: '#order-online',
    // Staircase offset
    yTranslation: 'md:translate-y-0 lg:translate-y-0',
    rotateHover: -1.5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#E65C38]">
        {/* Fork */}
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        {/* Knife */}
        <path d="M21 15V2a5 5 0 0 0-5 5v8c0 1.1.9 2 2 2h3Z" />
        <path d="M21 15v7" />
      </svg>
    ),
  },
  {
    id: '02/04',
    title: 'Reserve a Table',
    description: 'Book your spot for a memorable dining experience.',
    actionText: 'GET STARTED',
    href: '#reserve-table',
    yTranslation: 'md:translate-y-0 lg:translate-y-0',
    rotateHover: 1.5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#E65C38]">
        {/* Calendar with event highlight dot */}
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="15" r="1.5" fill="#E65C38" stroke="none" />
      </svg>
    ),
  },
  {
    id: '03/04',
    title: 'Gift Cards',
    description: 'The perfect treat for friends, family, and food lovers.',
    actionText: 'GET STARTED',
    href: '#gift-cards',
    yTranslation: 'md:translate-y-0 lg:translate-y-0',
    rotateHover: -1.5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#E65C38]">
        {/* Gift Box with detailed lid */}
        <path d="M20 12v10H4V12" />
        <path d="M2 7h20v5H2z" />
        <path d="M12 22V7" />
        <path d="M12 7c-.5-1.5-2-3-4.5-3A2.5 2.5 0 0 0 5 6.5C5 9 12 12 12 12s7-3 7-5.5a2.5 2.5 0 0 0-2.5-2.5c-2.5 0-4 1.5-4.5 3z" />
      </svg>
    ),
  },
  {
    id: '04/04',
    title: 'Lunch Buffet',
    description: 'Let us bring a grand Indian feast to your next event.',
    actionText: 'GET STARTED',
    href: '#catering',
    yTranslation: 'md:translate-y-0 lg:translate-y-0',
    rotateHover: 1.5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#E65C38]">
        {/* Detailed Chef Hat */}
        <path d="M17 16a4 4 0 0 0 4-4 4.5 4.5 0 0 0-4.5-4.5H16c-.5-3.5-3.5-6-7-6a7 7 0 0 0-6.5 5H2a4 4 0 0 0 0 8h1" />
        <path d="M18 16h-12c-1.1 0-2 .9-2 2v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2c0-1.1-.9-2-2-2Z" />
      </svg>
    ),
  },
];

// Framer Motion Entrance Variants
const revealContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 14,
    },
  },
};

export default function OrderSection() {
  return (
    // Modified pb-[200px] to pb-16 (mobile), md:pb-28 (tablet), and lg:pb-[200px] (desktop)
    <section className="w-full bg-[#fff6ea] pt-16 pb-16 md:pb-16 lg:pb-16 px-6 md:px-12 lg:px-20 text-[#0B0C0E] overflow-hidden select-none">



      <div className="max-w-[1500px] mx-auto flex flex-col items-center">

        {/* Header Block with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col max-w-[1500px] sm:max-w-[1500px] md:max-w-[1500px] self-start mb-16"
        >
          <div className="flex flex-col items-start mb-4">
            <span className="text-[#B83A18] font-bold text-[15px] tracking-widest upp font-sans-custom block">
              Crafted for you
            </span>
          </div>

          <div className="flex items-baseline space-x-2 md:space-x-3 mt-1">
            <h2 className="font-heavy font-black text-[40px] sm:text-[60px] text-stone-950 upp leading-[0.95] tracking-[0.01rem]">
              Order Indian Food in Denver
            </h2>
          </div>
          <p className="text-[16px] md:text-[18px] text-stone-500 font-semibold font-sans-custom mt-4 leading-relaxed max-w-7xl">
            Order online, reserve a table, or surprise someone special with a gift card.
            Find an Indian restaurant near you or explore Indian food near you.
          </p>
        </motion.div>

        {/* 2. Optimized Cascading Card Grid */}
        <motion.div
          variants={revealContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 w-full"
        >
          {orderOptions.map((option) => (
            <motion.div
              key={option.id}
              variants={cardItemVariants}
              className={`w-full ${option.yTranslation}`}
            >
              {/* Card Container: Interactive Spring-Driven Hover */}
              <motion.div
                whileHover={{
                  y: -12,
                  rotate: option.rotateHover,
                  boxShadow: '0 35px 60px -15px rgba(230,92,56,0.1)'
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative bg-white rounded-[2.5rem] px-8 py-14 shadow-[0_20px_50px_rgba(0,0,0,0.045)] border border-stone-200 flex flex-col items-center text-center transition-colors duration-300 hover:border-[#E65C38]/20 cursor-pointer group"
              >

                {/* 1. Icon Container with scale springs on card hover */}
                <div className="w-24 h-24 rounded-[1.75rem] bg-[#FFF6F0] border border-[#E65C38]/10 flex items-center justify-center mb-8 shadow-[inset_0_2px_4px_rgba(230,92,56,0.03)] transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                  {option.icon}
                </div>

                {/* 2. Card Title */}
                <h3 className="font-heavy text-[28px] text-stone-900 upp tracking-tight mb-4 leading-none font-extrabold transition-colors duration-300 group-hover:text-[#E65C38]">
                  {option.title}
                </h3>

                {/* 3. Subtext description */}
                <p className="font-sans-custom text-[16px] md:text-[18px] leading-[1.65] text-stone-500 max-w-[90%] mb-12 h-14 flex items-center justify-center font-semibold">
                  {option.description}
                </p>

                {/* 4. Action Link */}
                <div className="flex justify-center">
                  <Link
                    href="/menu"
                    className="group bg-[#C13419] hover:bg-[#a82c14] text-white text-[15px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans"
                  >
                    <span>KNOW MORE</span>
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
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}