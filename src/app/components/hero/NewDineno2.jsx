'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger safely for the browser environment
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const BANNER_DATA = {
  tag: 'The Best Indian Food Restaurant In Denver Colorado',
  title: 'EXPERIENCE THE FLAVOURS OF INDIA',
  bgImage: '/19996.jpg',
  avatarText: 'Experience the rich and authentic flavors of India at Little India Denver, one of the most loved Indian restaurants in Denver, Colorado. From aromatic curries and perfectly spiced biryanis to freshly baked naan and sizzling tandoori specialties.',
  featuredVideo: 'https://res.cloudinary.com/dezd0troy/video/upload/v1783310647/7818015-hd_1920_1080_24fps_xrsft9.mp4',
};

export default function NewDineno2() {
  const heroRef = useRef(null);
  const pinSpacerRef = useRef(null); 
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullyZoomed, setIsFullyZoomed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isAtEndRef = useRef(false);

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

  // 3. ScrollTrigger Zoom Animation
  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    const heroElement = heroRef.current;
    const pinSpacerElement = pinSpacerRef.current;
    if (!videoContainer || !heroElement || !pinSpacerElement) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Helper calculations for dynamic translations
      const calculateTranslationX = (el) => {
        const rect = el.getBoundingClientRect();
        const currentX = gsap.getProperty(el, 'x') || 0;
        const initialLeft = rect.left - currentX;
        const initialWidth = rect.width / (gsap.getProperty(el, 'scaleX') || 1);
        
        const centerX = window.innerWidth / 2;
        const elementCenterX = initialLeft + initialWidth / 2;
        return centerX - elementCenterX;
      };

      const calculateTranslationY = (el) => {
        const rect = el.getBoundingClientRect();
        const currentY = gsap.getProperty(el, 'y') || 0;
        const initialTop = rect.top - currentY;
        const initialHeight = rect.height / (gsap.getProperty(el, 'scaleY') || 1);

        const centerY = window.innerHeight / 2;
        const elementCenterY = initialTop + initialHeight / 2;
        return centerY - elementCenterY;
      };

      const calculateScale = (el) => {
        const rect = el.getBoundingClientRect();
        const currentScaleX = gsap.getProperty(el, 'scaleX') || 1;
        const initialWidth = rect.width / currentScaleX;
        return window.innerWidth / initialWidth;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroElement,
          start: 'top top',
          end: '+=120%',
          pin: true,
          pinSpacer: pinSpacerElement, 
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const isAtEnd = self.progress > 0.98;
            if (isAtEnd !== isAtEndRef.current) {
              isAtEndRef.current = isAtEnd;
              setIsFullyZoomed(isAtEnd);
            }
          }
        }
      });

      tl.to('.left-column-content', {
        opacity: 0,
        y: -30,
        duration: 0.4,
      }, 0);

      tl.to('.video-card-header, .video-card-footer', {
        opacity: 0,
        duration: 0.3
      }, 0);

      tl.to('.video-card', {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
        duration: 0.3
      }, 0);

      tl.to(videoContainer, {
        x: () => calculateTranslationX(videoContainer),
        y: () => calculateTranslationY(videoContainer),
        scaleX: () => calculateScale(videoContainer),
        scaleY: () => calculateScale(videoContainer),
        borderRadius: 0,
        ease: 'power1.inOut',
      }, 0);
    });

    return () => mm.revert();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div ref={pinSpacerRef} className="relative w-full h-screen min-h-[650px]">
      <section 
        ref={heroRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-full bg-black text-white overflow-hidden z-10"
      >
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes kenburns {
            0% { transform: scale(1.0); }
            100% { transform: scale(1.08); }
          }
          .animate-kenburns {
            animation: kenburns 12s ease-out forwards;
          }
        ` }} />

        {/* Infinite scrolling typography layer */}
        <div className="absolute inset-y-0 flex items-center overflow-hidden z-0 select-none pointer-events-none w-[200vw]">
          <div className="scrolling-text text-[13vw] font-title font-black tw-[0.25em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.035)] upp whitespace-nowrap">
            ELEGANCE • FLAVOR • HERITAGE • ELEGANCE • FLAVOR • HERITAGE •
          </div>
        </div>

        {/* Main Background - Single Banner Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none bg-black">
          <img
            src={BANNER_DATA.bgImage}
            alt="Artisanal wood-fired pizza with bubbling cheese"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover animate-kenburns filter saturate-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 md:via-black/75 to-transparent z-10" />
        </div>

        {/* Grid Content Wrapper (Added pt-28 on mobile/tablet to push content below the fixed header) */}
        <div className="relative z-20 w-full h-full max-w-[1500px] mx-auto px-6 md:px-12 flex items-center pt-28 lg:pt-0 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full items-center">
            
            {/* Left Column: Heading and description */}
            <div className="left-column-content lg:col-span-7 flex flex-col justify-center pointer-events-auto">
              <span className="animate-text-item text-[#E94222] text-[15px] twst font-semibold block mb-3 uppercase font-sans">
                {BANNER_DATA.tag}
              </span>

              <h1 className="animate-text-item text-4xl sm:text-5xl md:text-7xl lg:text-[99px] leading-[0.98] tw-tight font-title font-black text-white whitespace-pre-line mb-8 uppercase">
                {BANNER_DATA.title}
              </h1>

              {/* Narrative / Info Block */}
              <div className="animate-text-item flex items-start gap-4 mb-8 max-w-lg">
                <p className="text-[16px] md:text-[18px] text-gray-300 font-light leading-relaxed whitespace-pre-line tw font-sans">
                  {BANNER_DATA.avatarText}
                </p>
              </div>

              {/* Action pill container */}
              <div className="animate-text-item inline-flex self-start backdrop-blur-md rounded-full p-1 shadow-2xl pointer-events-auto">
                <Link
                  href="/menu"
                  className="group bg-[#C13419] hover:bg-[#a82c14] text-white text-[15px] font-bold twst px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans"
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

            {/* Right Column: Culinary Video Card */}
            <div className="video-card-container hidden lg:flex lg:col-span-5 items-center justify-center relative lg:translate-x-10 lg:translate-y-[15rem] h-full pointer-events-auto">
              <div className="video-card w-[320px] md:w-[350px] bg-white p-4 rounded-[1.5rem] shadow-2xl border border-stone-200/20 flex flex-col gap-3 relative z-30 transition-shadow duration-300">
                
                {/* select-none removed to enable highlighting and selection in card header */}
                <div className="video-card-header flex justify-between items-center px-1">
                  <div className="overflow-hidden max-w-[85%]">
                    <h2 className="text-[13px] font-extrabold uppercase text-stone-900 leading-tight font-sans">
                      Little India Denver Restaurant
                    </h2>
                  </div>
                  <span className="flex h-2 w-2 relative select-none">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E94222]"></span>
                  </span>
                </div>

                {/* Video container and play control wrapper (Clicking anywhere within this aspect-ratio container plays/pauses) */}
                <div 
                  onClick={togglePlay}
                  className="relative w-full aspect-video z-40 cursor-pointer"
                >
                  {/* Video viewport (Decorative layer remains select-none to protect clicks) */}
                  <div 
                    ref={videoContainerRef}
                    className="video-container w-full h-full rounded-xl overflow-hidden bg-stone-100 select-none shadow-inner origin-center"
                  >
                    <video
                      ref={videoRef}
                      src={BANNER_DATA.featuredVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Footnote / Label */}
                <div className="video-card-footer flex justify-between items-center px-1 text-[11px] text-stone-500 font-bold font-sans tracking-wider">
                  <span>FRESH, AUTHENTIC INDIAN FOOD PREPARED LIVE</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Play/Pause Control Button overlay (Centered via viewport-fixed coordinates relative to the pinned section) */}
        <button
          type="button"
          onClick={togglePlay}
          className={`play-pause-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-stone-900 w-16 h-16 rounded-full border border-stone-200 shadow-2xl flex items-center justify-center cursor-pointer hover:bg-stone-50 hover:scale-105 active:scale-95 transition-all duration-300 ${
            isFullyZoomed && isHovered 
              ? "opacity-100 scale-100 visible pointer-events-auto" 
              : "opacity-0 scale-90 invisible pointer-events-none"
          }`}
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? (
            /* Big clean Pause Icon */
            <svg className="w-6 h-6 text-stone-900" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            /* Big clean Play Icon */
            <svg className="w-6 h-6 text-stone-900 translate-x-[2px]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

      </section>
    </div>
  );
}