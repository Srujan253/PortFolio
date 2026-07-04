import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }) {
  // Lenis configuration for the Lando Norris momentum feel
  const lenisOptions = {
    lerp: 0.08, // The "heaviness" of the scroll (lower is smoother/heavier)
    duration: 1.5,
    smoothWheel: true,
    smoothTouch: false, // Keep native touch scrolling for mobile users
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
