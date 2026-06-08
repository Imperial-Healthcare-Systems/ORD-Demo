# ODR Platform — Demo (Next.js)

Interactive prototype for an **Online Dispute Resolution** platform (Imperial Tech Innovations branding). Converted from a single-file HTML demo into a Next.js App Router + TypeScript app — each screen is now a real route with shared, reusable components.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
app/
  layout.tsx            # app shell: demo chrome bar + toast provider + page stage
  globals.css           # full design system (ported verbatim from the original <style>)
  page.tsx              # / — public marketing homepage
  login/                # /login — authentication + demo portal jump buttons
  claimant-dash/ file-dispute/ claimant-case/ doc-vault/      # Claimant portal
  respondent-dash/                                            # Respondent portal
  neutral-dash/ hearing-scheduler/ award/                     # Neutral portal
  hearing-room/ mediation-room/                               # Live sessions
  admin-dash/ case-mgmt/ assign-neutral/ payment-dash/        # Admin portal
  analytics/ notifications/
  mobile/              # /mobile — responsive phone mockups
components/
  Chrome.tsx           # top demo bar + breadcrumb (derived from the route)
  ToastProvider.tsx    # useToast() context + toast UI
  Sidebar.tsx Topbar.tsx
  Icon.tsx             # line icons from the shared registry
  Donut.tsx VidTile.tsx Phone.tsx
lib/
  routes.ts            # screen id -> URL path + breadcrumb label
  nav.ts               # per-role sidebar navigation data
  icons.ts             # SVG icon path registry
  useGo.ts             # navigate helper mirroring the original go(id)
  charts.ts            # linePath() helper for the analytics line charts
```

## Navigation model

The original demo navigated by screen id via `go(id)`. Here each screen is a route and
`go(id)` (`lib/useGo.ts`) maps the id to its URL via `lib/routes.ts`. Breadcrumbs in the
chrome bar are derived from the current pathname.

The original single-file demo is kept at `ODR-Platform-Demo.html` for reference.
