# DGRP Baysound Record Label Website - Design Guidelines

## Design Approach: Reference-Based Luxury Creative Industry

**Selected References:** High-end creative agencies and luxury music platforms (e.g., Spotify for Artists premium sections, Interscope Records, creative agency portfolios)

**Core Principle:** Sophisticated minimalism with strategic gold accents - convey exclusivity, artistic credibility, and professional excellence in the music industry.

---

## Color Palette

### Dark Mode (Primary Theme)
- **Background:** 10 2% 4% (rich black #0a0a0a)
- **Surface/Cards:** 0 0% 10% (#1a1a1a) 
- **Borders:** 0 0% 16% (#2a2a2a)
- **Text Primary:** 0 0% 96% (#f4f4f4)
- **Text Secondary:** 0 0% 53% (#888)
- **Primary Accent:** 36 39% 62% (warm gold #c6a679)
- **Accent Hover:** 36 47% 70% (lighter gold #d4b99a)

### Gradient Applications
- Hero background: Radial gradient with subtle gold glow at top (10% opacity)
- Image overlays: Linear gradient to black (90% opacity at bottom)

---

## Typography

### Font Families (Google Fonts CDN)
```
Playfair Display: weights 600, 700 - Serif headings for elegance
Inter: weights 400, 600 - Sans-serif body for readability
```

### Type Scale
- **H1 (Hero):** clamp(3rem, 8vw, 6rem) / line-height 1.1
- **H2 (Section):** clamp(2rem, 6vw, 3.5rem) / margin-bottom 2rem
- **H3 (Cards):** clamp(1.2rem, 3vw, 1.5rem)
- **Body Large:** 1.2rem (manifesto, CTAs)
- **Body Standard:** 1rem / line-height 1.6
- **Body Small:** 0.875rem (footer, metadata)

### Content Width
- Optimal reading: max-width 70ch for paragraphs
- Section max-width: 1400px centered

---

## Layout System

### Spacing Primitives (Tailwind Units)
- **Micro spacing:** 2, 4 (gaps, padding)
- **Standard spacing:** 8, 12, 16 (component padding)
- **Section spacing:** 20, 24, 32 (vertical rhythm)
- **Large spacing:** 40, 48, 64 (section separations)

### Grid Patterns
- **Stats Grid:** auto-fit minmax(250px, 1fr) / gap-8
- **Roster Grid:** auto-fit minmax(300px, 1fr) / gap-8
- **Strategy Grid:** auto-fit minmax(300px, 1fr) / gap-8

### Viewport Strategy
- Hero: 100vh immersive experience
- Content sections: py-24 to py-32 natural flow
- Section borders: 1px bottom border (except last)

---

## Component Library

### Header Navigation
- Fixed position with transparent background initially
- Scrolled state: backdrop-blur + rgba(10,10,10,0.7) background
- Logo: Playfair Display 1.5rem
- Nav links: Inter 600 weight, gold underline animation on hover (width 0 to 100%)

### Hero Section
- Full viewport height, centered content
- Scroll indicator: Animated line at bottom center (2px width, 50px height, scaleY animation)

### Content Cards
- Background: var(--card-background) #1a1a1a
- Border: 1px solid #2a2a2a
- Border-radius: 12px
- Padding: 2rem to 2.5rem
- Hover: translateY(-10px) with subtle shadow

### Artist Roster Cards
- Min-height: 400px
- Image: object-fit cover, scale(1.05) on hover
- Overlay: Linear gradient bottom, padding 3rem 1.5rem 1.5rem
- Overlay animation: translateY(20%) to 0 on hover

### CTA Button
- Background: Gold accent color
- Text: Dark background color for contrast
- Padding: 1rem 2.5rem
- Border-radius: 50px (pill shape)
- Text: Uppercase, letter-spacing 1px, font-weight 600
- Hover: Lighter gold + translateY(-3px)

### Stats Display
- Large numbers: 3rem Playfair Display in gold
- Description text: Standard body below numbers

---

## Animations & Interactions

**Minimize Distractions:** Use sparingly and purposefully

### Implemented Animations
1. **Scroll indicator:** Continuous scaleY animation (2s loop)
2. **Fade-in on scroll:** opacity 0→1, translateY(30px)→0, 0.8s ease-out
3. **Header blur:** 0.4s ease transition on scroll
4. **Nav underline:** Width animation 0.3s ease
5. **Image hover:** Scale 1.05, 0.4s ease
6. **Card hover:** translateY(-10px), 0.3s ease
7. **Button hover:** translateY(-3px), background color shift

---

## Images Strategy

### Hero Section
- No background image - use gradient and typographic focus
- Scroll indicator provides visual interest

### Artist Roster
- Professional artist photography required for each roster card (600x750 aspect)
- High-quality, properly lit portraits showing artist personality
- Consistent color grading across all roster images

### Founder Section
- Professional headshot or artistic portrait (landscape orientation)
- Positioned in flex layout alongside bio text
- Border-radius 12px for sophistication

### Placeholder Strategy
- Use placehold.co with dark theme (#1A1A1A background, #F4F4F4 text)
- Include artist name in placeholder for context

---

## Responsive Behavior

### Breakpoints
- **Mobile (<768px):** 
  - Hide navigation (hamburger menu consideration)
  - Single column grids
  - Centered text alignment
  - Reduced padding (5% horizontal)
  
- **Desktop (≥768px):**
  - Multi-column grids active
  - Full navigation visible
  - Asymmetric layouts (founder section)

### Mobile Optimizations
- Clamp() functions maintain readability
- Grid auto-fit ensures proper stacking
- Touch-friendly 44px minimum tap targets
- Reduced motion considerations for animations

---

## Content Sections Architecture

1. **Fixed Header:** Logo + Navigation links
2. **Hero:** Fullscreen tagline + scroll indicator
3. **Mission/Manifesto:** Centered text + 3-column stats grid
4. **Artist Roster:** Multi-column image cards with overlays
5. **Founder/Visionary:** Two-column flex layout (image + bio)
6. **Strategy:** Centered intro + 3-column service cards
7. **Contact/Invest:** Centered CTA with card background
8. **Footer:** Minimal copyright text, muted color

**Section Borders:** Each content section has 1px bottom border (var(--border-color)) except the last section, creating visual rhythm while maintaining separation.