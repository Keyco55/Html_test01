"use client";

import React from "react";

/**
 * Mobile-first floating back-to-top control.
 * Appears after ~480px of scroll, bottom-right, safe-area aware.
 * prefers-reduced-motion: instant jump (global CSS also kills transitions).
 */
export const BackToTop: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setVisible(window.scrollY > 480);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () => {
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="맨 위로 돌아가기"
      tabIndex={visible ? 0 : -1}
      className="fixed right-4 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-night-line bg-night text-night-ink shadow-[0_12px_28px_-12px_rgba(19,22,29,0.6)] transition-all duration-300 md:hidden"
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};
