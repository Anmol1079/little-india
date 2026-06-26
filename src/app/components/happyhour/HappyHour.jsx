'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DRINK_SPECIALS = [
  {
    id: 'drink-1',
    title: 'Mixed Drinks',
    price: '$5',
    description: 'Breckenridge Vodka • Jim Beam Bourbon • Sauza Tequila',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'drink-2',
    title: 'Craft Cocktails',
    price: '$6',
    description: 'Moscow Mule • Signature Margarita',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'drink-3',
    title: 'Draft Beers',
    price: '$5',
    description: 'Trumer Pils • Indian Bottle Beers',
    image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'drink-4',
    title: 'House Wine',
    price: '$6',
    description: 'Imported Red & White selection directly from Indian Estates',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'drink-5',
    title: 'Mango Lassi Shakes',
    price: '$4',
    description: 'Traditional mango yogurt shake blended fresh with cardamom',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=400&q=80'
  }
];

const FOOD_SPECIALS = [
  {
    id: 'food-1',
    title: 'Vegetable Samosa',
    price: '$5',
    description: 'Deep-fried pastries stuffed with spiced potato & peas.',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'food-2',
    title: 'Onion Bhaji',
    price: '$4',
    description: 'Crispy onion fritters in spiced chickpea batter.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'food-3',
    title: 'Chicken Pakora',
    price: '$6',
    description: 'Crispy fried chicken in spiced chickpea batter.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'food-4',
    title: 'Tandoori Wings',
    price: '$8',
    description: 'Smoky tandoori wings grilled in traditional clay oven.',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80'
  }
];

// Custom Deceleration Cubic-Bezier Easing (Smooth slow-out)
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

const cardItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezierEase },
  },
};

