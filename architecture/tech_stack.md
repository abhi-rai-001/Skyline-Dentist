# Technical Stack SOP

## 1. Core Tech
- **Framework**: React 18+ (Vite)
- **Language**: JavaScript (ES6+)
- **Styling**: TailwindCSS (Utility-first, fast development) OR CSS Modules. *Decision: TailwindCSS for speed and consistency.*
- **Routing**: `react-router-dom`
- **Icons**: `lucide-react` (Clean, modern SVG icons).
- **Animations**: `framer-motion` (Professional, smooth layouts).

## 2. Directory Structure
```
/
├── public/
├── src/
│   ├── components/      # Atomic UI (Button, Card, Badge)
│   ├── layout/          # Layout blocks (Navbar, Footer, Hero)
│   ├── pages/           # Page views (Home, Services, Contact)
│   ├── hooks/           # Custom Logic (useScroll, useForm)
│   ├── data/            # JSON content (Source of Truth)
│   ├── App.jsx          # Main Router
│   └── main.jsx         # Entry Point
└── package.json
```

## 3. Component Pattern
Functional Components with Hooks.
```jsx
// src/components/Button.jsx
export const Button = ({ children, variant = "primary", onClick }) => {
  const base = "px-6 py-3 rounded-full font-bold transition-all duration-300";
  const styles = variant === "primary" 
    ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl"
    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50";
  
  return <button className={`${base} ${styles}`} onClick={onClick}>{children}</button>;
};
```

## 4. Deployment
- **Build**: `npm run build` -> `dist/`
- **Target**: Static Hosting (Netlify/Vercel).
