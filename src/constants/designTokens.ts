/**
 * Design Tokens - Centralized styling constants
 * Used across all components to maintain consistency
 */

export const COLORS = {
  // Primary Brand Colors
  primary: "#FF5924",
  primaryLight: "#FFA229",
  gradientPrimary: "linear-gradient(215deg, #FF5924 0%, #FFA229 100%)",

  // Background Colors
  darkBg: "#210A01",
  darkBgAlt: "#1E0C00",

  // Text Colors
  white: "#FFFFFF",
  textGray: "#A3A3A3",

  // Utility
  transparent: "transparent",
} as const;

export const TYPOGRAPHY = {
  // Font Sizes
  fontSize: {
    sectionTitle: "69px",
    bannerTitle: "43.86px",
    cardName: "25.1px",
    cardPrice: "25.46px",
    description: "14.32px",
    priceSymbol: "16.97px",
    categoryButton: "20px",
    ingredientsButton: "16.08px",
    quantity: "22.82px",
    controlButton: "17.66px",
    orderButton: "17.45px",
    sizeButton: "14.32px",
    emptyState: "20px",
  },

  // Line Heights
  lineHeight: {
    default: "1.095",
    description: "1.51",
    banner: "1.085",
    control: "1.36",
  },

  // Font Weights
  fontWeight: {
    medium: 500,
    bold: 700,
    extrabold: 800,
  },
} as const;

export const SPACING = {
  // Card Dimensions
  cardWidth: "297px",
  cardPadding: "27px",
  cardPaddingTop: "70px",
  cardPaddingBottom: "24px",

  // Pizza Image
  pizzaImageWidth: "159px",
  pizzaImageHeight: "157px",
  pizzaImageNegativeMargin: "-50px",

  // Layout
  gridGap: "22px",
  categoryGap: "4px", // Negative overlap effect
  sizeGap: "37px",

  // Sections
  sectionPadding: "24px",
  sectionSpacing: "12px",
} as const;

export const SHADOWS = {
  // Card Shadows
  cardShadow: "0px 4px 27px rgba(139, 36, 3, 0.05)",
  buttonShadow: "0px 7.59px 33.75px rgba(255, 107, 0, 0.06)",
  categoryButtonShadow: "0px 9px 40px rgba(255, 107, 0, 0.06)",

  // Decorative Shadows
  pizzaImageShadow: "drop-shadow(0px 0px 25px rgba(255,138,0,0.18))",
  textShadow: "0px 11.59px 10.23px rgba(14, 4, 4, 0.38)",

  // Border Effects
  borderGradient: (bgColor: string) => ({
    border: "1.5px solid transparent",
    backgroundImage: `linear-gradient(${bgColor}, ${bgColor}), linear-gradient(215deg, #FF5924 0%, #FFA229 100%)`,
    backgroundOrigin: "border-box" as const,
    backgroundClip: "padding-box, border-box",
  }),
} as const;

export const SIZES = {
  // Button Sizes
  categoryButtonWidth: "230px",
  categoryButtonHeight: "62px",

  // Banner
  bannerHeight: "286px",
  bannerRadius: "34px",

  // Card
  cardRadius: "30px",

  // UI Elements
  sizeButtonDimension: "40px",
  quantityButtonDimension: "23px",
  ingredientsButtonHeight: "39px",
  orderButtonHeight: "45px",
} as const;

export const PIZZA_SIZES = [22, 28, 33] as const;
export type PizzaSize = (typeof PIZZA_SIZES)[number];

export const DEFAULT_PIZZA_SIZE: PizzaSize = 28;

// Gradient background for text (used for gradient text effect)
export const getGradientTextStyle = () => ({
  background: COLORS.gradientPrimary,
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  color: "transparent",
});
