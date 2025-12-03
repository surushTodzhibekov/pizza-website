import React from "react";
import {
  COLORS,
  SIZES,
  SPACING,
  TYPOGRAPHY,
  SHADOWS,
  PizzaSize,
} from "../../constants/designTokens";
import { PizzaImage } from "./pizza-image";
import { SizeSelector } from "./size-selector";
import { IngredientsButton } from "./ingredients-button";
import { PriceQuantityRow } from "./price-quantity-row";

type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

type PizzaCardProps = {
  pizza: Pizza;
  quantity: number;
  selectedSize: PizzaSize;
  onQuantityChange: (id: number, delta: number) => void;
  onSizeSelect: (id: number, size: PizzaSize) => void;
};

export const PizzaCard: React.FC<PizzaCardProps> = ({
  pizza,
  quantity,
  selectedSize,
  onQuantityChange,
  onSizeSelect,
}) => {
  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  const handleQuantityChange = (delta: number) => {
    onQuantityChange(pizza.id, delta);
  };

  const handleSizeSelect = (size: PizzaSize) => {
    onSizeSelect(pizza.id, size);
  };

  // ---------------------------------------------------------------------------
  // render
  // ---------------------------------------------------------------------------
  return (
    <div
      className="flex flex-col items-center w-full max-w-sm"
      style={{
        width: SPACING.cardWidth,
      }}
    >
      {/*--------------------------------------------------------------------------*/}
      {/* Pizza Image - Floating above card */}
      {/*--------------------------------------------------------------------------*/}

      <PizzaImage src={pizza.image} alt={pizza.name} />

      {/*--------------------------------------------------------------------------*/}
      {/* Card Background with Content */}
      {/*--------------------------------------------------------------------------*/}

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
        {/*--------------------------------------------------------------------------*/}
        {/* Pizza Name */}
        {/*--------------------------------------------------------------------------*/}
        <h4
          className="text-white font-medium text-center mb-4"
          style={{
            fontSize: TYPOGRAPHY.fontSize.cardName,
            lineHeight: TYPOGRAPHY.lineHeight.default,
          }}
        >
          {pizza.name}
        </h4>

        {/*--------------------------------------------------------------------------*/}
        {/* Description */}
        {/*--------------------------------------------------------------------------*/}
        <p
          className="text-[#A3A3A3] text-center mb-4"
          style={{
            fontSize: TYPOGRAPHY.fontSize.description,
            lineHeight: TYPOGRAPHY.lineHeight.default,
          }}
        >
          {pizza.description}
        </p>

        {/*--------------------------------------------------------------------------*/}
        {/* Size Selection */}
        {/*--------------------------------------------------------------------------*/}

        <SizeSelector selectedSize={selectedSize} onSelect={handleSizeSelect} />

        {/*--------------------------------------------------------------------------*/}
        {/* Ingredients Button */}
        {/*--------------------------------------------------------------------------*/}

        <IngredientsButton />

        {/*--------------------------------------------------------------------------*/}
        {/* Price & Quantity Row */}
        {/*--------------------------------------------------------------------------*/}

        <PriceQuantityRow
          price={pizza.price}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />

        {/*--------------------------------------------------------------------------*/}
        {/* Order Button */}
        {/*--------------------------------------------------------------------------*/}

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
