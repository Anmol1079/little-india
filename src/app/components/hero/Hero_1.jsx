'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2000&auto=format&fit=crop',
        title: 'Where Tradition Meets\nInnovation In Sushi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare est id neque eleifend, accumsan mattis odio molestie. Donec ut tristique ligula, et facilisis magna.',
    },
    {
        image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2000&auto=format&fit=crop',
        title: 'Crafting Exquisite Taste\nIn Every Single Roll',
        description: 'Experience the delicate balance of fresh ingredients, masterfully prepared by our culinary artists. We bring authentic flavor with a modern twist to your plate.',
    },
    {
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2000&auto=format&fit=crop',
        title: 'A Culinary Journey\nRooted In Heritage',
        description: 'Savor classic nigiri and contemporary fusion creations made with premium seasonal fish, sourced daily and served with absolute precision.',
    },
];

const TOTAL_SLICES = 5; // Number of vertical panel segments

export default function Hero_1() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const containerRef = useRef(null);
    const autoPlayRef = useRef(null);

    // 1. Trigger the state change to render the slice elements
    useEffect(() => {
        if (currentSlide === prevSlide) return;
        setIsTransitioning(true);
    }, [currentSlide, prevSlide]);

    // 2. Play GSAP animations only after elements are mounted in the DOM
    useEffect(() => {
        if (!isTransitioning) return;

        // Scopes queries to this container to prevent targeting globally or prematurely
        const select = gsap.utils.selector(containerRef);
        const panels = select('.slice-panel');
        const images = select('.slice-image');
        const textItems = select('.animate-text-item');

        // Safe exit if elements aren't mounted or found yet
        if (panels.length === 0 || images.length === 0) {
            setPrevSlide(currentSlide);
            setIsTransitioning(false);
            return;
        }

        const tl = gsap.timeline({
            onComplete: () => {
                setPrevSlide(currentSlide);
                setIsTransitioning(false);
            },
        });

        // Outer panels slide-in (Staggered Right to Left)
        tl.fromTo(
            panels,
            { xPercent: 100 },
            {
                xPercent: 0,
                duration: 0.9,
                stagger: 0.08,
                ease: 'power3.inOut',
            },
            0
        );

        // Parallax inner images (Translate in opposite direction)
        tl.fromTo(
            images,
            { xPercent: -40 },
            {
                xPercent: 0,
                duration: 0.9,
                stagger: 0.08,
                ease: 'power3.inOut',
            },
            0
        );

        // Concurrent text fade in
        if (textItems.length > 0) {
            tl.fromTo(
                textItems,
                { opacity: 0, y: 25 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: 'power2.out',
                },
                0.5
            );
        }

        return () => {
            tl.kill();
        };
    }, [isTransitioning, currentSlide]);

    // Slideshow Autoplay Loop
    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayRef.current = setInterval(() => {
            if (!isTransitioning) {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }
        }, 6500);
    };

    const stopAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    }, [isTransitioning]);

    const handleSlideSelect = (index) => {
        if (index === currentSlide || isTransitioning) return;
        setCurrentSlide(index);
        startAutoPlay();
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[calc(100vh-80px)] min-h-[650px] flex flex-col justify-between text-white overflow-hidden"
        >

            {/* Base Slide Layer (Static background) */}
            <div className="absolute inset-0 z-0">
                <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${!isTransitioning ? 'scale-105' : 'scale-100' }`}
                    style={{ backgroundImage: `url(${slides[prevSlide].image})` }}
                />
                <div className="absolute inset-0 bg-black/55" />
            </div>

            {/* Transitioning Slices (Only rendered when transitions are active) */}
            {isTransitioning && (
                <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none flex">
                    {Array.from({ length: TOTAL_SLICES }).map((_, index) => {
                        const widthPct = 100 / TOTAL_SLICES;
                        const leftPct = index * widthPct;
                        return (
                            <div
                                key={index}
                                className="slice-panel absolute top-0 bottom-0 overflow-hidden"
                                style={{
                                    width: `${widthPct}%`,
                                    left: `${leftPct}%`,
                                }}
                            >
                                <div
                                    className="slice-image absolute inset-y-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${slides[currentSlide].image})`,
                                        width: `${TOTAL_SLICES * 100}%`,
                                        left: `-${index * 100}%`,
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/55" />
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Central Content */}
            <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-[-20px]">
                <h1
                    className="animate-text-item text-[64px] font-heavy font-medium tw leading-[1.15] text-white whitespace-pre-line mb-5"
                >
                    {slides[isTransitioning ? currentSlide : prevSlide].title}
                </h1>

                <p className="animate-text-item text-sm md:text-base text-gray-100 max-w-2xl leading-relaxed mb-10 font-normal">
                    {slides[isTransitioning ? currentSlide : prevSlide].description}
                </p>

                {/* CTA Button */}
                <button className="animate-text-item group relative flex items-center gap-4 bg-transparent text-white font-semibold text-[15px] md:text-sm twst transition-colors duration-300 hover:text-[#ff6b57]">
                    <span className="w-11 h-11 rounded-full bg-[#ff5c40] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <svg
                            className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                    </span>
                    BOOK NOW
                </button>
            </div>

            {/* Bottom Footer Section */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 mt-auto">
                <div className="w-full h-[1px] bg-white/10 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    {/* Stats */}
                    <div className="flex flex-wrap gap-12 md:gap-16">
                        <div>
                            <h3 className="text-2xl md:text-3xl text-white font-heavy font-medium mb-1">
                                30+
                            </h3>
                            <p className="text-[10px] md:text-[15px] text-gray-400 twst upp font-normal">
                                Healthy Sushi's
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl text-white font-heavy font-medium mb-1">
                                15+
                            </h3>
                            <p className="text-[10px] md:text-[15px] text-gray-400 twst upp font-normal">
                                Years Of Experience
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl text-white font-heavy font-medium mb-1">
                                95%
                            </h3>
                            <p className="text-[10px] md:text-[15px] text-gray-400 twst upp font-normal">
                                Happy Customer's
                            </p>
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="flex gap-2.5 self-end md:self-auto">
                        {slides.map((_, index) => {
                            const isActive = index === currentSlide;
                            return (
                                <button
                                    key={index}
                                    disabled={isTransitioning}
                                    onClick={() => handleSlideSelect(index)}
                                    className={`w-5 h-5 border flex items-center justify-center transition-all duration-300 focus:outline-none ${isActive ? 'border-white' : 'border-white/20 hover:border-white/50' } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    <span
                                        className={`w-2.5 h-2.5 bg-[#ff5c40] transition-transform duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0' }`}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
