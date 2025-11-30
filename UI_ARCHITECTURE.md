# UI Architecture Document
## Sairam Vendra Portfolio Website

**Version:** 1.0
**Date:** 2025-11-30
**Design Style:** Neobrutalism

---

## 1. Design System

### 1.1 Color Palette (Neobrutalism)

```css
/* Primary Colors */
--color-black: #000000;        /* Borders, text, shadows */
--color-white: #FFFFFF;        /* Background, cards */

/* Accent Colors */
--color-yellow: #FFD700;       /* Primary CTA, highlights */
--color-pink: #FF6B6B;         /* Secondary accent */
--color-cyan: #4ECDC4;         /* Tertiary accent */
--color-purple: #A78BFA;       /* Quaternary accent */
--color-green: #00FF00;        /* Success states */
--color-blue: #0066FF;         /* Info/links */

/* Neutral Colors */
--color-gray-light: #F5F5F5;   /* Backgrounds */
--color-gray-dark: #333333;    /* Secondary text */
```

### 1.2 Typography

```css
/* Font Families */
--font-heading: 'Space Grotesk', 'Inter', sans-serif;
--font-body: 'Inter', 'system-ui', sans-serif;

/* Font Sizes (Responsive) */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 900;
```

### 1.3 Spacing System

```css
/* Base: 8px */
--space-1: 0.5rem;   /* 8px */
--space-2: 1rem;     /* 16px */
--space-3: 1.5rem;   /* 24px */
--space-4: 2rem;     /* 32px */
--space-6: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-12: 6rem;    /* 96px */
--space-16: 8rem;    /* 128px */
```

### 1.4 Borders & Shadows (Neobrutalism)

```css
/* Borders */
--border-width: 3px;
--border-width-thick: 5px;
--border-color: var(--color-black);
--border-radius: 0px;  /* No rounded corners */

/* Hard Shadows (Not blurred) */
--shadow-sm: 4px 4px 0 0 var(--color-black);
--shadow-md: 6px 6px 0 0 var(--color-black);
--shadow-lg: 8px 8px 0 0 var(--color-black);
--shadow-xl: 12px 12px 0 0 var(--color-black);
```

### 1.5 Breakpoints

```css
/* Mobile First */
--screen-sm: 640px;   /* Small devices */
--screen-md: 768px;   /* Tablets */
--screen-lg: 1024px;  /* Laptops */
--screen-xl: 1280px;  /* Desktops */
--screen-2xl: 1536px; /* Large screens */
```

---

## 2. Component Architecture

### 2.1 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── banner.jpg (Linkposter.jpg)
│   │   └── projects/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # Neobrutalism UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── ProfileSummary.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── VideoShowcase.tsx
│   │   │   ├── Certifications.tsx
│   │   │   └── Contact.tsx
│   │   ├── animations/         # React Bits animations
│   │   │   ├── FadeIn.tsx
│   │   │   ├── SlideIn.tsx
│   │   │   └── ScrollReveal.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── Container.tsx
│   ├── lib/
│   │   ├── utils.ts            # Utility functions
│   │   └── constants.ts        # Constants & data
│   └── types/
│       └── index.ts            # TypeScript types
├── tailwind.config.ts
├── package.json
└── README.md
```

### 2.2 Core Components Specification

#### 2.2.1 Navigation Component
```typescript
// components/layout/Header.tsx
Features:
- Fixed/sticky header with neobrutalism styling
- Logo/name on left
- Navigation links (smooth scroll to sections)
- Mobile hamburger menu
- Skip to content link (accessibility)
- ARIA labels and keyboard navigation

Props:
- activeSection: string
- onSectionChange: (section: string) => void

Accessibility:
- role="navigation"
- aria-label="Main navigation"
- Keyboard accessible (Tab, Enter)
- Focus visible states
```

#### 2.2.2 Hero Section
```typescript
// components/sections/Hero.tsx
Features:
- Full viewport height or prominent section
- Profile image (circular with thick border)
- Name + Title
- Signature quote
- Banner image (Linkposter.jpg) - creative placement
- CTA buttons (Download CV, Contact)
- Animated entrance (React Bits)

Layout:
- Grid or flex layout
- Banner as background or featured element
- Mobile responsive stack

Accessibility:
- Alt text for images
- ARIA labels for buttons
- Heading hierarchy (h1)
```

#### 2.2.3 About Section
```typescript
// components/sections/About.tsx
Features:
- Professional summary
- Key highlights (bullet points or cards)
- Animated on scroll reveal

