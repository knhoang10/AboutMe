This is my personal website that I have created to display my personality, projects, and experiences. This is to show that I am willing to expand my range of technologies while developing an application for the mobile and PC.

## Run locally with Docker

```bash
docker compose up --build
```

Then open http://localhost:3100. The source folder is mounted into the container, so saved changes reload in the browser automatically. Stop it with `Ctrl+C` or `docker compose down`.

Rebuild with `docker compose up --build` after changing `package.json`, the `Dockerfile` or `docker-compose.yml`.
