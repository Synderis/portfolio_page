# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Dylan Tocci - Portfolio Website

A modern, minimalist portfolio website built with React, TypeScript, and Vite. Features a sleek black, grey, and gradient color scheme with smooth animations and responsive design.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with professional typography
- **Responsive Layout**: Mobile-first approach with proper breakpoints
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Interactive Effects**: Floating particles, hover effects, and scroll animations
- **Performance Optimized**: Lazy loading, WebP images, and optimized bundle
- **Accessibility**: Semantic HTML, proper ARIA labels, and keyboard navigation
- **SEO Ready**: Meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with custom properties (CSS Variables)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins from Google Fonts

## 📱 Sections

1. **Hero Section**: Introduction with portrait and call-to-action
2. **Tech Stack**: Skills showcase with interactive cards
3. **Experience**: Professional background and education
4. **Projects**: Featured projects with filtering and links

## 🎨 Design System

### Colors
- **Primary**: Deep black (#000000)
- **Secondary**: Charcoal (#1a1a1a)
- **Accent**: Slate gray (#374151)
- **Text**: Dynamic based on theme
- **Gradients**: Custom black-to-gray combinations

### Typography
- **Primary Font**: Inter (300-700 weights)
- **Secondary Font**: Poppins (300-700 weights)
- **Responsive**: Clamp functions for fluid scaling

### Animations
- **Scroll Animations**: Intersection Observer API
- **Hover Effects**: Transform and shadow transitions
- **Loading States**: Skeleton screens and fade-ins
- **Micro-interactions**: Button clicks and form feedback

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio_v2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with theme toggle
│   ├── Hero.tsx        # Hero section with intro
│   ├── TechStack.tsx   # Skills and technologies
│   ├── Experience.tsx  # Work experience and education
│   ├── Projects.tsx    # Featured projects showcase
│   ├── Footer.tsx      # Footer with links
│   ├── ParticleBackground.tsx  # Animated background
│   └── ScrollProgress.tsx      # Scroll progress indicator
├── data/               # Static data and content
│   └── portfolioData.ts # Personal information and project data
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and design system
```

## 🎯 Performance Features

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Images and components loaded on demand
- **Tree Shaking**: Unused code elimination
- **Bundle Analysis**: Built-in Vite analyzer

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

Built with ❤️ using React, TypeScript, and modern web technologies.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
