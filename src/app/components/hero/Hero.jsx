"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-950">

      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/little-india-banner.jpg"
          alt="Restaurant Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/20 to-stone-950/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

        {/* Main Content Group */}
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tw-tight">
            Where Every Meal <br />
            <span className="italic">Becomes a Memory</span>
          </h1>

          {/* Subheader */}
          <p className="text-stone-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light tw">
            From sizzling pizzas to creamy pastas and chilled drinks, we serve
            more than food—we serve connection. Every bite brings people closer.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Link
              href="/reservations"
              className="inline-block bg-[#E65C38] hover:bg-[#cf4d2c] text-white px-10 py-4 rounded-full text-[15px] font-bold upp tw-[0.2em] transition-all duration-300 shadow-2xl shadow-[#E65C38]/40 hover:-translate-y-1 active:scale-95"
            >
              Book A Table Today
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Image Cards */}

      {/* Left Card - Pasta */}
      <div className="absolute bottom-10 left-10 md:left-20 lg:left-32 w-40 h-40 md:w-56 md:h-56 z-20 hidden md:block group">
        <div className="relative w-full h-full transform -rotate-12 transition-all duration-700 group-hover:-rotate-6 group-hover:scale-105">
          <div className="absolute inset-0 bg-stone-950/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all" />
          <div className="relative w-full h-full border-4 border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/banner-small-2.jpg"
              alt="Delicious Pasta"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Card - Interior */}
      <div className="absolute bottom-20 right-10 md:right-20 lg:right-32 w-32 h-44 md:w-48 md:h-64 z-20 hidden md:block group">
        <div className="relative w-full h-full transform rotate-6 transition-all duration-700 group-hover:rotate-3 group-hover:scale-105">
          <div className="absolute inset-0 bg-stone-950/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all" />
          <div className="relative w-full h-full border-4 border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/banner-small.jpg"
              alt="Restaurant Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Decorative Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />

    </section>
  );
}
