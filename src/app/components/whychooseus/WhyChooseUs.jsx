"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80";

// Custom Deceleration Cubic-Bezier Easing
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

const centerImageVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: cubicBezierEase, delay: 0.1 },
  },
};

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-[#fff6ea] py-16 px-6 md:px-12 lg:px-20 text-[#0B0C0E]">

      <div className="max-w-[1500px] mx-auto flex flex-col gap-12 relative">

        <SectionHeader
          align="center"
          theme="accent"
          label="Why we best"
          title="Authentic Flavors & Inviting Ambiance"
          description="Little India Restaurant and Bar is proud to be one of the best Indian restaurants in Denver and Lakewood, Colorado, serving authentic Indian cuisine for over 20 years. Our passion lies in delivering a perfect fusion of mouth-watering traditional Indian dishes combined with a warm, inviting ambiance that genuinely feels like home."
          className="mb-0 max-w-7xl mx-auto"
          titleClassName="text-[39px] sm:text-[52px] lg:text-[56px] text-[#000] mb-2"
          descriptionClassName="max-w-4xl"
        />

        {/* BOTTOM SECTION: Symmetrical Columns (Left Cards, Center Auto-stretching Image, Right Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full mt-6">

          {/* Column 1: Left Cards (Sage Green & Amber Peach, Spans 4/12) */}
          <motion.div
            variants={panelLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -100px 0px" }}
            className="lg:col-span-4 flex flex-col gap-6 justify-between"
          >
            {/* Fresh Food Card */}
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
                <i className="fa-solid fa-leaf text-xl"></i>
              </div>
              <h3 className="font-heavy text-2xl text-[#333] up leading-none mt-2 group-hover:text-[#4d6645] transition-colors duration-300 font-bold">
                Fresh Food
              </h3>
              <p className="text-[16px] md:text-[18px] text-stone-600 leading-relaxed pr-6 font-normal">
                We use fresh, high-quality ingredients to craft authentic Indian flavors, ensuring every dish is rich and aromatic.
              </p>
            </motion.div>

            {/* Vegan Friendly Card */}
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.01,
                borderColor: 'rgba(212, 121, 38, 0.25)',
                boxShadow: '0 20px 40px -15px rgba(212, 121, 38, 0.08)'
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="bg-white border border-[#ebfffd] rounded-[2rem] p-8 flex flex-col gap-4 text-left relative overflow-hidden group flex-1 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#ebfffd] text-[#d47926] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105">
                <i className="fa-solid fa-seedling text-xl"></i>
              </div>
              <h4 className="font-heavy text-2xl text-[#333] up leading-none mt-2 group-hover:text-[#d47926] transition-colors duration-300 font-bold">
                Vegan Friendly
              </h4>
              <p className="text-[16px] md:text-[18px] text-stone-600 leading-relaxed pr-6 font-normal">
                Our menu features a variety of delicious vegan-friendly Indian dishes, packed with authentic flavors.
              </p>
            </motion.div>

          </motion.div>

          {/* Column 2: Center Culinary Portrait (Auto height stretch matching cards) */}
          <motion.div
            variants={centerImageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-4 w-full relative min-h-[350px] lg:min-h-full"
          >
            {/* lg:absolute and lg:inset-0 binds height seamlessly to the outer row container */}
            <div className="lg:absolute lg:inset-0 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-200/40 bg-white">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
                alt="Indian Curry Pot with Fresh Naan"
                className="w-full h-full object-cover filter saturate-[0.95]"
                onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
              />
            </div>
          </motion.div>

          {/* Column 3: Right Cards (Lavender & Sand, Spans 4/12) */}
          <motion.div
            variants={panelRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -100px 0px" }}
            className="lg:col-span-4 flex flex-col gap-6 justify-between"
          >
            {/* Gluten Free Card */}
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
                <i className="fa-solid fa-wheat-awn text-xl"></i>
              </div>
              <h4 className="font-heavy text-2xl text-[#333] up leading-none mt-2 group-hover:text-[#6d4f8d] transition-colors duration-300 font-bold">
                Gluten Free
              </h4>
              <p className="text-[16px] md:text-[18px] text-stone-600 leading-relaxed pr-6 font-normal">
                We offer delicious gluten-free Indian meals, perfect for those with dietary restrictions without sacrificing taste.
              </p>
            </motion.div>

            {/* Quality Maintain Card */}
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
                <i className="fa-solid fa-award text-xl"></i>
              </div>
              <h4 className="font-heavy text-2xl text-[#333] up leading-none mt-2 group-hover:text-[#d85507] transition-colors duration-300 font-bold">
                Quality Maintain
              </h4>
              <p className="text-[16px] md:text-[18px] text-stone-600 leading-relaxed pr-6 font-normal">
                We maintain top quality by using fresh ingredients and authentic recipes in every dish we serve.
              </p>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}