import React from "react";
import {
  COLORS,
  TYPOGRAPHY,
  PIZZA_SIZES,
  PizzaSize,
} from "../../constants/designTokens";

type SizeSelectorProps = {
  selectedSize: PizzaSize;
  onSelect: (size: PizzaSize) => void;
};

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  selectedSize,
  onSelect,
}) => {
  // ---------------------------------------------------------------------------
  // render
  // ---------------------------------------------------------------------------
  return (
    <div className="flex justify-center gap-[37px] mb-6">
      {PIZZA_SIZES.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{
            fontSize: TYPOGRAPHY.fontSize.sizeButton,
            background:
              selectedSize === size
                ? COLORS.gradientPrimary
                : COLORS.transparent,
            border:
              selectedSize === size ? "none" : `1.5px solid ${COLORS.textGray}`,
            color: selectedSize === size ? COLORS.white : COLORS.textGray,
          }}
        >
          {size}
        </button>
      ))}
    </div>
  );
};
