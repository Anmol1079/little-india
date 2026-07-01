'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThirdHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // 'menu' | 'services' | null
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true); // Smart scroll-to-hide state
    
    const lastScrollY = useRef(0);

    // Smooth scroll tracking to add header depth and show/hide on scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 1. Set backdrop blur state on scroll depth
            setScrolled(currentScrollY > 20);

            // 2. Control visibility based on scroll direction
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling DOWN past a minimum threshold -> HIDE
                setVisible(false);
            } else {
                // Scrolling UP -> SHOW
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownToggle = (type) => {
        setActiveDropdown(activeDropdown === type ? null : type);
    };

    // Edge case: Keep header visible if the mobile menu drawer is open
    const isHeaderVisible = visible || mobileMenuOpen;

    return (
        <>
            {/* Main Header Container (Scrolls up/down dynamically) */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-350 ease-in-out ${
                    isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            >

                {/* TIER 2: Main Navigation Menu */}
                <div className={`w-full transition-all duration-300 ${
                    scrolled
                        ? 'bg-black/95 backdrop-blur-md py-5 border-b border-white/5 shadow-xl'
                        : 'bg-black/85 py-5 border-b border-white/5'
                }`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Desktop & Tablet Symmetrical Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center">

                            {/* Left Side Navigation (Desktop only) */}
                            <nav className="hidden md:flex items-center justify-end gap-[45px] lg:gap-[45px] pr-8 lg:pr-12 text-[12px] lg:text-[13px] font-bold tracking-widest uppercase font-sans-custom">
                                <a href="#home" className="text-white hover:text-[#E75B44] transition-colors duration-200">
                                    HOME
                                </a>
                                <a href="#about" className="text-white hover:text-[#E75B44] transition-colors duration-200">
                                    ABOUT US
                                </a>

                                {/* Dropdown: MENU */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveDropdown('menu')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button
                                        onClick={() => handleDropdownToggle('menu')}
                                        className={`flex items-center gap-1 transition-colors duration-200 focus:outline-none ${
                                            activeDropdown === 'menu' ? 'text-[#E75B44]' : 'text-white hover:text-[#E75B44]'
                                        }`}
                                    >
                                        MENU
                                        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'menu' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* ENHANCED DESKTOP MENU DROPDOWN WITH HOVER-GAP BRIDGE */}
                                    {activeDropdown === 'menu' && (
                                        <div className="absolute left-0 mt-3.5 w-56 bg-[#130f18] border-y border-r border-white/[0.06] border-l-[3px] border-l-[#E75B44] rounded-r-xl rounded-l-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] py-3 px-3 animate-fadeIn z-50 before:content-[''] before:absolute before:inset-x-0 before:-top-4 before:h-4">
                                            <div className="flex flex-col gap-1">
                                                <a 
                                                    href="#lunch" 
                                                    className="group flex items-center gap-2.5 px-3 py-2 text-[11px] font-extrabold tracking-widest text-stone-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/[0.02]"
                                                >
                                                    <span className="w-1 h-1.5 bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110 shrink-0"></span>
                                                    <span className="group-hover:translate-x-1.5 transition-transform duration-200 uppercase">Lunch Specials</span>
                                                </a>
                                                <a 
                                                    href="#dinner" 
                                                    className="group flex items-center gap-2.5 px-3 py-2 text-[11px] font-extrabold tracking-widest text-stone-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/[0.02]"
                                                >
                                                    <span className="w-1 h-1.5 bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110 shrink-0"></span>
                                                    <span className="group-hover:translate-x-1.5 transition-transform duration-200 uppercase">Dinner Menu</span>
                                                </a>
                                                <a 
                                                    href="#drinks" 
                                                    className="group flex items-center gap-2.5 px-3 py-2 text-[11px] font-extrabold tracking-widest text-stone-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/[0.02]"
                                                >
                                                    <span className="w-1 h-1.5 bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110 shrink-0"></span>
                                                    <span className="group-hover:translate-x-1.5 transition-transform duration-200 uppercase">Wine & Spirits</span>
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Dropdown: SERVICES */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveDropdown('services')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button
                                        onClick={() => handleDropdownToggle('services')}
                                        className={`flex items-center gap-1 transition-colors duration-200 focus:outline-none ${
                                            activeDropdown === 'services' ? 'text-[#E75B44]' : 'text-white hover:text-[#E75B44]'
                                        }`}
                                    >
                                        SERVICES
                                        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* ENHANCED DESKTOP SERVICES DROPDOWN WITH HOVER-GAP BRIDGE */}
                                    {activeDropdown === 'services' && (
                                        <div className="absolute left-0 mt-3.5 w-56 bg-[#130f18] border-y border-r border-white/[0.06] border-l-[3px] border-l-[#E75B44] rounded-r-xl rounded-l-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] py-3 px-3 animate-fadeIn z-50 before:content-[''] before:absolute before:inset-x-0 before:-top-4 before:h-4">
                                            <div className="flex flex-col gap-1">
                                                <a 
                                                    href="#catering" 
                                                    className="group flex items-center gap-2.5 px-3 py-2 text-[11px] font-extrabold tracking-widest text-stone-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/[0.02]"
                                                >
                                                    <span className="w-1 h-1.5 bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110 shrink-0"></span>
                                                    <span className="group-hover:translate-x-1.5 transition-transform duration-200 uppercase">Catering Services</span>
                                                </a>
                                                <a 
                                                    href="#events" 
                                                    className="group flex items-center gap-2.5 px-3 py-2 text-[11px] font-extrabold tracking-widest text-stone-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/[0.02]"
                                                >
                                                    <span className="w-1 h-1.5 bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110 shrink-0"></span>
                                                    <span className="group-hover:translate-x-1.5 transition-transform duration-200 uppercase">Private Events</span>
                                                </a>
                                                <a 
                                                    href="#delivery" 
                                                    className="group flex items-center gap-2.5 px-3 py-2 text-[11px] font-extrabold tracking-widest text-stone-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/[0.02]"
                                                >
                                                    <span className="w-1 h-1.5 bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110 shrink-0"></span>
                                                    <span className="group-hover:translate-x-1.5 transition-transform duration-200 uppercase">Home Delivery</span>
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </nav>

                            {/* Symmetrically Centered Brand Logo */}
                            <div className="flex justify-start md:justify-center items-center">
                                <a href="#home" className="flex items-center focus:outline-none">
                                    <Image
                                        src="/littleindia.svg"
                                        alt="Little India Logo"
                                        width={180}
                                        height={50}
                                        priority
                                        style={{ height: '42px', width: 'auto' }}
                                        className="object-contain"
                                    />
                                </a>
                            </div>

                            {/* Right Side Navigation (Desktop only) */}
                            <div className="hidden md:flex items-center justify-start pl-8 lg:pl-12">
                                <nav className="hidden md:flex items-center gap-[45px] lg:gap-[45px] text-[12px] lg:text-[13px] font-bold tracking-widest uppercase font-sans-custom">
                                    <a href="#gallery" className="text-white hover:text-[#E75B44] transition-colors duration-200">
                                        GALLERY
                                    </a>
                                    <a href="#reviews" className="text-white hover:text-[#E75B44] transition-colors duration-200">
                                        REVIEWS
                                    </a>
                                    <a href="#blog" className="text-white hover:text-[#E75B44] transition-colors duration-200">
                                        BLOG
                                    </a>
                                    <a href="#contact" className="text-white hover:text-[#E75B44] transition-colors duration-200">
                                        CONTACT
                                    </a>
                                </nav>
                            </div>

                            {/* Mobile Navigation Trigger */}
                            <div className="flex md:hidden justify-end">
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="p-2 text-white hover:text-[#E75B44] transition-colors focus:outline-none"
                                    aria-label="Toggle menu"
                                >
                                    {mobileMenuOpen ? (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            {/* Slide-out Mobile Navigation Drawer */}
            <div
                className={`fixed inset-x-0 bottom-0 top-[82px] z-40 bg-neutral-950/95 backdrop-blur-lg border-t border-white/5 transition-transform duration-300 md:hidden overflow-y-auto ${
                    mobileMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
                }`}
            >
                <div className="px-6 py-8 flex flex-col gap-6 text-sm font-bold tracking-widest uppercase font-sans-custom">
                    <a
                        href="#home"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white hover:text-[#E75B44] transition-colors"
                    >
                        HOME
                    </a>
                    <a
                        href="#about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white hover:text-[#E75B44] transition-colors"
                    >
                        ABOUT US
                    </a>

                    {/* Mobile Dropdown: MENU */}
                    <div className="border-b border-white/5 pb-2">
                        <button
                            onClick={() => handleDropdownToggle('menu')}
                            className={`flex items-center justify-between w-full font-bold tracking-wider py-1 focus:outline-none transition-colors duration-200 ${
                                activeDropdown === 'menu' ? 'text-[#E75B44]' : 'text-white hover:text-[#E75B44]'
                            }`}
                        >
                            <span>MENU</span>
                            <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'menu' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        <AnimatePresence initial={false}>
                            {activeDropdown === 'menu' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col gap-2 border-l-2 border-[#E75B44]/30 pl-4 py-2 mt-2 bg-white/[0.015] rounded-r-lg">
                                        <a 
                                            href="#lunch" 
                                            onClick={() => setMobileMenuOpen(false)} 
                                            className="group flex items-center gap-2 py-1.5 text-xs text-gray-400 hover:text-white transition-all duration-200"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110"></span>
                                            <span className="group-hover:translate-x-1.5 transition-transform duration-200">Lunch Specials</span>
                                        </a>
                                        <a 
                                            href="#dinner" 
                                            onClick={() => setMobileMenuOpen(false)} 
                                            className="group flex items-center gap-2 py-1.5 text-xs text-gray-400 hover:text-white transition-all duration-200"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110"></span>
                                            <span className="group-hover:translate-x-1.5 transition-transform duration-200">Dinner Menu</span>
                                        </a>
                                        <a 
                                            href="#drinks" 
                                            onClick={() => setMobileMenuOpen(false)} 
                                            className="group flex items-center gap-2 py-1.5 text-xs text-gray-400 hover:text-white transition-all duration-200"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110"></span>
                                            <span className="group-hover:translate-x-1.5 transition-transform duration-200">Wine & Spirits</span>
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Dropdown: SERVICES */}
                    <div className="border-b border-white/5 pb-2">
                        <button
                            onClick={() => handleDropdownToggle('services')}
                            className={`flex items-center justify-between w-full font-bold tracking-wider py-1 focus:outline-none transition-colors duration-200 ${
                                activeDropdown === 'services' ? 'text-[#E75B44]' : 'text-white hover:text-[#E75B44]'
                            }`}
                        >
                            <span>SERVICES</span>
                            <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        <AnimatePresence initial={false}>
                            {activeDropdown === 'services' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col gap-2 border-l-2 border-[#E75B44]/30 pl-4 py-2 mt-2 bg-white/[0.015] rounded-r-lg">
                                        <a 
                                            href="#catering" 
                                            onClick={() => setMobileMenuOpen(false)} 
                                            className="group flex items-center gap-2 py-1.5 text-xs text-gray-400 hover:text-white transition-all duration-200"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110"></span>
                                            <span className="group-hover:translate-x-1.5 transition-transform duration-200">Catering Services</span>
                                        </a>
                                        <a 
                                            href="#events" 
                                            onClick={() => setMobileMenuOpen(false)} 
                                            className="group flex items-center gap-2 py-1.5 text-xs text-gray-400 hover:text-white transition-all duration-200"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110"></span>
                                            <span className="group-hover:translate-x-1.5 transition-transform duration-200">Private Events</span>
                                        </a>
                                        <a 
                                            href="#delivery" 
                                            onClick={() => setMobileMenuOpen(false)} 
                                            className="group flex items-center gap-2 py-1.5 text-xs text-gray-400 hover:text-white transition-all duration-200"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E75B44] opacity-30 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-110"></span>
                                            <span className="group-hover:translate-x-1.5 transition-transform duration-200">Home Delivery</span>
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a
                        href="#gallery"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white hover:text-[#E75B44] transition-colors"
                    >
                        GALLERY
                    </a>
                    <a
                        href="#reviews"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white hover:text-[#E75B44] transition-colors"
                    >
                        REVIEWS
                    </a>
                    <a
                        href="#blog"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white hover:text-[#E75B44] transition-colors"
                    >
                        BLOG
                    </a>
                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white hover:text-[#E75B44] transition-colors"
                    >
                        CONTACT US
                    </a>

                    {/* Mobile Action Button */}
                    <a
                        href="#book-table"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full text-center bg-[#E75B44] text-white text-xs font-bold tracking-widest py-4 rounded-full hover:bg-[#d44e39] transition-all duration-300 shadow-md uppercase focus:outline-none mt-4"
                    >
                        BOOK A TABLE
                    </a>
                </div>
            </div>
        </>
    );
}