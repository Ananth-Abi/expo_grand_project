# Expo Grand Apartment

Marketing site for **Expo Grand Apartment**, built by Expo Property Developers — a single-page, scroll-animated React site themed off the brand logo (gold / charcoal / green / soft gray).

## Stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/) for scroll-triggered reveals, parallax hero and page-scroll progress bar
- [React Icons](https://react-icons.github.io/react-icons/) for iconography
- Plain CSS (no framework) using CSS custom properties for the theme

## Sections

Hero · About · Amenities · Floor Plans (1BHK–Penthouse tabs) · Gallery · Location · Testimonials · Contact · Footer

All photography is currently placeholder gradient tiles (`src/components/PlaceholderImage.jsx`) — swap in real photos per section when available.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Deployment

Deployed via [Vercel](https://vercel.com) — connect this repo and it will auto-detect the Vite build (`npm run build`, output `dist/`).

## Theme tokens

Defined in `src/index.css`:

| Token | Hex | Use |
|---|---|---|
| `--gold` | `#c9a227` | Primary accent, CTAs |
| `--charcoal` | `#262524` | Text, dark sections |
| `--gray` | `#b5b3ae` | Secondary elements |
| `--green` | `#3fa34d` | Accent highlight |
| `--white` | `#fdfdfb` | Backgrounds |
