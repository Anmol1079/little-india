'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const BANNER_DATA = {
  tag: 'Denver Best Neapolitan Pizza',
  title: 'CRAFTED TO BE DEVOURED',
  bgImage: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1600',
  avatarText: 'Experience the warmth of a bubbling wood-fired crust, rich melted mozzarella, and fresh San Marzano tomatoes. Every slice is a masterpiece crafted to captivate your senses.',
};

const cardDishes = [
  {
    title: 'Experience Our Signature Dishes',
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Tandoori Specialty Platters',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Aromatic Mughlai Biryani',
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Zesty Garlic Butter Prawns',
    img: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Crispy Sizzler Buff Chilly',
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop',
  }
];

export default function NewDineno2() {
  const [currentDish, setCurrentDish] = useState(0); 
  const heroRef = useRef(null);

  // 1. Infinite Text Scroll Animation
  useEffect(() => {
    const select = gsap.utils.selector(heroRef);

    const scrollTimeline = gsap.to(select('.scrolling-text'), {
      xPercent: -50,
      repeat: -1,
      duration: 35,
      ease: 'none',
    });

    return () => {
      scrollTimeline.kill();
    };
  }, []);

  // 2. Main Text Animation on Mount
  useEffect(() => {
    const select = gsap.utils.selector(heroRef);
    gsap.fromTo(select('.animate-text-item'), 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
    );
  }, []);

  // 3. Gentle Autoplay for Dish Card Slider
  useEffect(() => {
    const dishInterval = setInterval(() => {
      handleNextDish();
    }, 5500);

    return () => clearInterval(dishInterval);
  }, [currentDish]);

  const handleNextDish = () => {
    setCurrentDish((prev) => (prev + 1) % cardDishes.length);
  };

  const handlePrevDish = () => {
    setCurrentDish((prev) => (prev - 1 + cardDishes.length) % cardDishes.length);
  };

  // Snaps container left or right based on swipe direction
  const handleDragEnd = (event, info) => {
    const threshold = 40;
    if (info.offset.x < -threshold) {
      handleNextDish();
    } else if (info.offset.x > threshold) {
      handlePrevDish();
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative w-full h-screen min-h-[650px] bg-black text-white overflow-hidden select-none"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
        .animate-kenburns {
          animation: kenburns 12s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      ` }} />

      {/* Infinite scrolling typography layer */}
      <div className="absolute inset-y-0 flex items-center overflow-hidden z-0 select-none pointer-events-none w-[200vw]">
        <div className="scrolling-text text-[13vw] font-title font-black tracking-[0.25em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.035)] upp whitespace-nowrap">
          ELEGANCE • FLAVOR • HERITAGE • ELEGANCE • FLAVOR • HERITAGE •
        </div>
      </div>

      {/* Main Background - Single Banner Image (Mouthwatering Pizza) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none bg-black">
        <img
          src={BANNER_DATA.bgImage}
          alt="Artisanal wood-fired pizza with bubbling cheese"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover animate-kenburns filter saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 md:via-black/75 to-transparent z-10" />
      </div>

      {/* Grid Content Wrapper */}
      <div className="relative z-20 w-full h-full max-w-[1500px] mx-auto px-6 md:px-12 flex items-center pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full items-center">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-7 flex flex-col justify-center pointer-events-auto">
            <span className="animate-text-item text-[#E94222] text-[15px] tracking-widest font-semibold block mb-3 upp font-sans">
              {BANNER_DATA.tag}
            </span>

            <h1 className="animate-text-item text-5xl sm:text-6xl md:text-7xl lg:text-[99px] leading-[0.98] tracking-tight font-title font-black text-white whitespace-pre-line mb-8 upp">
              {BANNER_DATA.title}
            </h1>

            {/* Narrative / Info Block */}
            <div className="animate-text-item flex items-start gap-4 mb-8 max-w-lg">
              <p className="text-[16px] md:text-[18px] text-gray-300 font-light leading-relaxed whitespace-pre-line tracking-wide font-sans">
                {BANNER_DATA.avatarText}
              </p>
            </div>

            {/* Action pill container */}
            <div className="animate-text-item inline-flex self-start backdrop-blur-md rounded-full p-1 shadow-2xl pointer-events-auto">
              <Link
                href="/menu"
                className="group bg-[#C13419] hover:bg-[#a82c14] text-white text-[15px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans"
              >
                <span>EXPLORE MENU</span>
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
          </div>

          {/* Right Column: Draggable Slider Dish Card */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative lg:translate-x-10 lg:translate-y-[15rem] h-full pointer-events-auto">
            <div className="w-[320px] md:w-[350px] bg-white p-4 rounded-[1.5rem] shadow-2xl border border-stone-200/20 flex flex-col gap-3 relative z-30">
              
              <div className="flex justify-between items-start px-1 select-none">
                <div className="overflow-hidden max-w-[85%]">
                  <h2 
                    key={`dish-title-${currentDish}`}
                    className="text-[11px] font-extrabold upp tracking-wider text-stone-900 leading-tight font-sans animate-fadeIn"
                  >
                    {cardDishes[currentDish].title}
                  </h2>
                </div>
                <span className="shrink-0">
                  <svg className="w-5 h-5 text-[#E94222]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M4 6h10a4 4 0 014 4v8m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

              {/* Continuous Flex Track: Drag-to-Slide Container */}
              <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden bg-stone-100 cursor-grab active:cursor-grabbing select-none">
                <motion.div 
                  className="flex h-full w-full"
                  animate={{ x: `-${currentDish * 100}%` }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={handleDragEnd}
                >
                  {cardDishes.map((dish, index) => (
                    <div key={index} className="w-full h-full shrink-0 relative">
                      <img 
                        src={dish.img} 
                        alt={dish.title} 
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Dish Card Progress Dots - touch target ≥24×24px via button padding, visual dot via inner span */}
              <div className="flex justify-center gap-0.5 mt-1 select-none">
                {cardDishes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentDish(idx)}
                    className="min-h-[24px] min-w-[24px] flex items-center justify-center focus:outline-none"
                    aria-label={`Go to dish slide ${idx + 1}`}
                  >
                    <span
                      className={`h-1.5 rounded-full transition-all duration-300 block ${
                        idx === currentDish ? 'w-4 bg-[#C13419]' : 'w-1.5 bg-stone-200 hover:bg-stone-300'
                      }`}
                    />
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}