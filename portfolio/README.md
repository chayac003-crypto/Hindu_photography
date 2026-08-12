# Vaaram Lens — Photography Portfolio

A cinematic, premium single-page portfolio for a temple, heritage and culture
photographer. Built with React + Vite + Tailwind CSS + Framer Motion.

## Run locally / on Replit

```bash
npm install
npm run dev      # local dev server, http://localhost:5000
npm run build    # production build to /dist
npm run preview  # serve the production build on port 5000
```

On Replit, set the run command to `npm install && npm run dev` (or `npm run preview`
after building) and the workspace will bind to port 5000 automatically.

## Customize everything in one place

Open `src/config.js` to change:

- Brand name, tagline, photographer name
- Hero heading / image
- Email, Instagram, Facebook, WhatsApp links
- About text and stats

Open `src/data/gallery.js` to add, remove or edit photographs (title, location,
category, description, image URL). `src/data/stories.js` holds the four
heritage story cards.

## Replacing images

Drop your own photography into `public/images/{temples,heritage,architecture,
history,nature,culture}/` and point the `src` fields in `src/data/gallery.js`
at your local paths (e.g. `/images/temples/gopuram.jpg`) instead of the
Unsplash placeholders.

## Structure

```
src/
  components/   Navbar, Hero, Gallery, Lightbox, About, Contact, Footer, ...
  data/         gallery.js, stories.js
  hooks/        useScrollReveal, useCountUp
  config.js     single source of truth for brand + contact info
```
