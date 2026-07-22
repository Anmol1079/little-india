'use client';

import { motion } from 'framer-motion';

const THEMES = {
  light: {
    label: 'text-[#B83A18]',
    title: 'text-stone-950',
    description: 'text-[#333]',
  },
  dark: {
    label: 'text-[#E65C38]',
    title: 'text-white group-hover:text-[#E65C38]',
    description: 'text-white/60',
  },
  /** Orange label (#E65C38) on light backgrounds */
  accent: {
    label: 'text-[#E65C38]',
    title: 'text-stone-950',
    description: 'text-[#333]',
  },
  /** Brand red label (#E94222) on light backgrounds */
  brand: {
    label: 'text-[#E94222]',
    title: 'text-stone-950',
    description: 'text-[#333]',
  },
};

/**
 * Reusable section header.
 *
 * Patterns supported:
 * - label + title
 * - label + title + short description
 * - light / dark / accent color themes
 *
 * @param {string} [label] - Eyebrow / span text
 * @param {string|React.ReactNode} title - Main heading
 * @param {string|React.ReactNode} [description] - Optional short supporting text
 * @param {'h1'|'h2'} [as='h2'] - Heading tag
 * @param {'left'|'center'} [align='left']
 * @param {'light'|'dark'|'accent'|'brand'} [theme='light'] - Color set for label/title/description
 * @param {boolean} [up=true] - up the title
 * @param {boolean} [animated=true] - Scroll-in motion wrapper
 * @param {string} [className] - Outer wrapper classes (overrides default mb-12 when set)
 * @param {string} [contentClassName] - Inner content column classes
 * @param {string} [labelClassName] - Override label classes
 * @param {string} [titleClassName] - Override title classes
 * @param {string} [descriptionClassName] - Override description classes
 * @param {React.ReactNode} [footer] - Extra content after description
 * @param {React.ReactNode} [children] - Right-side slot (CTA, etc.)
 */
export default function SectionHeader({
  label,
  title,
  description,
  as: HeadingTag = 'h2',
  align = 'left',
  theme = 'light',
  up = true,
  animated = true,
  className,
  contentClassName = '',
  labelClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  footer,
  children,
}) {
  const colors = THEMES[theme] || THEMES.light;
  const isCenter = align === 'center';

  const content = (
    <>
      <div
        className={`flex flex-col ${
          isCenter ? 'items-center text-center' : 'items-start text-left'
        } ${contentClassName}`.trim()}
      >
        {label ? (
          <span
            className={`font-bold text-[15px] up tw-wider block mb-3 ${colors.label} ${labelClassName}`.trim()}
          >
            {label}
          </span>
        ) : null}

        {title ? (
          <HeadingTag
            className={`font-title font-bold text-[40px] sm:text-[52px] lg:text-[56px] leading-[0.95] tw-tight mb-4 transition-colors duration-300 ${
              up ? 'up' : ''
            } ${colors.title} ${titleClassName}`.trim()}
          >
            {title}
          </HeadingTag>
        ) : null}

        {description ? (
          <p
            className={`text-[16px] md:text-[18px] leading-relaxed font-normal max-w-2xl ${
              isCenter ? 'mx-auto' : ''
            } ${colors.description} ${descriptionClassName}`.trim()}
          >
            {description}
          </p>
        ) : null}

        {footer}
      </div>

      {children}
    </>
  );

  const wrapperClassName = [
    isCenter
      ? 'flex flex-col items-center justify-center gap-6'
      : 'flex flex-col md:flex-row md:items-end justify-between gap-6',
    className ?? 'mb-12',
  ]
    .filter(Boolean)
    .join(' ');

  if (!animated) {
    return <div className={wrapperClassName}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={wrapperClassName}
    >
      {content}
    </motion.div>
  );
}
