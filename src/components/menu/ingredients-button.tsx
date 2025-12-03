import React from "react";
import {
  COLORS,
  SIZES,
  SHADOWS,
  TYPOGRAPHY,
  getGradientTextStyle,
} from "../../constants/designTokens";

export const IngredientsButton: React.FC = () => {
  // ---------------------------------------------------------------------------
  // render
  // ---------------------------------------------------------------------------
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
