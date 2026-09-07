"use client";

import React from "react";

interface OptionalImageProps {
  readonly src: string;
  readonly alt: string;
  readonly className?: string;
  readonly wrapperClassName?: string;
  readonly aspect?: string;
  readonly caption?: string;
}

/**
 * Media-ready image that disappears entirely until the real asset exists.
 * Used for awards/education/Notion/content slots so future WebP drops
 * light the UI up without any "missing image" state ever being visible.
 */
export const OptionalImage: React.FC<OptionalImageProps> = ({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  aspect,
  caption,
}) => {
  const [ok, setOk] = React.useState(true);
  const imgRef = React.useRef<HTMLImageElement | null>(null);

  /* Catch load errors that fire before hydration attaches onError. */
  React.useEffect(() => {
    const node = imgRef.current;
    if (node && node.complete && node.naturalWidth === 0) {
      setOk(false);
    }
  }, []);

  if (!ok) return null;

  return (
    <figure className={wrapperClassName} style={{ margin: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export + images.unoptimized; raw <img> with graceful removal is intentional */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setOk(false)}
        className={className}
        style={aspect ? { aspectRatio: aspect, objectFit: "cover", width: "100%" } : undefined}
      />
      {caption && (
        <figcaption className="mt-2 text-[12px] text-muted">{caption}</figcaption>
      )}
    </figure>
  );
};