export default function HappyHourSection() {
  const [isHappyHourActive, setIsHappyHourActive] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const denverTime = new Date().toLocaleString("en-US", { timeZone: "America/Denver" });
      const date = new Date(denverTime);
      const day = date.getDay();
      const hour = date.getHours();
      
      const isWeekday = day >= 1 && day <= 5;
      const isHappyHourTime = hour >= 15 && hour < 17;

      setIsHappyHourActive(isWeekday && isHappyHourTime);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 xl:px-16 overflow-visible select-none border-b border-stone-200">
      
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600;700;800&display=swap');
        
        .font-heavy {
          font-family: 'Anton', sans-serif;
        }
        .font-sans-custom {
          font-family: 'Montserrat', sans-serif;
        }
      ` }} />

      <div className="max-w-7xl mx-auto flex flex-col gap-4 relative">
        
        {/* TOP SECTION: Header Info, Status Badge */}
        <motion.div 
          variants={revealContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full pb-8 relative"
        >
          
          {/* Header left (Expanded width on mobile / table layout offsets) */}
          <div className="md:col-span-9 flex flex-col text-left">
            <motion.span 
              variants={headerItemVariants}
              className="text-[#e65c38] font-bold text-xs tracking-widest uppercase font-sans-custom block mb-2"
            >
              Sip & Savor
            </motion.span>

            <motion.h2 
              variants={headerItemVariants}
              className="font-heavy text-[45px] sm:text-[60px] text-stone-950 uppercase leading-[0.95] tracking-[0.01rem] mb-1"
            >
              Happy Hour
            </motion.h2>

            <motion.div variants={headerItemVariants} className="flex flex-col gap-1.5 mt-4">
              <p className="font-sans-custom font-semibold text-[14px] leading-relaxed text-stone-500">
              Good drinks. Great bites. Even better company. Unwind in a warm and inviting atmosphere where every sip and every flavor is crafted to elevate your evening experience.
              </p>
              {/* Timing subtext displayed only on mobile viewports */}
              <p className="font-sans-custom font-bold text-[13px] text-[#e65c38] md:hidden mt-1 uppercase tracking-wider">
                Monday – Friday • 3:00 PM – 5:00 PM
              </p>
            </motion.div>
          </div>

          {/* Header Right: Status Badge & Timing Card (Hidden on Mobile) */}
          <motion.div 
            variants={headerItemVariants}
            className="hidden md:flex md:col-span-3 flex-col items-center md:items-end gap-3 shrink-0"
          >
            <div className="bg-white border border-stone-200 rounded-3xl p-5 shadow-sm w-full max-w-[260px] flex flex-col gap-3">
              <div className="bg-[#e65c38] text-white px-4 py-2 rounded-xl text-[10px] font-bold tracking-widest font-sans-custom select-none inline-flex items-center justify-center gap-1.5 uppercase shadow-sm">
                <i className="fa-regular fa-clock text-xs"></i>
                <span>{isHappyHourActive ? 'HAPPENING NOW' : 'COMING UP NEXT'}</span>
              </div>
              
              <div className="text-center font-sans-custom">
                <span className="block text-[#e65c38] font-bold text-xs tracking-widest uppercase">
                  Monday – Friday
                </span>
                <span className="block text-stone-900 font-extrabold text-lg mt-0.5">
                  3:00 PM – 5:00 PM
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM PANEL SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* LEFT PANEL: Drink Specials */}
          <motion.div 
            variants={panelLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            className="lg:col-span-5 bg-[#fef6df] border border-stone-200/80 rounded-[2.5rem] p-6 sm:p-8 shadow-xl flex flex-col gap-6"
          >
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e65c38] text-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <i className="fa-solid fa-glass-martini-alt text-sm"></i>
              </div>
              <h3 className="font-heavy text-2xl text-stone-900 uppercase tracking-wide leading-none mt-1">
                Drink Specials
              </h3>
            </div>

            {/* Staggered Drink Card List with tuned springs */}
            <motion.div variants={staggerListVariants} className="flex flex-col gap-4">
              {DRINK_SPECIALS.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={cardItemVariants}
                  whileHover={{ 
                    y: -3, 
                    scale: 1.01, 
                    borderColor: 'rgba(230, 92, 56, 0.22)',
                    boxShadow: '0 20px 30px -10px rgba(230, 92, 56, 0.06)'
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  className="bg-white rounded-2xl p-3 pr-5 flex items-center justify-between gap-4 border border-stone-200/40 shadow-sm cursor-pointer group transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-col gap-0.5 text-left font-sans-custom">
                      <h4 className="text-sm font-extrabold text-stone-900 uppercase tracking-wide leading-tight group-hover:text-[#e65c38] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-semibold leading-relaxed max-w-[200px] sm:max-w-none">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="w-10 h-10 bg-[#fef6df] border border-[#f5e9ce] text-[#d85507] font-sans-custom font-bold text-sm rounded-full flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 group-hover:bg-[#e65c38] group-hover:text-white group-hover:border-transparent">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT PANEL: Food Specials */}
          <motion.div 
            variants={panelRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            className="lg:col-span-7 bg-[#fef6df] border border-stone-200/80 rounded-[2.5rem] p-6 sm:p-8 shadow-xl flex flex-col gap-6"
          >
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e65c38] text-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <i className="fa-solid fa-plate-wheat text-sm"></i>
              </div>
              <h3 className="font-heavy text-2xl text-stone-900 uppercase tracking-wide leading-none mt-1">
                Food Specials
              </h3>
            </div>

            {/* Food Specials Grid with tuned springs */}
            <motion.div variants={staggerListVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
              {FOOD_SPECIALS.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={cardItemVariants}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.01,
                    borderColor: 'rgba(230, 92, 56, 0.22)',
                    boxShadow: '0 25px 40px -10px rgba(230, 92, 56, 0.08)'
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  className="bg-white rounded-3xl overflow-hidden flex flex-col justify-between border border-stone-200/40 shadow-sm relative group cursor-pointer transition-colors duration-300"
                >
                  <div className="w-full h-44 overflow-hidden relative border-b border-stone-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    
                    <div className="absolute top-3 right-3 z-20 bg-[#e65c38] text-white font-sans-custom text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md transition-transform duration-500 ease-out group-hover:scale-105">
                      {item.price}
                    </div>
                  </div>

                  <div className="p-5 text-center font-sans-custom flex flex-col justify-between flex-grow">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-extrabold text-stone-900 uppercase tracking-wide leading-tight group-hover:text-[#e65c38] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-semibold leading-relaxed min-h-[32px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}