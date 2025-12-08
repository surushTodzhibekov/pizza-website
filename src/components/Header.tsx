import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export const Header: React.FC = () => {
  // ---------------------------------------------------------------------------
  // variables & hooks
  // ---------------------------------------------------------------------------
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

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
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50 py-[48px]">
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
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id, item.name)}
                className="relative transition-colors"
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
              </button>
            ))}
          </nav>

          {/*--------------------------------------------------------------------------*/}
          {/* Desktop Login Button & Cart */}
          {/*--------------------------------------------------------------------------*/}

          <div className="hidden lg:flex items-center gap-[26px]">
            <button
              className="rounded-full text-white font-medium hover:shadow-orange-lg transition-all"
              style={{
                width: "163px",
                height: "40px",
                background: "linear-gradient(215deg, #FF5D29 0%, #FE9C1C 100%)",
                fontSize: "17.74px",
                lineHeight: "1.095",
              }}
            >
              Log in
            </button>
            <button
              className="rounded-full flex items-center justify-center hover:shadow-orange transition-all"
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
              }}
            >
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>

          {/*--------------------------------------------------------------------------*/}
          {/* Mobile Cart & Menu Buttons */}
          {/*--------------------------------------------------------------------------*/}

          <div className="flex lg:hidden items-center gap-4">
            {/*--------------------------------------------------------------------------*/}
            {/* Mobile Cart Button */}
            {/*--------------------------------------------------------------------------*/}

            <button
              className="rounded-full flex items-center justify-center hover:shadow-orange transition-all"
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
              }}
            >
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>

            {/*--------------------------------------------------------------------------*/}
            {/* Mobile Menu Button */}
            {/*--------------------------------------------------------------------------*/}

            <button
              className="p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
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
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id, item.name)}
                  className="text-[#A3A3A3] hover:text-primary transition-colors font-normal text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                className="px-6 py-2.5 rounded-full text-white font-medium w-full"
                style={{
                  background:
                    "linear-gradient(215deg, #FF5D29 0%, #FE9C1C 100%)",
                }}
              >
                Log in
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
