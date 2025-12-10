import React from "react";

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // For above-the-fold images
  style?: React.CSSProperties;
};

/**
 * OptimizedImage component with lazy loading and WebP support
 *
 * @param src - Image source path
 * @param alt - Alt text for accessibility
 * @param priority - If true, loads immediately (for hero images). Default: false
 * @param className - Tailwind CSS classes
 * @param width - Image width
 * @param height - Image height
 * @param style - Inline styles
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  style,
}) => {
  // Convert .png/.jpg to .webp if available
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/, ".webp");

  return (
    <picture>
      {/* WebP version for modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />

      {/* Fallback to original format */}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        style={style}
      />
    </picture>
  );
};
