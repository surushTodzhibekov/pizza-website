import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "icon" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  style = {},
  ...props
}) => {
  // Base styles
  const baseStyles =
    "rounded-full font-medium transition-all focus:outline-none";

  // Variant styles
  const variantStyles: Record<ButtonVariant, string> = {
    primary: "text-white hover:shadow-orange-lg",
    secondary: "text-[#A3A3A3] hover:opacity-80",
    ghost: "text-[#A3A3A3] hover:text-primary transition-colors font-normal",
    icon: "flex items-center justify-center hover:shadow-orange",
    danger: "text-white hover:opacity-90",
  };

  // Size styles
  const sizeStyles: Record<
    ButtonSize,
    { className: string; style?: React.CSSProperties }
  > = {
    sm: {
      className: "px-4 py-2 text-sm",
      style: { height: "32px" },
    },
    md: {
      className: "px-6 py-2.5",
      style: { height: "40px", padding: 0 },
    },
    lg: {
      className: "px-8 py-3",
      style: { height: "48px" },
    },
  };

  // Variant background gradients
  const variantBackgrounds: Record<ButtonVariant, string | undefined> = {
    primary: "linear-gradient(215deg, #FF5D29 0%, #FE9C1C 100%)",
    secondary: "rgba(255, 100, 50, 0.05)",
    ghost: "transparent",
    icon: "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
    danger: "linear-gradient(215deg, #FF0000 0%, #CC0000 100%)",
  };

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size].className}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const combinedStyle = {
    background: variantBackgrounds[variant],
    ...sizeStyles[size].style,
    display: variant === "icon" ? "flex" : undefined,
    alignItems: variant === "icon" ? "center" : undefined,
    justifyContent: variant === "icon" ? "center" : undefined,
    ...style,
  };

  return (
    <button className={combinedClassName} style={combinedStyle} {...props}>
      {children}
    </button>
  );
};
