"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import { IconLeaf, IconSeedling, IconWheat, IconAward } from "../common/Icons";

// Deceleration Easing Curve
const cubicEase = [0.16, 1, 0.3, 1];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicEase },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicEase },
  },
};

const centerImageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: cubicEase, delay: 0.15 },
  },
};

export default function WhyChoose({ className = '' }) {
  return (
    <section className={`w-full bg-white py-12 md:py-16 overflow-hidden text-center ${className}`.trim()}>


      {/* PART 1: TOP CONTENT BLOCK (Elegant Split-Editorial Grid) */}
      <div className="max-w-[1500px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center mb-10 md:mb-10">
        
        {/* Left Column: Left-Aligned Story & Brand Narrative (Spans 7 of 12 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start text-left gap-6 lg:pr-4"
        >
          {/* Favicon Crest Image */}
          {/* <motion.div 
            variants={fadeUpVariants}
            className="w-16 h-16 flex items-center justify-center mb-2"
          >
            <img 
              src="/littleindia-favicon.svg" 
              alt="Little India Brand Crest"
              className="w-full h-full object-contain select-none pointer-events-none"
            />
          </motion.div> */}

          <SectionHeader
            animated={false}
            as="h1"
            theme="accent"
            label="Why we best"
            title="Authentic Flavors & Inviting Ambiance"
            className="mb-0"
            labelClassName="text-[14px] sm:text-[15px]"
            titleClassName="text-[36px] sm:text-[46px] lg:text-[52px] text-black leading-[1.02] mb-2"
          />

          {/* Left-Aligned Paragraph Group */}
          <div className="flex flex-col gap-5 text-[18px] sm:text-[18px] text-[#333] leading-relaxed opacity-95">
            <motion.p className="font-normal" variants={fadeUpVariants}>
              Little India Restaurant and Bar is proud to be one of the best Indian
              restaurants in Denver and Lakewood, Colorado, serving authentic Indian
              cuisine for over 20 years. Our passion lies in delivering a perfect
              fusion of mouth-watering traditional Indian dishes combined with a
              warm, inviting ambiance that genuinely feels like home.
            </motion.p>

            <motion.p className="font-normal" variants={fadeUpVariants}>
              Since our establishment, we have maintained a strong commitment to
              treating every customer as family, creating a friendly and welcoming
              atmosphere for over 15 years. Our menu features fresh, high-quality
              ingredients sourced locally, with gluten-free and vegan-friendly
              options that cater to diverse dietary preferences. We ensure all
              dishes are prepared with minimal oil and no baking soda to provide
              delicious, healthy meals without discomfort.
            </motion.p>

            <motion.p className="font-normal" variants={fadeUpVariants}>
              Located in the heart of Belmar, Lakewood, Denver, Little India offers
              an immaculate and hygienic dining experience. Our open kitchen design
              builds customer confidence by showcasing our dedication to quality and
              hygiene. Our experienced North Indian chef expertly crafts each dish
              using locally sourced produce and authentic spices imported directly
              from India, evoking the nostalgic flavors of traditional Indian
              cooking.
            </motion.p>

            <motion.p className="font-normal" variants={fadeUpVariants}>
              Discover Little India Restaurant and Bar in Denver and Lakewood,
              Colorado, for an unmatched blend of authentic flavors, warm
              hospitality, and a cozy atmosphere that draws our loyal customers back
              time and again. Experience for yourself why we’re recognized as one of
              the top Indian dining destinations in the Denver metro area.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Column: Premium High-Impact Portrait Food Image (Spans 5 of 12 columns) */}
        <motion.div
          variants={centerImageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="lg:col-span-5 relative w-full h-[590px] sm:h-[640px] lg:h-[690px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#C59B27]/15 group cursor-pointer"
        >
          <Image
            src="/menu/tandoori-mixed-grill-little-india-belmar-scaled.webp"
            alt="Authentic Tandoori Mixed Grill Feast"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover filter brightness-90 saturate-[1.05] transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Subtle vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A]/95 via-transparent to-[#0D0C0A]/35 pointer-events-none transition-opacity duration-300 group-hover:opacity-85" />
          
          {/* Gilded overlay text labels */}
          <div className="absolute bottom-8 left-8 right-8 text-left z-10">
            <span className="text-[11px] font-bold tw-[0.25em] text-[#C59B27] up">
              Tandoori Clay Oven
            </span>
            <h4 className="text-xl font-bold text-white up twr font-luxury-sans mt-1">
              Smoked to Perfection
            </h4>
          </div>
        </motion.div>

      </div>

      {/* PART 2: BOTTOM SECTION (4 Symmetrical Gilded Value Cards Grid) */}
      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-stone-200/80 pt-10 gap-6 px-6">
        
        {/* Card 1: Fresh Food */}
        <motion.div
              whileHover={{
                y: -6,
                scale: 1.01,
                borderColor: 'rgba(77, 102, 69, 0.25)',
                boxShadow: '0 20px 40px -15px rgba(77, 102, 69, 0.08)'
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="bg-[#f4f7f2] border border-[#e3ebd9] rounded-[2rem] p-8 flex flex-col gap-4 text-left relative overflow-hidden group flex-1 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#e3ebd9] text-[#4d6645] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105">
                <IconLeaf className="w-5 h-5" />
              </div>
              <h2 className="font-heavy text-2xl text-[#333] up leading-none mt-2 group-hover:text-[#4d6645] transition-colors duration-300 font-bold">
                Fresh Food
              </h2>
              <p className="text-[16px] md:text-[18px] text-stone-600 leading-relaxed pr-6 font-normal">
                We use fresh, high-quality ingredients to craft authentic Indian flavors, ensuring every dish is rich and aromatic.
              </p>
            </motion.div>

        {/* Card 2: Vegan Friendly */}
        <motion.div
              whileHover={{
                y: -6,
                scale: 1.01,
                borderColor: 'rgba(212, 121, 38, 0.25)',
                boxShadow: '0 20px 40px -15px rgba(212, 121, 38, 0.08)'
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="bg-[#ebfffd] border border-[#f5ebcb] rounded-[2rem] p-8 flex flex-col gap-4 text-left relative overflow-hidden group flex-1 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#f5ebcb] text-[#d47926] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105">
                <IconSeedling className="w-5 h-5" />
              </div>
              <h2 className="font-heavy text-2xl text-[#333] up leading-none mt-2 group-hover:text-[#d47926] transition-colors duration-300 font-bold">
                Vegan Friendly
              </h2>
              <p className="text-[16px] md:text-[18px] text-stone-600 leading-relaxed pr-6 font-normal">
                Our menu features a variety of delicious vegan-friendly Indian dishes, packed with authentic flavors.
              </p>
            </motion.div>

        {/* Card 3: Gluten Free */}
        <motion.div
              whileHover={{
                y: -6,
                scale: 1.01,
                borderColor: 'rgba(109, 79, 141, 0.25)',
                boxShadow: '0 20px 40px -15px rgba(109, 79, 141, 0.08)'
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="bg-[#f7f1fa] border border-[#ede2f2] rounded-[2rem] p-8 flex flex-col gap-4 text-left relative overflow-hidden group flex-1 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#ede2f2] text-[#6d4f8d] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105">
                <IconWheat className="w-5 h-5" />
              </div>
              <h2 className="font-heavy text-2xl text-[#333] up leading-none mt-2 group-hover:text-[#6d4f8d] transition-colors duration-300 font-bold">
                Gluten Free
              </h2>
              <p className="text-[16px] md:text-[18px] text-stone-600 leading-relaxed pr-6 font-normal">
                We offer delicious gluten-free Indian meals, perfect for those with dietary restrictions without sacrificing taste.
              </p>
            </motion.div>

        {/* Card 4: Quality Maintain */}
        <motion.div
              whileHover={{
                y: -6,
                scale: 1.01,
                borderColor: 'rgba(216, 85, 7, 0.25)',
                boxShadow: '0 20px 40px -15px rgba(216, 85, 7, 0.08)'
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="bg-[#ffeed0] border border-[#f5e4d2] rounded-[2rem] p-8 flex flex-col gap-4 text-left relative overflow-hidden group flex-1 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-white text-[#d85507] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105">
                <IconAward className="w-5 h-5" />
              </div>
              <h2 className="font-heavy text-2xl text-[#333] up leading-none mt-2 group-hover:text-[#d85507] transition-colors duration-300 font-bold">
                Quality Maintain
              </h2>
              <p className="text-[16px] md:text-[18px] text-stone-600 leading-relaxed pr-6 font-normal">
                We maintain top quality by using fresh ingredients and authentic recipes in every dish we serve.
              </p>
            </motion.div>

      </div>

    </section>
  );
}