"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/", index: "01" },
  { label: "Projects", href: "/projects", index: "02" },
  { label: "Experience", href: "/experience", index: "03" },
  { label: "Skills", href: "/skills", index: "04" },
  { label: "About", href: "/about", index: "05" },
] as const;

/** Supplied brand signature — falls back to a minimal wordmark until the asset lands. */
const SIGNATURE_SRC = "/images/brand/keyco-signature.png";

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [signatureOk, setSignatureOk] = React.useState(true);
  const pathname = usePathname();
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const overlayRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Close on Escape, lock body scroll, trap focus while overlay is open */
  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key === "Tab") {
        const nodes = overlayRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (!nodes || nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the overlay after it renders
    const raf = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      cancelAnimationFrame(raf);
    };
  }, [open]);

  /* Return focus to the toggle when the overlay closes via nav click */
  const wasOpen = React.useRef(false);
  React.useEffect(() => {
    if (wasOpen.current && !open) {
      // only refocus if focus is not already inside an interactive element
      if (document.activeElement === document.body) {
        toggleRef.current?.focus();
      }
    }
    wasOpen.current = open;
  }, [open]);

  /* Portal the overlay to <body> so no ancestor stacking context
     (sticky header, backdrop-blur) can bury it under page content. */
  const overlay =
    open && mounted
      ? createPortal(
          <nav
            id="mobile-nav"
            ref={overlayRef}
            aria-label="모바일 탐색"
            className="dot-grid fixed inset-0 z-[100] flex flex-col bg-night md:hidden"
          >
            <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-night-line px-5">
              <span className="font-mono text-[11px] tracking-[0.2em] text-night-muted uppercase">
                Menu
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-night-ink transition-colors hover:bg-night-raise"
                aria-label="메뉴 닫기 (Esc)"
                onClick={() => {
                  setOpen(false);
                  toggleRef.current?.focus();
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-5 pb-10">
              {NAV_ITEMS.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="rise-mask group flex min-h-[56px] items-baseline gap-3 border-b border-night-line py-3"
                    style={{ ["--rise-delay" as string]: `${120 + i * 70}ms` }}
                    onClick={() => setOpen(false)}
                  >
                    <span aria-hidden="true" className="font-mono text-xs text-clay-bright">
                      {item.index}
                    </span>
                    <span
                      className={cn(
                        "text-[28px] font-extrabold tracking-tight transition-colors",
                        active ? "text-clay-bright" : "text-night-ink group-hover:text-clay-bright"
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
              <p className="mt-8 text-[13px] leading-relaxed text-night-muted">
                고객과 서비스를 이해하고, 콘텐츠와 기술로 직접 만드는 사람.
              </p>
            </div>
          </nav>,
          document.body
        )
      : null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <Container className="flex h-[68px] items-center justify-between gap-4">
        {/* Brand — Keyco signature */}
        <Link
          href="/"
          className="group flex min-h-[44px] items-center"
          aria-label="Keyco 홈"
        >
          {signatureOk ? (
            /* eslint-disable-next-line @next/next/no-img-element -- static export + images.unoptimized; raw <img> with graceful fallback is intentional */
            <img
              src={SIGNATURE_SRC}
              alt="Keyco signature"
              width={420}
              height={120}
              onError={() => setSignatureOk(false)}
              className="h-auto w-[105px] object-contain transition-opacity duration-300 group-hover:opacity-80 sm:w-[120px] md:w-[140px]"
            />
          ) : (
            /* Fallback wordmark until /images/brand/keyco-signature.png is supplied */
            <span className="text-[17px] font-extrabold tracking-tight text-ink">
              Hello <span className="text-clay">Keyco</span>
            </span>
          )}
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="주요 탐색" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative flex min-h-[44px] items-center gap-1.5 rounded-lg px-3 text-[14px] font-semibold transition-colors",
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "font-mono text-[10px] font-normal transition-colors",
                    active ? "text-clay" : "text-muted/60 group-hover:text-clay"
                  )}
                >
                  {item.index}
                </span>
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-[2.5px] rounded-full bg-clay transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                  style={{ transformOrigin: "left center" }}
                />
              </Link>
            );
          })}
          <Link
            href="/about#contact"
            className="ml-3 inline-flex min-h-[40px] items-center rounded-full bg-night px-4 text-[13px] font-bold text-night-ink transition-all duration-200 hover:bg-clay"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-ink transition-colors hover:bg-ink/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {overlay}
    </header>
  );
};
