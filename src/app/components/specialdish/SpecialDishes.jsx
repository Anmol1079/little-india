"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, useMotionTemplate, motion } from 'framer-motion';

// Interactive menu item row with parallax plates and fading title text
function MenuItem({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // 1. Uniform Plate Parallax Translation & Rotation values
  const yOffset = useTransform(scrollYProgress, [0, 1], [40, -40]); // Translates plate relative to viewport scroll progress
  const currentRotation = useTransform(scrollYProgress, [0, 1], [item.rotationStart, item.rotationEnd]);

  // 2. Symmetric fade-in and fade-out calculations
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.65, 0.85, 1],
    [0, 0, 1, 1, 0, 0]
  );

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 xl:grid-cols-5 xl:gap-8 items-center w-full xl:h-[60vh] py-12 xl:py-0"
    >
      {/* Description Column */}
      <div
        className={`xl:col-span-2 flex flex-col items-center text-center order-2 ${
          item.align === 'left'
            ? 'xl:order-2 xl:text-left xl:items-start'
            : 'xl:order-1 xl:text-right xl:items-end'
        }`}
      >
        <motion.h3
          className="font-title font-black text-[45px] md:text-[45px] xl:text-[45px] mb-2 select-none upp tracking-wide leading-none"
          style={{ 
            opacity: textOpacity, 
            color: '#E75B44'
          }}
        >
          {item.title}
        </motion.h3>
        <p className="font-sans text-stone-300 text-sm md:text-base leading-relaxed max-w-md xl:max-w-[90%]">
          {item.description}
        </p>
      </div>

      {/* Plate Image Column */}
      <div
        className={`xl:col-span-3 relative flex items-center justify-center w-[300px] h-[300px] md:w-[450px] md:h-[450px] xl:size-[80vh] mx-auto order-1 ${
          item.align === 'left' ? 'xl:order-1' : 'xl:order-2'
        }`}
      >
        <motion.div
          className="relative z-10 w-full h-full"
          style={{
            y: yOffset,
            rotate: currentRotation,
          }}
        >
          <img
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className={`object-contain ${item.scaleClass || ''}`}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: 'transparent',
            }}
            src={item.imgSrc}
          />
        </motion.div>
      </div>
    </div>
  );
}

// Animated salt trail element revealing along the scroll direction
function SaltSeparator({ direction = '135deg', rotateClass = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const percentage = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0, 100, 100]);
  const percentagePlus15 = useTransform(percentage, (p) => p + 15);
  const maskStyle = useMotionTemplate`linear-gradient(${direction}, rgba(0, 0, 0, 1) ${percentage}%, rgba(0, 0, 0, 0) ${percentagePlus15}%)`;

  return (
    <div
      ref={ref}
      className="relative w-full h-8 flex items-center justify-center pointer-events-none my-12 xl:my-0"
    >
      <motion.div
        className="absolute size-[280px] md:size-[320px] xl:size-[50vh]"
        style={{
          maskImage: maskStyle,
          WebkitMaskImage: maskStyle,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      >
        <img
          alt="salt separator decor"
          loading="lazy"
          decoding="async"
          className={`object-contain ${rotateClass}`}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: 'transparent',
          }}
          src="/salt-2.webp"
        />
      </motion.div>
    </div>
  );
}

// Main Menu Component wrapper
export default function OurMenuSection() {
  const MENU_ITEMS = [
    {
      title: 'BBQ Ribs',
      description:
        'Slow roasted pork baby back ribs basted in sticky, sweet honey BBQ sauce, glazed to caramelized excellence and topped with sesame seeds.',
      imgSrc: '/ribs.png',
      alt: 'BBQ Ribs plate',
      align: 'left',
      rotationStart: 0,
      rotationEnd: 90, // standardized to exactly 90-deg sweep
    },
    {
      title: 'Buff Chilly',
      description:
        'Juicy buffalo strips flash-fried and wok-tossed with spicy green chilies, sweet bell peppers, onions, soy sauce, and aromatic local spices.',
      imgSrc: '/chicken-chilly.png',
      alt: 'Chicken Chilly plate',
      align: 'right',
      rotationStart: 0,
      rotationEnd: 90, // standardized to exactly 90-deg sweep
    },
    {
      title: 'Grilled Chicken',
      description:
        'Succulent chicken marinated in secret spices and grilled to perfection.',
      imgSrc: '/chicken-tandoori.png',
      alt: 'Grilled Chicken plate',
      align: 'left',
      rotationStart: 0,
      rotationEnd: 90, // standardized to exactly 90-deg sweep
      // scaleClass: 'scale-[0.8]',
    },
    {
      title: 'BBQ Prawn',
      description:
        'Plump, premium jumbo prawns marinated in a spicy zesty BBQ dry rub and char-grilled on skewers, finished with fresh garlic butter.',
      imgSrc: '/prawn.png',
      alt: 'BBQ Prawn plate',
      align: 'right',
      rotationStart: 0,
      rotationEnd: 90, // standardized to exactly 90-deg sweep
    },
  ];

  return (
    <section className="relative w-full py-0 bg-black overflow-hidden select-none">

      {/* Centered Header wrapper */}
      <div className="w-full px-4 md:px-8 xl:px-16 pt-16 pb-8">
        <div className="flex flex-col items-center text-center group cursor-pointer max-w-[1400px] mx-auto">
          
          {/* Tagline Bracket */}
          <span className="text-[#E65C38] font-bold text-[15px] tracking-widest upp font-sans block mb-3">
            Our Highlights
          </span>

          <div className="flex justify-center items-baseline mb-4">
            <h2 className="font-title font-black text-[60px] sm:text-[60px] md:text-[60px] text-[#fff] tracking-tight leading-none transition-colors duration-300 group-hover:text-[#E65C38] upp">
              Special Dishes
            </h2>
          </div>
          
          <p className="font-sans text-[15px] text-[#fff]/60 tracking-wider leading-relaxed font-semibold max-w-2xl mx-auto">
            Explore a selection of carefully crafted dishes inspired by tradition and elevated with a modern touch.
          </p>
        </div>
      </div>

      {/* Menu List */}
      <div className="relative z-10 w-full flex flex-col px-2 sm:px-4 md:px-8 xl:px-16 pb-20 sm:pb-24 md:pb-48 xl:pb-[24vh]">
        <MenuItem item={MENU_ITEMS[0]} />

        <SaltSeparator direction="135deg" rotateClass="rotate-10 xl:-rotate-15" />

        <MenuItem item={MENU_ITEMS[1]} />

        <SaltSeparator direction="225deg" rotateClass="rotate-10 xl:rotate-55" />

        <MenuItem item={MENU_ITEMS[2]} />

        <SaltSeparator direction="135deg" rotateClass="rotate-10 xl:-rotate-15" />

        <MenuItem item={MENU_ITEMS[3]} />
      </div>
    </section>
  );
}