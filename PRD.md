# Product Requirements Document (PRD)
## Portfolio Website for Sairam Vendra

### 1. Product Overview

**Product Name:** Sairam Vendra Portfolio Website

**Purpose:** Create a modern, accessible portfolio website showcasing Sairam Vendra's work as Head of Design & AI Product Manager

**Design Style:** Neobrutalism - bold, geometric, high-contrast design with thick borders and vibrant colors

**Target Audience:**
- Recruiters and hiring managers
- Potential clients and collaborators
- Industry peers and network connections

---

### 2. Goals and Objectives

**Primary Goals:**
1. Showcase professional experience and skills effectively
2. Demonstrate design sensibility through the website itself
3. Provide easy access to portfolio work and contact information
4. Create an engaging, memorable user experience

**Success Metrics:**
- Accessibility score of 95+ (Lighthouse)
- Mobile responsiveness across all devices
- Fast load times (<3 seconds)
- WCAG 2.1 AA compliance

---

### 3. Core Features

#### 3.1 Hero Section
- Professional headshot (from CV)
- Name and title: "Sairam Vendra - Head of Design & AI Product Manager"
- Eye-catching banner image (Linkposter.jpg)
- Signature quote: "People ignore design that ignores people." - Frank Kimero
- CTA buttons with neobrutalism styling

#### 3.2 About Me Section
- Professional summary highlighting:
  - Product management and design strategy expertise
  - Automation and AI innovation experience
  - Cross-functional leadership capabilities
  - Key achievements from CV

#### 3.3 Core Skills Section
- Grid layout displaying skill categories:
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

#### 3.4 Profile Summary / Highlights
- Bullet points of key achievements from CV
- Animated entrance effects
- High-contrast neobrutalism cards

