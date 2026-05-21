# Design Principles

## Theme: Permanent Dark Mode
- Primary background: `bg-gray-950`
- Secondary background: `bg-gray-900/50` or glassmorphic `bg-white/10`
- Accent colors: Cyan (`cyan-400`, `cyan-600`)
- Typography: High contrast for readability, using gray-200/300 for text.

## Skills Section Design
- Each skill card should have a clear trigger (button/icon) for hover effects.
- Hover effects should be localized to the specific interactive element (scaling, glow).
- Avoid container-level hover effects that distract from specific interactions.
- Maintain the glassmorphic aesthetic: `backdrop-blur`, subtle borders.
