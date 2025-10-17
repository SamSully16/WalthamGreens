# Design Guidelines: US Landscaping & Construction Website

## Design Approach
**Reference-Based Approach** drawing inspiration from professional service websites like Thumbtack, HomeAdvisor, and modern landscaping portfolio sites. Focus on trust-building, visual appeal, and clear service presentation while maintaining professional credibility.

## Core Design Elements

### A. Color Palette

**Light Mode (Primary):**
- Primary Green: 142 65% 35% (deep forest green - trust & nature)
- Secondary Green: 142 45% 92% (soft sage background)
- Accent Earth: 30 25% 45% (warm brown for CTAs)
- Neutral Light: 0 0% 98% (off-white backgrounds)
- Neutral Gray: 210 10% 60% (text secondary)
- Text Primary: 210 15% 20% (dark slate)

**Dark Mode (Subtle):**
- Background: 142 15% 12% (deep forest background)
- Surface: 142 10% 18% (card backgrounds)
- Primary Accent: 142 55% 55% (brighter green)
- Text: 0 0% 95% (near white)

### B. Typography

**Font Stack:**
- Headings: "Inter" or "Poppins" (600-700 weight) - clean, professional, modern
- Body: "Inter" or "Open Sans" (400 regular, 500 medium) - excellent readability
- Accents: Same as headings at 800 weight for hero tagline

**Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl
- Section Headers: text-3xl md:text-4xl
- Subsections: text-xl md:text-2xl
- Body: text-base md:text-lg
- Small: text-sm

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, py-16, mb-24)

**Container Strategy:**
- Max width: max-w-7xl for main content
- Section padding: py-16 md:py-24 lg:py-32
- Horizontal padding: px-6 md:px-8 lg:px-12
- Grid gaps: gap-6 md:gap-8 lg:gap-12

### D. Component Library

**Navigation:**
- Sticky header with backdrop-blur-md, subtle shadow on scroll
- Logo/company name on left (text-2xl font-bold)
- Desktop: horizontal nav links with hover underline animation
- Mobile: hamburger menu with slide-in drawer
- CTA button in nav: "Get Free Estimate" (accent color, rounded-lg)

**Hero Section (100vh):**
- Full-width background image with overlay (dark gradient from transparent to black/50 from top to bottom)
- Centered content: Company tagline + subtitle + dual CTAs
- Primary CTA: Large button with accent color, shadow-lg
- Secondary CTA: Outline button with backdrop-blur background
- Scroll indicator at bottom (animated chevron down)

**Service Cards:**
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Each card: White background, rounded-2xl, p-8, shadow-sm, hover:shadow-xl transition
- Icon at top (4rem size, primary green color)
- Service title (text-xl font-semibold)
- Brief description (text-gray-600, 2-3 lines)
- Subtle border on hover

**Contact Form:**
- Two-column layout on desktop: Form (60%) | Contact info (40%)
- Form inputs: Rounded-lg, border-2, focus:border-primary, p-4
- Labels: font-medium, text-sm, mb-2
- Submit button: Full-width on mobile, w-auto on desktop, accent color
- Contact info cards with icons (phone, email, location)

**Footer:**
- Dark background (neutral-900 or primary dark green)
- Three-column layout: Company info | Quick links | Social
- Social icons: Circular, hover:scale effect, primary green on hover
- Copyright centered below columns

### E. Visual Elements

**Images:**
- **Hero:** Large, high-impact image of completed landscaping project (lush garden, stone pathway, or outdoor living space). Image should convey quality craftsmanship. Overlay gradient: from transparent to black/60
- **About Section:** Side-by-side image of team working or completed project (optional background image)
- **Services Section:** Consider subtle background pattern or texture (leafy pattern at low opacity)
- **Testimonials (if added):** Small circular customer photos

**Icons:**
- Use Heroicons (outline style) via CDN
- Service icons: 4rem size within colored circular backgrounds (primary green/10 opacity)
- Contact icons: 1.5rem size, inline with text
- Social icons: 2rem size in footer

**Interactions:**
- Smooth scroll behavior: scroll-behavior: smooth
- Navigation links: Underline slide-in effect on hover (border-b-2 transition)
- Service cards: Subtle lift on hover (transform translateY(-4px))
- Buttons: Scale slightly on hover (scale-105), shadow increase
- Form inputs: Border color change + subtle shadow on focus
- NO complex animations - keep it professional and fast

### F. Responsive Breakpoints

- Mobile-first approach
- sm: 640px (adjust typography, single column)
- md: 768px (2-column service grid, split contact section)
- lg: 1024px (4-column services, full header nav)
- xl: 1280px (max content width, larger typography)

## Section-Specific Guidelines

**Header:** Transparent on hero, solid white with shadow after scroll. Height: h-20 md:h-24

**Hero:** Bold headline emphasizing reliability and local service. Tagline should feel personal ("Your Waltham landscaping experts since [year]" or similar). Background image: Professional landscape or construction work.

**About:** 2-column layout on desktop (text + image). Keep to 3-4 sentences max. Include trust indicators (years in business, projects completed).

**Services:** Equal height cards in grid. Each service gets distinct icon but consistent styling. Brief descriptions (15-20 words each).

**Contact:** Prominent phone number (text-3xl). Form fields: Name, Email, Phone, Service Interest (dropdown), Message. Address with embedded map consideration.

**Footer:** Social links (Facebook, Instagram as placeholders). Quick links to sections. Copyright with company name.

## Key Principles

1. **Trust First:** Clean, professional design builds credibility
2. **Nature-Inspired:** Greens and earth tones connect to landscaping
3. **Action-Oriented:** Clear CTAs throughout ("Get Free Estimate", "Call Now", "Contact Us")
4. **Visual Proof:** Images showcase quality work
5. **Local Focus:** Emphasize Waltham, MA location throughout
6. **Mobile Excellence:** Majority of users will browse on mobile - optimize accordingly