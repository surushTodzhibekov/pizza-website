import { useState, useCallback } from "react";
import { DEFAULT_PIZZA_SIZE, PizzaSize } from "../constants/designTokens";

/**
 * Custom hook for managing Menu component state
 * Handles category filtering, quantities, and size selection
 */
export const useMenuState = () => {
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [selectedSizes, setSelectedSizes] = useState<Record<number, PizzaSize>>(
    {}
  );

  const handleQuantityChange = useCallback((id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  }, []);

  const handleSizeSelect = useCallback((id: number, size: PizzaSize) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [id]: size,
    }));
  }, []);

  const getQuantity = (id: number) => quantities[id] || 1;

  const getSelectedSize = (id: number) =>
    selectedSizes[id] || DEFAULT_PIZZA_SIZE;

  return {
    selectedCategory,
    setSelectedCategory,
    quantities,
    handleQuantityChange,
    selectedSizes,
    handleSizeSelect,
    getQuantity,
    getSelectedSize,
  };
};
