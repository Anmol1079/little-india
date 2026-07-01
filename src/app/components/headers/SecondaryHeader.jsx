"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SecondaryHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Reviews", href: "/reviews" },
        { name: "Blog", href: "/blog" },
        { name: "Gallery", href: "/gallery" },
      ],
    },
    {
      name: "Menu",
      href: "/menu",
      items: [
        { name: "Appetizer", href: "/menu#appetizers" },
        { name: "Biryani", href: "/menu#biryani" },
        { name: "Tandoori Specialties", href: "/menu#tandoori-specialties" },
        { name: "Soup & Salad", href: "/menu#soup-salad" },
        { name: "Non-Veg Entrees", href: "/menu#non-veg-entrees" },
        { name: "Vegetarian Entrees", href: "/menu#vegetarian-entrees" },
        { name: "Specialty Entrees", href: "/menu#specialty-entrees" },
        { name: "Oven Hot Breads", href: "/menu#oven-hot-breads" },
        { name: "Side Orders", href: "/menu#side-orders" },
        { name: "Desserts", href: "/menu#desserts" },
        { name: "Lunch Buffet", href: "/lunch-buffet", featured: true }, // Highlighted item
      ],
    },
    { name: "Order Online", href: "/order" },
    { name: "Private Room", href: "/private-room" },
    { name: "Gift Card", href: "/gift-cards" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-stone-950/90 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-black py-6"
      }`}
    >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/littleindia.svg"
              alt="Little India Logo"
              width={130}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-bold text-stone-200 hover:text-white transition-all flex items-center gap-1.5"
                >
                  {item.name}
                  {item.items && (
                    <svg className={`w-3 h-3 opacity-50 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* UPGRADED DROPDOWN DESIGN */}
                {item.items && (
                  <div
                    className={`absolute top-full left-0 w-72 pt-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      activeDropdown === item.name 
                        ? "opacity-100 translate-y-0 visible" 
                        : "opacity-0 -translate-y-4 invisible"
                    }`}
                  >
                    <div className="bg-stone-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2">
                      <div className="flex flex-col">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`group relative px-4 py-3 text-[10px] uppercase tracking-[0.18em] transition-all rounded-xl flex items-center justify-between ${
                              subItem.featured 
                                ? "mt-2 bg-white/5 border border-white/10 text-white font-black" 
                                : "text-stone-400 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                              {subItem.name}
                            </span>
                            
                            {/* Hover Accent for non-featured items */}
                            {!subItem.featured && (
                              <div className="w-1 h-0 bg-[#E94222] absolute left-0 rounded-full transition-all duration-300 group-hover:h-4" />
                            )}

                            {/* Arrow icon for featured item */}
                            {subItem.featured && (
                              <svg className="w-3 h-3 text-[#E94222]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link
              href="/reservations"
              className="bg-[#E94222] hover:bg-[#d14b35] text-white text-[11px] font-bold tracking-widest px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_8px_20px_rgba(233,66,34,0.3)] font-sans"
            >
              BOOK A TABLE
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-white ml-4 p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Logic (unchanged but inherits same naming) */}
      <div className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ${mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-stone-950 border-l border-white/10 p-8 pt-24 transition-transform duration-500 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <nav className="space-y-1 overflow-y-auto max-h-[70vh]">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="w-full flex items-center justify-between text-sm font-bold text-white py-2 uppercase tracking-widest"
                >
                  {item.name}
                  {item.items && <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>}
                </button>
                {item.items && (
                  <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-[500px] mt-2' : 'max-h-0'}`}>
                    <div className="pl-4 border-l border-[#E94222]/30 space-y-3">
                      {item.items.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} onClick={() => setMobileMenuOpen(false)} className="block text-xs text-stone-400 hover:text-[#E94222] font-sans">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}