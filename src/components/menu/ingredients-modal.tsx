import React, { useState } from "react";
import { X } from "lucide-react";
import { SIZES, TYPOGRAPHY, SHADOWS } from "../../constants/designTokens";
import { Button } from "../ui/button";

type Ingredient = {
  id: number;
  name: string;
  selected: boolean;
  icon?: string;
};

type IngredientsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onApply: (selectedIngredients: Ingredient[]) => void;
  initialIngredients?: Ingredient[];
};

const AVAILABLE_INGREDIENTS: Ingredient[] = [
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

export const IngredientsModal: React.FC<IngredientsModalProps> = ({
  isOpen,
  onClose,
  onApply,
  initialIngredients,
}) => {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    initialIngredients || AVAILABLE_INGREDIENTS
  );

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------
  React.useEffect(() => {
    if (initialIngredients) {
      setIngredients(initialIngredients);
    }
  }, [initialIngredients]);

  // Open/close dialog element
  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  function handleToggleIngredient(id: number) {
    setIngredients(
      ingredients.map((ing) =>
        ing.id === id ? { ...ing, selected: !ing.selected } : ing
      )
    );
  }

  function handleApply() {
    onApply(ingredients);
    onClose();
  }

  const selectedCount = ingredients.filter((i) => i.selected).length;

  // ---------------------------------------------------------------------------
  // render
  // ---------------------------------------------------------------------------
  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="ingredients-modal-title"
      className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-visible bg-transparent p-0 m-0"
      onClick={(e) => {
        // Close when clicking backdrop
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
      style={{
        border: "none",
      }}
    >
      {/* ----------------------------------------------------------------------------------- */}
      {/* Backdrop */}
      {/* ----------------------------------------------------------------------------------- */}

      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        style={{
          animation: "fadeIn 0.3s ease-in-out",
        }}
      />

      {/* ----------------------------------------------------------------------------------- */}
      {/* Modal Container */}
      {/* ----------------------------------------------------------------------------------- */}

      <div className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
        <div
          className="bg-gradient-to-b from-[#1E0C00] via-[#170A00] to-[#0F0600] rounded-t-[30px] sm:rounded-[30px] w-full sm:max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto scrollbar-hide flex flex-col relative transform transition-all"
          onClick={(e) => e.stopPropagation()}
          style={{
            boxShadow:
              "0 -20px 60px rgba(255, 100, 50, 0.2), " + SHADOWS.cardShadow,
            animation: "slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* ----------------------------------------------------------------------------------- */}
          {/* Header */}
          {/* ----------------------------------------------------------------------------------- */}

          <div className="bg-[#1E0C00] p-6 border-b border-[#FF6432]/30">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h2
                  id="ingredients-modal-title"
                  className="text-white font-extrabold mb-1"
                  style={{
                    fontSize: TYPOGRAPHY.fontSize.sectionTitle,
                    background:
                      "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Customize
                </h2>
                <p className="text-[#A3A3A3] text-sm">
                  Choose your favorite toppings
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="flex-shrink-0 p-2 hover:bg-[#FF6432]/10"
                style={{ background: "transparent" }}
              >
                <X size={24} style={{ color: "#FF6432" }} />
              </Button>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------- */}
          {/* Selected Count Badge */}
          {/* ----------------------------------------------------------------------------------- */}

          <div className="px-6 pt-4 pb-2">
            <div
              className="py-2 px-4 rounded-full text-center"
              style={{
                background:
                  "linear-gradient(215deg, rgba(255, 100, 50, 0.1), rgba(255, 162, 40, 0.1))",
                border: "1px solid #FF6432/30",
              }}
            >
              <span className="text-[#FFA228] font-medium text-sm">
                {selectedCount} ingredient{selectedCount !== 1 ? "s" : ""}{" "}
                selected
              </span>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------- */}
          {/* Ingredients Grid */}
          {/* ----------------------------------------------------------------------------------- */}

          <div className="p-6 space-y-2">
            {ingredients.map((ingredient) => (
              <button
                key={ingredient.id}
                onClick={() => handleToggleIngredient(ingredient.id)}
                className="w-full flex items-center justify-between p-4 rounded-xl transition-all hover:bg-[#FF6432]/10 group"
                style={{
                  background: ingredient.selected
                    ? "linear-gradient(135deg, rgba(255, 100, 50, 0.15), rgba(255, 162, 40, 0.1))"
                    : "rgba(255, 100, 50, 0.05)",
                  border: ingredient.selected
                    ? "2px solid #FF6432"
                    : "2px solid transparent",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="flex items-center gap-3 flex-1 text-left">
                  <span className="text-2xl">{ingredient.icon}</span>
                  <span
                    className="font-medium"
                    style={{
                      color: ingredient.selected ? "#FFA228" : "#A3A3A3",
                      fontSize: TYPOGRAPHY.fontSize.description,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {ingredient.name}
                  </span>
                </div>

                {/* Checkbox with Animation */}
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                  style={{
                    background: ingredient.selected
                      ? "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)"
                      : "transparent",
                    border: ingredient.selected
                      ? "none"
                      : "2px solid #FF6432/50",
                  }}
                >
                  {ingredient.selected && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="animate-pulse"
                    >
                      <path
                        d="M13.5 3.5L6 11L2.5 7.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* ----------------------------------------------------------------------------------- */}
          {/* Footer */}
          {/* ----------------------------------------------------------------------------------- */}

          <div className="sticky bottom-0 bg-gradient-to-t from-[#1E0C00] to-transparent p-6 border-t border-[#FF6432]/20 space-y-3">
            <Button
              variant="primary"
              fullWidth
              onClick={handleApply}
              className="transform hover:scale-105"
              style={{
                height: SIZES.orderButtonHeight,
                background: "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
                boxShadow: "0 10px 30px rgba(255, 100, 50, 0.3)",
                fontSize: TYPOGRAPHY.fontSize.orderButton,
              }}
            >
              Apply ({selectedCount})
            </Button>
            <Button
              variant="secondary"
              fullWidth
              onClick={onClose}
              style={{
                height: SIZES.orderButtonHeight,
                fontSize: TYPOGRAPHY.fontSize.ingredientsButton,
              }}
            >
              Cancel
            </Button>
          </div>

          {/* ----------------------------------------------------------------------------------- */}
          {/* Decorative Element */}
          {/* ----------------------------------------------------------------------------------- */}
          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes slideUp {
              from {
                transform: translateY(100%);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            
            /* Reset default dialog styles */
            dialog::backdrop {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </dialog>
  );
};
