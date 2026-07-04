# Skills Brainstorm & 3D Guide

## Current Implementation: 3D Skill Constellation
The `Skills.jsx` component has been upgraded from 2D static cards to a **3D Interactive Skill Constellation** using React Three Fiber (`@react-three/fiber` and `@react-three/drei`).
- **How it works**: Skills are projected onto a spherical vector field. The globe rotates slowly and can be dragged/panned by the user. On hover, skill text changes color.

## Brainstorming Future Enhancements
If the user requests further innovation in the Skills section or overall interactivity, consider these concepts:

1. **Node Connections (Constellation Lines)**:
   - Use `THREE.LineBasicMaterial` to draw connecting lines between related skills (e.g., connecting React -> Node -> MongoDB).
2. **Particle Physics**:
   - Introduce `@react-three/cannon` to make the skills bump into each other in a zero-gravity container instead of a strict sphere.
3. **Skill Details Modal on Click**:
   - Clicking a 3D word could trigger a Framer Motion overlay (HTML context) that details the projects where that skill was used. (e.g. clicking "PostgreSQL" shows "Used in Club MODX").
4. **Shader Backgrounds**:
   - Write a custom GLSL shader for the `<Canvas>` background to simulate a nebula or data stream.

## AI Instructions
When editing the 3D skills:
- Remember that `three` objects cannot render regular HTML `<div>` tags directly. Use `<Html>` from `@react-three/drei` if DOM elements need to overlay the 3D space.
- Keep performance in mind. Do not over-saturate the canvas with high-poly geometries. Text is already relatively expensive.
