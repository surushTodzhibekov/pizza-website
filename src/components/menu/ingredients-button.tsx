import React from "react";
import {
  COLORS,
  SIZES,
  SHADOWS,
  TYPOGRAPHY,
  getGradientTextStyle,
} from "../../constants/designTokens";

type IngredientsButtonProps = {
  onClick: () => void;
};

export const IngredientsButton: React.FC<IngredientsButtonProps> = ({
  onClick,
}) => {
  // ---------------------------------------------------------------------------
  // render
  // ---------------------------------------------------------------------------
  return (
    <button
      onClick={onClick}
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
