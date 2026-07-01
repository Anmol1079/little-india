"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_ITEMS = [
  {
    question: "Do you offer vegan, vegetarian, or gluten-free options?",
    answer: "Yes, absolutely! We take great pride in our extensive menu of vegan, vegetarian, and gluten-free traditional Indian options. Our tandoor dishes, hand-roasted specialties, and aromatic curries can be customized to suit your exact dietary preferences."
  },
  {
    question: "What are your delivery and takeout hours?",
    answer: "We offer daily delivery and takeout services from 11:30 AM to 9:30 PM. You can order directly through our website to enjoy fresh, hot tandoori naans and rich, savory curries delivered right to your door."
  },
  {
    question: "Do you offer private events or catering services?",
    answer: "Yes, we provide full-service catering and private dining experiences for weddings, corporate events, birthday celebrations, and gatherings of all sizes. Our team can tailor the menu to suit your group size, preferences, and dietary requirements."
    },
    {
    question: "Can I adjust the spice level of the dishes?",
    answer: "Absolutely. Our dishes can be customized to match your preferred spice level, ranging from mild and creamy to rich and intensely spicy. Simply choose your heat preference—Mild, Medium, Hot, or Indian Hot—when placing your order."
    },
    {
    question: "Is your meat Halal certified?",
    answer: "Yes, we use only premium-quality, certified Halal meats across all our chicken, lamb, and goat dishes, ensuring authenticity and the highest standards of preparation."
    },
    {
    question: "Do you accept table reservations?",
    answer: "Yes, we highly recommend making reservations, especially during weekends and busy dining hours. You can conveniently book your table through our online reservation system."
    },
    {
      question: "Do you offer vegetarian or vegan options?",
      answer: "Yes, we offer a wide selection of vegetarian and vegan dishes made with fresh ingredients and authentic spices. Our menu is designed to cater to diverse dietary preferences without compromising on flavor."
      },
      {
      question: "What are your opening hours?",
      answer: "We are open daily for lunch and dinner. Our hours may vary on weekends and holidays, so we recommend checking our website or contacting us directly for the most up-to-date timings."
      }
      
    
];

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

const revealItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: cubicBezierEase, delay: 0.15 },
  },
};

const staggerListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const accordionRowVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezierEase },
  },
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // Starts with first item expanded by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAEBD4] py-16 px-6 md:px-12 lg:px-20 text-[#0B0C0E] select-none border-b border-stone-200/50">
      
      {/* Scope-contained style block for custom LAB colors */}
      <style dangerouslySetInnerHTML={{ __html: `
        .brand-lab-text {
          color: #fbbf24;
          color: lab(72.7183% 31.8672 97.9407);
        }
        .brand-lab-bg {
          background-color: #fbbf24;
          background-color: lab(72.7183% 31.8672 97.9407);
        }
      ` }} />

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Section Description & Image */}
        <motion.div 
          variants={revealContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          className="lg:col-span-6 flex flex-col items-start text-left gap-6 h-full justify-between"
        >
          
          <div className="flex flex-col gap-6">
            {/* Tagline */}
            <div className="flex items-center gap-2">
              <motion.span 
                variants={revealItemVariants}
                className="text-[#E65C38] font-bold text-xs tracking-widest uppercase font-sans-custom block"
              >
                Faqs
              </motion.span>
            </div>

            {/* Title */}
            <motion.h2 
              variants={revealItemVariants}
              className="font-heavy text-4xl sm:text-5xl lg:text-6xl text-stone-950 uppercase leading-[0.95] tracking-[0.01rem] font-black"
            >
              Frequently asked<br />questions
            </motion.h2>

            {/* Subtext description */}
            <motion.p 
              variants={revealItemVariants}
              className="font-sans-custom text-[13.5px] text-stone-500 font-semibold leading-relaxed max-w-md"
            >
              Explore answers to the most common questions from our trusted guests, partners, and diners.
            </motion.p>
          </div>

          {/* Bottom Left Image Card */}
          <motion.div 
            variants={imageVariants}
            className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-lg border border-stone-200/40 mt-4 shrink-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=800&q=80" 
              alt="Gourmet Indian buffet spread" 
              className="w-full h-full object-cover filter saturate-[0.95]"
            />
          </motion.div>

        </motion.div>

        {/* RIGHT COLUMN: Interactive Accordion list */}
        <motion.div 
          variants={staggerListVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25, margin: "0px 0px -100px 0px" }}
          className="lg:col-span-6 flex flex-col gap-5 w-full relative h-full justify-center"
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                variants={accordionRowVariants}
                className="flex flex-col pb-5 pt-5 border-b border-stone-200/60 first:pt-0 last:border-b-0 last:pb-0"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="font-sans-custom text-sm sm:text-base font-bold text-stone-950 group-hover:text-[#E65C38] transition-colors duration-200">
                    {item.question}
                  </span>
                  
                  {/* Up/Down Chevron Icon transition */}
                  <motion.svg 
                    animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? "#E65C38" : "#a8a29e" }}
                    transition={{ duration: 0.4, ease: cubicBezierEase }}
                    className="w-5 h-5 shrink-0 ml-4" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                {/* Fluid Height Reveal container */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isOpen ? "auto" : 0, 
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? 12 : 0
                  }}
                  transition={{ duration: 0.5, ease: cubicBezierEase }}
                  className="overflow-hidden"
                >
                  <div className="font-sans-custom text-[12.5px] sm:text-[13px] text-stone-500 font-semibold leading-relaxed max-w-3xl pr-4 pb-1">
                    {item.answer}
                  </div>
                </motion.div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}