#### 3.5 Work Experience Section
- Timeline or card-based layout
- Companies:
  - KukuTV (Current - Nov'23)
  - Prime Video (Nov'20 - Nov'23)
  - Amazon (Sept'18 - Nov'20)
  - Cimpress tech. (Vistaprint) (Oct'17 - Mar'18)
- Expandable details for each role
- Achievement highlights

#### 3.6 Video Showcase Section
- 3 YouTube videos in autoplay mode (muted)
- Video URLs:
  - https://youtu.be/wuv-b1FWMhY
  - https://youtu.be/UiN-iTjGy0o
  - https://youtu.be/QgitqyLypss
- Carousel or grid layout
- Play controls visible on hover

#### 3.7 Portfolio Links
- AI LVR real footage: [Link]
- Sora Longform content: [Link]
- Live action AI-Lip-sync: [Link]
- Privé: [Link]
- Notion Webpage: [Link]

#### 3.8 Certifications Section
- 100X – Generative AI (comfy ui) and LLM custom training
- Duke University (Upgrad) - Product Management Certification
- Uxmint – UI Design Certification
- Pearson – VERSANT Certification CEFR B2 (GSE 66) ID: 18111017

#### 3.9 Contact Section
- Email: sairamvendra949@gmail.com
- Phone: (+91) 8072499687
- Address: Bangalore, Karnataka
- Social media links:
  - LinkedIn: https://www.linkedin.com/in/sairamvendra/
  - Behance: @sairamvendra
  - Instagram: https://www.instagram.com/sairamvendra/
  - Twitter: https://x.com/sairam848

---

### 4. Technical Requirements

#### 4.1 Technology Stack
- **Framework:** Next.js 14+ (React)
- **Styling:** Tailwind CSS
- **UI Components:** Neobrutalism components (https://www.neobrutalism.dev/)
- **Animations:** React Bits animations (https://www.reactbits.dev/)
- **Deployment:** Vercel (recommended for Next.js)

#### 4.2 Component Libraries
- Neobrutalism UI components:
  - Buttons
  - Cards
  - Navigation
  - Forms
  - Modals
- React Bits animations:
  - Fade-in animations
  - Scroll animations
  - Hover effects
  - Transition effects

#### 4.3 Performance Requirements
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s
- Image optimization (WebP format)
- Lazy loading for videos and images

---

### 5. Accessibility Requirements (WCAG 2.1 AA Compliance)

#### 5.1 Visual Accessibility
- Color contrast ratio minimum 4.5:1 for normal text
- Color contrast ratio minimum 3:1 for large text
- No information conveyed by color alone
- Focus indicators visible on all interactive elements
- Responsive text sizing (rem/em units)

#### 5.2 Keyboard Navigation
- All interactive elements keyboard accessible
- Logical tab order throughout the page
- Skip navigation links
- Keyboard shortcuts documented
- No keyboard traps

#### 5.3 Screen Reader Support
- Semantic HTML5 elements
- ARIA labels where needed
- Alt text for all images
- Proper heading hierarchy (h1 → h6)
- Form labels properly associated
- Link text descriptive and meaningful

#### 5.4 Media Accessibility
- Video captions/transcripts
- Audio descriptions where applicable
- Control options for autoplay content
- Pause/stop controls for animations

#### 5.5 Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch targets minimum 44x44px
- Orientation independent

---

### 6. Design Specifications

#### 6.1 Neobrutalism Design Principles
- **Bold Colors:** High contrast, vibrant color palette
- **Thick Borders:** 3-5px black borders on cards and buttons
- **Hard Shadows:** Offset box shadows (not blurred)
- **Geometric Shapes:** Strong, defined shapes
- **Brutalist Typography:** Bold, sans-serif fonts
- **No Gradients:** Flat colors only

#### 6.2 Color Palette (Example - Neobrutalism style)
- Primary: #000000 (Black borders/text)
- Background: #FFFFFF (White)
- Accent 1: #FFD700 (Yellow/Gold)
- Accent 2: #FF6B6B (Red/Pink)
- Accent 3: #4ECDC4 (Cyan/Turquoise)
- Accent 4: #A78BFA (Purple)

#### 6.3 Typography
- Headings: Bold, large (Inter, Space Grotesk, or similar)
- Body: Clear, readable sans-serif
- Font sizes: 16px base, scale up for headings
- Line height: 1.5-1.75 for body text

#### 6.4 Spacing
- Consistent padding: 8px base unit (8, 16, 24, 32, 48, 64)
- Card spacing: 24-32px padding
- Section spacing: 64-96px vertical spacing

---

### 7. Content Sources

#### 7.1 Primary Content
- CV/Resume data (provided in image)
- Notion documentation:
  - https://www.notion.so/sairamvendra/Sairam-Vendra-1eb4d5e77783804fa1bcdb800a6eeb01
  - https://www.notion.so/sairamvendra/Sairam-Vendra-9173ebc550f04dd694ee10ff18a20b12

#### 7.2 Media Assets
- Profile photo (from CV)
- Banner image: Linkposter.jpg
- YouTube videos (embedded)
- Portfolio work images/videos

---

### 8. User Experience Flow

#### 8.1 Navigation Flow
1. **Landing/Hero** → First impression, banner, CTA
2. **About Me** → Professional overview
3. **Skills** → Core competencies
4. **Experience** → Work history and achievements
5. **Video Showcase** → Visual portfolio work
6. **Certifications** → Professional credentials
7. **Contact** → Get in touch, social links

#### 8.2 Interactions
- Smooth scroll to sections
- Hover effects on buttons and cards
- Video controls on hover
- Expandable experience cards
- Animated section transitions
- Mobile-friendly hamburger menu

---

### 9. Development Phases

#### Phase 1: Setup & Foundation
- Initialize Next.js project
- Install dependencies (Tailwind, neobrutalism components, react-bits)
- Set up project structure
- Configure accessibility tools

#### Phase 2: Core Layout
- Build responsive navigation
- Create section containers
- Implement scroll behavior
- Add skip navigation links

#### Phase 3: Content Sections
- Hero section with banner
- About Me section
- Skills grid
- Work experience timeline
- Certifications display

#### Phase 4: Interactive Elements
- Video showcase with autoplay
- Contact form (optional)
- Social links
- Animations and transitions

#### Phase 5: Accessibility & Testing
- ARIA labels and roles
- Keyboard navigation testing
- Screen reader testing
- Color contrast validation
- Lighthouse audit

#### Phase 6: Optimization & Deployment
- Image optimization
- Code splitting
- Performance testing
- Deploy to Vercel

---

### 10. Out of Scope (v1)

- Blog functionality
- Case study deep dives
- Content management system
- Multi-language support
- Dark mode toggle
- Interactive portfolio pieces

---

### 11. Future Enhancements (v2+)

- Blog section for articles
- Detailed case studies
- Testimonials section
- Dark mode
- Analytics integration
- Contact form with backend
- Newsletter signup
- Project filtering/search

---

### 12. Acceptance Criteria

#### Must Have:
✅ All sections from CV represented
✅ Neobrutalism design style implemented
✅ 3 YouTube videos with autoplay (muted)
✅ Banner image displayed prominently
✅ All social links functional
✅ Mobile responsive (320px+)
✅ WCAG 2.1 AA compliant
✅ Lighthouse accessibility score 95+
✅ Keyboard navigable
✅ Screen reader compatible

#### Should Have:
- Smooth animations
- Loading states
- Error handling for videos
- SEO optimization
- Open Graph tags

#### Nice to Have:
- Custom cursor effects
- Scroll progress indicator
- Easter eggs/interactions
- Micro-interactions

---

### 13. Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Autoplay videos not working on mobile | High | Provide play button fallback, mute by default |
| Accessibility compliance gaps | High | Use automated testing tools, manual testing |
| Performance issues with animations | Medium | Optimize animations, lazy load |
| Browser compatibility | Medium | Test across browsers, use polyfills |
| Notion content access | Low | Fetch during build time, cache |

---

### 14. Timeline Estimate

- PRD & Design: ✅ (Current)
- Setup & Foundation: 30 min
- Core Layout: 1 hour
- Content Sections: 2-3 hours
- Interactive Elements: 1-2 hours
- Accessibility: 1-2 hours
- Testing & Optimization: 1 hour
- **Total: 6-9 hours of development**

---

### 15. Success Criteria

The portfolio website will be considered successful when:

1. ✅ All CV information is accurately represented
2. ✅ Neobrutalism design style is consistently applied
3. ✅ All accessibility requirements are met (WCAG 2.1 AA)
4. ✅ Website loads in under 3 seconds
5. ✅ Videos autoplay correctly (muted)
6. ✅ Mobile experience is smooth and responsive
7. ✅ All links and CTAs are functional
8. ✅ Site passes Lighthouse audit with 90+ scores

---

**Document Version:** 1.0
**Last Updated:** 2025-11-30
**Owner:** Sairam Vendra Portfolio Project
