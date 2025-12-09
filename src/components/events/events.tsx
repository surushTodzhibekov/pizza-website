import { TYPOGRAPHY } from "../../constants/designTokens";
import { EventCard } from "./event-card";

type Event = {
  id: string;
  title: string;
  image: string;
  gridArea: string;
};

const CARD_HEIGHT = 260;

// Single source of truth for all events
const EVENTS: Event[] = [
  {
    id: "cooking",
    title: "HOW WE COOKING",
    image: "./images/how-we-coock.png",
    gridArea: "cooking",
  },
  {
    id: "blog",
    title: "OUR BLOG",
    image: "./images/blog-pizza.jpg",
    gridArea: "blog",
  },
  {
    id: "pizza",
    title: "TWO PIZZA FOR 1 PRICE",
    image: "./images/event-blog.png",
    gridArea: "pizza",
  },
  {
    id: "kitchen",
    title: "KITCHEN TOUR",
    image: "./images/event-kitchen.png",
    gridArea: "kitchen",
  },
  {
    id: "coffee",
    title: "FREE COFFEE FOR 3 PIZZA",
    image: "./images/event-coffee.png",
    gridArea: "coffee",
  },
  {
    id: "instagram",
    title: "OUR INSTAGRAM",
    image: "./images/event-instagram.png",
    gridArea: "instagram",
  },
  {
    id: "choose",
    title: "WHERE ARE YOU CHOOSE US?",
    image: "./images/event-choose.png",
    gridArea: "choose",
  },
];

// Grid template areas definition - single source of truth for layout
const GRID_ROWS = [
  ["cooking", "blog"], // Row 1
  ["pizza", "kitchen"], // Row 2
  ["coffee", "instagram", "choose"], // Row 3
];

// Decoration config by event id
const DECORATIONS: Record<
  string,
  { src: string; className: string; alt: string }
> = {
  pizza: {
    src: "./images/egg-and-bacon.png",
    alt: "Decorative egg and bacon",
    className:
      "hidden lg:block absolute -left-24 -top-4 -translate-y-1/2 w-[150px] z-10 pointer-events-none select-none",
  },
  kitchen: {
    src: "./images/burito.png",
    alt: "Decorative burrito illustration",
    className:
      "hidden  absolute -right-28 top-1/2 -translate-y-1/2 w-[258px] z-10 pointer-events-none select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]",
  },
  coffee: {
    src: "./images/cofee.png",
    alt: "Decorative coffee cup",
    className:
      "hidden lg:block absolute -left-20 -bottom-12 w-[200px] z-10 pointer-events-none select-none",
  },
};

export function Events() {
  const handleEventClick = (eventId: string) => {
    console.log(`Event clicked: ${eventId}`);
    // Add navigation or modal logic here
  };

  // Group events by row using GRID_ROWS definition
  const mobileRows = GRID_ROWS.map((rowIds) =>
    rowIds.map((id) => EVENTS.find((e) => e.gridArea === id)!)
  );

  return (
    <section id="events" className="py-16 lg:py-24 px-4 lg:px-8 relative">
      <div className="max-w-[1380px] mx-auto relative z-10">
        {/* Mobile Header - shown only on small screens */}
        <div className="lg:hidden text-center mb-8">
          <h2
            className="font-extrabold text-white mb-4"
            style={{
              fontSize: TYPOGRAPHY.fontSize.sectionTitle,
              lineHeight: TYPOGRAPHY.lineHeight.default,
            }}
          >
            Events
          </h2>
          <p
            className="text-[#A3A3A3] leading-[1.36] max-w-md mx-auto"
            style={{
              fontSize: TYPOGRAPHY.fontSize.eventDescription,
            }}
          >
            There are regular events in our pizzeria that will allow you to eat
            delicious food for a lower price!
          </p>
        </div>

        {/* Mobile Layout: 3 rows, each horizontally scrollable */}
        <div className="flex flex-col gap-4 lg:hidden">
          {mobileRows.map((rowEvents, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide"
            >
              {rowEvents.map((event) => (
                <div
                  key={event.id}
                  className="relative flex-shrink-0"
                  style={{ width: "280px", height: `${CARD_HEIGHT}px` }}
                >
                  <EventCard
                    title={event.title}
                    image={event.image}
                    width="100%"
                    height="100%"
                    onClick={() => handleEventClick(event.id)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop Layout: 6-column CSS Grid with template areas */}
        <div
          className="hidden lg:grid gap-6"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: `${CARD_HEIGHT}px ${CARD_HEIGHT}px ${CARD_HEIGHT}px`,
            gridTemplateAreas: `
              "${GRID_ROWS[0][0]} ${GRID_ROWS[0][0]} ${GRID_ROWS[0][1]} ${GRID_ROWS[0][1]} header header"
              "${GRID_ROWS[1][0]} ${GRID_ROWS[1][0]} ${GRID_ROWS[1][0]} ${GRID_ROWS[1][1]} ${GRID_ROWS[1][1]} ${GRID_ROWS[1][1]}"
              "${GRID_ROWS[2][0]} ${GRID_ROWS[2][0]} ${GRID_ROWS[2][1]} ${GRID_ROWS[2][1]} ${GRID_ROWS[2][2]} ${GRID_ROWS[2][2]}"
            `,
          }}
        >
          {/* Event Cards */}
          {EVENTS.map((event) => {
            const decoration = DECORATIONS[event.id];
            return (
              <div
                key={event.id}
                className="relative"
                style={{ gridArea: event.gridArea, height: `${CARD_HEIGHT}px` }}
              >
                {decoration && (
                  <img
                    src={decoration.src}
                    alt={decoration.alt}
                    className={decoration.className}
                  />
                )}
                <EventCard
                  title={event.title}
                  image={event.image}
                  width="100%"
                  height="100%"
                  onClick={() => handleEventClick(event.id)}
                />
              </div>
            );
          })}

          {/* Section Header - Desktop only */}
          <div
            className="flex flex-col justify-end mb-8"
            style={{ gridArea: "header" }}
          >
            <h2
              className="font-extrabold text-white text-right mb-4"
              style={{
                fontSize: TYPOGRAPHY.fontSize.sectionTitle,
                lineHeight: TYPOGRAPHY.lineHeight.default,
              }}
            >
              Events
            </h2>
            <p
              className="text-[#A3A3A3] text-end leading-[1.36] ml-auto"
              style={{
                fontSize: TYPOGRAPHY.fontSize.eventDescription,
              }}
            >
              There are regular events in our pizzeria that will allow you to
              eat delicious food for a lower price!
            </p>
          </div>
        </div>

        {/* Watermark */}
        <p className="absolute bottom-0 right-6 text-7xl text-white/5 font-bold select-none pointer-events-none">
          Events
        </p>
      </div>
    </section>
  );
}
