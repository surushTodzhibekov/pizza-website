import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/cart-context";
import { CartModal } from "./cart/cart-modal";
import { Button } from "./ui/button";

export const Header: React.FC = () => {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [showLoginTooltip, setShowLoginTooltip] = useState(false);
  const { totalItems } = useCart();

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  function scrollToSection(sectionId: string, navItem: string) {
    setActiveNav(navItem);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }

  // ---------------------------------------------------------------------------
  // render
  // ---------------------------------------------------------------------------
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-30 py-[48px]">
      <div className="max-w-[1253px] mx-auto px-8">
        <div className="flex items-center justify-between">
          {/*--------------------------------------------------------------------------*/}
          {/* Logo */}
          {/*--------------------------------------------------------------------------*/}

          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero", "Home")}
          >
            <span
              className="font-extrabold bg-clip-text text-transparent"
              style={{
                fontSize: "34.06px",
                lineHeight: "1.095",
                background: "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              pizzashop
            </span>
          </div>
          {/*--------------------------------------------------------------------------*/}
          {/* Desktop Navigation */}
          {/*--------------------------------------------------------------------------*/}

          <nav className="hidden lg:flex items-center gap-[80px]">
            {[
              { name: "Home", id: "hero" },
              { name: "Menu", id: "menu" },
              { name: "Events", id: "events" },
              { name: "About us", id: "aboutus" },
            ].map((item) => (
              <Button
                key={item.name}
                onClick={() => scrollToSection(item.id, item.name)}
                variant="ghost"
                className="relative"
                style={{
                  fontSize: "17.88px",
                  lineHeight: "1.095",
                  color: activeNav === item.name ? "transparent" : "#A3A3A3",
                  background:
                    activeNav === item.name
                      ? "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)"
                      : "none",
                  WebkitBackgroundClip:
                    activeNav === item.name ? "text" : "unset",
                  backgroundClip: activeNav === item.name ? "text" : "unset",
                }}
              >
                {item.name}
                {activeNav === item.name && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 rounded-full"
                    style={{
                      bottom: "-8px",
                      width: "6px",
                      height: "6px",
                      background:
                        "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
                    }}
                  ></div>
                )}
              </Button>
            ))}
          </nav>

          {/*--------------------------------------------------------------------------*/}
          {/* Desktop Login Button & Cart */}
          {/*--------------------------------------------------------------------------*/}

          <div className="hidden lg:flex items-center gap-[26px]">
            <div className="relative">
              <Button
                variant="primary"
                size="md"
                onMouseEnter={() => setShowLoginTooltip(true)}
                onMouseLeave={() => setShowLoginTooltip(false)}
                style={{
                  width: "163px",
                  fontSize: "17.74px",
                  lineHeight: "1.095",
                }}
              >
                Log in
              </Button>
              {showLoginTooltip && (
                <div
                  className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-2 rounded-lg text-sm text-white pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(215deg, #1E0C00 0%, #2A1200 100%)",
                    border: "1px solid #FF6432",
                    boxShadow: "0 4px 12px rgba(255, 100, 50, 0.3)",
                    animation: "fadeIn 0.2s ease-out",
                  }}
                >
                  Login not yet implemented
                  <div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderBottom: "6px solid #FF6432",
                    }}
                  ></div>
                </div>
              )}
            </div>
            <Button
              variant="icon"
              size="md"
              onClick={() => setIsCartOpen(true)}
              className="relative"
              style={{
                width: "40px",
                height: "40px",
              }}
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{
                    background: "#FF0000",
                    fontSize: "11px",
                  }}
                >
                  {totalItems}
                </span>
              )}
            </Button>
          </div>

          {/*--------------------------------------------------------------------------*/}
          {/* Mobile Cart & Menu Buttons */}
          {/*--------------------------------------------------------------------------*/}

          <div className="flex lg:hidden items-center gap-4">
            {/*--------------------------------------------------------------------------*/}
            {/* Mobile Cart Button */}
            {/*--------------------------------------------------------------------------*/}

            <Button
              variant="icon"
              size="md"
              onClick={() => setIsCartOpen(true)}
              className="relative"
              style={{
                width: "40px",
                height: "40px",
              }}
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{
                    background: "#FF0000",
                    fontSize: "11px",
                  }}
                >
                  {totalItems}
                </span>
              )}
            </Button>

            {/*--------------------------------------------------------------------------*/}
            {/* Mobile Menu Button */}
            {/*--------------------------------------------------------------------------*/}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-white"
              style={{ background: "transparent" }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/*--------------------------------------------------------------------------*/}
        {/* Mobile Navigation */}
        {/*--------------------------------------------------------------------------*/}

        {isMenuOpen && (
          <nav className="lg:hidden mt-6 py-4 bg-[#1E0C00] rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              {[
                { name: "Home", id: "hero" },
                { name: "Menu", id: "menu" },
                { name: "Events", id: "events" },
                { name: "About us", id: "aboutus" },
              ].map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id, item.name)}
                  className="text-left"
                  style={{ background: "transparent" }}
                >
                  {item.name}
                </Button>
              ))}
              <div className="relative">
                <Button
                  variant="primary"
                  fullWidth
                  onMouseEnter={() => setShowLoginTooltip(true)}
                  onMouseLeave={() => setShowLoginTooltip(false)}
                  size="md"
                >
                  Log in
                </Button>
                {showLoginTooltip && (
                  <div
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-2 rounded-lg text-sm text-white pointer-events-none z-50"
                    style={{
                      background:
                        "linear-gradient(215deg, #1E0C00 0%, #2A1200 100%)",
                      border: "1px solid #FF6432",
                      boxShadow: "0 4px 12px rgba(255, 100, 50, 0.3)",
                      animation: "fadeIn 0.2s ease-out",
                    }}
                  >
                    Login not yet implemented
                    <div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderBottom: "6px solid #FF6432",
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }
      `}</style>
    </header>
  );
};
