import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="py-[70px] px-8"
      style={{
        background:
          "linear-gradient(223deg, #170A00 4%, #170600 34%, #0F0700 71%, #170A00 100%)",
      }}
    >
      <div className="max-w-[1252px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex justify-between mb-[34px]">
          {/* Logo */}
          <div>
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

          {/* Navigation Columns */}
          <div className="flex gap-[84px]">
            {/* Home Column */}
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

            {/* Events Column */}
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

            {/* Menu Column */}
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

            {/* About Us Column */}
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

        {/* Phone Contact */}
        <div className="flex items-center gap-3">
          {/* Phone Icon */}
          <div className="flex items-center gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="phoneGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FF6129" />
                  <stop offset="100%" stopColor="#FFA32B" />
                </linearGradient>
              </defs>
              <path
                d="M29.5 22.8v4.2a2.8 2.8 0 01-3.05 2.8A27.72 27.72 0 012.2 5.55 2.8 2.8 0 015 2.5h4.2a2.8 2.8 0 012.8 2.41 18 18 0 00.98 3.93 2.8 2.8 0 01-.63 2.96l-1.78 1.78a22.4 22.4 0 009.86 9.86l1.78-1.78a2.8 2.8 0 012.96-.63 18 18 0 003.93.98 2.8 2.8 0 012.4 2.84z"
                stroke="url(#phoneGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
      </div>
    </footer>
  );
};

export default Footer;
