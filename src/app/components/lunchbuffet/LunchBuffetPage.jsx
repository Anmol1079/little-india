"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';

// Custom Deceleration Easing for premium momentum feel
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Stagger and Reveal Animations
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
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

// Fix: Defined headerItemVariants to prevent the ReferenceError
const headerItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

export default function LunchBuffetPage() {
  return (
    <section className="w-full bg-white text-stone-800 overflow-x-hidden pt-32 md:pt-36 pb-16 md:pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Visual Collages / Image Matrix */}
          <div className="lg:col-span-6 flex flex-col lg:grid lg:grid-cols-2 gap-4">
            
            {/* Left tall visual placeholder (Always visible, handles mobile height) */}
            <div className="rounded-[20px] overflow-hidden h-[300px] lg:h-[600px] shadow-sm border border-stone-100">
              <img 
                src="/menu/chicken-tandoori-little-india-belmar-scaled.jpg (1).webp" 
                alt="Tandoori chicken sizzling" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Right double-stacked visuals (Hidden on mobile, displayed on desktop as lg:flex) */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="rounded-[20px] overflow-hidden h-[300px] shadow-sm border border-stone-100">
                <img 
                  src="/menu/chicken-tikka-little-india-belmar-scaled.webp" 
                  alt="Fresh Indian side dishes" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="rounded-[20px] overflow-hidden h-[300px] shadow-sm border border-stone-100">
                <img 
                  src="/menu/seekh-kabob-little-india-belmar.webp" 
                  alt="Traditional Naan Breads" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Core Copy Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <SectionHeader
              as="h1"
              theme="accent"
              uppercase={false}
              label="Private Room for 14 people"
              title="For Your Special Occasion and Meeting"
              className="mb-0"
              labelClassName="text-[14px] sm:text-[15px]"
              titleClassName="sm:text-[56px] lg:text-[56px] text-black leading-[1.02] mb-2"
            />

            <p className="text-[16px] leading-relaxed text-stone-600 font-normal">
              You’re in luck! Visit <span className="text-[#333] font-bold">Little India Restaurant & Bar</span> at 425 South Teller Street, Lakewood, Colorado. Our Lunch buffet is open <span className="text-[#C0321F] font-extrabold">7 days a week from 11:00 AM to 2:30 PM</span>, serving a lunch menu featuring rich flavors and comforting favorites.
            </p>

            <p className="text-[16px] leading-relaxed text-stone-600 font-normal">
              Our Indian lunch buffet is a unique culinary experience, featuring traditional favorites like <span className="text-[#333] font-bold">butter chicken, channa masala, tandoori chicken, saag paneer, naan bread</span>, and cool side dishes, all prepared with fresh ingredients and a love of traditional Indian flavor. <span className="text-[#C0321F] font-extrabold">All of the dishes are gluten-free by nature</span>, so that everyone can partake in our robust flavors without compromise. Our chefs respect conventional dishes while adding a modern spin, preparing meals that are both traditional and innovative.
            </p>

            <p className="text-[16px] leading-relaxed text-stone-600 font-normal">
              Our lunch buffet is perfect for groups, families, friends, or a personal indulgence. Our cozy and friendly environment ensures that each visit is pleasurable. To make your lunch experience even more hassle-free, we offer the convenience of reservations. Reach us at <a href="tel:+13039379777" className="text-[#C0321F] font-extrabold hover:underline">+1 303-937-9777</a> for inquiries or availability, and book your table for a stress-free lunch experience.
            </p>
          </div>

        </div>
    </section>
  );
}