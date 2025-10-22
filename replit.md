# US Landscaping & Construction Website

A professional one-page marketing website for US Landscaping & Construction, a landscaping and construction business based in Waltham, Massachusetts.

## Overview

This is a modern, responsive website built with React, TypeScript, and Tailwind CSS featuring:
- Hero section with compelling call-to-action
- About section with business information
- Services showcase (Landscaping, Hardscaping, Lawn Maintenance, Construction)
- Photo gallery of completed projects
- Customer reviews/testimonials
- Contact form with backend functionality
- Professional footer with social links

## Project Structure

### Frontend (`client/`)
- **React + TypeScript** for UI components
- **Tailwind CSS** for styling with natural green color scheme
- **Shadcn UI** components for consistent design
- **Wouter** for routing
- **TanStack Query** for data fetching

### Backend (`server/`)
- **Express.js** server
- **In-memory storage** for contact form submissions
- RESTful API endpoints

### Key Features

#### Contact Form
- Fully functional contact form that saves submissions to backend
- Fields: Name, Email, Phone, Service Interest, Message
- Form validation and error handling
- Success/error toast notifications
- Submissions stored in memory (can be viewed at `/admin/submissions`)

#### Admin Panel
- View all contact form submissions at `/admin/submissions`
- Displays customer name, email, phone, service interest, message, and timestamp
- Clickable email/phone links for quick contact

## Technical Details

### Color Scheme
- Primary Green: `142 65% 35%` (deep forest green)
- Secondary/Muted: Light sage greens
- Background: Off-white
- Text: Dark slate

### Components
- `Header`: Fixed navigation with smooth scrolling
- `HeroSection`: Full-screen hero with background image
- `AboutSection`: Business description
- `ServicesSection`: Service cards with icons
- `GallerySection`: Photo gallery with lightbox
- `ReviewsSection`: Customer testimonials with star ratings
- `ContactSection`: Contact form and business info
- `Footer`: Company links and social media

### API Endpoints

#### POST `/api/contact`
Submit a contact form
- Body: `{ name, email, phone, service, message }`
- Returns: `{ success: boolean, message: string, id: string }`

#### GET `/api/contact-submissions`
Get all contact submissions (for admin review)
- Returns: Array of contact submissions with timestamps

## Future Enhancements

### Email Integration
Currently, contact form submissions are stored in-memory. To add email notifications:

1. **Option 1: Use Replit Integrations**
   - Set up Resend or SendGrid connector in Replit
   - Integration handles API keys and secrets automatically
   - Add email sending logic to `/api/contact` endpoint

2. **Option 2: Manual API Key Setup**
   - Get API key from Resend (resend.com) or SendGrid
   - Store as Replit secret: `RESEND_API_KEY` or `SENDGRID_API_KEY`
   - Install package: `npm install resend` or `@sendgrid/mail`
   - Update `server/routes.ts` to send emails on form submission

### Other Potential Additions
- Image optimization and lazy loading
- Google Maps embed for business location
- Blog/news section
- Before/after project comparisons
- Seasonal promotions section
- Live chat integration
- Google Analytics

## Business Information

**US Landscaping & Construction**
- Phone: (617) 380-7847
- Email: uslandscaping12@gmail.com
- Address: 270 River St, Waltham, MA

## Development

The site uses:
- Vite for development server and building
- Hot module replacement for fast development
- TypeScript for type safety
- ESLint for code quality

Run `npm run dev` to start the development server.
