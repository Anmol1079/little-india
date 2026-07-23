/** Lightweight SVG icons replacing Font Awesome CDN (avoids render-blocking webfont). */

export function IconLeaf({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A15.73 15.73 0 0 0 12 20c8 0 14-7 14-14 0-1.42-.77-2.69-1.5-3.5C21 4 16 6 17 8z" />
    </svg>
  );
}

export function IconSeedling({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.5 2 5.5 4.5 4.5 8c-.4 1.4-.3 2.8.3 4 .6-2.2 2.4-4 4.7-4.5C8.3 10 7 12.2 7 14.5V22h2v-7.5c0-1.9 1.3-3.5 3-3.9V22h2V12.6c1.7.4 3 2 3 3.9V22h2v-7.5c0-2.3-1.3-4.5-3.5-5.5 2.3.5 4.1 2.3 4.7 4.5.6-1.2.7-2.6.3-4C18.5 4.5 15.5 2 12 2z" />
    </svg>
  );
}

export function IconWheat({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c-.5 2.5-2 4.5-4.5 5.5C10 8.5 12 10.5 12 13c0-2.5 2-4.5 4.5-5.5C14 6.5 12.5 4.5 12 2zm0 6c-.5 2.5-2 4.5-4.5 5.5C10 14.5 12 16.5 12 19c0-2.5 2-4.5 4.5-5.5C14 12.5 12.5 10.5 12 8zm-1 11v3h2v-3h-2z" />
    </svg>
  );
}

export function IconAward({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a5 5 0 0 0-5 5c0 1.8.95 3.37 2.37 4.25L8 22l4-2 4 2-1.37-10.75A5 5 0 0 0 17 7a5 5 0 0 0-5-5zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  );
}

export function IconMartini({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 3h18l-8 10.5V20h3v2H8v-2h3v-6.5L3 3zm4.4 2 4.6 6.05L16.6 5H7.4z" />
    </svg>
  );
}

export function IconPlate({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3c-4.4 0-8 2.2-8 5v1h16V8c0-2.8-3.6-5-8-5zm-8 8v1c0 3.3 2.7 6 6 6h.5v3h3v-3H14c3.3 0 6-2.7 6-6v-1H4z" />
    </svg>
  );
}
