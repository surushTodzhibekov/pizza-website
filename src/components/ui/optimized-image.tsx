import React, { useState } from "react";

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // For above-the-fold images
  style?: React.CSSProperties;
  showSkeleton?: boolean; // Show skeleton while loading
};

/**
 * OptimizedImage component with lazy loading, WebP support, and skeleton loader
 *
 * @param src - Image source path
 * @param alt - Alt text for accessibility
 * @param priority - If true, loads immediately (for hero images). Default: false
 * @param className - Tailwind CSS classes
 * @param width - Image width
 * @param height - Image height
 * @param style - Inline styles
 * @param showSkeleton - Show skeleton loading animation. Default: true
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  style,
  showSkeleton = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Convert .png/.jpg to .webp if available
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/, ".webp");

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative w-full h-full">
      {/* Skeleton Loader */}
      {showSkeleton && isLoading && (
        <div
          className={`absolute inset-0 ${className}`}
          style={{
            background:
              "linear-gradient(90deg, rgba(163, 163, 163, 0.1) 25%, rgba(163, 163, 163, 0.2) 50%, rgba(163, 163, 163, 0.1) 75%)",
            backgroundSize: "200% 100%",
            animation: "skeleton-loading 1.5s ease-in-out infinite",
            ...style,
          }}
        />
      )}

      {/* Image */}
      <picture>
        {/* WebP version for modern browsers */}
        <source srcSet={webpSrc} type="image/webp" />

        {/* Fallback to original format */}
        <img
          src={src}
          alt={alt}
          className={`${className} ${
            isLoading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          style={style}
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>

      {/* Error State */}
      {hasError && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-[#1a0a00] ${className}`}
          style={style}
        >
          <span className="text-[#A3A3A3] text-sm">Failed to load image</span>
        </div>
      )}

      {/* Skeleton animation CSS (inject once) */}
      <style>
        {`
          @keyframes skeleton-loading {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `}
      </style>
    </div>
  );
};
