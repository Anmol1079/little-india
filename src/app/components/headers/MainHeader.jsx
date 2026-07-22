"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Mainheader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'menu' | 'services' | null
  const [isScrolled, setIsScrolled] = useState(false);

  // Changes header style when the user scrolls down the page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (type) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${isScrolled ? "bg-stone-950/85 backdrop-blur-md border-b border-stone-800/50 shadow-md py-4" : "bg-transparent py-6" }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand/Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <Image
              src="/littleindia.svg"
              alt="Little India Logo"
              width={180}
              height={50}
              priority
              style={{ height: '42px', width: 'auto' }} // Keeps aspect ratio correct on CSS modification
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation with dropdown items */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-white hover:text-amber-400 text-[15px] font-medium twst upp transition-colors duration-300 py-1.5 relative group"
            >
              HOME
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-500 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-amber-400 text-[15px] font-medium twst upp transition-colors duration-300 py-1.5 relative group"
            >
              ABOUT US
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-500 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
            </Link>

            {/* Menu Dropdown */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown("menu")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleDropdownToggle("menu")}
                className={`flex items-center gap-1 text-[15px] font-medium twst upp focus:outline-none transition-colors duration-300 ${activeDropdown === "menu" ? "text-amber-500" : "text- hover:text-white" }`}
              >
                MENU
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "menu" ? "rotate-180 text-amber-500" : "text-stone-300"}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === "menu" && (
                <div className="absolute left-0 mt-3 w-56 bg-stone-900 border border-stone-800 rounded shadow-xl py-2 z-50 animate-fadeIn">
                  <Link href="/menu#lunch" className="block px-5 py-2.5 text-[11px] font-bold twst text-stone-300 hover:text-amber-400 hover:bg-stone-800 transition-all upp">
                    LUNCH SPECIALS
                  </Link>
                  <Link href="/menu#dinner" className="block px-5 py-2.5 text-[11px] font-bold twst text-stone-300 hover:text-amber-400 hover:bg-stone-800 transition-all upp">
                    DINNER MENU
                  </Link>
                  <Link href="/menu#drinks" className="block px-5 py-2.5 text-[11px] font-bold twst text-stone-300 hover:text-amber-400 hover:bg-stone-800 transition-all upp">
                    WINE & SPIRITS
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleDropdownToggle("services")}
                className={`flex items-center gap-1 text-[15px] font-medium twst upp focus:outline-none transition-colors duration-300 ${activeDropdown === "services" ? "text-amber-500" : "text-stone-300 hover:text-white" }`}
              >
                SERVICES
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-amber-500" : "text-stone-300"}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === "services" && (
                <div className="absolute left-0 mt-3 w-56 bg-stone-900 border border-stone-800 rounded shadow-xl py-2 z-50 animate-fadeIn">
                  <Link href="/services#catering" className="block px-5 py-2.5 text-[11px] font-bold twst text-stone-300 hover:text-amber-400 hover:bg-stone-800 transition-all upp">
                    CATERING SERVICES
                  </Link>
                  <Link href="/services#events" className="block px-5 py-2.5 text-[11px] font-bold twst text-stone-300 hover:text-amber-400 hover:bg-stone-800 transition-all upp">
                    PRIVATE EVENTS
                  </Link>
                  <Link href="/services#delivery" className="block px-5 py-2.5 text-[11px] font-bold twst text-stone-300 hover:text-amber-400 hover:bg-stone-800 transition-all upp">
                    HOME DELIVERY
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              className="text-white hover:text-amber-400 text-[15px] font-medium twst upp transition-colors duration-300 py-1.5 relative group"
            >
              GALLERY
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-500 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
            </Link>

            <a
              href="#reviews"
              className="text-white hover:text-amber-400 text-[15px] font-medium twst upp transition-colors duration-300 py-1.5 relative group"
            >
              REVIEWS
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-500 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
            </a>

            <a
              href="#blog"
              className="text-white hover:text-amber-400 text-[15px] font-medium twst upp transition-colors duration-300 py-1.5 relative group"
            >
              BLOG
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-500 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
            </a>

            <Link
              href="/contact"
              className="text-white hover:text-amber-400 text-[15px] font-medium twst upp transition-colors duration-300 py-1.5 relative group"
            >
              CONTACT
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-amber-500 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/reservations"
              className="text-[15px] upp twst font-medium border border-amber-500/60 hover:border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-stone-950 px-5 py-2.5 transition-all duration-300 rounded"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-stone-300 hover:text-white focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-stone-950 ${isOpen ? "max-h-screen border-b border-stone-800/80 opacity-100" : "max-h-0 opacity-0 pointer-events-none" }`}
      >
        <div className="px-6 py-6 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium twst upp text-stone-300 hover:text-amber-500 transition-colors duration-200"
          >
            HOME
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium twst upp text-stone-300 hover:text-amber-500 transition-colors duration-200"
          >
            ABOUT US
          </Link>

          {/* Mobile Collapse Dropdown: MENU */}
          <div className="border-b border-stone-850 pb-2">
            <button
              onClick={() => handleDropdownToggle("menu")}
              className="flex items-center justify-between w-full text-stone-300 hover:text-amber-500 transition-colors py-1 focus:outline-none text-sm font-medium twst upp"
            >
              MENU
              <svg className={`w-4 h-4 transition-transform ${activeDropdown === "menu" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "menu" && (
              <div className="flex flex-col gap-3 pl-4 pt-3 text-[15px] text-stone-400 twst upp">
                <Link href="/menu#lunch" onClick={() => setIsOpen(false)} className="hover:text-amber-500">LUNCH SPECIALS</Link>
                <Link href="/menu#dinner" onClick={() => setIsOpen(false)} className="hover:text-amber-500">DINNER MENU</Link>
                <Link href="/menu#drinks" onClick={() => setIsOpen(false)} className="hover:text-amber-500">WINE & SPIRITS</Link>
              </div>
            )}
          </div>

          {/* Mobile Collapse Dropdown: SERVICES */}
          <div className="border-b border-stone-850 pb-2">
            <button
              onClick={() => handleDropdownToggle("services")}
              className="flex items-center justify-between w-full text-stone-300 hover:text-amber-500 transition-colors py-1 focus:outline-none text-sm font-medium twst upp"
            >
              SERVICES
              <svg className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "services" && (
              <div className="flex flex-col gap-3 pl-4 pt-3 text-[15px] text-stone-400 twst upp">
                <Link href="/services#catering" onClick={() => setIsOpen(false)} className="hover:text-amber-500">CATERING SERVICES</Link>
                <Link href="/services#events" onClick={() => setIsOpen(false)} className="hover:text-amber-500">PRIVATE EVENTS</Link>
                <Link href="/services#delivery" onClick={() => setIsOpen(false)} className="hover:text-amber-500">HOME DELIVERY</Link>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium twst upp text-stone-300 hover:text-amber-500 transition-colors duration-200"
          >
            GALLERY
          </Link>
          <a
            href="#reviews"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium twst upp text-stone-300 hover:text-amber-500 transition-colors duration-200"
          >
            REVIEWS
          </a>
          <a
            href="#blog"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium twst upp text-stone-300 hover:text-amber-500 transition-colors duration-200"
          >
            BLOG
          </a>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium twst upp text-stone-300 hover:text-amber-500 transition-colors duration-200"
          >
            CONTACT
          </Link>
          <div className="pt-4 border-t border-stone-800">
            <Link
              href="/reservations"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-[15px] upp twst font-medium bg-amber-500 text-stone-950 py-3 hover:bg-amber-400 transition-colors duration-200 rounded"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}