Layout:
- Two-column on desktop (text + visual)
- Single column on mobile

Accessibility:
- Semantic HTML
- Proper heading levels (h2)
```

#### 2.2.4 Skills Section
```typescript
// components/sections/Skills.tsx
Features:
- Grid layout of skill categories
- Neobrutalism cards with hard shadows
- Hover effects
- Icons or illustrations (optional)

Layout:
- 3-4 columns on desktop
- 2 columns on tablet
- 1 column on mobile

Skills to display:
- Art & Creative Direction
- AI product Management
- Stakeholder & Agency Management
- Program & Project Management
- Design Strategy & Operations
- Brand Research & Rebranding
- Market Research and Analysis
- Digital Transformation
- Brand and communication Design
- Performance Marketing
- Data-Driven Decision Making
- Product Lifecycle Management

Accessibility:
- List structure (ul/li)
- Descriptive labels
```

#### 2.2.5 Profile Summary Section
```typescript
// components/sections/ProfileSummary.tsx
Features:
- Highlighted achievements from CV
- Neobrutalism styled cards
- Animated entrance (staggered)

Content:
- Used tools like Chat GPT, Midjourney bots...
- Scaled internal ad production capacity 5→100 per week
- Operationalized AI for automated system (2→20 throughput)
- Shipped AI innovation slate
- Built asset ops and quality governance
- Managed external creative agencies
- Led multi-disciplinary design org
- Directed full campaign lifecycles
- Translated business problems into creative briefs
- Set end-to-end creative strategy
- Drove cross-functional alignment

Layout:
- Grid or masonry layout
- Highlight numbers/metrics

Accessibility:
- Semantic list structure
- Screen reader friendly
```

#### 2.2.6 Work Experience Section
```typescript
// components/sections/Experience.tsx
Features:
- Timeline or card-based layout
- Expandable/collapsible details
- Company logos (if available)
- Dates, role, achievements

Companies:
1. KukuTV - Head of Design and AI Product Manager (Nov'23 - Present)
2. Prime Video - Design Lead (Nov'20 - Nov'23)
3. Amazon - Imaging Associate (Sept'18 - Nov'20)
4. Cimpress tech. (Vistaprint) - Production Artist (Oct'17 - Mar'18)

Layout:
- Vertical timeline on desktop
- Stacked cards on mobile

Accessibility:
- Landmark regions
- Button states for expand/collapse
- ARIA expanded states
```

#### 2.2.7 Video Showcase Section
```typescript
// components/sections/VideoShowcase.tsx
Features:
- 3 YouTube videos embedded
- Autoplay (muted) on load
- Play/pause controls on hover
- Responsive iframe sizing
- Loading states

Videos:
1. https://youtu.be/wuv-b1FWMhY
2. https://youtu.be/UiN-iTjGy0o
3. https://youtu.be/QgitqyLypss

Layout:
- Grid layout (3 columns desktop, 1-2 mobile)
- Equal height cards

Accessibility:
- iframe title attributes
- Keyboard controls
- Pause option
- Captions available note
```

#### 2.2.8 Certifications Section
```typescript
// components/sections/Certifications.tsx
Features:
- Badge-style display
- Neobrutalism card styling
- Links to credentials (if available)

Content:
- 100X – Generative AI (comfy ui) and LLM custom training
- Duke University (Upgrad) - Product Management
- Uxmint – UI Design Certification
- Pearson – VERSANT Certification CEFR B2

Layout:
- Grid layout
- Icon + text format

Accessibility:
- List structure
- Link accessible names
```

#### 2.2.9 Contact Section
```typescript
// components/sections/Contact.tsx
Features:
- Contact information display
- Social media links with icons
- Email/phone with click-to-action
- Neobrutalism button styling

Contact Info:
- Email: sairamvendra949@gmail.com
- Phone: (+91) 8072499687
- Location: Bangalore, Karnataka

Social Links:
- LinkedIn: https://www.linkedin.com/in/sairamvendra/
- Instagram: https://www.instagram.com/sairamvendra/
- Twitter: https://x.com/sairam848
- Behance: @sairamvendra

Layout:
- Centered or split layout
- Large, tappable buttons
- Icons + labels

Accessibility:
- aria-label for social links
- Visible focus states
- External link indicators
```

---

## 3. Animation Strategy

### 3.1 Page Load Animations
- Hero: Fade in + slide up
- Sections: Scroll-triggered fade in
- Staggered animations for lists/grids

### 3.2 Interaction Animations
- Button hover: Scale + shadow increase
- Card hover: Lift (transform translateY)
- Link hover: Underline animation
- Menu toggle: Smooth transitions

### 3.3 Performance Considerations
- Use `will-change` sparingly
- Prefer CSS transforms over position changes
- Lazy load videos and heavy images
- Reduce motion for users with preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 4. Layout System

### 4.1 Grid System
```css
/* Main content grid */
.content-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-4);
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

