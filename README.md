# Portfolio

A modern, high-performance personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Minimalist Dark Theme** with subtle gradients and glassmorphism effects
- ✨ **Bento Grid Layout** for projects section
- 🔄 **Typewriter Animation** in hero section
- 🎭 **Smooth Animations** with Framer Motion
- 📱 **Fully Responsive** (Mobile-first design)
- 📝 **Contact Form** with validation

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18.17 or later).

### Installation

1. Navigate to the project directory:
   ```bash
   cd portofolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main page
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section with typewriter
│   ├── AnimatedBackground.tsx
│   ├── TechStack.tsx    # Tech stack marquee
│   ├── Projects.tsx     # Bento grid projects
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
└── lib/
    └── animations.ts    # Framer Motion variants
```

## Customization

- **Colors:** Edit `tailwind.config.ts` to change the color palette
- **Projects:** Update the `projects` array in `src/components/Projects.tsx`
- **Tech Stack:** Modify the `technologies` array in `src/components/TechStack.tsx`
- **Social Links:** Update links in `Hero.tsx` and `Footer.tsx`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
