# Alex Morgan — Portfolio

A responsive Next.js App Router portfolio with Home, About, Projects, and Contact pages. The app uses TypeScript, custom CSS Modules, local SVG artwork, and request-time server rendering.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production build, run `npm run build` followed by `npm start`. Run `npm run typecheck` to check TypeScript.

## Update the placeholder content

- Edit the profile, skills, experience, social URLs, and project cards in `content/portfolio.ts`.
- Replace the sample project artwork in `public/images/` and update each project’s image path and alt text.
- Update the sample email and social profile URLs before publishing.

The Contact page uses a `mailto:` link, not a message form, so it does not imply that messages are sent to a backend.

## Routes

- `/` — introduction and selected work
- `/about` — background, focus areas, skills, and experience
- `/projects` — project gallery
- `/contact` — email and social contact links

