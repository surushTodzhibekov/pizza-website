# Figma Design Implementation Guide

## Design Analysis from Figma

Based on the Figma file "Проект Пицца", here are the exact specifications:

### Color Palette

- **Primary Gradient**: `linear-gradient(215deg, #FF5924 0%, #FFA328 100%)`
- **Background Dark**: `#1E0C00`, `#1F0700`, `#170A00`
- **Text Colors**: White `#FFFFFF`, Secondary `#A3A3A3`, Muted `#515151`

### Typography

- **Main Font**: Muller (400, 500, 700, 800 weights)
- **Script Font**: Alex Brush (for decorative "Pizza" text)
- **Font Sizes**: 17.88px (nav), 25.1px (pizza names), 69.17px (section titles)

### Layout Sections

#### 1. Header

- Logo: "pizzashop" with gradient
- Nav Items: Home, Menu, Events, About us
- Login button with orange gradient
- Shopping cart icon

#### 2. Hero Section (1 Блок)

- Large "Pizza" text in Alex Brush font with gradients
- Headline: "The Fastest Pizza Delivery"
- Description text
- Two buttons: "To order" (filled) and "Pizza-Menu" (outlined)
- Large pizza image on the right
- "Cooking process:" video preview

#### 3. Events Section (2 Блок)

- Title: "Events"
- Event cards with gradients:
  - "TWO PIZZA FOR 1 PRICE"
  - "FREE COFFEE FOR 3 PIZZA"
  - "KITCHEN TOUR"
  - "OUR BLOG"
  - "OUR INSTAGRAM"
  - "WHERE ARE YOU CHOOSE US?"
  - "HOW WE COOKING"

#### 4. Menu Section (3 Блок)

- Title: "Menu"
- Filter buttons: Show All, Meat, Vegetarian, Sea products, Mushroom
- "MOST POPULAR PIZZA" banner
- Pizza cards with:
  - Pizza image
  - Name (Italian, Venecia, Meat, Cheese, etc.)
  - Description
  - Size options: 22, 28, 33 (cm)
  - Price with $ symbol
  - "+ Ingridients" button
  - Quantity controls (+/-)
  - "Order Now" button

#### 5. About Section (4 Блок)

- Title: "About us"
- Two paragraphs of text
- Large pizza image with shadow
- "About" decorative text in script font

#### 6. Footer

- Logo: "pizzashop"
- Four columns:
  - Home (with sub-links)
  - Events (with sub-links)
  - Menu (with sub-links)
  - About Us (with sub-links)
- Phone number with gradient: "+7 (937) 333-55-33"
- Social media icons

### Key Design Elements

- **Border Radius**: 29-34px for cards, 100px for buttons
- **Shadows**: Orange glows `rgba(255, 78, 21, 0.1-0.29)`
- **Gradients**: Consistent orange-to-yellow throughout
- **Background**: Dark brown/black gradient
- **Spacing**: Generous padding, sections well-separated

## Implementation Status

✅ Project structure created
✅ Tailwind configured with exact colors
✅ Fonts configured (Muller, Alex Brush)
✅ Dependencies installed

⏳ Components need to be rebuilt to match Figma exactly

## Next Steps

1. Create Header with exact logo, nav, and buttons
2. Build Hero section with decorative text and layout
3. Implement Events cards with proper gradients
4. Create Menu with pizza cards and filters
5. Build About section with text and image
6. Implement Footer with multi-column layout

## How to Run

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Customization

To match your exact Figma design:

1. Replace placeholder images with actual pizza photos
2. Adjust text content to match Figma layers
3. Fine-tune spacing and sizing as needed
4. Add any additional animations or interactions
