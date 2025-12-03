import React from "react";

const About: React.FC = () => {
  return (
    <section id="aboutus" className="py-24 px-8 relative overflow-hidden">
      {/* Decorative "About" text - top left */}
      <div
        className="absolute top-0 left-[39px] font-script text-[210px] leading-[1.095] pointer-events-none select-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px",
          background:
            "linear-gradient(215deg, rgba(255,101,51,1) 0%, rgba(255,167,51,1) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        About
      </div>
      {/* Decorative "About" text - bottom right */}
      <div
        className="absolute bottom-0 right-[0px] font-script text-[210px] leading-[1.095] pointer-events-none select-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px",
          background:
            "linear-gradient(215deg, rgba(255,101,51,1) 0%, rgba(255,167,51,1) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        About
      </div>

      <div className="max-w-[1343px] mx-auto relative z-10">
        <div className="flex items-start gap-12">
          {/* Left Content */}
          <div style={{ width: "490px", paddingTop: "99px" }}>
            {/* Section Title */}
            <h2
              className="text-white font-extrabold mb-4"
              style={{
                fontSize: "69px",
                lineHeight: "1.095",
                marginLeft: "30px",
              }}
            >
              About us
            </h2>

            {/* Description paragraphs */}
            <p
              className="text-[#A3A3A3] mb-8"
              style={{
                fontSize: "19.56px",
                lineHeight: "1.36",
                width: "459px",
                marginLeft: "31px",
                marginTop: "14px",
              }}
            >
              In just a couple of years, we have opened 6 outlets in different
              cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the
              future we plan to develop the network in other major cities of
              Russia.
            </p>

            {/* Decorative icons area would go here */}
            <div style={{ height: "189px" }}></div>

            <p
              className="text-[#A3A3A3]"
              style={{
                fontSize: "19.56px",
                lineHeight: "1.36",
                width: "433px",
                marginLeft: "30px",
              }}
            >
              The kitchen of each point is at least: 400-500 sq. m. meters,
              hundreds of employees, smoothly performing work in order to
              receive / prepare / form / deliver customer orders on time.
            </p>
          </div>

          {/* Right Content - Pizza Image */}
          <div
            className="relative rounded-[34px] overflow-hidden"
            style={{
              width: "541px",
              height: "567px",
              marginTop: "99px",
              boxShadow: "-15px 21px 68px rgba(103, 25, 0, 0.23)",
            }}
          >
            <img
              src="/images/about-pizza.png"
              alt="About Pizza"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
