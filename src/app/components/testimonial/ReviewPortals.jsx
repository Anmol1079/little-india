'use client';

import React from 'react';

const REVIEW_PORTALS = [
  {
    id: 'google',
    name: 'Google',
    href: 'https://www.google.com/search?q=Little+India+Restaurant+and+Bar+Lakewood&udm=1',
    label: 'Leave a Google review',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://www.facebook.com/littleindiabelmar/reviews',
    label: 'Leave a Facebook review',
  },
  {
    id: 'yelp',
    name: 'Yelp',
    href: 'https://www.yelp.com/biz/little-india-restaurant-and-bar-lakewood-3',
    label: 'Leave a Yelp review',
  },
  {
    id: 'opentable',
    name: 'OpenTable',
    href: 'https://www.opentable.com/r/little-india-restaurant-belmar',
    label: 'Leave an OpenTable review',
  },
  {
    id: 'tripadvisor',
    name: 'Tripadvisor',
    href: 'https://www.tripadvisor.co.uk/Restaurant_Review-g33514-d926505-Reviews-Little_India_Restaurant_And_Bar-Lakewood_Colorado.html',
    label: 'Leave a Tripadvisor review',
  },
];

function PortalLogo({ id }) {
  switch (id) {
    case 'google':
      return (
        <div className="flex flex-col items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-[10px] font-semibold text-[#333] leading-none">Google</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="h-2.5 w-2.5 fill-[#FBBC05]" aria-hidden="true">
                <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
              </svg>
            ))}
          </div>
        </div>
      );
    case 'facebook':
      return (
        <span className="text-[17px] font-bold tw-tight text-[#1877F2]">facebook</span>
      );
    case 'yelp':
      return (
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
            <path
              fill="#FF1A1A"
              d="M12.16 11.62c.2-.47.7-.72 1.2-.57l6.65 2.02c.72.22 1.05 1.04.66 1.7l-1.85 3.1a1.2 1.2 0 0 1-1.66.4l-5.4-3.36a1.08 1.08 0 0 1-.4-1.4l.8-1.89zm-1.05.48c-.48-.17-.74-.68-.57-1.17l2.02-5.9c.23-.67 1.06-.96 1.7-.56l2.97 1.9c.55.35.7 1.08.32 1.6l-3.6 4.9a1.08 1.08 0 0 1-1.42.34l-1.42-.11zm-.76 1.4c-.17.48.08.99.56 1.16l5.9 2.02c.67.23.96 1.06.56 1.7l-1.9 2.97a1.2 1.2 0 0 1-1.6.32l-4.9-3.6a1.08 1.08 0 0 1-.34-1.42l1.72-3.15zm-.5-2.35c.47-.2.72-.7.57-1.2L8.9 4.3c-.22-.72-1.04-1.05-1.7-.66L4.1 5.5a1.2 1.2 0 0 0-.4 1.66l3.36 5.4c.34.55 1.06.7 1.6.32l1.19-.93z"
            />
          </svg>
          <span className="text-[16px] font-bold text-[#FF1A1A]">yelp</span>
        </div>
      );
    case 'opentable':
      return (
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[13px] font-bold tw-tight text-[#DA3743]">OpenTable</span>
          <span className="text-[9px] font-medium up lg:min-h-[92vh]-[0.12em] text-[#333]/70">
            Reserve &amp; Review
          </span>
        </div>
      );
    case 'tripadvisor':
      return (
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
            <circle cx="8.5" cy="12" r="3.2" fill="none" stroke="#34E0A1" strokeWidth="2" />
            <circle cx="15.5" cy="12" r="3.2" fill="none" stroke="#34E0A1" strokeWidth="2" />
            <circle cx="8.5" cy="12" r="1.15" fill="#34E0A1" />
            <circle cx="15.5" cy="12" r="1.15" fill="#34E0A1" />
            <path
              d="M4.2 9.2C5.8 7.4 8.2 6.2 12 6.2s6.2 1.2 7.8 3"
              fill="none"
              stroke="#34E0A1"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path d="M12 4.5l1.1 2.1H12L10.9 6.6 12 4.5z" fill="#34E0A1" />
          </svg>
          <span className="text-[13px] font-bold text-[#333]">Tripadvisor</span>
        </div>
      );
    default:
      return null;
  }
}

export default function ReviewPortals({ className = '' }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`.trim()}>
      <p className="text-[14px] text-[#333] leading-relaxed text-left">
        Choose a platform below to share your experience with Little India.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {REVIEW_PORTALS.map((portal) => (
          <a
            key={portal.id}
            href={portal.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={portal.label}
            className="group flex min-h-[88px] items-center justify-center rounded-2xl border border-stone-200/80 bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E94222]/35 hover:shadow-[0_12px_28px_rgba(233,66,34,0.12)]"
          >
            <PortalLogo id={portal.id} />
          </a>
        ))}
      </div>
    </div>
  );
}
