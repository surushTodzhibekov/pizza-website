import React from "react";
import {
  COLORS,
  SIZES,
  TYPOGRAPHY,
  SHADOWS,
} from "../../constants/designTokens";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

/**
 * CategoryFilter Component
 * Renders category filter buttons with active state styling
 */
export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className="rounded-full font-medium text-white transition-all"
          style={{
            width: SIZES.categoryButtonWidth,
            height: SIZES.categoryButtonHeight,
            fontSize: TYPOGRAPHY.fontSize.categoryButton,
            background:
              selectedCategory === category
                ? COLORS.gradientPrimary
                : COLORS.darkBg,
            boxShadow: SHADOWS.categoryButtonShadow,
            marginLeft: index > 0 ? "-4px" : "0",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
