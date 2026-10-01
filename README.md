# SikaEvents

A multi-page React app for discovering festivals, concerts, food fairs and
cultural events across Ghana. Built with Vite and React Router.

![Stack](https://img.shields.io/badge/React-19-61dafb) ![Vite](https://img.shields.io/badge/Vite-8-646cff) ![Router](https://img.shields.io/badge/React%20Router-7-ca4243)

## Pages

| Route | What it does |
| --- | --- |
| `/` | Hero, next three dates, category browser, featured event, CTA |
| `/events` | Full calendar with search, region, price, category and sort filters |
| `/events/:eventId` | Individual listing with full details, tags and related events |
| `/about` | Story, values, timeline, team and FAQ |
| `/contact` | Validated contact / event-submission form plus office details |
| `*` | 404 page |

## Getting started

```bash
npm install
npm run dev      # start the dev server on http://localhost:5173
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server with hot module replacement |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Server-render every route and assert its content |

## How it is put together

```
src/
├── main.jsx                 # BrowserRouter + entry point
├── App.jsx                  # Layout shell and route table
├── index.css                # Design tokens, components and responsive rules
├── data/
│   └── events.js            # Event catalogue and formatters
├── components/
│   ├── Header.jsx           # Sticky nav with active states + mobile menu
│   ├── Footer.jsx           # Four-column footer with region shortcuts
│   ├── EventCard.jsx        # Reusable event card
│   └── ScrollToTop.jsx      # Resets scroll on navigation
└── pages/
    ├── Home.jsx
    ├── Events.jsx
    ├── EventDetail.jsx
    ├── About.jsx
    ├── Contact.jsx
    └── NotFound.jsx
```

**Filters live in the URL.** The Events page keeps its state in query
parameters via `useSearchParams`, so `/events?category=Music` is shareable and
survives a refresh. The footer links to those same filtered views.

**Event posters are CSS gradients,** not images — there are no external image
requests, so nothing can break and nothing loads slowly offline.

**Validation is hand-rolled** in `Contact.jsx` (no form library), covering empty
fields, email shape and a minimum message length, with `aria-invalid` and
`aria-describedby` wired to the error text.

**Responsive and accessible:** semantic landmarks, a skip link, keyboard-visible
focus rings, labelled form controls, and a hamburger menu below 820px. Motion
is disabled for users who have `prefers-reduced-motion` set.

## Tests

`npm test` builds the app for the server and renders every route with
`renderToString`, asserting each page contains its expected content, that the
header and footer are present, that each filter returns the right events, and
that a no-results search shows the empty state.

## Notes

Event details are illustrative sample data for a demonstration app. Dates and
organiser details are confirmed with organisers before publication in a real
deployment.