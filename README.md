This is my personal website that I have created to display my personality, projects, and experiences. This is to show that I am willing to expand my range of technologies while developing an application for the mobile and PC.

Live at **https://www.kevinhoang.dev**. The old `about-me-omega.vercel.app` address redirects there (see `next.config.js`).

## SEO

- Identity, the site URL and location live in `src/app/data/siteData.tsx`; every title, canonical, share tag and JSON-LD block reads from it.
- `src/app/seo.tsx` builds each page's metadata and the site-wide JSON-LD graph.
- Case studies live in `src/app/data/caseStudyData.tsx` and render at `/projects/<slug>`. A featured project gets a page when it has a `slug` with an entry there; the sitemap, footer and `/llms.txt` pick it up automatically.
- After changing anything the resume shows, regenerate the PDF: `npm run build && npm run resume:pdf`.

## Run locally with Docker

```bash
docker compose up --build
```

Then open http://localhost:3100. The source folder is mounted into the container, so saved changes reload in the browser automatically. Stop it with `Ctrl+C` or `docker compose down`.

Rebuild with `docker compose up --build` after changing `package.json`, the `Dockerfile` or `docker-compose.yml`.
