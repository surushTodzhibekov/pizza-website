import React from "react";
import { X, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../../contexts/cart-context";
import { SIZES, TYPOGRAPHY, SHADOWS } from "../../constants/designTokens";

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------
  React.useEffect(() => {
    // Open/close dialog element
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
  const handleCheckout = () => {
    alert(`Checkout - Total: $${totalPrice.toFixed(2)}`);
    // Implement checkout logic here
  };

  // ---------------------------------------------------------------------------
  // render
  // ---------------------------------------------------------------------------
  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cart-modal-title"
      className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-visible bg-transparent p-0 m-0"
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
      style={{
        border: "none",
      }}
    >
      {/* ---------------------------------------------------------------------------*/}
      {/* Backdrop */}
      {/* ---------------------------------------------------------------------------*/}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        style={{
          animation: "fadeIn 0.3s ease-in-out",
        }}
      />

      {/* ---------------------------------------------------------------------------*/}
      {/* Modal Container */}
      {/* ---------------------------------------------------------------------------*/}

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
          {/* ---------------------------------------------------------------------------*/}
          {/* Header */}
          {/* ---------------------------------------------------------------------------*/}

          <div className="bg-[#1E0C00] p-6 border-b border-[#FF6432]/30">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h2
                  id="cart-modal-title"
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
                  Shopping Cart
                </h2>
                <p className="text-[#A3A3A3] text-sm">
                  {items.length} item{items.length !== 1 ? "s" : ""} in your
                  cart
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 hover:bg-[#FF6432]/10 rounded-full transition-colors"
              >
                <X size={24} style={{ color: "#FF6432" }} />
              </button>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------*/}
          {/* Cart Items */}
          {/* ---------------------------------------------------------------------------*/}

          <div className="p-6 space-y-4 flex-1">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#A3A3A3] text-lg mb-2">
                  Your cart is empty
                </p>
                <p className="text-[#A3A3A3] text-sm">
                  Add some delicious pizzas to get started!
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FF6432]/5 rounded-xl p-4 border-2 border-[#FF6432]/20"
                >
                  <div className="flex gap-4">
                    {/* ---------------------------------------------------------------------------*/}
                    {/* Pizza Image */}
                    {/* ---------------------------------------------------------------------------*/}

                    <div className="flex-shrink-0">
                      <img
                        src={item.pizzaImage}
                        alt={item.pizzaName}
                        className="w-20 h-20 object-contain"
                      />
                    </div>

                    {/* ---------------------------------------------------------------------------*/}
                    {/* Details */}
                    {/* ---------------------------------------------------------------------------*/}

                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-white font-medium mb-1 truncate"
                        style={{ fontSize: TYPOGRAPHY.fontSize.description }}
                      >
                        {item.pizzaName}
                      </h3>
                      <p className="text-[#A3A3A3] text-sm mb-2">
                        Size: {item.size}
                      </p>

                      {/* ---------------------------------------------------------------------------*/}
                      {/* Ingredients */}
                      {/* ---------------------------------------------------------------------------*/}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.ingredients
                          .filter((ing) => ing.selected)
                          .slice(0, 3)
                          .map((ing) => (
                            <span
                              key={ing.id}
                              className="text-xs px-2 py-0.5 rounded-full bg-[#FF6432]/10 text-[#FFA228]"
                            >
                              {ing.icon} {ing.name}
                            </span>
                          ))}
                        {item.ingredients.filter((ing) => ing.selected).length >
                          3 && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[#FF6432]/10 text-[#FFA228]">
                            +
                            {item.ingredients.filter((ing) => ing.selected)
                              .length - 3}{" "}
                            more
                          </span>
                        )}
                      </div>

                      {/* ---------------------------------------------------------------------------*/}
                      {/* Quantity Controls & Price */}
                      {/* ---------------------------------------------------------------------------*/}

                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:bg-[#FF6432]/20"
                            style={{
                              background: "rgba(255, 100, 50, 0.1)",
                            }}
                          >
                            <Minus size={14} style={{ color: "#FFA228" }} />
                          </button>
                          <span
                            className="text-white font-medium min-w-[24px] text-center"
                            style={{
                              fontSize: TYPOGRAPHY.fontSize.description,
                            }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:bg-[#FF6432]/20"
                            style={{
                              background: "rgba(255, 100, 50, 0.1)",
                            }}
                          >
                            <Plus size={14} style={{ color: "#FFA228" }} />
                          </button>
                        </div>

                        <div className="flex items-center gap-3">
                          <span
                            className="font-bold"
                            style={{
                              fontSize: TYPOGRAPHY.fontSize.description,
                              background:
                                "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
                              WebkitBackgroundClip: "text",
                              backgroundClip: "text",
                              color: "transparent",
                            }}
                          >
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 hover:bg-[#FF6432]/20 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} style={{ color: "#FF6432" }} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* ---------------------------------------------------------------------------*/}
          {/* Footer */}
          {/* ---------------------------------------------------------------------------*/}

          {items.length > 0 && (
            <div className="sticky bottom-0 bg-gradient-to-t from-[#1E0C00] to-transparent p-6 border-t border-[#FF6432]/20 space-y-3">
              {/* ---------------------------------------------------------------------------*/}
              {/* Total */}
              {/* ---------------------------------------------------------------------------*/}

              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-medium text-lg">Total:</span>
                <span
                  className="font-extrabold text-2xl"
                  style={{
                    background:
                      "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full rounded-full text-white font-bold hover:shadow-orange-lg transition-all transform hover:scale-105"
                style={{
                  height: SIZES.orderButtonHeight,
                  background:
                    "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
                  boxShadow: "0 10px 30px rgba(255, 100, 50, 0.3)",
                  fontSize: TYPOGRAPHY.fontSize.orderButton,
                }}
              >
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full rounded-full font-medium transition-all hover:opacity-80"
                style={{
                  height: SIZES.orderButtonHeight,
                  color: "#A3A3A3",
                  background: "rgba(255, 100, 50, 0.05)",
                  fontSize: TYPOGRAPHY.fontSize.ingredientsButton,
                }}
              >
                Clear Cart
              </button>
            </div>
          )}

          {/* ---------------------------------------------------------------------------*/}
          {/* Animations */}
          {/* ---------------------------------------------------------------------------*/}

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
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
            dialog::backdrop {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </dialog>
  );
};
