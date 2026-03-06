

# B.P.S (Beecham Plumbing Service) Website

## Overview
A 5-page, high-converting plumbing company website focused on generating phone calls and quote requests. Clean black/white/grey design with strong CTAs throughout.

## Design System
- **Colors**: Black primary, white secondary, ash/light grey accent
- **Typography**: Bold, modern sans-serif headings with clean body text
- **Style**: Minimal, premium, professional with dark overlaid hero images (using Unsplash plumbing/construction imagery)

## Shared Components
- **Sticky Header**: Logo, navigation links (Home, About, Services, Gallery, Contact), prominent "📞 Call Now" button always visible
- **Mobile Nav**: Hamburger menu with slide-out drawer
- **Floating Mobile Call Button**: Fixed bottom-right call icon on mobile
- **Footer**: Company info, quick links, service areas, phone number, copyright
- **Quote Modal**: Contact form (Name, Phone, Email, Service Needed, Message) triggered by "Request a Quote" buttons throughout the site
- **Scroll animations**: Fade-in-on-scroll for all sections using Intersection Observer

## Pages

### 1. Home Page
- **Hero**: Full-width background image with dark overlay, headline, subheadline, two CTA buttons (Call Now + Request Quote)
- **Services Preview**: 6 icon cards (Emergency, Leaks, Pipes, Bathroom, Kitchen, Heating) linking to Services page with hover animations
- **Why Choose B.P.S**: Icon cards highlighting trust factors (experience, speed, pricing, reliability, satisfaction)
- **Google Reviews Section**: Visually prominent section with 5 star-rated testimonial cards on a contrasting background
- **Service Locations**: Grid of UK cities served with location pin icons
- **Gallery Preview**: Small image grid with hover overlay effects
- **Final CTA Banner**: Dark full-width section with headline and two CTA buttons

### 2. About Us Page
- Company story, mission, values with professional imagery
- Trust-building content about experience and commitment
- CTA section at bottom

### 3. Services Page
- 7 detailed service sections (Emergency, Leak Detection, Pipe Installation, Bathroom, Kitchen, Heating, General Maintenance)
- Each with description, benefits list, and CTA button
- Alternating layout for visual interest

### 4. Gallery Page
- Masonry-style grid with category filter tabs (All, Repairs, Installations, Bathrooms, Kitchens, Pipework)
- Hover animations with overlay
- Lightbox modal for enlarged viewing
- Uses placeholder/Unsplash images

### 5. Contact / Request Quote Page
- Full contact form (Name, Phone, Email, Service Needed dropdown, Message)
- Phone number display with Call Now button
- Service areas list
- Embedded Google Map placeholder
- Form uses toast notification for submission feedback (no backend email sending without Supabase)

## Technical Details
- All pages use semantic HTML headings (H1, H2, H3) for SEO
- Page titles and meta descriptions set via document.title
- Fully responsive across desktop, tablet, and mobile
- Smooth scroll behavior enabled globally
- Intersection Observer for scroll-triggered fade-in animations
- Images sourced from Unsplash with dark overlays

