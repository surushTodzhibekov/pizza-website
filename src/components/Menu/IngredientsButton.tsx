import React from "react";
import {
  COLORS,
  SIZES,
  SHADOWS,
  TYPOGRAPHY,
  getGradientTextStyle,
} from "../../constants/designTokens";

/**
 * IngredientsButton Component
 * Displays ingredients button with gradient border effect
 */
export const IngredientsButton: React.FC = () => {
  return (
    <button
      className="w-full rounded-full mb-4 transition-all hover:opacity-80"
      style={{
        height: SIZES.ingredientsButtonHeight,
        ...SHADOWS.borderGradient(COLORS.darkBg),
        boxShadow: SHADOWS.buttonShadow,
      }}
    >
      <span
        style={{
          ...getGradientTextStyle(),
          fontSize: TYPOGRAPHY.fontSize.ingredientsButton,
        }}
      >
        + Ingridients
      </span>
    </button>
  );
};
