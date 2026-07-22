'use client';

import { useState, useEffect } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
});

export default function FourthHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // 'menu' | 'services' | null
    const [scrolled, setScrolled] = useState(false);

    // Monitor scroll depth to dynamically add soft container shadows
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownToggle = (type) => {
        setActiveDropdown(activeDropdown === type ? null : type);
    };

    return (
        <header
            className={`fixed top-6 left-0 right-0 z-50 w-full max-w-7xl mx-auto transition-all duration-300 ${jakarta.className}`}
        >
            {/* Symmetrical Floating Pill Container */}
            <div
                className={`bg-white px-5 md:px-6 lg:px-8 py-3.5 rounded-[20px] border border-stone-200/50 flex justify-between items-center transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-black/5' : 'shadow-sm' }`}
            >
                {/* Left Section: Logo Image Link (Tastiva style placement) */}
                <Link href="/" className="flex items-center shrink-0 focus:outline-none">
                    <Image
                        src="/littleindia-black.svg" // Custom SVG asset
                        alt="Logo"
                        width={140}
                        height={42}
                        priority
                        style={{ height: '36px', width: 'auto' }} // Preserves precise visual aspect ratio
                        className="object-contain"
                    />
                </Link>

                {/* Center Section: Navigation Links (Little India Menus inside Tastiva Container) */}
                <nav className="hidden xl:flex items-center gap-5 lg:gap-6 text-[12px] lg:text-[15px] font-extrabold twst text-stone-800 upp">
                    <Link href="#home" className="hover:text-[#E75B44] transition-colors duration-200">
                        HOME
                    </Link>
                    <Link href="#about" className="hover:text-[#E75B44] transition-colors duration-200">
                        ABOUT US
                    </Link>

                    {/* MENU Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown('menu')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button
                            onClick={() => handleDropdownToggle('menu')}
                            className={`flex items-center gap-1 font-extrabold focus:outline-none transition-colors duration-200 ${activeDropdown === 'menu' ? 'text-[#E75B44]' : 'hover:text-[#E75B44]' }`}
                        >
                            MENU
                            <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'menu' ? 'rotate-180 text-[#E75B44]' : 'text-stone-800'}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {activeDropdown === 'menu' && (
                            <div className="absolute left-0 mt-3 w-56 bg-white border border-stone-200/60 rounded-xl py-2 shadow-xl animate-fadeIn">
                                <Link href="#lunch" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 text-[11px] font-bold twst text-[#333] hover:text-[#E75B44] hover:bg-stone-50 transition-all upp">
                                    LUNCH SPECIALS
                                </Link>
                                <Link href="#dinner" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 text-[11px] font-bold twst text-[#333] hover:text-[#E75B44] hover:bg-stone-50 transition-all upp">
                                    DINNER MENU
                                </Link>
                                <Link href="#drinks" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 text-[11px] font-bold twst text-[#333] hover:text-[#E75B44] hover:bg-stone-50 transition-all upp">
                                    WINE & SPIRITS
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* SERVICES Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown('services')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button
                            onClick={() => handleDropdownToggle('services')}
                            className={`flex items-center gap-1 font-extrabold focus:outline-none transition-colors duration-200 ${activeDropdown === 'services' ? 'text-[#E75B44]' : 'hover:text-[#E75B44]' }`}
                        >
                            SERVICES
                            <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {activeDropdown === 'services' && (
                            <div className="absolute left-0 mt-3 w-56 bg-white border border-stone-200/60 rounded-xl py-2 shadow-xl animate-fadeIn">
                                <Link href="#catering" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 text-[11px] font-bold twst text-[#333] hover:text-[#E75B44] hover:bg-stone-50 transition-all upp">
                                    CATERING SERVICES
                                </Link>
                                <Link href="#events" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 text-[11px] font-bold twst text-[#333] hover:text-[#E75B44] hover:bg-stone-50 transition-all upp">
                                    PRIVATE EVENTS
                                </Link>
                                <Link href="#delivery" onClick={() => setActiveDropdown(null)} className="block px-5 py-2.5 text-[11px] font-bold twst text-[#333] hover:text-[#E75B44] hover:bg-stone-50 transition-all upp">
                                    HOME DELIVERY
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link href="#gallery" className="hover:text-[#E75B44] transition-colors duration-200">
                        GALLERY
                    </Link>
                    <Link href="#reviews" className="hover:text-[#E75B44] transition-colors duration-200">
                        REVIEWS
                    </Link>
                    <Link href="#blog" className="hover:text-[#E75B44] transition-colors duration-200">
                        BLOG
                    </Link>
                    <Link href="#contact" className="hover:text-[#E75B44] transition-colors duration-200">
                        CONTACT
                    </Link>
                </nav>

                {/* Right Section: Utilities & Actions */}
                <div className="hidden xl:flex items-center gap-6 shrink-0">
                    {/* Shopping Cart Button */}
                    {/* <button className="relative p-1.5 text-[#333] hover:text-[#E75B44] transition-colors focus:outline-none" aria-label="Open cart">
                        <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="absolute -top-0.5 -right-0.5 bg-[#1A1512] text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </button> */}

                    {/* Contact Action Button */}
                    <Link
                        href="#contact"
                        className="bg-[#E75B44] hover:bg-[#d14b35] text-white text-[15px] md:text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm shadow-[#E75B44]/10"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Navigation Controls */}
                <div className="flex xl:hidden items-center gap-4">
                    {/* Mobile Cart */}
                    {/* <button className="relative p-1.5 text-[#333] hover:text-[#E75B44] transition-colors focus:outline-none" aria-label="Open cart">
                        <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="absolute -top-0.5 -right-0.5 bg-[#1A1512] text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </button> */}

                    {/* Hamburger Menu Trigger */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-1.5 text-[#333] hover:text-[#E75B44] transition-colors focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

            </div>

            {/* Slide-out Mobile Drawer */}
            <div
                className={`fixed inset-x-0 top-[90px] z-40 mx-4 bg-white/95 backdrop-blur-lg border border-stone-200/50 rounded-2xl shadow-xl transition-all duration-300 xl:hidden overflow-y-auto ${mobileMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none' }`}
            >
                <div className="p-6 flex flex-col gap-5 text-sm twst upp text-stone-800">
                    <Link
                        href="#home"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-stone-800 hover:text-[#E75B44] transition-colors"
                    >
                        HOME
                    </Link>
                    <Link
                        href="#about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#E75B44] transition-colors"
                    >
                        ABOUT US
                    </Link>

                    {/* Mobile MENU Dropdown */}
                    <div className="border-b border-stone-100 pb-2">
                        <button
                            onClick={() => handleDropdownToggle('menu')}
                            className="flex items-center justify-between w-full hover:text-[#E75B44] transition-colors py-1 focus:outline-none"
                        >
                            MENU
                            <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'menu' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'menu' && (
                            <div className="flex flex-col gap-3 pl-4 pt-3 text-[15px] text-stone-600 twr">
                                <Link href="#lunch" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E75B44] transition-colors">LUNCH SPECIALS</Link>
                                <Link href="#dinner" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E75B44] transition-colors">DINNER MENU</Link>
                                <Link href="#drinks" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E75B44] transition-colors">WINE & SPIRITS</Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile SERVICES Dropdown */}
                    <div className="border-b border-stone-100 pb-2">
                        <button
                            onClick={() => handleDropdownToggle('services')}
                            className="flex items-center justify-between w-full hover:text-[#E75B44] transition-colors py-1 focus:outline-none"
                        >
                            SERVICES
                            <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'services' && (
                            <div className="flex flex-col gap-3 pl-4 pt-3 text-[15px] text-stone-600 twr">
                                <Link href="#catering" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E75B44] transition-colors">CATERING SERVICES</Link>
                                <Link href="#events" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E75B44] transition-colors">PRIVATE EVENTS</Link>
                                <Link href="#delivery" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E75B44] transition-colors">HOME DELIVERY</Link>
                            </div>
                        )}
                    </div>

                    <Link
                        href="#gallery"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#E75B44] transition-colors"
                    >
                        GALLERY
                    </Link>
                    <Link
                        href="#reviews"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#E75B44] transition-colors"
                    >
                        REVIEWS
                    </Link>
                    <Link
                        href="#blog"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#E75B44] transition-colors"
                    >
                        BLOG
                    </Link>
                    <Link
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#E75B44] transition-colors"
                    >
                        CONTACT
                    </Link>

                    {/* Contact Action Button */}
                    <Link
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full text-center bg-[#E75B44] text-white text-[15px] font-bold twr py-3.5 rounded-full hover:bg-[#d14b35] transition-all duration-300 shadow-sm upp focus:outline-none mt-2"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
}