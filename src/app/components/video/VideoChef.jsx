'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LuxuryYachtLanding() {
  return (
    <section className="w-full bg-[#FDFBF7] text-[#1A2E35] min-h-screen antialiased">
      
      {/* 1. FIRST SCROLL & ZOOM VIDEO SECTION */}
      <ScrollZoomSection 
        videoSrc="https://res.cloudinary.com/dezd0troy/video/upload/v1782191286/5452068-uhd_3840_2160_25fps_vqp4us.mp4"
      />

    </section>
  );
}

/* ==========================================================================
   SCROLL ZOOM SUB-COMPONENT (Smooth Uniform-Unit Viewport Zoom)
   ========================================================================== */
function ScrollZoomSection({ videoSrc }) {
  const containerRef = useRef(null);

  // Track the raw 1:1 scroll position relative to this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Stretched timeline to control the gradual transition:
  // 0.00 -> 0.15 : Initial state (No video, text stacked)
  // 0.15 -> 0.25 : Video slowly emerges to its inline 12% x 8% size
  // 0.25 -> 0.95 : Video gradually zooms up to full-screen width/height
  // 0.95 -> 1.00 : Locked at full screen (does not disappear, scrolls away naturally)
  const timeline = [0, 0.15, 0.25, 0.95, 1.00];

  // Using percentages (%) instead of vw/vh ensures the video container respects parent boundaries
  const width = useTransform(scrollYProgress, timeline, ['0%', '0%', '12%', '100%', '100%']);
  const height = useTransform(scrollYProgress, timeline, ['0%', '0%', '8%', '100%', '100%']);
  const borderRadius = useTransform(scrollYProgress, timeline, ['16px', '16px', '12px', '0px', '0px']);
  
  // Video Opacity: Fades in, and remains at 1 (no disappear fade-out at the end)
  const videoOpacity = useTransform(scrollYProgress, [0, 0.15, 0.22, 1.00], [0, 0, 1, 1]);

  // Video inner crop scale
  const videoScale = useTransform(scrollYProgress, timeline, [1.3, 1.3, 1.3, 1.0, 1.0]);

  // Text Fading: Smoothly fades out as the video expands to fullscreen
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.55, 1.00], [1, 1, 1, 0, 0]);

  // "Ocean" Offset: Stays vertically shifted up, slowly pushing left relative to viewport width
  const oceanX = useTransform(scrollYProgress, timeline, ['4vw', '4vw', '-8vw', '-60vw', '-60vw']);
  const oceanY = useTransform(scrollYProgress, timeline, ['-4vh', '-4vh', '-4vh', '-4vh', '-4vh']);

  // "Moments" Offset: Stays vertically shifted down, slowly pushing right relative to viewport width
  const momentsX = useTransform(scrollYProgress, timeline, ['-4vw', '-4vw', '8vw', '60vw', '60vw']);
  const momentsY = useTransform(scrollYProgress, timeline, ['4vh', '4vh', '4vh', '4vh', '4vh']);

  return (
    // Height set to 300vh for a very deep, slow, and controlled scroll-zoom depth
    <div ref={containerRef} className="relative h-[300vh] w-full bg-[#FDFBF7]">
      
      {/* Sticky viewport frame - CHANGED w-screen TO w-full TO PREVENT HORIZONTAL SCROLLBAR */}
      <div className="sticky top-0 h-screen w-full left-0 overflow-hidden flex items-center justify-center z-10">
        
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Left Text: Ocean */}
          <motion.span
            style={{ x: oceanX, y: oceanY, opacity: textOpacity }}
            className="absolute right-1/2 text-5xl md:text-7xl lg:text-8xl text-[#1A2E35] font-semibold tw-tight select-none whitespace-nowrap z-0"
          >
           CHEF'S
          </motion.span>

          {/* Centered Animating Video Container */}
          <motion.div
            style={{
              width,
              height,
              borderRadius,
              opacity: videoOpacity,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl z-20 bg-black"
          >
            <motion.video
              style={{ scale: videoScale }}
              className="absolute inset-0 w-full h-full object-cover"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>

          {/* Right Text: Moments */}
          <motion.span
            style={{ x: momentsX, y: momentsY, opacity: textOpacity }}
            className="absolute left-1/2 text-5xl md:text-7xl lg:text-8xl text-[#1A2E35] font-semibold tw-tight select-none whitespace-nowrap z-0"
          >
            ARTS
          </motion.span>

        </div>
      </div>
    </div>
  );
}