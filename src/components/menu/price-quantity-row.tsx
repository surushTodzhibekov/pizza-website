import React from "react";
import { COLORS, TYPOGRAPHY } from "../../constants/designTokens";

interface PriceQuantityRowProps {
  price: number;
  quantity: number;
  onQuantityChange: (delta: number) => void;
}

/**
 * PriceQuantityRow Component
 * Displays pizza price and quantity controls (increase/decrease buttons)
 */
export const PriceQuantityRow: React.FC<PriceQuantityRowProps> = ({
  price,
  quantity,
  onQuantityChange,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      {/* Price Display */}
      <div className="flex items-baseline">
        <span
          className="text-white font-medium"
          style={{ fontSize: TYPOGRAPHY.fontSize.cardPrice }}
        >
          {price.toFixed(2).replace(".", ",")}
        </span>
        <span
          className="text-white font-bold ml-1"
          style={{ fontSize: TYPOGRAPHY.fontSize.priceSymbol }}
        >
          $
        </span>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onQuantityChange(-1)}
          className="w-[23px] h-[23px] rounded-full flex items-center justify-center border border-[#A3A3A3] text-[#A3A3A3] hover:border-primary transition-all"
          style={{ fontSize: TYPOGRAPHY.fontSize.controlButton }}
        >
          -
        </button>
        <span
          className="text-[#A3A3A3]"
          style={{ fontSize: TYPOGRAPHY.fontSize.quantity }}
        >
          {quantity}
        </span>
        <button
          onClick={() => onQuantityChange(1)}
          className="w-[23px] h-[23px] rounded-full flex items-center justify-center text-white"
          style={{
            background: COLORS.gradientPrimary,
            fontSize: TYPOGRAPHY.fontSize.controlButton,
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
