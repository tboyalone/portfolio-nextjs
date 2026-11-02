# Integration hand-off

## Services
- Essential: Portfolio web app, Next.js App Router, project root `.`.
- Enhancement: None.
- Run locally: `npm run dev` (port 3000).
- Build: `npm run build`; production server: `npm start`.
- Type check: `npm run typecheck`.
- Health endpoint: None; verify the four page routes over HTTP.

## Frontend
- Project folder: `.`.
- Dev command: `npm run dev`.
- Build command: `npm run build`.
- Data seam: `content/portfolio.ts` (typed profile, skills, experience, projects, and contact links). No API client is present; if a backend is added later, create a client seam here.
- Mock files to remove: None. The listed content and artwork are editable portfolio placeholders, not separate mock datasets.
- Local assets: `public/images/*.svg`.

## API routes
- None. Public pages: `GET /`, `GET /about`, `GET /projects`, `GET /contact`.

## Database and migrations
- Database: None required.
- Migration tool/directory: None.
- Connection environment variables: None.
- Schema migrations and seed data: Not applicable; explicitly do not add a database or seed data.

## Shared types
- Location: `content/portfolio.ts` (including `Project`).
- Package/import alias: `@/content/portfolio`; no separate shared package.

