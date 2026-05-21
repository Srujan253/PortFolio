# Codebase Architecture Guide

## Project Overview
This is a modern personal portfolio web application for Srujan H M. It is built using the **MERN stack ecosystem** with a focus on Frontend excellence using **React and Vite**. 

## Technology Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + PostCSS + Framer Motion for animations
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Icons**: react-icons
- **Routing**: React Router (if applicable) or single-page anchor scrolling.
- **Package Manager**: pnpm

## Directory Structure
- `/src/components/`: Contains all the modular UI sections.
  - `Hero.jsx`: The landing view.
  - `Navbar.jsx`: Navigation menu.
  - `Projects.jsx`: Showcases featured projects (Club MODX, Privacy ID Verification, GupShup).
  - `Skills.jsx`: Interactive 3D skill constellation using React Three Fiber.
  - `Timeline.jsx`: Experience and education timeline.
  - `Certifications.jsx`: Displays certificates and achievements.
  - `Contact.jsx`: Contact form / links.
  - `Footer.jsx`: Bottom branding and links.
- `/src/App.jsx`: Main assembly of components.
- `/src/main.jsx`: Application entry point.
- `/src/index.css`: Global styles, Tailwind directives, and custom CSS variables.
- `/public/` & `/src/photo/`: Static assets and images.

## Key Principles for AI Assistants
1. **Never Break the 3D Setup**: When modifying `Skills.jsx`, ensure the React Three Fiber `<Canvas>` context is preserved.
2. **Animation Consistency**: We use Framer Motion heavily for scroll animations (`whileInView`, `initial`, `animate`). Maintain this standard across new components.
3. **Styling Rules**: Prefer Tailwind utility classes. Avoid inline styles unless absolutely necessary for dynamic calculations. Use the established `cyan` and dark mode color scheme.
