# Website Speed, SEO & Code Quality Guide

## Goal

Build a website that performs well on **2G, 3G, 4G, 5G, Wi-Fi, and unstable networks** while maintaining strong SEO and clean maintainable code.

---

# 1. Performance Strategy (All Network Types)

## Core Targets

* First Contentful Paint (FCP): under 1.8s
* Largest Contentful Paint (LCP): under 2.5s
* Time to Interactive: under 3.5s
* Total page weight: under 700KB initial load
* JavaScript bundle: under 200KB where possible

## Design for Slow Networks First

* Mobile-first layouts
* Minimal animations
* Avoid autoplay video
* Use system fonts or one optimized font family
* Keep hero sections lightweight
* Use static content where possible

## Image Optimization

* Use WebP / AVIF formats
* Compress all images before upload
* Resize images to display size only
* Use lazy loading for below-fold images
* Use responsive image sizes
* Avoid decorative oversized banners

## Fonts

* Use one font family max
* Self-host fonts if possible
* Use `font-display: swap`
* Prefer variable fonts

## CSS

* Use Tailwind or utility-first CSS
* Remove unused CSS
* Minify CSS in production
* Avoid heavy UI libraries unless needed

## JavaScript

* Ship less JavaScript
* Use server components where possible
* Lazy load non-critical components
* Split code by route
* Avoid large dependencies for small tasks
* Remove unused packages regularly

## Caching

* Cache static assets aggressively
* Use CDN delivery
* Enable immutable cache for versioned files
* Use browser caching headers

## API / Database Speed

* Fetch only required fields
* Paginate long lists
* Add database indexes
* Cache common queries
* Use edge/serverless functions wisely

## Loading UX

* Skeleton loaders
* Optimistic UI where relevant
* Graceful retries for weak connections
* Clear offline / failed request states

---

# 2. Next.js Specific Best Practices

## App Router

* Use Server Components by default
* Use Client Components only when needed
* Use streaming for large pages
* Use route-level loading.tsx files

## Rendering Strategy

* Static generation for public pages
* ISR for changing content
* SSR only when personalization is needed

## Example

```tsx
export const revalidate = 3600;
```

## Dynamic Imports

```tsx
const AdminChart = dynamic(() => import('@/components/AdminChart'))
```

## Images

```tsx
import Image from 'next/image'
```

Use width/height and priority only for above-fold hero images.

---

# 3. SEO Best Practices

## Technical SEO

* HTTPS enabled
* Mobile responsive design
* Fast load speed
* Clean URLs
* XML sitemap
* robots.txt
* Canonical URLs
* Structured data schema markup

## Page SEO Structure

Every page should include:

* Unique title tag (50–60 chars)
* Meta description (140–160 chars)
* One H1 only
* Proper H2/H3 hierarchy
* Internal links
* Alt text on images

## Example Metadata

```tsx
export const metadata = {
  title: 'The Ability in Disability Trust | Inclusive Community Support',
  description: 'Supporting inclusive development, empowerment and community impact.'
}
```

## Content SEO

* Write for humans first
* Use target keywords naturally
* Answer common questions
* Add FAQs
* Update content regularly
* Publish blog articles for search growth

## Local SEO (Zimbabwe / Harare)

* Google Business Profile
* Consistent name/address/phone
* Embed map if relevant
* Location pages when useful
* Collect reviews

---

# 4. Code Quality Standards

## Project Structure

```text
src/
  app/
  components/
  lib/
  hooks/
  types/
  utils/
```

## Rules

* TypeScript strict mode enabled
* Reusable components only
* Keep components small
* One responsibility per file
* Use clear naming conventions
* No duplicated logic

## Validation

* Validate forms client + server side
* Sanitize inputs
* Handle all error states

## Linting / Formatting

* ESLint enabled
* Prettier formatting
* Husky pre-commit checks (optional)

## Example package scripts

```json
{
  "lint": "next lint",
  "build": "next build"
}
```

---

# 5. Accessibility (Helps SEO + UX)

* Semantic HTML
* Keyboard navigation
* Contrast-compliant colors
* Labels for inputs
* ARIA only when needed
* Focus states visible
* Descriptive link text

---

# 6. Security Basics

* Environment variables for secrets
* Rate limit forms/APIs
* CSRF protection where relevant
* Use RLS in Supabase
* Escape user-generated content
* Keep dependencies updated

---

# 7. Monitoring & Testing

## Measure Often

* Google Lighthouse
* Core Web Vitals
* Vercel Analytics
* Search Console
* Error monitoring

## Test On

* Slow 3G throttling
* Mid-range Android devices
* Desktop broadband
* Different browsers

---

# 8. Content Delivery for Slow Networks

## Homepage Must Load First

Prioritize:

1. Logo
   n2. Headline
2. CTA button
3. Key text

Delay:

* Galleries
* Testimonials sliders
* Maps
* Videos
* Dashboards

---

# 9. Deployment Checklist

* Production build passes
* Images optimized
* Metadata complete
* Sitemap generated
* 404 page created
* Loading states created
* Forms tested
* Mobile tested
* Lighthouse score checked

---

# 10. Gold Standard Targets

## Lighthouse

* Performance: 90+
* Accessibility: 95+
* Best Practices: 95+
* SEO: 95+

## Real User Feel

* Loads instantly on Wi-Fi
* Usable on 3G
* Still readable on unstable mobile data

---

# 11. Recommended Stack

* Next.js
* TypeScript
* Tailwind CSS
* Supabase
* Vercel
* next/image
* React Hook Form + Zod

---

# 12. Final Rule

Every feature must answer:

1. Does this improve conversions?
2. Does this hurt speed?
3. Is this necessary?
4. Can it be simpler?

If not valuable, remove it.

---

# 13. For TADS Specifically

Prioritize:

* Fast homepage
* Donation/contact page
* About page
* Impact stories
* Accessible forms
* Lightweight gallery
* SEO for disability support Zimbabwe / Harare terms

---

# Result

A website that feels premium on fast internet and still works reliably on slow networks.
