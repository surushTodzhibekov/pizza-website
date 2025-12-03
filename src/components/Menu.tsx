import React from "react";
import { SPACING, TYPOGRAPHY, SHADOWS, SIZES } from "../constants/designTokens";
import { useMenuState } from "../hooks/useMenuState";
import { CategoryFilter } from "./Menu/CategoryFilter";
import { PizzaCard } from "./Menu/PizzaCard";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const CATEGORIES = [
  "Show All",
  "Meat",
  "Vegetarian",
  "Sea products",
  "Mushroom",
];

const PIZZAS: Pizza[] = [
  {
    id: 1,
    name: "Italian",
    description:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    price: 8.35,
    image: "/images/pizza-italian.png",
    category: "Meat",
  },
  {
    id: 2,
    name: "Venecia",
    description:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    price: 7.35,
    image: "/images/pizza-venecia.png",
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Meat",
    description:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    price: 9.35,
    image: "/images/pizza-meat.png",
    category: "Meat",
  },
  {
    id: 4,
    name: "Cheese",
    description:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    price: 8.35,
    image: "/images/pizza-cheese.png",
    category: "Vegetarian",
  },
  {
    id: 5,
    name: "Argentina",
    description:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    price: 7.35,
    image: "/images/pizza-argentina.png",
    category: "Meat",
  },
  {
    id: 6,
    name: "Gribnaya",
    description:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    price: 6.35,
    image: "/images/pizza-gribnaya.png",
    category: "Mushroom",
  },
  {
    id: 7,
    name: "Tomato",
    description:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    price: 7.35,
    image: "/images/pizza-tomato.png",
    category: "Vegetarian",
  },
  {
    id: 8,
    name: "Italian x2",
    description:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    price: 8.35,
    image: "/images/pizza-italian-x2.png",
    category: "Meat",
  },
];

/**
 * Menu Component
 * Main menu section with pizza filtering, categories, and ordering
 */
const Menu: React.FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    handleQuantityChange,
    handleSizeSelect,
    getQuantity,
    getSelectedSize,
  } = useMenuState();

  // Filter pizzas based on selected category
  const filteredPizzas =
    selectedCategory === "Show All"
      ? PIZZAS
      : PIZZAS.filter((pizza) => pizza.category === selectedCategory);

  // Split filtered pizzas into two rows
  const firstRowPizzas = filteredPizzas.slice(0, 4);
  const secondRowPizzas = filteredPizzas.slice(4, 8);

  return (
    <section id="menu" className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-[1254px] mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2
            className="font-extrabold text-white"
            style={{
              fontSize: TYPOGRAPHY.fontSize.sectionTitle,
              lineHeight: TYPOGRAPHY.lineHeight.default,
            }}
          >
            Menu
          </h2>
        </div>

        {/* Category Filters */}
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Pizza Grid - Row 1 */}
        <div
          className="flex flex-wrap justify-center mb-[22px]"
          style={{
            gap: SPACING.gridGap,
          }}
        >
          {firstRowPizzas.length > 0 ? (
            firstRowPizzas.map((pizza) => (
              <PizzaCard
                key={pizza.id}
                pizza={pizza}
                quantity={getQuantity(pizza.id)}
                selectedSize={getSelectedSize(pizza.id)}
                onQuantityChange={handleQuantityChange}
                onSizeSelect={handleSizeSelect}
              />
            ))
          ) : (
            <div className="w-full text-center py-12">
              <p
                className="text-[#A3A3A3]"
                style={{
                  fontSize: TYPOGRAPHY.fontSize.emptyState,
                }}
              >
                No pizzas found in this category
              </p>
            </div>
          )}
        </div>

        {/* Most Popular Banner */}
        <div
          className="mb-12 rounded-[34px] overflow-hidden relative"
          style={{
            height: SIZES.bannerHeight,
          }}
        >
          <img
            src="/images/most-popular-banner.png"
            alt="Most Popular Pizza"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3
              className="text-white font-medium"
              style={{
                fontSize: TYPOGRAPHY.fontSize.bannerTitle,
                lineHeight: TYPOGRAPHY.lineHeight.banner,
                textShadow: SHADOWS.textShadow,
              }}
            >
              MOST POPULAR PIZZA
            </h3>
          </div>
        </div>

        {/* Pizza Grid - Row 2 */}
        <div
          className="flex flex-wrap justify-center"
          style={{
            gap: SPACING.gridGap,
          }}
        >
          {secondRowPizzas.length > 0
            ? secondRowPizzas.map((pizza) => (
                <PizzaCard
                  key={pizza.id}
                  pizza={pizza}
                  quantity={getQuantity(pizza.id)}
                  selectedSize={getSelectedSize(pizza.id)}
                  onQuantityChange={handleQuantityChange}
                  onSizeSelect={handleSizeSelect}
                />
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default Menu;
