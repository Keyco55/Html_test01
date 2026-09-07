"use client";

import React from "react";

interface RevealProps {
  readonly children: React.ReactNode;
  /** Stagger delay in ms. */
  readonly delay?: number;
  readonly className?: string;
  readonly as?: React.ElementType;
  readonly id?: string;
}

/**
 * Scroll-driven reveal. Adds data-visible once the element enters the
 * viewport; all animation lives in CSS ([data-reveal]) and is fully
 * disabled under prefers-reduced-motion.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className,
  as: Component = "div",
  id,
}) => {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      id={id}
      ref={ref}
      data-reveal=""
      data-visible={visible ? "true" : "false"}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={className}
    >
      {children}
    </Component>
  );
};
