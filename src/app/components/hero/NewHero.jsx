'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';

const slides = [
  {
    tag: 'A Culinary Sanctuary Rooted in Heritage',
    title: 'GENUSS MIT STIL',
    subtitle: 'Crafted to Captivate • Savored with Soul',
    bgImage: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1600&auto=format&fit=crop', // Moody chef plating gourmet dish
    description: 'Immerse your senses in a luxurious masterclass of culinary heritage. Every bite is an exploration of slow-cooked traditional spices combined with modern innovation.',
  },
  {
    tag: 'Denver Finest Dining Experience',
    title: 'KRAFT UND ELEGANZ',
    subtitle: 'Woven with Artistry • Served with Pride',
    bgImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop', // Fire-baked gourmet dough
    description: 'Savor family recipes preserved over generations, featuring custom-ground garam masalas and organic ingredients handpicked by our master chefs daily.',
  },
];

export default function NewHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);
  const bannerRef = useRef(null);
  const leftPlateRef = useRef(null);
  const rightPlateRef = useRef(null);

  // 1. Permanent Ambient Floating Drift & Infinite Text Scroll
  useEffect(() => {
    const select = gsap.utils.selector(bannerRef);

    // Continuous randomized drift for each vector ingredient
    const floatingTimeline = gsap.to(select('.ambient-floating'), {
      y: '+=25',
      rotation: 'random(-20, 20)',
      duration: 'random(2.5, 4.5)',
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.35,
        from: 'random',
      },
    });

    // Horizontal Marquees scrolling in opposite directions
    const marqueeLeft = gsap.to(select('.marquee-l'), {
      xPercent: -50,
      repeat: -1,
      duration: 38,
      ease: 'none',
    });

    const marqueeRight = gsap.to(select('.marquee-r'), {
      xPercent: 50,
      repeat: -1,
      duration: 42,
      ease: 'none',
    });

    return () => {
      floatingTimeline.kill();
      marqueeLeft.kill();
      marqueeRight.kill();
    };
  }, []);

  // 2. Mouse Interaction Parallax for Drifting Ingredients and Floating Plates
  useEffect(() => {
    const container = bannerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPct = (clientX / window.innerWidth - 0.5) * 45;
      const yPct = (clientY / window.innerHeight - 0.5) * 45;

      // Animate layered ingredients based on depth factor
      gsap.to('.ambient-floating', {
        x: (index) => xPct * (index + 1) * 0.45,
        y: (index) => yPct * (index + 1) * 0.45,
        duration: 1.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3. Immersive Slide Reveal Sequence (Coordinates typography, masks, and backgrounds)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const select = gsap.utils.selector(bannerRef);

      // Sequence staggered text components up
      gsap.fromTo(select('.animate-reveal-text'), 
        { y: 55, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.15 }
      );

      // Slide and scale background images in tandem with GSAP
      const mediaPanels = select('.focal-slide-item');
      gsap.to(mediaPanels, { opacity: 0, scale: 1, duration: 1.2, ease: 'power2.out' });
      gsap.fromTo(mediaPanels[currentSlide], 
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1.03, duration: 1.2, ease: 'power2.out' }
      );

    }, bannerRef);

    return () => ctx.revert();
  }, [currentSlide]);

  // 4. Interactive 3D Magnetic Plate Hover Effects
  useEffect(() => {
    const setupMagneticEffect = (ref) => {
      const element = ref.current;
      if (!element) return;

      const handleMouseMove = (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(element, {
          x: x * 0.35,
          y: y * 0.35,
          rotateX: -y * 0.1,
          rotateY: x * 0.1,
          transformPerspective: 800,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.75)',
          overwrite: 'auto',
        });
      };

      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    const cleanupLeft = setupMagneticEffect(leftPlateRef);
    const cleanupRight = setupMagneticEffect(rightPlateRef);

    return () => {
      if (cleanupLeft) cleanupLeft();
      if (cleanupRight) cleanupRight();
    };
  }, []);

  // Autoplay slider logic
  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 7500);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentSlide]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleDotClick = (index) => {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  return (
    <section 
      ref={bannerRef}
      className="relative w-full h-screen min-h-[700px] bg-[#080808] text-white overflow-hidden flex items-center perspective-1000"
    >
      
      {/* 1. Infinite scrolling luxury marquee layer */}
      <div className="absolute inset-y-0 flex flex-col justify-center gap-32 z-0 select-none pointer-events-none w-[200vw] opacity-[0.03]">
        <div className="marquee-l text-[9vw] font-extrabold tracking-[0.3em] text-transparent [-webkit-text-stroke:1px_white] upp whitespace-nowrap">
          SAVOR THE EXTRAORDINARY • ARTISTRY ON EVERY PLATE • SAVOR THE EXTRAORDINARY • ARTISTRY ON EVERY PLATE •
        </div>
        <div className="marquee-r text-[9vw] font-extrabold tracking-[0.3em] text-transparent [-webkit-text-stroke:1px_white] upp whitespace-nowrap -translate-x-1/2">
          LA PERLA RESTAURANT • SWISS FINE DINING • LA PERLA RESTAURANT • SWISS FINE DINING •
        </div>
      </div>

      {/* 2. Scattered Floating Spices Parallax Layer (Freshbox & EatNaked Inspired) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none">
        
        {/* Vector Mint Leaf 1 */}
        <div className="ambient-floating absolute top-28 left-[10%] w-14 h-14 opacity-70">
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-3xl">
            <path d="M32 4C22 4 10 12 6 22C2 32 8 38 16 38C26 38 34 26 34 18C34 10 28 4 18 4Z" fill="#15803d" />
            <path d="M18 4C14 14 14 26 16 38" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16 20C10 22 8 28 8 32" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Vector Red Chili Pepper */}
        <div className="ambient-floating absolute top-1/3 right-[38%] w-11 h-11 opacity-85">
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-3xl">
            <path d="M10 50C15 54 28 54 38 44C48 34 54 20 54 10C54 8 48 12 44 14C34 18 20 28 14 38C8 48 6 48 10 50Z" fill="#ef4444" />
            <path d="M50 14C52 10 54 6 56 4" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Vector Basil Leaf 2 */}
        <div className="ambient-floating absolute bottom-28 left-[18%] w-16 h-14 opacity-60">
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-3xl">
            <path d="M32 4C22 4 10 12 6 22C2 32 8 38 16 38C26 38 34 26 34 18C34 10 28 4 18 4Z" fill="#22c55e" />
            <path d="M18 4C14 14 14 26 16 38" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16 20C10 22 8 28 8 32" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Vector Split Tomato Slice */}
        <div className="ambient-floating absolute bottom-1/3 right-[28%] w-12 h-12 opacity-75">
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-3xl">
            <circle cx="32" cy="32" r="28" fill="#ef4444" />
            <circle cx="32" cy="32" r="24" fill="#dc2626" />
            <path d="M32 12V52M12 32H52" stroke="#fca5a5" strokeWidth="2" />
            <circle cx="24" cy="24" r="3" fill="#fef08a" />
            <circle cx="40" cy="24" r="3" fill="#fef08a" />
            <circle cx="24" cy="40" r="3" fill="#fef08a" />
            <circle cx="40" cy="40" r="3" fill="#fef08a" />
          </svg>
        </div>

      </div>

      {/* 3. Left-Side Vertical Navigation Panel (La Perla Inspired) */}
      <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-16 select-none">
        {/* Reservation vertical text */}
        <span className="text-[10px] text-stone-400 font-bold tracking-[0.4em] upp rotate-180 [writing-mode:vertical-lr]">
          RESERVATIONS: +41 62 791 31 51
        </span>
        {/* Glassmorphic message circle button */}
        <Link 
          href="/contact" 
          className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-white/10 flex items-center justify-center transition-all duration-300 shadow-xl"
        >
          <svg className="w-4.5 h-4.5 text-stone-300 hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </Link>
      </div>

      {/* 4. Symmetrical Floating Cutout Gourmet Plates with 3D Magnetic Cursor Attraction */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-16 lg:px-24">
        {/* Left Floating Plate: Saffron Biryani Bowl */}
        <div 
          ref={leftPlateRef}
          className="hidden xl:block w-52 h-52 relative origin-center pointer-events-auto cursor-pointer drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)] -translate-x-12 translate-y-12"
        >
          <img 
            src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500&auto=format&fit=crop" 
            alt="Mughlai Biryani specialty" 
            className="w-full h-full object-contain rounded-full border border-white/5"
            loading="eager"
          />
        </div>

        {/* Right Floating Plate: Premium Plated Steak */}
        <div 
          ref={rightPlateRef}
          className="hidden xl:block w-52 h-52 relative origin-center pointer-events-auto cursor-pointer drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)] translate-x-12 -translate-y-24"
        >
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop" 
            alt="Grilled Filet specialty" 
            className="w-full h-full object-contain rounded-full border border-white/5"
            loading="eager"
          />
        </div>
      </div>

      {/* 5. Center-Aligned Content, badging, and action pill */}
      <div className="relative z-30 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-[-40px]">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div key={index} className={isActive ? 'flex flex-col items-center' : 'hidden'}>
              {/* Glassmorphic Heritage Tag */}
              <div className="animate-reveal-text inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-[10px] sm:text-[15px] font-bold tracking-[0.25em] text-stone-300 upp">
                  {slide.tag}
                </span>
              </div>

              {/* Classic Tall Roman Headline (La Perla Inspired) */}
              <h1 
                className="animate-reveal-text text-5xl sm:text-6xl md:text-7.5xl leading-[1.05] tracking-wide font-heavy font-medium text-white mb-6 upp"
              >
                {slide.title}
              </h1>

              {/* Subtitle / Phrase */}
              <h2 className={`animate-reveal-text text-[15px] sm:text-lg font-light tracking-[0.35em] text-stone-400 mb-8 upp`}>
                {slide.subtitle}
              </h2>

              {/* Rich Body Paragraph */}
              <p className="animate-reveal-text text-stone-300 text-sm sm:text-[15px] leading-relaxed max-w-xl mb-12 font-light">
                {slide.description}
              </p>
            </div>
          );
        })}

        {/* Central Symmetrical Multi-Action Button Pill (Bavet Inspired) */}
        <div className="animate-reveal-text inline-flex self-center bg-black/85 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-2xl scale-95 sm:scale-100">
          <Link 
            href="/menu" 
            className="bg-[#E75B44] hover:bg-[#d14b35] text-white text-[10px] sm:text-[11px] font-bold tracking-widest px-5 sm:px-6 py-3.5 rounded-full transition-colors duration-200"
          >
            OUR MENU
          </Link>
          <Link 
            href="/reservations" 
            className="text-stone-300 hover:text-white text-[10px] sm:text-[11px] font-bold tracking-widest px-5 sm:px-6 py-3.5 transition-colors duration-200"
          >
            BOOK A TABLE
          </Link>
          <Link 
            href="/contact" 
            className="text-stone-300 hover:text-white text-[10px] sm:text-[11px] font-bold tracking-widest px-5 sm:px-6 py-3.5 transition-colors duration-200 border-l border-white/10"
          >
            ORDER ONLINE
          </Link>
        </div>
      </div>

      {/* 6. Symmetrical Centered Organic Oval Frame (Bavet Inspired) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center select-none pointer-events-none opacity-40">
        <div 
          className="w-[280px] sm:w-[350px] md:w-[480px] aspect-[4/5] rounded-[10rem_4rem_10rem_4rem] overflow-hidden border border-white/10 shadow-2xl relative"
        >
          <div className="absolute inset-0 w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="focal-slide-item absolute inset-0 opacity-0"
              >
                <img 
                  src={slide.bgImage} 
                  alt="Cinematic kitchen art" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manual Slider Indicator Strip */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6 bg-black/45 backdrop-blur-sm px-5 py-2 rounded-full border border-white/5 select-none">
        {/* Previous Button */}
        <button 
          onClick={handlePrev}
          disabled={isTransitioning}
          className="text-white/60 hover:text-white transition-colors focus:outline-none"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Navigation Indicator Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                disabled={isTransitioning}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  isActive ? 'w-6 bg-[#E75B44]' : 'w-2 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Next Button */}
        <button 
          onClick={handleNext}
          disabled={isTransitioning}
          className="text-white/60 hover:text-white transition-colors focus:outline-none"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
}