import React from "react";

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-[130px] pb-16 px-8 relative overflow-hidden"
    >
      <div className="max-w-[1367px] mx-auto relative z-10">
        <div className="relative grid grid-cols-2 gap-12 items-start pt-[50px]">
          {/* Left Content Column */}
          <div className="flex flex-col">
            {/* Main Title with Lightning Icon - Group 66 */}
            <div className="mb-[30px]">
              <h1
                className="font-extrabold text-white leading-[1.095] inline-block"
                style={{ fontSize: "69.17px" }}
              >
                The Fastest Pizza Delivery
              </h1>
            </div>

            {/* Description */}
            <p
              className="text-[#A3A3A3] leading-[1.51] mb-12 max-w-[450px]"
              style={{
                fontSize: "19.56px",
              }}
            >
              We will deliver juicy pizza for your family in 30 minutes, if the
              courier is late - pizza is free!
            </p>

            {/* Video Preview Card - Group 14 */}
            <div className="relative mb-12" style={{ width: "280px" }}>
              {/* Cooking process label */}
              <span
                className="text-[#A3A3A3] block mb-4"
                style={{ fontSize: "19.56px", lineHeight: "1.36" }}
              >
                Cooking process:
              </span>

              {/* Video thumbnail */}
              <div
                className="relative rounded-[23px] overflow-hidden shadow-[0px_4px_29px_rgba(255,78,21,0.1)]"
                style={{ width: "280px", height: "180px" }}
              >
                <img
                  src="/images/cooking-process.png"
                  alt="Cooking process"
                  className="w-full h-full object-cover"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-[81px] h-[81px] rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(215deg, rgba(29,8,0,1) 0%, rgba(29,8,0,1) 100%)",
                      border: "3px solid transparent",
                      backgroundImage:
                        "linear-gradient(rgba(29,8,0,1), rgba(29,8,0,1)), linear-gradient(215deg, #FF5924 0%, #FFA229 100%)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      boxShadow:
                        "0px 4.63px 33.56px rgba(0,0,0,1), 0px 4px 24px rgba(255,61,0,0.67)",
                    }}
                  >
                    {/* Play triangle SVG */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <defs>
                        <linearGradient
                          id="playGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FF6432" />
                          <stop offset="100%" stopColor="#FFA228" />
                        </linearGradient>
                      </defs>
                      <path d="M3 1L17 10L3 19V1Z" fill="url(#playGradient)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Group 1 */}
            <div className="flex items-center gap-[-40px]">
              {/* To order button */}
              <button
                onClick={scrollToMenu}
                className="rounded-full text-white font-medium hover:shadow-lg transition-all z-10"
                style={{
                  width: "230px",
                  height: "62px",
                  background:
                    "linear-gradient(214deg, #FE9C1C 0%, #FF5E2A 100%)",
                  fontSize: "22.44px",
                  lineHeight: "1.235",
                  fontWeight: "500",
                  boxShadow: "0px 7px 33px rgba(255,107,0,0.06)",
                }}
              >
                To order
              </button>

              {/* Pizza-Menu button */}
              <button
                onClick={scrollToMenu}
                className="rounded-full font-medium hover:opacity-90 transition-all"
                style={{
                  width: "232px",
                  height: "62px",
                  marginLeft: "-50px",
                  background: "transparent",
                  border: "2px solid transparent",
                  backgroundImage:
                    "linear-gradient(#210A01, #210A01), linear-gradient(207deg, #FFA631 0%, #FF6939 100%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  fontSize: "18.81px",
                  lineHeight: "1.235",
                  fontWeight: "500",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Pizza-Menu
                </span>
              </button>
            </div>
          </div>

          {/* Right Content Column - Main Pizza Image */}
          <div className="flex flex-col items-center justify-start relative">
            {/* <div
              className="rounded-[46px] overflow-hidden w-full"
              style={{
                aspectRatio: "456/684",
                boxShadow: "0px 4px 33px rgba(255,78,21,0.29)",
              }}
            > */}
            {/* Decorative Fries - bottom left */}
            <div
              className="absolute -top-6 -right-4 pointer-events-none"
              style={{
                width: "140px",
                height: "160px",
                zIndex: 20,
              }}
            >
              <img
                src="/images/pizza-1.png"
                alt=""
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0px 4px 15px rgba(0,0,0,0.3))",
                }}
              />
            </div>
            <img
              src="/images/hero-pizza.png"
              alt="Delicious Pizza"
              className="object-cover rounded-[46px]"
              style={{
                width: "456px",
                height: "684px",
              }}
            />
            {/* Decorative Fries - bottom left edge */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "140px",
                height: "160px",
                bottom: "-10px",
                left: "40px",
                zIndex: 20,
              }}
            >
              <img
                src="/images/fries.png"
                alt=""
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0px 4px 15px rgba(0,0,0,0.3))",
                }}
              />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
