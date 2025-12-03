import React from "react";
import {
  COLORS,
  SIZES,
  SPACING,
  TYPOGRAPHY,
  SHADOWS,
  PizzaSize,
} from "../../constants/designTokens";
import { PizzaImage } from "./PizzaImage";
import { SizeSelector } from "./SizeSelector";
import { IngredientsButton } from "./IngredientsButton";
import { PriceQuantityRow } from "./PriceQuantityRow";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface PizzaCardProps {
  pizza: Pizza;
  quantity: number;
  selectedSize: PizzaSize;
  onQuantityChange: (id: number, delta: number) => void;
  onSizeSelect: (id: number, size: PizzaSize) => void;
}

/**
 * PizzaCard Component
 * Displays individual pizza with image, details, size selection, and order controls
 */
export const PizzaCard: React.FC<PizzaCardProps> = ({
  pizza,
  quantity,
  selectedSize,
  onQuantityChange,
  onSizeSelect,
}) => {
  const handleQuantityChange = (delta: number) => {
    onQuantityChange(pizza.id, delta);
  };

  const handleSizeSelect = (size: PizzaSize) => {
    onSizeSelect(pizza.id, size);
  };

  return (
    <div
      className="flex flex-col items-center w-full max-w-sm"
      style={{
        width: SPACING.cardWidth,
      }}
    >
      {/* Pizza Image - Floating above card */}
      <PizzaImage src={pizza.image} alt={pizza.name} />

      {/* Card Background with Content */}
      <div
        className="w-full rounded-[30px]"
        style={{
          paddingTop: SPACING.cardPaddingTop,
          paddingLeft: SPACING.cardPadding,
          paddingRight: SPACING.cardPadding,
          paddingBottom: SPACING.cardPaddingBottom,
          background: COLORS.darkBg,
          boxShadow: SHADOWS.cardShadow,
        }}
      >
        {/* Pizza Name */}
        <h4
          className="text-white font-medium text-center mb-4"
          style={{
            fontSize: TYPOGRAPHY.fontSize.cardName,
            lineHeight: TYPOGRAPHY.lineHeight.default,
          }}
        >
          {pizza.name}
        </h4>

        {/* Description */}
        <p
          className="text-[#A3A3A3] text-center mb-4"
          style={{
            fontSize: TYPOGRAPHY.fontSize.description,
            lineHeight: TYPOGRAPHY.lineHeight.default,
          }}
        >
          {pizza.description}
        </p>

        {/* Size Selection */}
        <SizeSelector selectedSize={selectedSize} onSelect={handleSizeSelect} />

        {/* Ingredients Button */}
        <IngredientsButton />

        {/* Price & Quantity Row */}
        <PriceQuantityRow
          price={pizza.price}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />

        {/* Order Button */}
        <button
          className="w-full rounded-full text-white font-medium hover:shadow-orange-lg transition-all"
          style={{
            height: SIZES.orderButtonHeight,
            background: COLORS.gradientPrimary,
            boxShadow: SHADOWS.buttonShadow,
            fontSize: TYPOGRAPHY.fontSize.orderButton,
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};
