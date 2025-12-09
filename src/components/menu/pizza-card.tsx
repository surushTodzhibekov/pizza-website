import React, { useState } from "react";
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
import { IngredientsModal } from "./ingredients-modal";
import { PriceQuantityRow } from "./price-quantity-row";
import { useCart } from "../../contexts/cart-context";
import { Toast } from "../ui/toast";
import { Button } from "../ui/button";

type Ingredient = {
  id: number;
  name: string;
  selected: boolean;
  icon?: string;
};

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

const DEFAULT_INGREDIENTS: Ingredient[] = [
  { id: 1, name: "Mozzarella", selected: true, icon: "🧀" },
  { id: 2, name: "Tomato Sauce", selected: true, icon: "🍅" },
  { id: 3, name: "Pepperoni", selected: false, icon: "🌶️" },
  { id: 4, name: "Mushrooms", selected: false, icon: "🍄" },
  { id: 5, name: "Onions", selected: false, icon: "🧅" },
  { id: 6, name: "Bell Peppers", selected: false, icon: "🫑" },
  { id: 7, name: "Olives", selected: false, icon: "⬛" },
  { id: 8, name: "Fresh Basil", selected: false, icon: "🌿" },
  { id: 9, name: "Garlic", selected: false, icon: "🧄" },
  { id: 10, name: "Ham", selected: false, icon: "🍖" },
];

export const PizzaCard: React.FC<PizzaCardProps> = ({
  pizza,
  quantity,
  selectedSize,
  onQuantityChange,
  onSizeSelect,
}) => {
  const [isIngredientsModalOpen, setIsIngredientsModalOpen] = useState(false);
  const [pizzaIngredients, setPizzaIngredients] =
    useState<Ingredient[]>(DEFAULT_INGREDIENTS);
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useCart();

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  const handleQuantityChange = (delta: number) => {
    onQuantityChange(pizza.id, delta);
  };

  const handleSizeSelect = (size: PizzaSize) => {
    onSizeSelect(pizza.id, size);
  };

  const handleIngredientsApply = (selectedIngredients: Ingredient[]) => {
    // Save the selected ingredients for this specific pizza
    setPizzaIngredients(selectedIngredients);
    console.log(
      `Pizza ${pizza.id} (${pizza.name}) ingredients:`,
      selectedIngredients
    );
  };

  const handleOrderNow = () => {
    addToCart({
      pizzaId: pizza.id,
      pizzaName: pizza.name,
      pizzaImage: pizza.image,
      size: selectedSize,
      quantity: quantity,
      price: pizza.price,
      ingredients: pizzaIngredients,
    });

    // Show custom toast notification
    setShowToast(true);
  };

  // ---------------------------------------------------------------------------
  // render
  // ---------------------------------------------------------------------------
  return (
    <>
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

          <SizeSelector
            selectedSize={selectedSize}
            onSelect={handleSizeSelect}
          />

          {/*--------------------------------------------------------------------------*/}
          {/* Ingredients Button */}
          {/*--------------------------------------------------------------------------*/}

          <IngredientsButton onClick={() => setIsIngredientsModalOpen(true)} />

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

          <Button
            variant="primary"
            fullWidth
            onClick={handleOrderNow}
            style={{
              height: SIZES.orderButtonHeight,
              background: COLORS.gradientPrimary,
              boxShadow: SHADOWS.buttonShadow,
              fontSize: TYPOGRAPHY.fontSize.orderButton,
            }}
          >
            Order Now
          </Button>
        </div>
      </div>

      {/* Ingredients Modal */}
      <IngredientsModal
        isOpen={isIngredientsModalOpen}
        onClose={() => setIsIngredientsModalOpen(false)}
        onApply={handleIngredientsApply}
        initialIngredients={pizzaIngredients}
      />

      {/* Toast Notification */}
      <Toast
        message={`Added ${quantity}x ${pizza.name} (${selectedSize}) to cart!`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};
