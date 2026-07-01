'use client';

import { useState, useEffect, useRef } from 'react';

export default function Hero_2() {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const totalScrollable = rect.height - window.innerHeight;
            if (totalScrollable <= 0) return;

            const currentScroll = -rect.top;
            const pct = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
            setProgress(pct);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial evaluation

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // Scroll Container - 180vh tall to provide smooth scroll driving space
        <div
            ref={containerRef}
            className="relative w-full h-[180vh] bg-[#FAF8F5] transition-colors duration-500"
        >
            {/* Sticky Viewport Container */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center">

                {/* Floating Side Cards (Translate and scale closer to center on scroll) */}
                <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-6 md:px-12">
                    {/* Left Floating Card: Pasta Plate */}
                    <div
                        className="hidden sm:block w-[220px] md:w-[260px] aspect-[4/5] bg-white p-3 rounded-2xl shadow-xl border border-stone-200/20 origin-center transition-transform duration-100 ease-out will-change-transform"
                        style={{
                            transform: `translate3d(${-80 + (220 * progress)}px, ${progress * 130}px, 0) rotate(${-12 + (5 * progress)}deg) scale(${1 - (0.15 * progress)})`,
                        }}
                    >
                        <div className="w-full h-full relative rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop"
                                alt="Penne Pasta with Tomato Sauce"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>
                    </div>

                    {/* Right Floating Card: Restaurant Interior */}
                    <div
                        className="hidden sm:block w-[220px] md:w-[260px] aspect-[4/5] bg-white p-3 rounded-2xl shadow-xl border border-stone-200/20 origin-center transition-transform duration-100 ease-out will-change-transform"
                        style={{
                            transform: `translate3d(${80 - (220 * progress)}px, ${progress * 130}px, 0) rotate(${12 - (5 * progress)}deg) scale(${1 - (0.15 * progress)})`,
                        }}
                    >
                        <div className="w-full h-full relative rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop"
                                alt="Cozy Dining Tables"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>

                {/* Central Content (Double-Layer Opacity Overlay for precise color transitions) */}
                <div className="relative z-30 flex flex-col items-center justify-center px-4 max-w-3xl mx-auto text-center pointer-events-none mt-[-5vh]">
                    <div className="relative w-full flex flex-col items-center">

                        {/* 1. Dark Theme Typography (Visible when progress = 0) */}
                        <div
                            className="transition-opacity duration-100 ease-out will-change-opacity flex flex-col items-center"
                            style={{ opacity: 1 - progress }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-heavy font-medium leading-[1.12] text-stone-950 mb-6">
                                Where Every Meal Becomes a Memory
                            </h1>
                            <p className="text-sm md:text-[15px] text-stone-600 font-light leading-relaxed max-w-2xl">
                                From sizzling pizzas to creamy pastas and chilled drinks, we serve more than food—we serve connection. Every bite brings people closer.
                            </p>
                        </div>

                        {/* 2. Light Theme Typography (Visible when progress = 1) */}
                        <div
                            className="absolute inset-0 flex flex-col items-center transition-opacity duration-100 ease-out will-change-opacity"
                            style={{ opacity: progress }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-heavy font-medium leading-[1.12] text-white mb-6">
                                Where Every Meal Becomes a Memory
                            </h1>
                            <p className="text-sm md:text-[15px] text-stone-200 font-light leading-relaxed max-w-2xl">
                                From sizzling pizzas to creamy pastas and chilled drinks, we serve more than food—we serve connection. Every bite brings people closer.
                            </p>
                        </div>

                    </div>

                    {/* Interactive Button */}
                    <div className="mt-10 pointer-events-auto">
                        <a
                            href="#book-table"
                            className="bg-[#E75B44] hover:bg-[#d14b35] text-white text-[13.5px] font-bold tracking-wider px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#E75B44]/20 inline-block focus:outline-none"
                        >
                            Book A Table Today
                        </a>
                    </div>
                </div>

                {/* Bottom Expanding Background Media Container */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 z-10 overflow-hidden shadow-2xl transition-all duration-100 ease-out will-change-transform"
                    style={{
                        width: `${68 + (32 * progress)}%`,
                        height: `${34 + (66 * progress)}%`,
                        borderRadius: `${32 * (1 - progress)}px`,
                        bottom: `${-3 * (1 - progress)}%`,
                    }}
                >
                    {/* Subtle parallax scale on the background image */}
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1600&auto=format&fit=crop"
                            alt="Chefs Cooking"
                            className="w-full h-full object-cover"
                            style={{ transform: `scale(${1.1 - (0.1 * progress)})` }}
                            loading="eager"
                        />
                    </div>
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-black/45" />
                </div>

            </div>
        </div>
    );
}