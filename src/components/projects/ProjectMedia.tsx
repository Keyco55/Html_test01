"use client";

import React from "react";
import { LightboxModal } from "@/components/site/ImageLightbox";

interface ProjectMediaProps {
  readonly title: string;
  readonly monogram: string;
  /** Expected asset path (public/images/projects/…). Renders when the file exists. */
  readonly slotPath?: string;
  readonly alt?: string;
  readonly caption?: string;
  readonly badgeText?: string;
  /** dark = night composition (KBO-Hub feature), light = paper composition. */
  readonly tone?: "dark" | "light";
  /** cover crops to fill (default); contain shows the full frame for tall/small evidence shots. */
  readonly fit?: "cover" | "contain";
  readonly aspect?: string;
  readonly className?: string;
  readonly loading?: "lazy" | "eager";
  readonly decoding?: "async" | "auto" | "sync";
  readonly fetchPriority?: "high" | "low" | "auto";
  /** Enables in-site fullscreen lightbox expansion on click. */
  readonly lightbox?: boolean;
  /** Optional custom CSS classes for the real <img> element. */
  readonly imageClassName?: string;
}

/**
 * Real-media-first project frame.
 *
 * A designed composition (monogram, stitch rule, dot grid) is always painted
 * as the base layer. The real screenshot sits on top and covers it when the
 * asset exists; on error the image is removed and the base composition stays —
 * so a missing asset never looks like an unfinished beige box.
 *
 * When an asset loads and fit="contain" is used, the base layer keeps its ambient
 * grid/gradient while text is suppressed so the artwork stays pristine.
 */
export const ProjectMedia: React.FC<ProjectMediaProps> = ({
  title,
  monogram,
  slotPath,
  alt,
  caption,
  badgeText,
  tone = "light",
  fit = "cover",
  aspect = "16 / 10",
  className = "",
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
  lightbox = false,
  imageClassName = "",
}) => {
  const [imgOk, setImgOk] = React.useState(true);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const dark = tone === "dark";

  const hasRealImage = Boolean(slotPath && imgOk);
  const canZoom = Boolean(lightbox && hasRealImage);

  const shell: React.CSSProperties = {
    margin: 0,
    borderRadius: "var(--radius-media)",
    overflow: "hidden",
    border: dark ? "1px solid var(--night-line)" : "1px solid var(--line)",
    backgroundColor: dark ? "var(--night-raise)" : "var(--surface)",
    boxShadow: dark
      ? "0 24px 60px -30px rgba(0,0,0,0.55)"
      : "0 18px 44px -28px rgba(20,22,26,0.28)",
  };

  const mediaContent = (
    <>
      {/* Base composition — visible until/unless the real image loads */}
      <div
        aria-hidden={!imgOk ? undefined : "true"}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        style={{
          background: dark
            ? "radial-gradient(120% 90% at 20% 10%, #232a38 0%, #171b24 55%, #12151c 100%)"
            : "radial-gradient(120% 90% at 20% 10%, #fdfbf7 0%, #f1ece1 60%, #e9e2d3 100%)",
        }}
      >
        <div
          className={dark ? "dot-grid absolute inset-0 opacity-60" : "dot-grid-light absolute inset-0 opacity-70"}
        />
        {/* Only show placeholder typography when real image is not loaded */}
        {!hasRealImage && (
          <>
            <span
              className="relative font-mono text-[clamp(2rem,6vw,3.4rem)] font-bold tracking-[0.14em]"
              style={{ color: dark ? "rgba(236,235,228,0.16)" : "rgba(20,22,26,0.12)" }}
            >
              {monogram}
            </span>
            <span
              className="relative text-[13px] font-semibold"
              style={{ color: dark ? "var(--night-soft)" : "var(--ink-soft)" }}
            >
              {title}
            </span>
            {badgeText && (
              <span
                className="relative rounded-full px-3 py-1 font-mono text-[10.5px] tracking-wide"
                style={{
                  border: `1px dashed ${dark ? "rgba(226,112,74,0.55)" : "rgba(181,56,38,0.5)"}`,
                  color: dark ? "var(--clay-bright)" : "var(--clay)",
                }}
              >
                {badgeText}
              </span>
            )}
            {/* stitching arc detail */}
            <svg
              aria-hidden="true"
              viewBox="0 0 200 60"
              className="absolute bottom-0 left-0 w-full opacity-40"
              fill="none"
            >
              <path
                d="M0 46 Q100 4 200 46"
                stroke={dark ? "rgba(226,112,74,0.5)" : "rgba(181,56,38,0.4)"}
                strokeWidth="1.5"
                strokeDasharray="5 6"
              />
            </svg>
          </>
        )}
      </div>

      {/* Real asset layer */}
      {slotPath && imgOk && (
        /* eslint-disable-next-line @next/next/no-img-element -- static export + images.unoptimized; raw <img> with onError fallback is intentional */
        <img
          ref={imgRef}
          src={slotPath}
          alt={alt ?? `${title} 프로젝트 이미지`}
          loading={loading}
          decoding={decoding}
          {...(fetchPriority !== "auto" ? { fetchPriority } : {})}
          onError={() => setImgOk(false)}
          className={`absolute inset-0 h-full w-full ${
            fit === "contain"
              ? "object-contain p-2.5 sm:p-3"
              : "object-cover"
          } object-center transition-transform duration-700 ease-out group-hover/media:scale-[1.02] motion-reduce:transition-none ${imageClassName}`}
        />
      )}

      {/* Zoom affordance badge on hover for lightbox-enabled images */}
      {canZoom && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-2 py-0.5 font-mono text-[10px] tracking-wide text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover/media:opacity-100"
        >
          <svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="6.5" cy="6.5" r="4.5" />
            <path d="M10 10l4 4M6.5 4.5v4M4.5 6.5h4" strokeLinecap="round" />
          </svg>
          확대
        </span>
      )}
    </>
  );

  return (
    <>
      <figure className={className} style={shell}>
        {canZoom ? (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`${title} 확대 보기`}
            aria-haspopup="dialog"
            className="group/media relative block w-full overflow-hidden text-left cursor-zoom-in"
            style={{ aspectRatio: aspect }}
          >
            {mediaContent}
          </button>
        ) : (
          <div
            className="group/media relative overflow-hidden"
            style={{ aspectRatio: aspect }}
          >
            {mediaContent}
          </div>
        )}

        {caption && (
          <figcaption
            className="px-4 py-2.5 text-[12.5px]"
            style={{
              borderTop: dark ? "1px solid var(--night-line)" : "1px solid var(--line-soft)",
              color: dark ? "var(--night-muted)" : "var(--muted)",
            }}
          >
            {caption}
          </figcaption>
        )}
      </figure>

      {canZoom && lightboxOpen && slotPath && (
        <LightboxModal
          src={slotPath}
          alt={alt ?? `${title} 확대 이미지`}
          label={title}
          onClose={() => setLightboxOpen(false)}
          triggerRef={triggerRef}
        />
      )}
    </>
  );
};