/* Responsive */
@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-2);
  }
}
```

### 4.2 Section Layout
```typescript
// Each section follows this pattern:
<section
  id="section-name"
  className="section"
  aria-labelledby="section-heading"
>
  <Container>
    <h2 id="section-heading">Section Title</h2>
    {/* Content */}
  </Container>
</section>
```

---

## 5. Accessibility Implementation

### 5.1 Semantic HTML Structure
```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      <!-- Navigation -->
    </nav>
  </header>

  <main id="main-content" role="main">
    <section aria-labelledby="hero-heading">
      <!-- Hero -->
    </section>
    <section aria-labelledby="about-heading">
      <!-- About -->
    </section>
    <!-- More sections -->
  </main>

  <footer role="contentinfo">
    <!-- Footer -->
  </footer>
</body>
```

### 5.2 Keyboard Navigation
- Tab order: logical flow
- Focus indicators: 3px solid outline with high contrast
- Interactive elements: all keyboard accessible
- Skip links: visible on focus

### 5.3 Screen Reader Support
- ARIA labels for icons and buttons
- Alt text for all images (descriptive)
- Live regions for dynamic content
- Heading hierarchy (h1 → h6 proper nesting)

### 5.4 Color Contrast
- Normal text: minimum 4.5:1
- Large text (18px+): minimum 3:1
- Interactive elements: 3:1 against background
- Focus indicators: 3:1 against adjacent colors

### 5.5 Form Accessibility (if contact form added)
- Label association
- Error messages linked with aria-describedby
- Required fields indicated
- Form validation feedback

---

## 6. Responsive Design Strategy

### 6.1 Breakpoint Strategy

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked sections, hamburger menu |
| Tablet | 640px - 1024px | 2 column grids, larger text, expanded menu |
| Desktop | 1024px+ | Multi-column grids, full navigation, larger spacing |

### 6.2 Mobile-First Approach
```css
/* Base styles: Mobile */
.card {
  width: 100%;
  padding: var(--space-2);
}

