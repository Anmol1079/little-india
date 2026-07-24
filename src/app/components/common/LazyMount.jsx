"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mount children only when near the viewport.
 * Cuts mobile main-thread work by delaying Framer/GSAP-heavy sections.
 */
export default function LazyMount({
  children,
  rootMargin = "280px 0px",
  minHeight = "40vh",
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    // Prefer immediate paint if already in view (e.g. short screens)
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div
      ref={ref}
      className={className}
      style={visible ? undefined : { minHeight }}
    >
      {visible ? children : null}
    </div>
  );
}
