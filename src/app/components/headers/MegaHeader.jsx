"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MegaHeader() {
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

  const renderIcon = (iconName) => {
    const iconProps = {
      className: "w-5 h-5 text-stone-400 group-hover:text-[#E94222] transition-colors duration-300",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "1.5"
    };

    switch (iconName) {
      case "appetizer":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.25c-3.45 0-6.25 2.8-6.25 6.25h12.5c0-3.45-2.8-6.25-6.25-6.25zM3 15.5h18v1.5H3v-1.5z" />
          </svg>
        );
      case "biryani":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 11h16a1 1 0 011 1 8 8 0 01-18 0 1 1 0 011-1zm8-8v3M9 4v2m6-2v2" />
          </svg>
        );
      case "tandoori":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          </svg>
        );
      case "soup":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a7 7 0 017-7V6h-2V4h-2v2H9V4H7v2H5v1a7 7 0 017 7zm-8 1h16a1 1 0 011 1 6 6 0 01-18 0 1 1 0 011-1z" />
          </svg>
        );
      case "meat":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2v-5H6v5a2 2 0 002 2zM12 10a4 4 0 00-4-4V5a2 2 0 014 0v1a4 4 0 00-4 4z" />
          </svg>
        );
      case "veg":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3a9 9 0 019 9v1c0 1.66-1.34 3-3 3h-6m0-13a9 9 0 00-9 9v1c0 1.66 1.34 3 3 3h6" />
          </svg>
        );
      case "specialty":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l5.188-5.096L21 12l-6.813-3.904L13 3l-3.187 5.096L3 12l6.813 3.904z" />
          </svg>
        );
      case "bread":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 00-9 9v1h18v-1a9 9 0 00-9-9zM3 16h18v2H3v-2zm2 5h14v1H5v-1z" />
          </svg>
        );
      case "dessert":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 0v10m-6-6h12a3 3 0 013 3v3H3v-3a3 3 0 013-3z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      isMegaAbout: true, // Tag as About megamenu
      items: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/about#story" },
        { name: "Why Choose Us", href: "/about#why-us" },
        { name: "Reviews", href: "/testimonial" },
        { name: "Blogs", href: "/blog" },
        { name: "Our Gallery", href: "/gallery" },
      ],
      card1: {
        title: "Highlights",
        href: "/gallery",
        desc: "Take a visual journey through our warm interior and signature dishes.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
      },
      card2: {
        title: "Gift Card",
        href: "/gift-cards",
        desc: "Share a memorable culinary experience with friends and family.",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop"
      }
    },
    {
      name: "Menu",
      href: "/menu",
      isMega: true,
      columns: [
        {
          title: "Classics & Starters",
          items: [
            {
              name: "Appetizers",
              href: "/menu#appetizers",
              desc: "Crispy samosas, savory pakoras, and signature street food starters.",
              icon: "appetizer",
            },
            {
              name: "Biryani Dishes",
              href: "/menu#biryani",
              desc: "Fragrant, spiced basmati rice slow-cooked with fresh herbs.",
              icon: "biryani",
              badge: "Popular",
            },
            {
              name: "Tandoori Specialties",
              href: "/menu#tandoori-specialties",
              desc: "Clay-oven roasted sizzling meats, seafood, and spiced paneer.",
              icon: "tandoori",
            },
            {
              name: "Soup & Salad",
              href: "/menu#soup-salad",
              desc: "Lightly spiced warming soups and fresh, zesty house salads.",
              icon: "soup",
            },
            {
              name: "Side Orders",
              href: "/menu#non-side-orders",
              desc: "Traditional rich mushroom, carrot, spinach curries.",
              icon: "meat",
            }
          ],
        },
        {
          title: "Entrees & Sides",
          items: [
            {
              name: "Non-Veg Entrees",
              href: "/menu#non-veg-entrees",
              desc: "Traditional rich chicken, lamb, and goat curries.",
              icon: "meat",
            },
            {
              name: "Vegetarian Entrees",
              href: "/menu#vegetarian-entrees",
              desc: "Comforting plant-based stews and signature cheese dishes.",
              icon: "veg",
            },
            {
              name: "Specialty Entrees",
              href: "/menu#specialty-entrees",
              desc: "Exclusive regional creations curated by our head chefs.",
              icon: "specialty",
              badge: "Chef Choice",
            },
            {
              name: "Oven Hot Breads",
              href: "/menu#oven-hot-breads",
              desc: "Fresh, hand-stretched garlic naans, rotis, and parathas.",
              icon: "bread",
            },
            {
              name: "Desserts",
              href: "/menu#desserts",
              desc: "Sweet treats and essentials like raita, papadum, and chutneys.",
              icon: "dessert",
            },
          ],
        },
      ],
      featured: {
        title: "Lunch Buffet",
        href: "/lunch-buffet",
        desc: "Experience our daily mid-day grand feast featuring rotated traditional specials.",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000&auto=format&fit=crop", 
      },
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
                  className="px-4 py-2 text-[15px] upp tracking-[0.15em] font-bold text-stone-200 hover:text-white transition-all flex items-center gap-1.5"
                >
                  {item.name}
                  {(item.items || item.isMega || item.isMegaAbout) && (
                    <svg className={`w-3 h-3 opacity-100 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* 1. MEGAMENU DESIGN - ABOUT */}
                {item.isMegaAbout && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-[920px] pt-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      activeDropdown === item.name 
                        ? "opacity-100 translate-y-0 visible pointer-events-auto" 
                        : "opacity-0 -translate-y-4 invisible pointer-events-none"
                    }`}
                  >
                    <div className="bg-stone-950/98 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] p-8">
                      <div className="grid grid-cols-12 gap-8 items-stretch">
                        
                        {/* Left Column: Link List with vertical divider */}
                        <div className="col-span-4 pr-6 border-r border-white/5 flex flex-col justify-center gap-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-[15px] font-bold text-stone-300 hover:text-[#E94222] transition-colors py-1.5 block font-sans"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>

                        {/* Middle Column: Restaurant Highlights */}
                        <div className="col-span-4 flex flex-col h-full">
                          <Link 
                            href={item.card1.href} 
                            className="relative flex-1 min-h-[320px] w-full rounded-2xl overflow-hidden flex flex-col justify-end p-6 border border-white/10 group/card bg-stone-900 isolate"
                          >
                            {item.card1.image && (
                              <>
                                <Image
                                  src={item.card1.image}
                                  alt={item.card1.title}
                                  fill
                                  sizes="280px"
                                  className="object-cover -z-20 opacity-75 group-hover/card:opacity-90 group-hover/card:scale-105 transition-all duration-500 ease-out"
                                  priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent -z-10" />
                              </>
                            )}

                            <div className="relative z-20 flex flex-col">
                              <span className="text-[11px] tracking-[0.2em] font-black upp text-[#E94222] mb-2 block">
                                Ambiance & Art
                              </span>
                              <h3 className="text-base font-bold text-white upp tracking-wider flex items-center gap-1.5 leading-snug">
                                {item.card1.title}
                                <svg className="w-3.5 h-3.5 text-white/50 group-hover/card:translate-x-1 group-hover/card:text-[#E94222] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </h3>
                              <p className="text-[11px] text-stone-200 mt-2 leading-relaxed font-sans font-medium">
                                {item.card1.desc}
                              </p>
                            </div>
                          </Link>
                        </div>

                        {/* Right Column: Gift Card */}
                        <div className="col-span-4 flex flex-col h-full">
                          <Link 
                            href={item.card2.href} 
                            className="relative flex-1 min-h-[320px] w-full rounded-2xl overflow-hidden flex flex-col justify-end p-6 border border-white/10 group/card bg-stone-900 isolate"
                          >
                            {item.card2.image && (
                              <>
                                <Image
                                  src={item.card2.image}
                                  alt={item.card2.title}
                                  fill
                                  sizes="280px"
                                  className="object-cover -z-20 opacity-75 group-hover/card:opacity-90 group-hover/card:scale-105 transition-all duration-500 ease-out"
                                  priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent -z-10" />
                              </>
                            )}
                            
                            <div className="relative z-20 flex flex-col">
                              <span className="text-[11px] tracking-[0.2em] font-black upp text-[#E94222] mb-2 block">
                                Perfect Present
                              </span>
                              <h3 className="text-base font-bold text-white upp tracking-wider flex items-center gap-1.5 leading-snug">
                                {item.card2.title}
                                <svg className="w-3.5 h-3.5 text-white/50 group-hover/card:translate-x-1 group-hover/card:text-[#E94222] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </h3>
                              <p className="text-[11px] text-stone-200 mt-2 leading-relaxed font-sans font-medium">
                                {item.card2.desc}
                              </p>
                            </div>
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                )}

                {/* 2. MEGAMENU DESIGN - MENU */}
                {item.isMega && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-[920px] pt-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      activeDropdown === item.name 
                        ? "opacity-100 translate-y-0 visible pointer-events-auto" 
                        : "opacity-0 -translate-y-4 invisible pointer-events-none"
                    }`}
                  >
                    <div className="bg-stone-950/98 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] p-6">
                      <div className="grid grid-cols-12 gap-8">
                        
                        {/* Column 1 & 2 Map */}
                        {item.columns.map((column, colIdx) => (
                          <div key={column.title} className={colIdx === 0 ? "col-span-4 flex flex-col gap-4" : "col-span-4 flex flex-col gap-4"}>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 upp block">
                              {column.title}
                            </span>
                            <div className="flex flex-col gap-1">
                              {column.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="group flex items-start gap-4 p-2.5 rounded-2xl hover:bg-white/[0.03] transition-all duration-300"
                                >
                                  <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center transition-all duration-300 group-hover:border-[#e84122]/50 group-hover:bg-[#E94222]/5">
                                    {renderIcon(subItem.icon)}
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <h4 className="text-[15px] font-bold upp tracking-wider text-stone-200 group-hover:text-white transition-colors duration-300">
                                        {subItem.name}
                                      </h4>
                                    </div>
                                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-2 leading-relaxed group-hover:text-stone-300 transition-colors duration-300">
                                      {subItem.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Column 3: Featured Highlight Box */}
                        <div className="col-span-4 flex flex-col h-full">
                          <Link 
                            href={item.featured.href} 
                            className="relative flex-1 min-h-[340px] w-full rounded-2xl overflow-hidden flex flex-col justify-end p-6 border border-white/10 group/card bg-stone-900 isolate"
                          >
                            {/* Background Image Renderer */}
                            {item.featured.image ? (
                              <>
                                <Image
                                  src={item.featured.image}
                                  alt={item.featured.title}
                                  fill
                                  sizes="280px"
                                  className="object-cover -z-20 opacity-75 group-hover/card:opacity-90 group-hover/card:scale-105 transition-all duration-500 ease-out"
                                  priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent -z-10" />
                              </>
                            ) : (
                              <>
                                {/* Fallback Grid & Glow if no image is defined */}
                                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-black z-0 group-hover/card:scale-[1.03] transition-transform duration-500 ease-out" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] z-0 opacity-60" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,66,34,0.15),transparent_60%)] z-0" />
                              </>
                            )}
                            
                            {/* Text content */}
                            <div className="relative z-20 flex flex-col">
                              <span className="text-[11px] tracking-[0.2em] font-black upp text-[#E94222] mb-2 block">
                                Featured Offer
                              </span>
                              <h3 className="text-base font-bold text-white upp tracking-wider flex items-center gap-1.5">
                                {item.featured.title}
                                <svg className="w-3.5 h-3.5 text-white/50 group-hover/card:translate-x-1 group-hover/card:text-[#E94222] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </h3>
                              <p className="text-[11px] text-stone-200 mt-2 leading-relaxed font-sans font-medium">
                                {item.featured.desc}
                              </p>
                            </div>
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                )}

                {/* 3. REGULAR DROPDOWN DESIGN (For non-mega menus, e.g. custom sub links) */}
                {item.items && !item.isMega && !item.isMegaAbout && (
                  <div
                    className={`absolute top-full left-0 w-72 pt-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      activeDropdown === item.name 
                        ? "opacity-100 translate-y-0 visible pointer-events-auto" 
                        : "opacity-0 -translate-y-4 invisible pointer-events-none"
                    }`}
                  >
                    <div className="bg-stone-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2">
                      <div className="flex flex-col">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`group relative px-4 py-3 text-[10px] upp tracking-[0.18em] transition-all rounded-xl flex items-center justify-between ${
                              subItem.featured 
                                ? "mt-2 bg-white/5 border border-white/10 text-white font-black" 
                                : "text-stone-400 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                              {subItem.name}
                            </span>
                            
                            {!subItem.featured && (
                              <div className="w-1 h-0 bg-[#E94222] absolute left-0 rounded-full transition-all duration-300 group-hover:h-4" />
                            )}

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
          <div className="flex justify-center">
        <Link
                href="/menu"
                className="group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold tracking-widest px-6 py-3 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans"
              >
                <span>BOOK A TABLE</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

        </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ${mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-stone-950 border-l border-white/10 p-8 pt-24 transition-transform duration-500 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <nav className="space-y-1 overflow-y-auto max-h-[70vh]">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="w-full flex items-center justify-between text-sm font-bold text-white py-2 upp tracking-widest"
                >
                  {item.name}
                  {(item.items || item.isMega || item.isMegaAbout) && <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>}
                </button>

                {/* Mobile Menu for Mega About */}
                {item.isMegaAbout && (
                  <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-[600px] mt-2' : 'max-h-0'}`}>
                    <div className="pl-4 border-l border-[#E94222]/30 space-y-3">
                      {item.items.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} onClick={() => setMobileMenuOpen(false)} className="block text-[15px] text-stone-400 hover:text-[#E94222] font-sans upp tracking-wider">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile Menu for Mega Menu */}
                {item.isMega && (
                  <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-[600px] mt-2' : 'max-h-0'}`}>
                    <div className="pl-4 border-l border-[#E94222]/30 space-y-3">
                      {item.columns.flatMap(col => col.items).map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} onClick={() => setMobileMenuOpen(false)} className="block text-[15px] text-stone-400 hover:text-[#E94222] font-sans upp tracking-wider">
                          {subItem.name}
                        </Link>
                      ))}
                      {item.featured && (
                        <Link href={item.featured.href} onClick={() => setMobileMenuOpen(false)} className="block text-[15px] text-white font-black hover:text-[#E94222] mt-3 upp tracking-wider">
                          ⭐ {item.featured.title}
                        </Link>
                      )}
                    </div>
                  </div>
                )}

                {/* Mobile Menu for Regular items */}
                {item.items && !item.isMega && !item.isMegaAbout && (
                  <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-[500px] mt-2' : 'max-h-0'}`}>
                    <div className="pl-4 border-l border-[#E94222]/30 space-y-3">
                      {item.items.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} onClick={() => setMobileMenuOpen(false)} className="block text-[15px] text-stone-400 hover:text-[#E94222] font-sans upp tracking-wider">
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