"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down for a premium cinematic feel
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-stone-950">

      {/* Background Video with Sophisticated Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          {/* Replaced broken Cloudinary link with a verified, highly stable public stock video source */}
          <source
            src="https://res.cloudinary.com/dezd0troy/video/upload/v1781674676/13476222_3840_2160_25fps_ejqv4n.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Multi-layered Overlay for Premium Depth */}
        <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-stone-950/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Content Container with Slide-in Animation */}
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Subtle Decorative Element */}
          <div className="flex items-center justify-center space-x-4 animate-in fade-in zoom-in duration-1000">
            <span className="w-12 h-[1px] bg-[#E65C38]" />
            <span className="text-[10px] upp tracking-[0.5em] text-[#E65C38] font-bold">
              Est. 1998
            </span>
            <span className="w-12 h-[1px] bg-[#E65C38]" />
          </div>

          {/* Epic Main Headline */}
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] tracking-tight animate-in slide-in-from-bottom-full duration-1000 delay-200">
              Where Every Meal <br />
              <span className="italic font-light text-stone-200">Becomes a Memory</span>
            </h1>
          </div>

          {/* Refined Sub-headline */}
          <p className="text-stone-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light tracking-widest upp opacity-80 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            Savor the perfect blend of tradition <br className="hidden md:block" /> and contemporary Indian excellence
          </p>

          {/* Premium CTA Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <Link
              href="/reservations"
              className="group relative inline-flex items-center justify-center bg-[#E65C38] text-white px-10 py-5 rounded-full text-[15px] font-bold upp tracking-[0.25em] transition-all duration-500 hover:bg-white hover:text-[#E65C38] shadow-2xl shadow-[#E65C38]/20"
            >
              <span className="relative z-10">Book A Table Now</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </Link>

            <Link
              href="/menu"
              className="text-white text-[11px] upp tracking-[0.3em] font-semibold border-b border-white/20 hover:border-[#E65C38] pb-1 transition-all duration-300"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Cinematic Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 opacity-50 animate-bounce">
        <span className="text-[9px] upp tracking-[0.4em] text-white font-medium rotate-90 mb-4 h-24 flex items-center">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div> */}

      {/* Floating Experience Badges */}
      <div className="hidden lg:block absolute bottom-20 left-12 space-y-6">
        <div className="flex items-center space-x-4 group cursor-default">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white text-[15px] group-hover:bg-[#E65C38] transition-colors">
            01
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] upp tracking-widest text-[#E65C38] font-bold">Fine Dining</span>
            <span className="text-[11px] text-stone-400 font-light">Exquisite Ambiance</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 group cursor-default">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white text-[15px] group-hover:bg-[#E65C38] transition-colors">
            02
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] upp tracking-widest text-[#E65C38] font-bold">Authentic</span>
            <span className="text-[11px] text-stone-400 font-light">Heritage Recipes</span>
          </div>
        </div>
      </div>

    </section>
  );
}