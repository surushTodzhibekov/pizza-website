import React from "react";
import { COLORS, TYPOGRAPHY } from "../../constants/designTokens";

interface EventCardProps {
  title: string;
  image: string;
  buttonText?: string;
  onClick?: () => void;
  width: string;
  height: string;
}

/**
 * EventCard Component
 * Displays individual event card with image overlay, title, and action button
 */
export const EventCard: React.FC<EventCardProps> = ({
  title,
  image,
  buttonText = "More",
  onClick,
  width,
  height,
}) => {
  return (
    <div
      className="relative rounded-[30px] overflow-hidden cursor-pointer hover:shadow-lg transition-all flex flex-col"
      style={{
        width,
        height,
        boxShadow: "0px 4px 29px rgba(255,78,21,0.05)",
      }}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent"></div>

      {/* Content - Bottom Left - Using Flexbox */}
      <div className="relative flex flex-col justify-evenly p-6 flex-1">
        {/* Event Title */}
        <h4
          className="text-white font-medium leading-[1.085] mb-4"
          style={{
            fontSize: TYPOGRAPHY.fontSize.cardName,
            maxWidth: "200px",
          }}
        >
          {title}
        </h4>

        {/* Action Button */}
        <button
          onClick={onClick}
          className="rounded-[32px] text-white font-medium hover:shadow-orange-lg transition-all w-fit"
          style={{
            background: COLORS.gradientPrimary,
            fontSize: TYPOGRAPHY.fontSize.sizeButton,
            width: "204px",
            height: "38px",
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
