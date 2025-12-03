# Pizza Palace Website

A modern, responsive pizza restaurant website built with React, TypeScript, and Tailwind CSS.

## Features

- 🍕 Modern and responsive design
- ⚡ Built with Vite for fast development
- 🎨 Styled with Tailwind CSS
- 📱 Mobile-first approach
- 🔒 Type-safe with TypeScript
- 🎯 Clean component architecture

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
pizza-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Menu.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### To match your Figma design:

1. **Colors**: Update the color scheme in `tailwind.config.js`
2. **Fonts**: Add custom fonts in `index.html` and update `tailwind.config.js`
3. **Images**: Replace placeholder images with your actual images
4. **Content**: Update text content in each component
5. **Layout**: Adjust spacing, sizing, and layout in component files

### Color Customization

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#FF6B35', // Your primary color
        dark: '#E5552E',
        light: '#FF8C5C',
      },
      secondary: {
        DEFAULT: '#FFD23F', // Your secondary color
        dark: '#E6BD38',
        light: '#FFE066',
      },
    },
  },
}
```

## Components

### Header

- Sticky navigation bar
- Mobile responsive menu
- Smooth scroll to sections

### Hero

- Eye-catching banner
- Call-to-action buttons
- Feature highlights

### Menu

- Pizza catalog with filtering
- Category-based navigation
- Add to cart functionality

### About

- Company story
- Statistics and achievements
- Image gallery

### Contact

- Contact form
- Location information
- Business hours

### Footer

- Site navigation
- Social media links
- Contact information

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

You can deploy this website to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues and questions, please open an issue in the repository.

---

Made with ❤️ for pizza lovers
