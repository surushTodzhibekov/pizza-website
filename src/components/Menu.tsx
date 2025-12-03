import React, { useState } from "react";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [selectedSizes, setSelectedSizes] = useState<Record<number, number>>(
    {}
  );

  const categories = [
    "Show All",
    "Meat",
    "Vegetarian",
    "Sea products",
    "Mushroom",
  ];

  const pizzas: Pizza[] = [
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

  const filteredPizzas =
    selectedCategory === "Show All"
      ? pizzas
      : pizzas.filter((pizza) => pizza.category === selectedCategory);

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const handleSizeSelect = (id: number, size: number) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [id]: size,
    }));
  };

  return (
    <section id="menu" className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-[1254px] mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-[69px] font-extrabold text-white leading-[1.095]">
            Menu
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full font-medium text-[20px] text-white transition-all"
              style={{
                width: "230px",
                height: "62px",
                background:
                  selectedCategory === category
                    ? "linear-gradient(215deg, #FF5924 0%, #FFA229 100%)"
                    : "#210A01",
                boxShadow: "0px 9px 40px rgba(255, 107, 0, 0.06)",
                marginLeft: index > 0 ? "-4px" : "0",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pizza Grid - Row 1 */}
        <div className="flex flex-wrap gap-[22px] justify-center mb-[22px]">
          {filteredPizzas.slice(0, 4).map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              quantity={quantities[pizza.id] || 1}
              selectedSize={selectedSizes[pizza.id] || 28}
              onQuantityChange={handleQuantityChange}
              onSizeSelect={handleSizeSelect}
            />
          ))}
        </div>

        {/* Most Popular Banner */}
        <div
          className="mb-12 rounded-[34px] overflow-hidden relative"
          style={{ height: "286px" }}
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
                fontSize: "43.86px",
                lineHeight: "1.085",
                textShadow: "0px 11.59px 10.23px rgba(14, 4, 4, 0.38)",
              }}
            >
              MOST POPULAR PIZZA
            </h3>
          </div>
        </div>

        {/* Pizza Grid - Row 2 */}
        <div className="flex flex-wrap gap-[22px] justify-center">
          {filteredPizzas.slice(4, 8).map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              quantity={quantities[pizza.id] || 1}
              selectedSize={selectedSizes[pizza.id] || 28}
              onQuantityChange={handleQuantityChange}
              onSizeSelect={handleSizeSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Pizza Card Component
interface PizzaCardProps {
  pizza: Pizza;
  quantity: number;
  selectedSize: number;
  onQuantityChange: (id: number, delta: number) => void;
  onSizeSelect: (id: number, size: number) => void;
}

const PizzaCard: React.FC<PizzaCardProps> = ({
  pizza,
  quantity,
  selectedSize,
  onQuantityChange,
  onSizeSelect,
}) => {
  return (
    <div
      className="flex flex-col items-center w-full max-w-sm"
      style={{
        width: "297px",
      }}
    >
      {/* Pizza Image - Floating above card */}
      <div
        className="flex justify-center -mb-[50px] relative z-10"
        style={{ width: "159px", height: "157px" }}
      >
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-full object-contain drop-shadow-[0px_0px_25px_rgba(255,138,0,0.18)]"
        />
      </div>

      {/* Card Background with Content */}
      <div
        className="w-full rounded-[30px] pt-[70px] px-[27px] pb-[24px]"
        style={{
          background: "#210A01",
          boxShadow: "0px 4px 27px rgba(139, 36, 3, 0.05)",
        }}
      >
        {/* Pizza Name */}
        <h4
          className="text-white font-medium text-center mb-4"
          style={{ fontSize: "25.1px", lineHeight: "1.095" }}
        >
          {pizza.name}
        </h4>

        {/* Description */}
        <p
          className="text-[#A3A3A3] text-center mb-4"
          style={{ fontSize: "14.32px", lineHeight: "1.095" }}
        >
          {pizza.description}
        </p>

        {/* Size Selection */}
        <div className="flex justify-center gap-[37px] mb-6">
          {[22, 28, 33].map((size) => (
            <button
              key={size}
              onClick={() => onSizeSelect(pizza.id, size)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                fontSize: "14.32px",
                background:
                  selectedSize === size
                    ? "linear-gradient(215deg, #FF5924 0%, #FFA229 100%)"
                    : "transparent",
                border: selectedSize === size ? "none" : "1.5px solid #A3A3A3",
                color: selectedSize === size ? "#FFFFFF" : "#A3A3A3",
              }}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Ingredients Button */}
        <button
          className="w-full rounded-full mb-4 transition-all hover:opacity-80"
          style={{
            height: "39px",
            border: "1.5px solid transparent",
            backgroundImage:
              "linear-gradient(#210A01, #210A01), linear-gradient(215deg, #FF5924 0%, #FFA229 100%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            boxShadow: "0px 7.59px 33.75px rgba(255, 107, 0, 0.06)",
          }}
        >
          <span
            style={{
              background: "linear-gradient(215deg, #FF5924 0%, #FFA229 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontSize: "16.08px",
            }}
          >
            + Ingridients
          </span>
        </button>

        {/* Price & Quantity Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline">
            <span
              className="text-white font-medium"
              style={{ fontSize: "25.46px" }}
            >
              {pizza.price.toFixed(2).replace(".", ",")}
            </span>
            <span
              className="text-white font-bold ml-1"
              style={{ fontSize: "16.97px" }}
            >
              $
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onQuantityChange(pizza.id, -1)}
              className="w-[23px] h-[23px] rounded-full flex items-center justify-center border border-[#A3A3A3] text-[#A3A3A3] hover:border-primary transition-all"
              style={{ fontSize: "17.66px" }}
            >
              -
            </button>
            <span className="text-[#A3A3A3]" style={{ fontSize: "22.82px" }}>
              {quantity}
            </span>
            <button
              onClick={() => onQuantityChange(pizza.id, 1)}
              className="w-[23px] h-[23px] rounded-full flex items-center justify-center text-white"
              style={{
                background: "linear-gradient(215deg, #FF5924 0%, #FFA229 100%)",
                fontSize: "17.66px",
              }}
            >
              +
            </button>
          </div>
        </div>

        {/* Order Button */}
        <button
          className="w-full rounded-full text-white font-medium hover:shadow-orange-lg transition-all"
          style={{
            height: "45px",
            background: "linear-gradient(215deg, #FF5924 0%, #FFA229 100%)",
            boxShadow: "0px 7.59px 33.75px rgba(255, 107, 0, 0.06)",
            fontSize: "17.45px",
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Menu;
