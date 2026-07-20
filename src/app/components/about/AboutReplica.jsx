"use client";

import React from "react";
import { motion } from "framer-motion";

// Deceleration Easing Curve
const cubicEase = [0.16, 1, 0.3, 1];

// Animation variants matching a premium feel
const faderVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicEase },
  },
};

// Newly added to resolve the ReferenceError
const revealContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Newly added to resolve the ReferenceError
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicEase },
  },
};

export default function AboutReplica() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden font-sans select-none">
      {/* BACKGROUND CORNER MANDALAS & DOUBLE BORDERS */}
      {/* Top Right Decorative Mandala */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] pointer-events-none select-none opacity-[0.08] text-[#B58A3C] translate-x-12 -translate-y-12">
        <svg
          viewBox="0 0 100 100"
          fill="currentColor"
          className="w-full h-full"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="1 1"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          {Array.from({ length: 24 }).map((_, i) => (
            <path
              key={i}
              d="M50 50 C45 30, 55 30, 50 12 C45 30, 55 30, 50 50"
              transform={`rotate(${i * 15} 50 50)`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            />
          ))}
          <circle
            cx="50"
            cy="50"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Bottom Right Decorative Mandala */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px] pointer-events-none select-none opacity-[0.08] text-[#B58A3C] translate-x-16 translate-y-16">
        <svg
          viewBox="0 0 100 100"
          fill="currentColor"
          className="w-full h-full"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="1 1"
          />
          {Array.from({ length: 36 }).map((_, i) => (
            <circle
              key={i}
              cx="50"
              cy="15"
              r="2"
              transform={`rotate(${i * 10} 50 50)`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            />
          ))}
          <circle
            cx="50"
            cy="50"
            r="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Left Column Red/Gold Organic framing layer */}
      <div className="absolute top-0 left-0 bottom-0 w-[40%] lg:w-[35%] pointer-events-none select-none hidden md:block">
        <div
          className="w-full h-full bg-[#701010] opacity-[0.98] relative overflow-hidden"
          style={{
            clipPath: "polygon(0 0, 100% 0, 35% 50%, 100% 100%, 0 100%)",
          }}
        >
          {/* Subtle textured grid lines inside red band */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        {/* LEFT COLUMN: Highly Styled Asymmetric Image & Gold Framings */}
        <div className="lg:col-span-5 flex justify-center items-center relative w-full">
          {/* External Golden Arched Framing Line */}
          <div className="absolute inset-0 border border-[#C59B27]/40 rounded-[240px_40px_240px_240px] scale-[1.03] pointer-events-none hidden sm:block"></div>

          {/* Main Organic Framed Image Wrapper */}
          <div className="relative w-full aspect-[4/5] sm:max-w-[583px] rounded-[240px_35px_240px_240px] overflow-hidden border-[4px] border-[#C59B27] shadow-2xl bg-[#EFECE6] group">
            <img
              src="/indian-restaurant-denver-1.webp"
              alt="Little India Lakewood Front Dining Room & Sign"
              className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* SEAL BADGE: Authentic Indian Cuisine */}
          <div className="absolute -bottom-6 -left-3 sm:left-4 w-[145px] h-[145px] sm:w-[170px] sm:h-[170px] rounded-full bg-[#601212] border-4 border-[#FAF6EE] shadow-xl flex flex-col items-center justify-center text-center p-3 z-20">
            {/* Outer concentric golden frame */}
            <div className="absolute inset-1.5 border border-[#C59B27]/60 rounded-full pointer-events-none"></div>
            <div className="absolute inset-2.5 border-2 border-[#C59B27] rounded-full pointer-events-none"></div>

            {/* Floral Motif */}
            {/* <span className="text-[#C59B27] text-xs mb-0.5">⚜</span> */}

            <span className="text-[14px] sm:text-[14px]  font-medium text-[#FAF6EE]/80 up font-sans">
              Best Indian
            </span>
            {/* <span className="text-[14px] sm:text-[14px]  font-medium text-[#FAF6EE]/80 up font-sans">
         
            </span> */}
            <span className="text-[14px] sm:text-[14px]  font-medium text-[#FAF6EE]/80 up font-sans">
              Restaurant
            </span>
            <span className="text-[14px] sm:text-[14px]  font-medium text-[#FAF6EE]/80 up font-sans">
              Denver, Colorado
            </span>
            {/* <span className="text-[14px] sm:text-[14px]  font-medium text-[#FAF6EE]/80 up font-sans">
              Colorado
            </span>  */}
            {/* <span className="text-xl sm:text-2xl font-editorial-title font-black text-[#C59B27] leading-none my-1 tw">
              INDIAN
            </span> */}
            {/* <span className="text-xl sm:text-2xl font-editorial-title font-black text-[#C59B27] leading-none my-1 tw">
              INDIAN
            </span> */}
            {/* <span className="text-xl sm:text-2xl font-editorial-title font-black text-[#C59B27] leading-none my-1 tw">
              INDIAN
            </span> */}

            {/* Bottom accent motif */}
            {/* <div className="w-8 h-[1px] bg-[#C59B27] mt-1.5 relative">
              <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-[#C59B27] rotate-45"></div>
            </div> */}
          </div>
        </div>

        {/* RIGHT COLUMN: Editorial Storytelling Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Header cursive banner with delicate lines */}
          <motion.div
            variants={revealContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start text-left gap-4"
          >
            <motion.span
              variants={fadeUpVariants}
              className="text-[#B83A18] font-bold text-[15px] sm:text-[15px] tw-[0.2em] up font-sans block"
            >
              About Us
            </motion.span>

            <motion.h2
              variants={fadeUpVariants}
              className="font-title font-black text-[35px] sm:text-[48px] lg:text-[50px] text-stone-950 leading-[0.95] tw-tight up"
            >
              What makes us stand out from the crowd?
            </motion.h2>
          </motion.div>

          {/* Clean Editorial Storytelling Body */}
          <div className="font-editorial-body mt-6 text-[18px] sm:text-[18px] md:text-[18px] text-[#3D3A37] leading-[1.75] flex flex-col gap-5 max-w-[690px] font-normal">
            <motion.p
              variants={faderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Apart from the Food and ambiance, Little India Restaurant and Bar
              offers something more for their customers. We know, Indian Music
              has also left a great mark throughout the world. For instance, the
              use of classical tabla sound and Bhangra in Selena Gomez’s song
              called Come and Get it shows the popularity of Indian Music in the
              international market too. And to bring our music from the period
              of royals to Ghazals, modern Bollywood, and classical ragas,
              Little Indian Denver has set up the musical environment that
              surely melts your heart or even takes you to the dance floor.
            </motion.p>

            <motion.p
              variants={faderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              The aura of Little Indian Belmar filled with the Indian music,
              decor, and aroma of mouth-watering Indian food makes you feel like
              warm and cozy family vibes and makes your experience more
              memorable, and enchanting.
            </motion.p>
          </div>

          {/* Callout Footer pin with deep red map point */}
          <motion.div
            variants={faderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 pt-5 border-t border-[#C59B27]/30 flex items-start gap-3 max-w-[650px]"
          >
            <div className="text-[#8A1515] shrink-0 mt-0.5 animate-bounce">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <p className="font-sans text-[16px] sm:text-[16px] text-[#3D3A37] font-semibold tw">
              Visit{" "}
              <a
                href="https://maps.app.goo.gl/w4x4jVWTk4HYXRgK9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A1515] font-bold underline decoration-[#8A1515]/30 underline-offset-4"
              >
                Little India Restaurant and Bar in Denver, Colorado
              </a>{" "}
              for unforgettable dining.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
