# Design System & Aesthetics Guide

## Visual Identity
The portfolio utilizes a highly modern, **"cyber-premium" aesthetic** characterized by deep dark backgrounds, vibrant cyan/blue accents, and glassmorphism (frosted glass) effects.

## Core Colors
- **Primary Accent**: Cyan (`text-cyan-400`, `bg-cyan-500`, `border-cyan-400/20`)
- **Secondary Accents**: Gradients from Cyan to Blue or Cyan to Teal (`from-cyan-400 to-cyan-600`)
- **Backgrounds**: Dark themes, specifically slate/gray scales (`bg-gray-900`, `#0f172a`) with subtle ambient glows.
- **Glassmorphism Base**: White/10 or Gray-800/30 with `backdrop-blur-sm` and subtle borders.

## UI Components & Patterns
1. **Glass Cards**:
   - Class pattern: `glass rounded-3xl p-6 backdrop-blur-sm border border-cyan-400/20`
   - Used for: Projects, Timeline items, Skill categories (legacy).
2. **Gradients & Glows**:
   - Extensive use of absolute positioned `div` elements with `blur-2xl` or `blur-3xl` to create ambient background lighting (e.g., `bg-cyan-400/5`).
3. **Typography**:
   - Transparent text clips for headings: `bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent`.
4. **Micro-Interactions**:
   - Framer motion is used for hover states (`scale: 1.05`, `y: -8`).
   - Infinite rotation or glowing borders on hover.

## Instructions for AI Modifying UI
- **Always aim to WOW**: Never build plain, standard components. Always integrate them into the existing glassmorphism theme.
- **Don't use generic colors**: Stick to the Cyan/Teal palette unless highlighting a specific technology brand color (e.g., Green for Node.js).
- **Animations**: Add subtle entry animations (`useInView`) to every new section.
