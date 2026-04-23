# Antigravity Build Prompt

Build a **production-grade, world-class website** for **The Ability in Disability Trust (TADS)** using **Next.js 14+, TypeScript, Tailwind CSS, React, App Router, Supabase, and Vercel-ready standards**.

## Core Mission

Create a website that is:

* Extremely fast on **2G / 3G / 4G / 5G / Wi-Fi**
* Accessible and inclusive
* SEO optimized
* Clean, scalable, maintainable
* Premium modern UI
* Lightweight and efficient
* Professional NGO trust-building design
* Mobile-first
* Built with strict engineering standards

---

# STRICT DEVELOPMENT RULES

## Code Quality

Write only **senior-level production code**.

Requirements:

* TypeScript strict mode
* No messy code
* No duplicated logic
* Reusable components only
* Strong separation of concerns
* Clear naming conventions
* Modular architecture
* Fully typed props/interfaces
* Clean comments only where necessary
* No bloated dependencies
* No unused imports
* No placeholder junk code
* Error handling included
* Loading states included
* Empty states included

## Performance Rules

Design for slow networks first.

Must include:

* Server Components by default
* Client Components only when required
* Code splitting
* Dynamic imports for heavy components
* Optimized images using next/image
* Lazy loading below fold content
* Minimal JS bundle
* Minimal animations
* Fast initial render
* Static generation where possible
* Revalidation strategy where needed
* Font optimization
* Lighthouse 90+ target

## SEO Rules

Every page must include:

* Metadata title
* Meta description
* Open Graph tags
* Twitter tags
* Canonical URLs
* Semantic HTML
* Correct heading structure
* Alt text for images
* Internal links
* Sitemap ready structure
* robots.txt ready structure
* Structured data schema where relevant

## Accessibility Rules

Must comply with strong accessibility standards:

* Semantic HTML
* Keyboard navigation
* Proper labels
* Focus states
* ARIA only when necessary
* Color contrast compliance
* Screen reader friendly layouts

---

# DESIGN INSTRUCTIONS

Use the **templates folder** as the source of inspiration for layouts, sections, visual direction, spacing, typography, and component structure.

Do NOT copy blindly.

Instead:

* Extract best design ideas
* Modernize them
* Improve consistency
* Improve spacing
* Improve responsiveness
* Improve accessibility
* Improve loading performance
* Maintain premium visual feel

Style should feel:

* Trustworthy
* Human-centered
* Modern NGO brand
* Clean and uplifting
* Professional
* Calm but impactful

---

# REQUIRED WEBSITE PAGES

## Public Pages

* Home
* About
* Programs / Services
* Impact Stories
* Contact
* Donate / Support
* Gallery (optimized lightweight)
* FAQ
* 404 page

## Optional Future Ready

* Blog
* Events
* Volunteer Signup
* Partner Page

---

# HOMEPAGE REQUIREMENTS

Must include:

* Hero section with clear CTA
* Trust indicators
* Mission summary
* Programs preview
* Impact metrics
* Testimonials
* Donation CTA
* Contact CTA
* Footer

---

# FOLDER STRUCTURE (STRICT)

Use this clean scalable structure:

```text
src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    programs/page.tsx
    stories/page.tsx
    contact/page.tsx
    donate/page.tsx
    gallery/page.tsx
    faq/page.tsx
    not-found.tsx

  components/
    layout/
    sections/
    ui/
    forms/
    cards/
    navigation/

  lib/
    supabase.ts
    seo.ts
    utils.ts
    constants.ts

  hooks/
    useMobile.ts
    useFormState.ts

  types/
    index.ts

  styles/
    globals.css
```

---

# COMPONENT RULES

Create reusable components such as:

* Navbar
* Footer
* HeroSection
* CTASection
* ProgramCard
* StoryCard
* ContactForm
* DonationCard
* GalleryGrid
* FAQAccordion
* SectionHeading
* Container

---

# CONTACT FORM RULES

Use:

* React Hook Form
* Zod validation
* Accessible labels
* Loading state
* Error state
* Success state
* Supabase submission ready

---

# SUPABASE RULES

Prepare clean integration for:

* Contact submissions
* Newsletter signups
* Stories / CMS future use
* Donations tracking future use

---

# VISUAL RULES

Use Tailwind CSS cleanly.

Design system should include:

* Consistent spacing scale
* Rounded corners
* Soft shadows
* Strong CTA buttons
* Readable typography
* Mobile-first responsive grids
* Clean whitespace
* Optimized image ratios

---

# OUTPUT RULES

Generate real project code files.

No pseudo code.

No shortcuts.

No demo junk.

No lorem ipsum.

Use meaningful NGO-ready content.

---

# FINAL QUALITY CHECK

Before finishing, ensure:

* Build passes
* No TypeScript errors
* No lint issues
* Responsive on mobile/tablet/desktop
* Fast loading
* SEO ready
* Production ready
* Clean architecture

---

# PRIORITY ORDER

1. Speed
2. Accessibility
3. SEO
4. Clean code
5. Conversion-focused UX
6. Beautiful design
7. Scalability

---

# FINAL GOAL

Deliver a website that feels like it was built by a top-tier agency for an international nonprofit, but optimized for Zimbabwean network realities.
