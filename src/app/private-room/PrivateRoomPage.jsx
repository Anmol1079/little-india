"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';

// Premium momentum easing
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: cubicBezierEase },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: cubicBezierEase },
  },
};

// Defined headerItemVariants to resolve the ReferenceError
const headerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: cubicBezierEase },
  },
};

export default function PrivateRoomPage() {
  const services = [
    {
      title: "Anniversary Dinners",
      desc: "Celebrate your continuous, unconditional love in a setting designed for intimacy and elegance. Whether it’s an anniversary or a special evening with your spouse or significant other, our private dining experience creates the perfect romantic atmosphere. Surrounded by warm ambiance, refined décor, and exceptional service, every moment becomes more meaningful. Enjoy a thoughtfully crafted dining experience that allows you to connect, reminisce, and create new memories together in a space that feels both exclusive and unforgettable.",
      img: "https://images.pexels.com/photos/6248882/pexels-photo-6248882.jpeg",
      bgColor: "bg-white",
      borderColor: "border-stone-200/80"
    },
    {
      title: "Birthday Dinners",
      desc: "Celebrate your birthday in style with an intimate gathering in our private dining space. Surrounded by a warm and inviting ambiance, enjoy a personalized experience with your closest friends and family. From delicious, thoughtfully prepared cuisine to attentive service, every detail is designed to make your special day feel memorable, joyful, and truly one of a kind.",
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop",
      bgColor: "bg-white",
      borderColor: "border-stone-200/80"
    },
    {
      title: "Family Reunions",
      desc: "Reconnect with your loved ones in a setting defined by comfort and class. Our private dining experience offers the perfect space for intimate family reunions, where you can share laughter, stories, and meaningful moments together. With a warm ambiance, attentive service, and flavorful cuisine, every gathering becomes a cherished memory in a space designed just for you.",
      img: "https://images.pexels.com/photos/5638834/pexels-photo-5638834.jpeg",
      bgColor: "bg-white",
      borderColor: "border-stone-200/80"
    },
    {
      title: "Corporate Dinners",
      desc: "Our refined private dining space offers the ideal setting for small business meetings, intimate corporate dinners, or one-on-one professional conversations. With a balance of elegance, privacy, and exceptional cuisine, it creates an atmosphere where ideas flow naturally and meaningful connections are built. Attentive service and a sophisticated ambiance ensure every interaction feels productive, comfortable, and memorable.",
      img: "https://images.pexels.com/photos/29410668/pexels-photo-29410668.jpeg",
      bgColor: "bg-white",
      borderColor: "border-stone-200/80"
    }
  ];

  return (
    <main className="w-full bg-[#FAF6EE] text-[#2E2A25] overflow-x-clip min-h-screen">
      
      {/* =========================================================================
          SECTION 1: HERO CONTAINER (FULL-WIDTH BACKGROUND WITH LEFT OVERLAY)
          ========================================================================= */}
      {/* Removed "select-none" from className below */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[100vh] flex items-center justify-start overflow-hidden pt-12 lg:pt-16">
        
        {/* Full-bleed background dining table image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80" 
            alt="Intimate long wooden dining table setup" 
            className="w-full h-full object-cover object-center"
          />
          {/* Premium dark gradient overlay: solid black on left, fading to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F0C] via-[#0E0F0C]/95 to-transparent z-10 hidden lg:block" />
          
          {/* 
            Optimized mobile gradient overlay: 
            Transitioning vertically with high opacity (92% - 98%) to completely block image noise behind text 
          */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F0C]/98 via-[#0E0F0C]/92 to-[#0E0F0C]/96 z-10 lg:hidden" />
        </div>

        {/* Content Container (Responsive Horizontal Padding) */}
        <div className="max-w-[1500px] w-full mx-auto relative z-20 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* LEFT COLUMN: Custom Gold Framed Container with Mobile-Friendly Padding */}
            <div className="lg:col-span-7 text-left py-16 md:py-20 relative p-5 sm:p-8 md:p-12 border border-[#C09C67]/35 rounded-tl-[24px]">
              
              {/* Symmetrical luxury corner bracket on top-left of the gold frame */}
              <div className="absolute -left-[1.5px] -top-[1.5px] w-6 h-6 border-t-2 border-l-2 border-[#C09C67] rounded-tl-[24px]" />
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-5 text-left text-white"
              >
                <SectionHeader
                  animated={false}
                  uppercase={false}
                  as="h1"
                  theme="dark"
                  label="Private Room"
                  title="Private Dining Room in Denver"
                  className="mb-0"
                  labelClassName="text-[#B83A18] text-[14px] sm:text-[15px]"
                  titleClassName="text-[28px] sm:text-[45px] lg:text-[56px] text-white leading-[1.1] sm:leading-[0.95] group-hover:text-white mb-0"
                />

                {/* Paragraph 1 */}
                <motion.p 
                  variants={revealVariants}
                  className="text-[14px] sm:text-[16px] lg:text-[18px] text-stone-200 leading-[1.6] sm:leading-[1.65] mt-2 font-normal"
                >
                  Are you looking for an energetic, elegant, and comfortable dinner setting to fulfill your private dining needs in the Lakewood area? At <span className="text-[#E94222] font-extrabold">Little India Restaurant</span>, our <span className="text-white font-extrabold">Private Room for Dining</span> offers the perfect ambiance for your special occasions.
                </motion.p>

                {/* Paragraph 2 */}
                <motion.p 
                  variants={revealVariants}
                  className="text-[14px] sm:text-[16px] lg:text-[18px] text-stone-200 leading-[1.6] sm:leading-[1.65] font-normal"
                >
                  In your most memorable moments, you want more than an average dining experience. Our Private Room for Dining at Little India Restaurant, an authentic <span className="text-[#E94222] font-extrabold">Indian Restaurant</span>, provides the intimacy, inspiration, and invigoration you need in a secluded dining space.
                </motion.p>

                {/* Paragraph 3 */}
                <motion.p 
                  variants={revealVariants}
                  className="text-[14px] sm:text-[16px] lg:text-[18px] text-stone-200 leading-[1.6] sm:leading-[1.65] font-normal"
                >
                  Blending classic elegance with vibrant energy in a modern setting that pays homage to tradition, we offer a fresh, flavorful, and lively dining experience infused with Indian culture, perfect for any occasion. Plan for an upscale-casual dress for your private dining occasion, and choose Little India Restaurant's Private Room for Dining for these occasions and more:
                </motion.p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OVERLAPPING STICKY SERVICE CHRONICLE
          ========================================================================= */}
      <section className="relative bg-[#FAF6EE] py-20 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-visible">
        
        <div className="max-w-[1500px] mx-auto mb-10 text-left px-4">
          <SectionHeader
            theme="accent"
            uppercase={false}
            label="Exclusive Offerings"
            title="Services Tailored for Every Celebration"
            className="mb-0"
            labelClassName="text-[13px] sm:text-[14px]"
            titleClassName="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] text-[#121110] mb-0"
            footer={<div className="h-[1px] bg-stone-300 w-24 mt-6" />}
          />
        </div>

        {/* Sticky Track Container */}
        <div className="max-w-[1500px] mx-auto flex flex-col gap-12 sm:gap-16 relative overflow-visible px-4">
          
          {services.map((service, index) => {
            const zIndex = (index + 1) * 10;
            const topOffset = 100; 
            
            return (
              <div 
                key={service.title}
                style={{ 
                  top: `${topOffset}px`,
                  zIndex: zIndex
                }}
                className={`sticky grid grid-cols-1 md:grid-cols-2 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border ${service.borderColor} ${service.bgColor} min-h-[400px] sm:min-h-[460px] items-stretch shadow-[0_-25px_60px_rgba(0,0,0,0.08)]`}
              >
                {/* Left Column: Full-Height Image */}
                <div className="w-full min-h-[250px] md:min-h-0 relative overflow-hidden bg-stone-100">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-[1200ms] hover:scale-103"
                  />
                </div>

                {/* Right Column: Centered Text Content */}
                <div className="flex flex-col justify-center text-left p-5 sm:p-12 lg:p-16 relative">
                  <h3 className="font-bold text-2xl sm:text-4xl text-[#333] mb-4 leading-tight max-w-sm">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#333] text-[13px] sm:text-base leading-relaxed font-normal">
                    {service.desc}
                  </p>
                  
                  <div className="w-16 h-[1.5px] bg-[#B49774]/40 mt-6"></div>
                </div>
              </div>
            );
          })}
          
        </div>
      </section>

    </main>
  );
}