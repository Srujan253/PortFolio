# Technology Stack & Libraries

This document serves as an index of all the libraries, frameworks, and technologies powering this portfolio. Referencing this file allows for immediate understanding of the project's capabilities without needing to scan `package.json` or analyze the entire source tree.

## Core Framework
- **React 18:** The core UI library.
- **Vite:** The build tool and development server, ensuring rapid HMR and optimized production builds.

## Styling & Animations
- **Tailwind CSS:** The primary utility-first CSS framework used for all styling, layout (Bento Grids, Flexbox), and responsive design.
- **Framer Motion (`framer-motion`):** The engine driving all complex animations. Used for staggering entries, layout transitions (e.g., the Projects Case Study modal `layoutId` transitions), spring physics, and scroll-linked animations (`useInView`).
- **Three.js (`three`) & React Three Fiber (`@react-three/fiber`, `@react-three/drei`):** Used specifically for the interactive 3D particle sphere in the Skills section.

## UI Components & Icons
- **React Icons (`react-icons`):** Provides all SVG icons across the site (utilizing `Fa` for FontAwesome and `Si` for SimpleIcons to represent tech stacks).
- **Glassmorphism:** Achieved natively via Tailwind (`backdrop-blur`, `bg-white/10`, `border-white/20`). No external UI component library (like Shadcn or Material UI) is strictly required as all complex components (Modals, Carousels, Tabs) are custom-built utilizing Framer Motion.

## Forms & Utilities
- **EmailJS (`emailjs-com`):** Handles the transmission of contact form data directly from the client-side to an email inbox without requiring a custom backend.
- **React Helmet Async (`react-helmet-async`):** Manages document head tags for SEO, dynamic titles, and meta descriptions.
- **Vercel Analytics & Speed Insights (`@vercel/analytics`, `@vercel/speed-insights`):** Integrated for production performance tracking and user analytics.

## Deployment
- **Hosting:** Vercel (Implied by the presence of Vercel tracking packages and standard Vite configuration).
