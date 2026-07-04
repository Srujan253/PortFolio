import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }) {
  // Lenis configuration for the Lando Norris momentum feel
  const lenisOptions = {
    lerp: 0.12, // Increased from 0.08 for a much lighter, snappier feel without heavy delay
    smoothWheel: true,
    smoothTouch: false,
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
