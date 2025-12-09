import React from "react";
import { TYPOGRAPHY } from "../../constants/designTokens";

// Reusable decorative text style
const DECORATIVE_TEXT_STYLE: React.CSSProperties = {
  color: "transparent",
  WebkitTextStroke: "1px",
  background:
    "linear-gradient(215deg, rgba(255,101,51,1) 0%, rgba(255,167,51,1) 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
};

const About: React.FC = () => {
  return (
    <section
      id="aboutus"
      className="py-16 lg:py-24 px-4 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative "About" text - top left */}
      <div
        className="hidden lg:block absolute top-0 left-10 font-script text-[210px] leading-tight pointer-events-none select-none"
        style={DECORATIVE_TEXT_STYLE}
      >
        About
      </div>

      {/* Decorative "About" text - bottom right */}
      <div
        className="hidden lg:block absolute bottom-0 right-0 font-script text-[210px] leading-tight pointer-events-none select-none"
        style={DECORATIVE_TEXT_STYLE}
      >
        About
      </div>

      <div className="max-w-[1343px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="max-w-full lg:max-w-[490px] pt-0 lg:pt-24">
            {/* Section Title */}
            <h2
              className="text-white font-extrabold mb-4 text-center lg:text-left lg:ml-8"
              style={{
                fontSize: TYPOGRAPHY.fontSize.sectionTitle,
                lineHeight: TYPOGRAPHY.lineHeight.default,
              }}
            >
              About us
            </h2>

            {/* Description paragraphs */}
            <p
              className="text-[#A3A3A3] mb-8 text-center lg:text-left max-w-[459px] mx-auto lg:mx-0 lg:ml-8"
              style={{
                fontSize: TYPOGRAPHY.fontSize.eventDescription,
                lineHeight: TYPOGRAPHY.lineHeight.description,
              }}
            >
              In just a couple of years, we have opened 6 outlets in different
              cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the
              future we plan to develop the network in other major cities of
              Russia.
            </p>

            {/* Decorative icons with dashed arrow */}
            <div className="mb-6 h-[189px] relative">
              <img
                src="./images/group-pizza.png"
                alt="Pizza variety illustration"
                className="w-full h-full object-cover"
              />
              {/* Dashed Arrow - positioned to the right of group-pizza */}
              <svg
                width="110"
                height="30"
                viewBox="0 0 110 30"
                fill="none"
                className="hidden lg:block absolute top-1/2 left-full ml-8 -translate-y-1/2 text-white/50"
              >
                {/* Gentle arc that rises then dips */}
                <path
                  d="M10 18 C 30 10, 50 8, 70 18 C 80 23, 88 22, 92 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Arrow head pointing right */}
                <path
                  d="M98 12 L 108 18 L 98 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p
              className="text-[#A3A3A3] text-center lg:text-left max-w-[433px] mx-auto lg:mx-0 lg:ml-8"
              style={{
                fontSize: TYPOGRAPHY.fontSize.eventDescription,
                lineHeight: TYPOGRAPHY.lineHeight.description,
              }}
            >
              The kitchen of each point is at least: 400-500 sq. m. meters,
              hundreds of employees, smoothly performing work in order to
              receive / prepare / form / deliver customer orders on time.
            </p>
          </div>

          {/* Right Content - Pizza Image */}
          <div className="relative">
            {/* Pizza slice decoration - top right */}
            <img
              src="./images/pizza-1.png"
              alt="Decorative pizza slice"
              className="hidden lg:block absolute top-8 -right-12 w-[140px] z-20 pointer-events-none select-none"
            />

            {/* French fries decoration - bottom left */}
            <img
              src="./images/fries.png"
              alt="Decorative french fries"
              className="hidden lg:block absolute -bottom-8 -left-16 w-[140px] z-20 pointer-events-none select-none"
            />

            <div
              className="relative rounded-[34px] overflow-hidden w-full max-w-[541px] h-[400px] lg:h-[567px] mt-8 lg:mt-24"
              style={{
                boxShadow: "-15px 21px 68px rgba(103, 25, 0, 0.23)",
              }}
            >
              <img
                src="./images/about-pizza.jpg"
                alt="Delicious pizza from our kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
