'use client';

import { useState, useEffect, useRef } from 'react';
import { Oswald, Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import gsap from 'gsap';

// Load typography
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const slides = [
  {
    tag: 'Denver Best Indian Restaurant',
    title: 'WHERE ELEGANCE\nMEETS FLAVOR',
    bgImage: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1600',
    avatarText: 'We turn every meal into a memorable experience.\nFrom mouth-watering dishes crafted with love.',
  },
  {
    tag: 'Authentic Heritage Recipes',
    title: 'ARTISTRY ON\nEVERY PLATE',
    bgImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1600',
    avatarText: 'Discover a sanctuary where passion meets authentic spices.\nEvery dish is crafted with heritage and precision.',
  },
  {
    tag: 'Denver Finest Dining',
    title: 'A HERITAGE OF\nTRUE TASTE',
    bgImage: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=1600',
    avatarText: 'Exquisite traditional recipes passed down through generations.\nMade fresh daily with authentic local spices.',
  },
];

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

export default function NewDineno() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDish, setCurrentDish] = useState(0); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const isInitialMount = useRef(true);
  
  // Drag/Swipe Gesture State
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  // Preload non-first slide images on mount to keep transitions smooth
  useEffect(() => {
    slides.slice(1).forEach((slide) => {
      const img = new Image();
      img.src = slide.bgImage;
    });
  }, []);

  // 1. Permanent Ambient Floating Drift & Infinite Text Scroll
  useEffect(() => {
    const select = gsap.utils.selector(heroRef);

    const floatingTimeline = gsap.to(select('.floating-ingredient'), {
      y: '+=15',
      rotation: 'random(-15, 15)',
      duration: 'random(2.2, 3.8)',
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.3,
        from: 'random',
      },
    });

    const scrollTimeline = gsap.to(select('.scrolling-text'), {
      xPercent: -50,
      repeat: -1,
      duration: 35,
      ease: 'none',
    });

    return () => {
      floatingTimeline.kill();
      scrollTimeline.kill();
    };
  }, []);

  // 2. Mouse Interaction Parallax for Ingredients
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPct = (clientX / window.innerWidth - 0.5) * 35;
      const yPct = (clientY / window.innerHeight - 0.5) * 35;

      gsap.to('.floating-ingredient', {
        x: (index) => xPct * (index + 1) * 0.45,
        y: (index) => yPct * (index + 1) * 0.45,
        duration: 1.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3. Immersive 3D Card Interactive Tilt Physics
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleCardMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      const angleX = -(yc - y) / 10;
      const angleY = (xc - x) / 10;

      gsap.to(card, {
        rotateX: angleX,
        rotateY: angleY,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.5,
        overwrite: 'auto',
      });
    };

    const handleCardLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        ease: 'power3.out',
        duration: 0.8,
        overwrite: 'auto',
      });
    };

    card.addEventListener('mousemove', handleCardMove);
    card.addEventListener('mouseleave', handleCardLeave);

    return () => {
      card.removeEventListener('mousemove', handleCardMove);
      card.removeEventListener('mouseleave', handleCardLeave);
    };
  }, []);

  // 4. Main Banner Transitions (GSAP Content Sync)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const select = gsap.utils.selector(heroRef);

      // Animate text elements
      gsap.fromTo(select('.animate-text-item'), 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
      );

      // Skip background crossfade animation on mount to prevent black screen delay
      if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
      }

      const bgSlides = select('.bg-slide-item');
      gsap.to(bgSlides, { opacity: 0, duration: 1.0, ease: 'power2.out' });
      gsap.fromTo(bgSlides[currentSlide], 
        { opacity: 0 },
        { opacity: 1, duration: 1.0, ease: 'power2.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [currentSlide]);

  // 5. Independent Dish Card Autoplay Slider
  useEffect(() => {
    const dishInterval = setInterval(() => {
      setCurrentDish((prev) => (prev + 1) % cardDishes.length);
    }, 4500);

    return () => clearInterval(dishInterval);
  }, []);

  // Handlers for Slider Navigation
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const handleDotClick = (index) => {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  // 6. Robust Autoplay Loop (Avoids interval stacking/reset bugs)
  const savedAutoPlayCallback = useRef();

  useEffect(() => {
    savedAutoPlayCallback.current = () => {
      if (!isTransitioning) {
        handleNext();
      }
    };
  }, [isTransitioning, currentSlide]);

  useEffect(() => {
    const tick = () => savedAutoPlayCallback.current();
    const id = setInterval(tick, 6500);
    return () => clearInterval(id);
  }, []);

  // 7. Drag-to-Slide Handlers
  const onDragStart = (clientX) => {
    dragStartX.current = clientX;
    isDragging.current = true;
  };

  const onDragMove = (clientX) => {
    if (!isDragging.current) return;
    const dragDistance = clientX - dragStartX.current;
    
    if (Math.abs(dragDistance) > 80) {
      if (dragDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
      isDragging.current = false;
    }
  };

  const onDragEnd = () => {
    isDragging.current = false;
  };

  return (
    <section 
      ref={heroRef}
      onMouseDown={(e) => onDragStart(e.clientX)}
      onMouseMove={(e) => onDragMove(e.clientX)}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
      onTouchEnd={onDragEnd}
      className={`relative w-full h-screen min-h-[650px] bg-black text-white overflow-hidden perspective-1000 select-none cursor-grab active:cursor-grabbing ${jakarta.className}`}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
        .animate-kenburns {
          animation: kenburns 6.5s ease-out forwards;
        }
        @keyframes dishCardReveal {
          0% { opacity: 0; transform: scale(0.93) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .animate-dish-reveal {
          animation: dishCardReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      ` }} />

      {/* Infinite scrolling typography layer */}
      <div className="absolute inset-y-0 flex items-center overflow-hidden z-0 select-none pointer-events-none w-[200vw]">
        <div className="scrolling-text text-[13vw] font-extrabold tracking-[0.25em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.035)] uppercase whitespace-nowrap">
          ELEGANCE • FLAVOR • HERITAGE • ELEGANCE • FLAVOR • HERITAGE •
        </div>
      </div>

      {/* Scattered Floating Ingredients Parallax Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Mint Leaf 1 */}
        <div className="floating-ingredient absolute top-1/4 left-[10%] w-16 h-16 opacity-75">
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-2xl">
            <path d="M32 4C22 4 10 12 6 22C2 32 8 38 16 38C26 38 34 26 34 18C34 10 28 4 18 4Z" fill="#22c55e" />
            <path d="M18 4C14 14 14 26 16 38" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 20C10 22 8 28 8 32" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        {/* Red Chili Pepper */}
        <div className="floating-ingredient absolute top-1/4 right-[10%] w-12 h-12 opacity-80">
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-2xl">
            <path d="M10 50C15 54 28 54 38 44C48 34 54 20 54 10C54 8 48 12 44 14C34 18 20 28 14 38C8 48 6 48 10 50Z" fill="#ef4444" />
            <path d="M50 14C52 10 54 6 56 4" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        {/* Basil Leaf 2 */}
        <div className="floating-ingredient absolute bottom-28 left-[18%] w-16 h-14 opacity-55">
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-2xl">
            <path d="M32 4C22 4 10 12 6 22C2 32 8 38 16 38C26 38 34 26 34 18C34 10 28 4 18 4Z" fill="#4ade80" />
            <path d="M18 4C14 14 14 26 16 38" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 20C10 22 8 28 8 32" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        {/* Split Tomato Slice */}
        {/* <div className="floating-ingredient absolute bottom-1/3 right-[32%] w-12 h-12 opacity-65">
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-2xl">
            <circle cx="32" cy="32" r="28" fill="#ef4444" />
            <circle cx="32" cy="32" r="24" fill="#dc2626" />
            <path d="M32 12V52M12 32H52" stroke="#b91c1c" strokeWidth="2.5" />
            <circle cx="24" cy="24" r="2.5" fill="#fef08a" />
            <circle cx="42" cy="22" r="2.5" fill="#fef08a" />
            <circle cx="22" cy="42" r="2.5" fill="#fef08a" />
            <circle cx="42" cy="42" r="2.5" fill="#fef08a" />
          </svg>
        </div> */}
      </div>

      {/* Main Background Slider Canvas */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none bg-black">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`bg-slide-item absolute inset-0 transition-opacity duration-1000 ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.bgImage}
                alt=""
                loading={index === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 w-full h-full object-cover ${isActive ? 'animate-kenburns' : ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 md:via-black/75 to-transparent z-10" />
            </div>
          );
        })}
      </div>

      {/* Grid Content Wrapper */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full items-center">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-7 flex flex-col justify-center pointer-events-auto">
            {/* Exactly one dynamic <h1> element with React keys to maintain GSAP transition support */}
            <span 
              key={`tag-${currentSlide}`}
              className="animate-text-item text-[#E75B44] text-[15px] tracking-widest font-semibold block mb-3"
            >
              {slides[currentSlide].tag}
            </span>

            <h1 
              key={`title-${currentSlide}`}
              className={`animate-text-item text-5xl sm:text-6xl md:text-7xl lg:text-[115px] leading-[0.98] tracking-tight font-extrabold text-white whitespace-pre-line mb-8 ${oswald.className}`}
            >
              {slides[currentSlide].title}
            </h1>

            {/* Social / Info Block */}
            <div className="animate-text-item flex items-start gap-4 mb-8 max-w-lg">
              <div className="overflow-hidden">
                <p 
                  key={`desc-${currentSlide}`}
                  className="text-[16px] text-gray-300 font-light leading-relaxed whitespace-pre-line tracking-wide animate-fadeIn"
                >
                  {slides[currentSlide].avatarText}
                </p>
              </div>
            </div>

            {/* Action pill container */}
            <div className="animate-text-item inline-flex self-start backdrop-blur-md rounded-full p-1 shadow-2xl pointer-events-auto">
              <Link
                href="/menu"
                className="group bg-[#E75B44] hover:bg-[#d14b35] text-white text-[11px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200"
              >
                <span>MENUS</span>
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

          {/* Right Column: Synced 3D Floating Dish Card */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative lg:translate-x-10 lg:translate-y-[15rem] h-full pointer-events-auto">
            <div
              ref={cardRef}
              className="dish-reveal-card w-[320px] md:w-[350px] bg-white p-4 rounded-[1.5rem] shadow-2xl border border-stone-200/20 flex flex-col gap-3 relative z-30 transition-shadow duration-300 hover:shadow-black/35 hover:shadow-3xl"
            >
              <div className="flex justify-between items-start px-1 select-none">
                <div className="overflow-hidden max-w-[85%]">
                  {/* Single Heading 3 element to display the active dish title */}
                  <h3 
                    key={`dish-title-${currentDish}`}
                    className="text-[11px] font-extrabold uppercase tracking-wider text-stone-900 leading-tight animate-fadeIn"
                  >
                    {cardDishes[currentDish].title}
                  </h3>
                </div>
                <span className="shrink-0">
                  <svg className="w-5 h-5 text-[#E75B44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M4 6h10a4 4 0 014 4v8m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

              <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden bg-stone-100 dish-card">
                {cardDishes.map((dish, index) => {
                  const isActive = index === currentDish;
                  return (
                    <img 
                      key={index}
                      src={dish.img} 
                      alt="Signature Dish Presentation" 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                        isActive ? 'opacity-100 scale-100 animate-dish-reveal' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6 bg-black/40 backdrop-blur-sm px-5 py-2 rounded-full border border-white/5 select-none pointer-events-auto">
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