"use client";

import React from "react";
import { createPortal } from "react-dom";
import { OptionalImage } from "./OptionalImage";

export interface LightboxModalProps {
  readonly src: string;
  readonly alt: string;
  /** Base label, e.g. award title or institution (used for open/close aria-labels). */
  readonly label: string;
  readonly onClose: () => void;
  readonly triggerRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Accessible in-site lightbox modal overlay for full-resolution evidence inspection.
 * Reusable across certificates, project screenshots, and supporting evidence.
 */
export const LightboxModal: React.FC<LightboxModalProps> = ({
  src,
  alt,
  label,
  onClose,
  triggerRef,
}) => {
  const closeRef = React.useRef<HTMLButtonElement | null>(null);

  /* Escape to close + body scroll lock + initial focus. */
  React.useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const handleClose = React.useCallback(() => {
    onClose();
    /* Restore focus to the trigger that opened the dialog. */
    requestAnimationFrame(() => {
      triggerRef?.current?.focus();
    });
  }, [onClose, triggerRef]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${label} 확대 이미지`}
      onClick={handleClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
      style={{
        paddingTop: "max(1rem, env(safe-area-inset-top))",
        paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))",
      }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={handleClose}
        aria-label="확대 이미지 닫기"
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[20px] leading-none text-white transition-colors duration-200 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white motion-reduce:transition-none"
        style={{
          top: "max(1rem, env(safe-area-inset-top))",
          right: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        <span aria-hidden="true">×</span>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export + images.unoptimized; raw <img> is intentional */}
      <img
        src={src}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
        className="h-auto max-h-[85vh] w-auto max-w-[92vw] rounded-lg bg-white object-contain shadow-2xl"
      />
    </div>,
    document.body,
  );
};

interface LightboxImageProps {
  readonly src: string;
  readonly alt: string;
  /** Base label, e.g. award title or institution (used for open/close aria-labels). */
  readonly label: string;
  readonly buttonClassName?: string;
  readonly thumbnailClassName?: string;
  readonly thumbnailWrapperClassName?: string;
  /** Small footer line rendered under the thumbnail (e.g. "수상 기록"). */
  readonly footer?: string;
}

/**
 * Accessible in-site lightbox for certificate thumbnails.
 * Replaces the previous 새 탭 link pattern so evidence images open
 * in a fullscreen overlay with a clear close affordance.
 */
export const LightboxImage: React.FC<LightboxImageProps> = ({
  src,
  alt,
  label,
  buttonClassName = "",
  thumbnailClassName = "",
  thumbnailWrapperClassName = "",
  footer,
}) => {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);

  const close = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${label} 확대 보기`}
        aria-haspopup="dialog"
        className={`group/media cursor-zoom-in ${buttonClassName}`}
      >
        <OptionalImage
          src={src}
          alt={alt}
          className={thumbnailClassName}
          wrapperClassName={thumbnailWrapperClassName}
        />
        {footer && (
          <span className="block px-2 py-1.5 text-center font-mono text-[10px] tracking-wide text-muted">
            {footer}
          </span>
        )}
      </button>

      {open && (
        <LightboxModal
          src={src}
          alt={alt}
          label={label}
          onClose={close}
          triggerRef={triggerRef}
        />
      )}
    </>
  );
};
