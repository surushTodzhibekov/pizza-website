import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";

export const Footer: React.FC = () => {
  // ---------------------------------------------------------------------------
  // render
  // ---------------------------------------------------------------------------
  return (
    <footer
      className="py-8 lg:py-[70px] px-4 lg:px-8"
      style={{
        background:
          "linear-gradient(223deg, #170A00 4%, #170600 34%, #0F0700 71%, #170A00 100%)",
      }}
    >
      <div className="max-w-[1252px] mx-auto">
        {/*--------------------------------------------------------------------------*/}
        {/* Main Footer Content */}
        {/*--------------------------------------------------------------------------*/}
        <div className="flex flex-col lg:flex-row lg:gap-[84px] mb-8">
          {/*--------------------------------------------------------------------------*/}
          {/* Logo */}
          {/*--------------------------------------------------------------------------*/}

          <div className="mb-6 lg:mb-0">
            <h3
              className="font-extrabold bg-clip-text text-transparent"
              style={{
                fontSize: "29.85px",
                lineHeight: "1.095",
                background: "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              pizzashop
            </h3>
          </div>

          {/*--------------------------------------------------------------------------*/}
          {/* Navigation Columns */}
          {/*--------------------------------------------------------------------------*/}

          <div className="grid grid-cols-2 lg:flex lg:gap-[84px] gap-6 mb-8 lg:mb-0">
            {/*--------------------------------------------------------------------------*/}
            {/* Home Column */}
            {/*--------------------------------------------------------------------------*/}

            <div>
              <h4
                className="text-[#A3A3A3] mb-[22px]"
                style={{
                  fontSize: "19.63px",
                  lineHeight: "1.257",
                  letterSpacing: "-2%",
                }}
              >
                Home
              </h4>
              <ul className="space-y-[12px]">
                <li>
                  <a
                    href="#events"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutus"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    To Order
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    Menu
                  </a>
                </li>
              </ul>
            </div>

            {/*--------------------------------------------------------------------------*/}
            {/* Events Column */}
            {/*--------------------------------------------------------------------------*/}

            <div>
              <h4
                className="text-[#A3A3A3] mb-[22px]"
                style={{
                  fontSize: "19.63px",
                  lineHeight: "1.257",
                  letterSpacing: "-2%",
                }}
              >
                Events
              </h4>
              <ul className="space-y-[12px]">
                <li>
                  <a
                    href="#events"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    Kitchen Tour
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    3 Pizza 1 Free Coffee
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    2 Pizza for 1 Price
                  </a>
                </li>
              </ul>
            </div>

            {/*--------------------------------------------------------------------------*/}
            {/* Menu Column */}
            {/*--------------------------------------------------------------------------*/}

            <div>
              <h4
                className="text-[#A3A3A3] mb-[22px]"
                style={{
                  fontSize: "19.63px",
                  lineHeight: "1.257",
                  letterSpacing: "-2%",
                }}
              >
                Menu
              </h4>
              <ul className="space-y-[12px]">
                <li>
                  <a
                    href="#menu"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    Show All
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    Seaproducts
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    Vegan
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    Meat
                  </a>
                </li>
              </ul>
            </div>

            {/*--------------------------------------------------------------------------*/}
            {/* About Us Column */}
            {/*--------------------------------------------------------------------------*/}

            <div>
              <h4
                className="text-[#A3A3A3] mb-[22px]"
                style={{
                  fontSize: "19.63px",
                  lineHeight: "1.257",
                  letterSpacing: "-2%",
                }}
              >
                About Us
              </h4>
              <ul className="space-y-[12px]">
                <li>
                  <a
                    href="#aboutus"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    Our History
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutus"
                    className="text-[#515151] hover:text-primary transition-colors"
                    style={{
                      fontSize: "17.72px",
                      lineHeight: "1.257",
                      letterSpacing: "-2%",
                    }}
                  >
                    Why We?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*--------------------------------------------------------------------------*/}
        {/* Footer Bottom: Contact & Socials */}
        {/*--------------------------------------------------------------------------*/}

        <div className="flex flex-row justify-between items-center gap-2 lg:gap-0 mt-[94px]">
          {/*--------------------------------------------------------------------------*/}
          {/* Phone Contact */}
          {/*--------------------------------------------------------------------------*/}

          <div className="flex items-center gap-3">
            <a
              href="tel:+79373335533"
              className="bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              style={{
                fontSize: "20.88px",
                lineHeight: "1.257",
                letterSpacing: "-2%",
                background: "linear-gradient(215deg, #FF612E 0%, #FFA32B 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              +7 (937) 333-55-33
            </a>
          </div>

          {/*--------------------------------------------------------------------------*/}
          {/* Social Media Icons */}
          {/*--------------------------------------------------------------------------*/}

          <div className="flex gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram
                size={28}
                strokeWidth={1.5}
                style={{
                  stroke: "#FF6129",
                }}
              />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <Twitter
                size={28}
                strokeWidth={1.5}
                style={{
                  stroke: "#FF612E",
                }}
              />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook
                size={28}
                strokeWidth={1.5}
                style={{
                  stroke: "#FF6129",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