/* Tablet */
@media (min-width: 768px) {
  .card {
    padding: var(--space-4);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .card {
    padding: var(--space-6);
  }
}
```

### 6.3 Touch Targets
- Minimum size: 44x44px (iOS guidelines)
- Spacing between tappable elements: 8px minimum
- Larger buttons on mobile

---

## 7. Performance Optimization

### 7.1 Image Optimization
- Use Next.js Image component
- WebP format with fallbacks
- Lazy loading for below-fold images
- Responsive images with srcset

### 7.2 Code Splitting
- Route-based splitting (automatic with Next.js App Router)
- Component lazy loading for heavy components
- Dynamic imports for videos

### 7.3 Font Loading
```css
/* Font display strategy */
@font-face {
  font-family: 'Space Grotesk';
  src: url('/fonts/space-grotesk.woff2') format('woff2');
  font-display: swap;
  font-weight: 400 700;
}
```

### 7.4 Critical CSS
- Inline critical CSS for above-fold content
- Defer non-critical CSS
- Remove unused CSS

---

## 8. Component Mapping to Libraries

### 8.1 Neobrutalism Components Usage

| UI Element | Neobrutalism Component | Customization |
|------------|------------------------|---------------|
| Buttons | `<Button>` | Hard shadow, bold colors |
| Cards | `<Card>` | Thick borders, no radius |
| Badges | `<Badge>` | Skill tags, certifications |
| Navigation | `<NavigationMenu>` | Desktop menu |
| Mobile Menu | `<Sheet>` | Slide-out drawer |
| Inputs | `<Input>` | Contact form (if added) |
| Accordion | `<Accordion>` | Experience expand/collapse |

### 8.2 React Bits Animations Usage

| Animation Need | React Bits Component | Usage |
|----------------|---------------------|-------|
| Hero entrance | Fade In + Slide Up | Hero section |
| Section reveal | Scroll Reveal | All sections on scroll |
| Card entrance | Stagger Animation | Skills, projects |
| Hover effects | Scale + Shadow | Buttons, cards |
| Text animations | Typewriter Effect | Optional for hero |

---

## 9. Data Structure

### 9.1 TypeScript Interfaces

```typescript
// types/index.ts

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  quote: string;
  images: {
    profile: string;
    banner: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  handle?: string;
  icon: string;
}

export interface Skill {
  category: string;
  skills: string[];
  color: string; // Accent color for card
}

export interface Achievement {
  text: string;
  metric?: string; // e.g., "2 → 20", "5 → 100"
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  achievements: string[];
  technologies?: string[];
}

export interface Video {
  id: string;
  url: string;
  title: string;
  embedUrl: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  url?: string;
}

export interface PortfolioLink {
  title: string;
  url: string;
  description?: string;
  type: 'notion' | 'video' | 'external';
}
```

---

## 10. SEO & Meta Tags

### 10.1 Page Metadata
```typescript
// app/layout.tsx
export const metadata = {
  title: 'Sairam Vendra | Head of Design & AI Product Manager',
  description: 'Leader in creative direction, AI product management, and design strategy. Track record of building automation-first pipelines, scaling production, and driving measurable business outcomes.',
  keywords: ['Product Manager', 'Design Lead', 'AI', 'Creative Direction', 'UX/UI'],
  authors: [{ name: 'Sairam Vendra' }],
  creator: 'Sairam Vendra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sairamvendra.com', // Replace with actual domain
    title: 'Sairam Vendra | Head of Design & AI Product Manager',
    description: '...',
    siteName: 'Sairam Vendra Portfolio',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sairam Vendra | Head of Design & AI Product Manager',
    description: '...',
    creator: '@sairam848',
    images: ['/images/og-image.jpg'],
  },
};
```

---

## 11. Implementation Checklist

### Phase 1: Setup ✓
- [ ] Initialize Next.js 14 project
- [ ] Install Tailwind CSS
- [ ] Install neobrutalism components (shadcn/ui base)
- [ ] Install React Bits
- [ ] Set up TypeScript
- [ ] Configure fonts (Space Grotesk, Inter)
- [ ] Create folder structure

### Phase 2: Core Layout ✓
- [ ] Create global styles with neobrutalism variables
- [ ] Build Header/Navigation component
- [ ] Build Footer component
- [ ] Create Container/wrapper components
- [ ] Implement skip navigation

### Phase 3: Sections ✓
- [ ] Hero section + banner integration
- [ ] About Me section
- [ ] Skills grid
- [ ] Profile Summary highlights
- [ ] Work Experience timeline
- [ ] Video Showcase (YouTube embeds)
- [ ] Certifications display
- [ ] Contact section with social links

### Phase 4: Interactivity ✓
- [ ] Smooth scroll navigation
- [ ] Mobile menu (hamburger)
- [ ] Video autoplay logic
- [ ] Hover states and animations
- [ ] React Bits animations integration

### Phase 5: Accessibility ✓
- [ ] ARIA labels throughout
- [ ] Keyboard navigation
- [ ] Focus management
- [ ] Color contrast validation
- [ ] Screen reader testing
- [ ] Skip links
- [ ] Semantic HTML audit

### Phase 6: Optimization ✓
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Font optimization
- [ ] Bundle size check
- [ ] Lighthouse audit
- [ ] Mobile responsiveness test

### Phase 7: Deployment ✓
- [ ] Build production version
- [ ] Deploy to Vercel
- [ ] Test live site
- [ ] Analytics setup (optional)

---

## 12. Component Examples

### 12.1 Neobrutalism Button
```tsx
// components/ui/Button.tsx
export function Button({ children, variant = 'primary', ...props }) {
  return (
    <button
      className={`
        px-6 py-3
        font-bold text-lg
        border-3 border-black
        shadow-[4px_4px_0_0_rgba(0,0,0,1)]
        hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)]
        hover:translate-x-[-2px] hover:translate-y-[-2px]
        active:shadow-[2px_2px_0_0_rgba(0,0,0,1)]
        active:translate-x-[2px] active:translate-y-[2px]
        transition-all
        ${variant === 'primary' ? 'bg-yellow text-black' : ''}
        ${variant === 'secondary' ? 'bg-cyan text-black' : ''}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
```

### 12.2 Neobrutalism Card
```tsx
// components/ui/Card.tsx
export function Card({ children, color = 'white', ...props }) {
  return (
    <div
      className={`
        p-6
        border-3 border-black
        shadow-[8px_8px_0_0_rgba(0,0,0,1)]
        hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)]
        hover:translate-x-[-2px] hover:translate-y-[-2px]
        transition-all
        bg-${color}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
```

---

**Document Status:** Complete
**Next Steps:** Begin implementation (Phase 1)
