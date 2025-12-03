import React from "react";

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 px-8 relative overflow-hidden">
      {/* Decorative "Events" text - background */}
      <div
        className="absolute left-[90px] top-0 font-script text-[210px] leading-[1.095] pointer-events-none select-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px",
          background:
            "linear-gradient(215deg, rgba(255,101,51,0.37) 0%, rgba(255,167,51,1) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        Events
      </div>
      <div
        className="absolute right-[0px] bottom-[0px] font-script text-[210px] leading-[1.095] pointer-events-none select-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px",
          background:
            "linear-gradient(215deg, rgba(255,101,51,1) 0%, rgba(255,167,51,1) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        Events
      </div>

      <div className="max-w-[1253px] mx-auto relative z-10">
        {/* Section Header - Right aligned */}
        <div className="text-right mb-16">
          <p className="text-[#A3A3A3] text-[19.56px] leading-[1.36] mb-4 max-w-[428px] ml-auto">
            There are regular events in our pizzeria that will allow you to eat
            delicious food for a lower price!
          </p>
          <h2 className="text-[69px] font-extrabold text-white leading-[1.095]">
            Events
          </h2>
        </div>

        {/* Events Grid - Complex layout matching Figma */}
        <div className="relative" style={{ height: "543px" }}>
          {/* Row 1 - Top */}
          <div
            className="flex gap-4 absolute top-0 left-0 right-0"
            style={{ height: "260px" }}
          >
            {/* HOW WE COOKING - spans 2 columns */}
            <div
              className="relative rounded-[30px] overflow-hidden shadow-[0px_4px_29px_rgba(255,78,21,0.05)]"
              style={{ width: "367px", height: "260px" }}
            >
              <img
                src="/images/event-how-we-cooking.png"
                alt="How we cooking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-white text-[25.09px] font-medium leading-[1.085] mb-4 max-w-[171px]">
                  HOW WE COOKING
                </h4>
                <button
                  className="rounded-[32px] text-white text-[15.38px] font-medium hover:shadow-orange-lg transition-all"
                  style={{
                    background:
                      "linear-gradient(215deg, #FF5D29 0%, #FE9C1C 100%)",
                    width: "204px",
                    height: "38px",
                  }}
                >
                  More
                </button>
              </div>
            </div>

            {/* OUR BLOG */}
            <div
              className="relative rounded-[30px] overflow-hidden shadow-[0px_4px_29px_rgba(255,78,21,0.05)]"
              style={{ width: "396px", height: "260px" }}
            >
              <img
                src="/images/event-blog.png"
                alt="Our Blog"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-white text-[25.09px] font-medium leading-[1.085] mb-4">
                  OUR BLOG
                </h4>
                <button
                  className="rounded-[36px] text-white text-[15.38px] font-medium hover:shadow-orange-lg transition-all"
                  style={{
                    background:
                      "linear-gradient(215deg, #FF5D29 0%, #FE9C1C 100%)",
                    width: "204px",
                    height: "38px",
                  }}
                >
                  More
                </button>
              </div>
            </div>

            {/* KITCHEN TOUR */}
            <div
              className="relative rounded-[30px] overflow-hidden"
              style={{ width: "614px", height: "260px" }}
            >
              <img
                src="/images/event-kitchen.png"
                alt="Kitchen Tour"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-white text-[25.09px] font-medium leading-[1.085] mb-4">
                  KITCHEN TOUR
                </h4>
                <button
                  className="rounded-[45px] text-white text-[15.38px] font-medium hover:shadow-orange-lg transition-all"
                  style={{
                    background:
                      "linear-gradient(215deg, #FF5D29 0%, #FE9C1C 100%)",
                    width: "204px",
                    height: "38px",
                  }}
                >
                  More
                </button>
              </div>
            </div>
          </div>

          {/* Row 2 - Bottom */}
          <div
            className="flex gap-4 absolute bottom-0 left-0 right-0"
            style={{ height: "260px" }}
          >
            {/* TWO PIZZA FOR 1 PRICE */}
            <div
              className="relative rounded-[30px] overflow-hidden"
              style={{ width: "614px", height: "260px" }}
            >
              <img
                src="/images/event-2pizza.png"
                alt="Two Pizza for 1 Price"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-white text-[25.09px] font-medium leading-[1.085] mb-4 max-w-[152px]">
                  TWO PIZZA FOR 1 PRICE
                </h4>
                <button
                  className="rounded-[33px] text-white text-[15.38px] font-medium hover:shadow-orange-lg transition-all"
                  style={{
                    background:
                      "linear-gradient(215deg, #FF5D29 0%, #FE9C1C 100%)",
                    width: "204px",
                    height: "38px",
                  }}
                >
                  More
                </button>
              </div>
            </div>

            {/* FREE COFFEE FOR 3 PIZZA */}
            <div
              className="relative rounded-[30px] overflow-hidden"
              style={{ width: "401px", height: "260px" }}
            >
              <img
                src="/images/event-coffee.png"
                alt="Free Coffee for 3 Pizza"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-white text-[25.09px] font-medium leading-[1.085] mb-4 max-w-[168px]">
                  FREE COFFEE FOR 3 PIZZA
                </h4>
                <button
                  className="rounded-[34px] text-white text-[15.38px] font-medium hover:shadow-orange-lg transition-all"
                  style={{
                    background:
                      "linear-gradient(215deg, #FF5D29 0%, #FE9C1C 100%)",
                    width: "204px",
                    height: "38px",
                  }}
                >
                  More
                </button>
              </div>
            </div>

            {/* OUR INSTAGRAM */}
            <div
              className="relative rounded-[30px] overflow-hidden"
              style={{ width: "401px", height: "260px" }}
            >
              <img
                src="/images/event-instagram.png"
                alt="Our Instagram"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-white text-[25.09px] font-medium leading-[1.085] mb-4">
                  OUR INSTAGRAM
                </h4>
                <button
                  className="rounded-[35px] text-white text-[15.38px] font-medium hover:shadow-orange-lg transition-all"
                  style={{
                    background:
                      "linear-gradient(215deg, #FF5D29 0%, #FE9C1C 100%)",
                    width: "204px",
                    height: "38px",
                  }}
                >
                  More
                </button>
              </div>
            </div>

            {/* WHERE ARE YOU CHOOSE US? */}
            <div
              className="relative rounded-[30px] overflow-hidden"
              style={{ width: "401px", height: "260px" }}
            >
              <img
                src="/images/event-choose.png"
                alt="Where are you choose us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-white text-[25.09px] font-medium leading-[1.085] mb-4 max-w-[171px]">
                  WHERE ARE YOU CHOOSE US?
                </h4>
                <button
                  className="rounded-[31px] text-white text-[15.38px] font-medium hover:shadow-orange-lg transition-all"
                  style={{
                    background:
                      "linear-gradient(215deg, #FF5D29 0%, #FE9C1C 100%)",
                    width: "204px",
                    height: "38px",
                  }}
                >
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
