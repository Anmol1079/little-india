'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function VideoSection() {
  const videoContainerRef = useRef(null);

  // Track the scroll position relative to the video container
  // 'start start' means scroll progress starts exactly when the container hits the top of the viewport (and sticks)
  // 'end end' means scroll progress ends when the container unsticks
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start center', 'end end'],
  });

  // Map the zoom effect to occur between 0% (when it sticks in the middle) and 50% of the scroll
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const width = useTransform(scrollYProgress, [0, 0.5], ['85%', '100%']);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ['24px', '0px']);

  return (
    <div className="w-full bg-[#FDFBF7] pt-0">
      {/* SCROLL & ZOOM VIDEO SECTION */}
      <div 
        ref={videoContainerRef} 
        className="relative h-[150vh] w-full bg-[#FDFBF7]"
      >
        {/* Sticky wrapper pins the video during scroll zoom */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          <motion.div
            style={{
              scale,
              width,
              borderRadius,
            }}
            className="relative h-[100vh] overflow-hidden shadow-2xl transition-all duration-75"
          >
            {/* The video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="https://res.cloudinary.com/dezd0troy/video/upload/v1782191286/5452068-uhd_3840_2160_25fps_vqp4us.mp4"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Overlapping Torn Paper Edge (Bottom of Video) */}
            <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none translate-y-[2px]">
              <img 
                src="/overlap-image.avif" 
                alt="Torn paper transition"
                className="w-full h-auto object-cover min-h-[50px] md:min-h-[100px]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}