import React from "react";
import { SPACING } from "../../constants/designTokens";

interface PizzaImageProps {
  src: string;
  alt: string;
}

/**
 * PizzaImage Component
 * Displays pizza image with floating effect above the card
 */
export const PizzaImage: React.FC<PizzaImageProps> = ({ src, alt }) => {
  return (
    <div
      className="flex justify-center -mb-[50px] relative z-10"
      style={{
        width: SPACING.pizzaImageWidth,
        height: SPACING.pizzaImageHeight,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain drop-shadow-[0px_0px_25px_rgba(255,138,0,0.18)]"
      />
    </div>
  );
};
