"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, useMotionTemplate, motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from '../common/SectionHeader';

// Interactive menu item row with parallax plates and fading title text
function MenuItem({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Uniform Plate Parallax Vertical Translation values (No rotation)
  const yOffset = useTransform(scrollYProgress, [0, 1], [40, -40]); // Translates plate relative to viewport scroll progress

  // Symmetric fade-in and fade-out calculations
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
        className={`xl:col-span-2 flex flex-col items-center text-center order-2 ${ item.align === 'left' ? 'xl:order-2 xl:text-left xl:items-start' : 'xl:order-1 xl:text-right xl:items-end' }`}
      >
        <motion.h3
          className="font-title font-bold text-[35px] md:text-[40px] xl:text-[40px] mb-2 up leading-none"
          style={{ 
            opacity: textOpacity, 
            color: '#E75B44'
          }}
        >
          {item.title}
        </motion.h3>
        <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-md xl:max-w-[90%] font-normal">
          {item.description}
        </p>
      </div>

      {/* Plate Image Column */}
      <div
        className={`xl:col-span-3 relative flex items-center justify-center w-[300px] h-[300px] md:w-[450px] md:h-[450px] xl:size-[80vh] mx-auto order-1 ${ item.align === 'left' ? 'xl:order-1' : 'xl:order-2' }`}
      >
        {/* Parallax-only motion container (No rotation) */}
        <motion.div
          className="relative z-10 w-full h-full flex items-center justify-center"
          style={{
            y: yOffset,
          }}
        >
          {/* Symmetrical Ceramic Plate Wrapper - applied uniformly to ALL menu items */}
          <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-[10px] border-[#141416] bg-[#141416] shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_4px_12px_rgba(0,0,0,0.5)] flex items-center justify-center group shrink-0">
            
            {/* Inner Food Image Container (decreased to 74% to create an elegant plate rim) */}
            <div className="relative w-[100%] h-[100%] rounded-full overflow-hidden shadow-[inset_0_4px_10px_rgba(0,0,0,0.5),0_8px_20px_rgba(0,0,0,0.3)]">
              <Image
                alt={item.alt}
                src={item.imgSrc}
                fill
                sizes="(max-width: 768px) 70vw, 40vw"
                className="object-cover select-none pointer-events-none filter brightness-[0.93] saturate-[1.05]"
              />
              {/* Inner Well Recessed Shadow */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_6px_12px_rgba(0,0,0,0.4)] pointer-events-none" />
            </div>

            {/* Outer Plate Rim Highlight Lines */}
            <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute inset-[10px] rounded-full border border-black/30 pointer-events-none" />
          </div>
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
export default function SpecialMenu() {
  const MENU_ITEMS = [
    {
      title: 'Tandoori Chicken',
      description:
        'Savor our succulent bone-in chicken leg quarters marinated in yogurt and traditional tandoori spices, clay-oven roasted to perfection.',
      imgSrc: '/tandoori.webp',
      alt: 'Tandoori Chicken',
      align: 'left',
      rotationStart: 0,
      rotationEnd: 0,
    },
    {
      title: 'Chicken Ginger Kabob',
      description:
        'Boneless chicken breast cubes marinated in ginger mint sauce',
      imgSrc: '/chicken-ginger-kabob.webp',
      alt: 'Chicken Ginger Kabob',
      align: 'right',
      rotationStart: 0,
      rotationEnd: 0,
    },
    {
      title: 'Shrimp Biryani',
      description:
        'Fragrant, layered basmati rice slow-cooked with heavily spiced prawns, fresh mint, toasted nuts, saffron, and aromatic herbs.',
      imgSrc: '/shrimp-biryani.webp',
      alt: 'Shrimp Biryani',
      align: 'left',
      rotationStart: 0,
      rotationEnd: 0,
    },
    {
      title: 'Lamb Roghan Josh',
      description:
        'Tender chunks of boneless lamb slow-cooked in a rich, aromatic gravy of tomatoes, caramelized onions, Kashmiri chilies, and spices.',
      imgSrc: '/lamb.webp',
      alt: 'Lamb Roghan Josh',
      align: 'right',
      rotationStart: 0,
      rotationEnd: 0,
    },
  ];

  return (
    <section className="relative w-full py-0 bg-black overflow-hidden">

      {/* Centered Header wrapper */}
      <div className="w-full px-4 md:px-8 xl:px-16 pt-16 pb-8">
        <SectionHeader
          align="center"
          theme="dark"
          label="Our Highlights"
          title="Special Dishes"
          description="Explore a selection of carefully crafted dishes inspired by tradition and elevated with a modern touch."
          className="mb-0 group cursor-pointer max-w-[1400px] mx-auto"
          contentClassName="max-w-2xl"
          titleClassName="sm:text-[56px] md:text-[56px] leading-none mb-4"
        />
      </div>

      {/* Menu List */}
      <div className="relative z-10 w-full flex flex-col px-2 sm:px-4 md:px-8 xl:px-16 pb-16 sm:pb-16 md:pb-16 xl:pb-[24vh]">
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