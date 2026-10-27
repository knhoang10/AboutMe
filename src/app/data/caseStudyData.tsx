// The write-ups at /projects/<slug>. Each one is about how the project was built:
// architecture, the hard problems, and how it was tested. Stealth projects stay
// engineering-only; nothing here explains a product concept, workflow, or pricing.
import { projectData, ProjectInfo } from './projectData';

export type CaseStudySection = {
  heading: string,
  paragraphs: string[],
  bullets?: string[],
};

export type CaseStudy = {
  // The meta description, about 150 characters
  description: string,
  // Answer-first: what it is and why it was interesting to build
  intro: string,
  sections: CaseStudySection[],
};

export const caseStudyData: Record<string, CaseStudy> = {
  'real-estate-transaction-platform': {
    description: 'Engineering write-up of a stealth full-stack platform: prerendered React, Supabase edge functions, Stripe checkout, verifiable e-signatures, and generated PDFs.',
    intro: 'This product has not launched yet, so this page covers how it is built rather than what it does. It is a full-stack TypeScript application I designed and built from the ground up: prerendered marketing pages, secure accounts, Stripe checkout, e-signatures that can be verified after the fact, generated PDF documents, and transactional email, with every important state change handled by a serverless edge function.',
    sections: [
      {
        heading: 'How is the platform structured?',
        paragraphs: [
          'The front end is React, TypeScript, and Tailwind CSS on Vite, statically generated so every public page ships as real HTML for search engines and link previews. The back end is Supabase: Postgres with row-level security, authentication, storage, and a set of Deno edge functions that own every write that matters, from starting an order and creating a checkout session to handling the Stripe webhook, recording signatures, and running admin actions. Forms validate their input with Zod, and email goes out through Resend.',
          'The whole stack runs in Docker, including a local Supabase instance, so migrations, policies, and edge functions are exercised locally against a copy of production before they ship.',
        ],
      },
      {
        heading: 'How does one fact stay consistent across pages, payments, and documents?',
        paragraphs: [
          'Every business fact has exactly one home. Shared modules hold prices, terms, and document text, and the browser bundle, the Deno edge functions, and the Node build scripts all import them, which means they have to stay dependency-free. The same module feeds the pricing page, that page\'s structured data, the checkout function, and the generated documents, so none of them can disagree with another.',
          'Prices are computed on the server. The browser never sends an amount: the checkout function prices the order itself before it creates the Stripe session.',
        ],
      },
      {
        heading: 'How can an e-signature be verified after the fact?',
        paragraphs: [
          'When someone signs, the server rebuilds the exact document text from its source and hashes it, and the signature is accepted only if that hash matches the hash of the text the signer was shown. The typed name, IP address, and timestamp are recorded with each signature. Invitations for additional signers use tokens that are stored only as SHA-256 hashes, so even a leaked database would not contain a working link.',
        ],
      },
      {
        heading: 'How are the PDF documents generated?',
        paragraphs: [
          'Documents are produced with pdf-lib inside the edge functions. Some are drawn from scratch; others fill fixed-layout forms, where a script generates the position of every field from a single source, and a check fails whenever the generated files are out of date. Completed documents are stored when they are signed and re-rendered when the final signature is added, so the stored copy always matches what every party signed.',
        ],
      },
      {
        heading: 'What enforces database permissions when row-level security is not enough?',
        paragraphs: [
          'Row-level security decides which rows a user can touch, but not which columns. So a user may update only one data column on their own record, and only while that record is in an editable state, which a Postgres trigger enforces. Every status change goes through an edge function running with the service role, or through an admin whose role is read from the signed token\'s app metadata. The policies have their own SQL test suite.',
          'Industry rules the product has to follow are enforced in the code paths that could break them, not left to the copywriting.',
        ],
      },
    ],
  },

  'marketing-automation-saas': {
    description: 'Engineering write-up of a stealth multi-service SaaS: Next.js and Prisma, a BullMQ job queue, Puppeteer and Remotion render services, Stripe, and the Claude API.',
    intro: 'This product has not launched yet, so this page covers how it is built rather than what it does. It is a multi-service SaaS that turns raw inputs into finished, on-brand images and videos and publishes them on a schedule. Six containerized services cooperate through a database and a job queue, and the whole system starts with one command.',
    sections: [
      {
        heading: 'What are the six services, and why split them up?',
        paragraphs: [
          'A Next.js app in TypeScript, with Prisma over PostgreSQL, serves the product and its API. Redis backs a BullMQ job queue, and a long-running worker process executes the jobs. Rendering is isolated in two services of its own: a headless-Chrome service (Puppeteer) that turns HTML templates into images, and a Remotion service that composes videos from React components.',
          'Keeping heavy, memory-hungry rendering out of the web app means a long render never slows down a page request, and each renderer can restart or scale on its own. Docker Compose runs all six services together, and the app container applies database migrations at startup, so a fresh checkout becomes a working, migrated system with a single command.',
        ],
      },
      {
        heading: 'How do long video renders report their progress?',
        paragraphs: [
          'A video render can take minutes, so it never runs inside a request. The web app enqueues a job; the worker starts the render on the video service, polls it, and mirrors its progress onto the BullMQ job, which the interface polls in turn. Every render has a hard 20-minute ceiling, and the finished MP4 is uploaded to a media CDN (Cloudinary) whose URL becomes the job\'s result.',
          'The services authenticate one another with a shared-secret header, so neither renderer is an open endpoint.',
        ],
      },
      {
        heading: 'How does scheduled publishing stay reliable?',
        paragraphs: [
          'Each publish is a delayed queue job rather than a row that a cron job scans for, so every post fires at its own time and a failed attempt can be retried. The same worker refreshes long-lived OAuth tokens for connected third-party accounts before they expire, refreshes engagement metrics, runs a nightly data sync, and sweeps up media that users have deleted.',
        ],
      },
      {
        heading: 'Where do billing, sign-in, and AI fit in?',
        paragraphs: [
          'NextAuth handles sign-in with Google OAuth and email magic links. Stripe manages subscriptions, with webhooks keeping the database in step, and the Stripe CLI forwards events during development. The Claude API drafts copy and describes uploaded images. The model is a configuration setting, so development can run on a smaller, cheaper model than production.',
        ],
      },
      {
        heading: 'How is the rendered output kept consistent between machines?',
        paragraphs: [
          'The image renderer ships its own font files inside its container instead of relying on whatever the host has installed, so an image looks the same on a laptop and in production. Video compositions are ordinary React components driven by typed input props, which makes them as reviewable as the rest of the code.',
        ],
      },
    ],
  },

  'punch-list': {
    description: 'How Kevin Hoang built Punch List, an offline-first PWA for tradespeople: IndexedDB storage, two-way Supabase sync, and invoices rendered as PDFs on the phone.',
    intro: 'Punch List is an offline-first progressive web app that runs a one-person trade business from a phone: jobs, estimates, invoices, receipts, and mileage. Every screen reads and writes a database on the device, so the app keeps working with zero signal, and finished documents are rendered as PDFs on the phone itself. I designed and built it end to end.',
    sections: [
      {
        heading: 'How does Punch List keep working with no signal?',
        paragraphs: [
          'The device is the working copy. All data lives in IndexedDB through Dexie, photos are stored as Blobs, and no screen ever waits on the network. A Workbox service worker (vite-plugin-pwa) precaches the full app, including the font files the PDF renderer needs, so it opens instantly from the home screen and can produce a finished invoice in a basement with no reception.',
          'An offline Playwright test runs the same job, receipt, estimate, invoice, and payment walkthrough as the main end-to-end test, with the network switched off. Working offline is something the tests prove, not something the README claims.',
        ],
      },
      {
        heading: 'How does the two-way sync with Supabase work?',
        paragraphs: [
          'Sync is layered on top of the local database, not underneath it. A sync engine moves changes in both directions between Dexie and Postgres whenever a connection exists, keeping a watermark per table so each pull fetches only the rows changed since the last one.',
          'Pushes run in dependency order (settings, clients, properties, jobs, photos, then documents and payments), so another device never receives a job whose client has not arrived yet. Photo Blobs upload to storage separately, after the rows that point at them.',
        ],
      },
      {
        heading: 'Why render invoices on the phone instead of a server?',
        paragraphs: [
          'There is no document server to go down or pay for. pdfmake builds every invoice, estimate, and receipt in the browser with the Inter typeface embedded, and a single layout module defines the whole print design (type scale, rules, totals block, and balance band), so all three document types change together.',
          'To send a document as an image that previews inline in a text message, pdf.js rasterizes the generated PDF to a PNG, so the image is the PDF rather than a separately drawn lookalike. Supplier receipts attached to an invoice are merged in with pdf-lib, each on a page of its own, scaled to fit and turned the right way up. Sharing uses the Web Share API, falling back to a download on desktop.',
        ],
      },
      {
        heading: 'What keeps the financial records correct?',
        paragraphs: [
          'Money is stored as integer cents everywhere, and dates are ISO strings parsed as local time, never UTC, so an invoice is never dated a day early. Document numbers are allocated inside a read-write IndexedDB transaction, so a double-tapped button cannot mint two invoices with the same number, and the sequences have no gaps. Invoice and estimate numbers carry the year and reset each January.',
          'Issued documents snapshot the business and client details at the moment they are issued, so editing a client\'s address next year does not rewrite last year\'s invoice. Every generated file is kept against its invoice or estimate as a record of exactly what the customer was given.',
        ],
      },
      {
        heading: 'How are backups and the print design tested?',
        paragraphs: [
          'A backup is a zip built with fflate: a JSON manifest, the original photos, and every kept document, plus CSVs of income, expenses, and mileage for an accountant. A preview script renders every document variation (full, labor-only, paid, multi-page, estimate, and both receipt states) so the print design can be reviewed without a browser. Development runs in Docker, with an optional local Supabase stack so nothing touches production data.',
        ],
      },
    ],
  },

  'kevinhoang-co': {
    description: 'How Kevin Hoang built kevinhoang.co: a prerendered React site with a built-in CRM, a tested home-price estimator, a Vietnamese section, and automated SEO.',
    intro: 'kevinhoang.co is the website for my real-estate business, and I built every part of it: more than a hundred prerendered pages, a built-in CRM and admin tools, a comparable-sales price estimator, and a Vietnamese-language section. It is a React and TypeScript app on Supabase that statically generates every public route, so search engines and AI crawlers see real content instead of an empty JavaScript shell.',
    sections: [
      {
        heading: 'Why prerender a React app instead of shipping a single-page app?',
        paragraphs: [
          'Most crawlers, social link previews, and AI retrievers do not run JavaScript, so a client-rendered React app shows them a blank page. The site uses vite-react-ssg to prerender every route to HTML at build time, with each page\'s title, canonical URL, Open Graph tags, and JSON-LD coming from one Seo component. There is no catch-all rewrite to index.html, so a URL that was never prerendered returns a real 404 instead of posing as a page.',
          'Getting there meant finding and writing down a set of hydration rules, each one learned from a real bug:',
        ],
        bullets: [
          'Load the app script with defer, not async, to avoid a race on the static-data manifest.',
          'Never read window, localStorage, or the query string during the first render.',
          'Keep the language fixed at build time and apply a visitor\'s saved preference after mount.',
          'Never nest one link inside another.',
          'Prerender private admin and CRM routes too, and keep them out of search with noindex, because withholding their HTML made the host serve the homepage\'s markup at those URLs.',
        ],
      },
      {
        heading: 'How does the build produce its own SEO files?',
        paragraphs: [
          'The build is a pipeline: typecheck, prerender every route, generate sitemap.xml and llms.txt from one route registry, then submit changed URLs through IndexNow. When a batch of thin blog posts was retired, their slugs were frozen into a committed redirect map first, and a script generates the 301 redirects from that file, so old links still resolve.',
          'Listing data used to be fetched inside an effect, so the prerendered page held a spinner instead of listings. A sync script now writes a committed snapshot that is rendered into the HTML, and the live fetch still refreshes it after hydration.',
        ],
      },
      {
        heading: 'How was the home-price estimator tested?',
        paragraphs: [
          'Listing pages show a comparable-sales estimate. All of the math lives in one pure module with no network or DOM access, so it can run against a synthetic market generated from known parameters, and a check asserts that the estimator recovers them. A separate backtest values homes that actually sold, as of each sale\'s own date and with later sales removed, because letting a model see sales from a home\'s future is the easiest way to make a backtest look better than it is.',
          'The comparable-selection rules were tightened after reviewing live output: an estimate is built from five closely matched sales or not shown at all, and widening the search widens the distance, never the definition of a similar home.',
        ],
      },
      {
        heading: 'What runs behind the public pages?',
        paragraphs: [
          'Supabase provides authentication, Postgres, and storage for a built-in CRM (contacts, deals, and follow-ups), lead capture, rental applications, open-house sign-in, saved homes, market reports, and analytics dashboards built with Recharts.',
          'The Vietnamese-language section is served as real prerendered routes rather than a client-side language toggle, because a toggle\'s translations are never crawled in that language.',
        ],
      },
      {
        heading: 'How does the site stay maintainable after 150 commits?',
        paragraphs: [
          'Identity and contact details live in one config module that every page, email, and schema block reads, so they cannot drift apart. A project guide records each rule next to the bug that prompted it, and the build fails on any type error by design. The whole stack also runs in Docker for development.',
        ],
      },
    ],
  },

  'algorithmic-trading-engine': {
    description: 'How Kevin Hoang built a regime-aware swing-trading system in Python, with a survivorship-bias-free backtesting harness and a holdout period it cannot tune on.',
    intro: 'This is a long-only swing-trading system in Python. Each day it scans a universe of liquid ETFs and large-cap stocks, turns its signals into orders through the Alpaca brokerage API (paper trading by default), journals every decision, and reviews its own results each month. The most important part is not the strategy but the validation harness, which exists to keep the backtest numbers honest even when honest means less impressive.',
    sections: [
      {
        heading: 'How does the daily pipeline decide what to trade?',
        paragraphs: [
          'A scheduled run (APScheduler) pulls price history and classifies the market regime: trend (above or below the 200-day average) crossed with volatility (high or low realized volatility). Each strategy sleeve proposes positions only in the regimes it is allowed to trade. The sleeves cover index rotation, momentum across a screened stock list, and short-term pullbacks.',
          'A shared risk layer then applies volatility targeting, per-position caps, a drawdown circuit breaker measured against a rolling one-year peak, a maximum daily loss, and a kill switch before any order reaches the broker. Configuration is validated with Pydantic models, and the research data is stored as Parquet.',
        ],
      },
      {
        heading: 'What makes the backtests trustworthy?',
        paragraphs: [
          'Early versions produced exciting numbers that turned out to come from testing on a hand-assembled list of stocks that had already done well. The harness was rebuilt to remove each source of flattery:',
        ],
        bullets: [
          'A point-in-time universe. Index membership is rebuilt from dated additions and removals, and companies that failed are booked as total losses, so the backtest cannot pick only from survivors.',
          'One screen for live and backtest. A single liquidity rule decides what is tradable on each date in both paths, so a backtest trades only what the live system could have traded.',
          'An engine that trades like the live system. Positions drift between trades and are adjusted only when the target moves past a rebalance band, instead of being reset to target every day at no cost.',
          'Real fill prices. Orders fill at the actual opening and closing auction prices, not the daily bar\'s open, a mistake that had produced a false result in an earlier study.',
          'Several start days. Every study runs from seven different start days, because a single backtest moved substantially depending on which day of the month it re-ranked.',
          'A holdout it cannot tune on. Recent years are cut out of everything that tunes, and every look at the holdout is logged.',
        ],
      },
      {
        heading: 'Can the trading system change its own rules?',
        paragraphs: [
          'No, by design. A monthly review tests alternative settings on tuning data only, judging each test year with rules chosen from earlier years, and writes a proposal when one wins consistently. A change happens only by hand. A sleeve whose last 40 trades have negative expectancy is muted automatically and unmuted when it recovers, but the capital split stays fixed unless it is explicitly switched to adaptive.',
          'An optional weekly analyst built on the Claude API reads the journal and writes a plain-language review, plus hypotheses for the monthly review to test. It never places a trade.',
        ],
      },
      {
        heading: 'How is every trading decision recorded?',
        paragraphs: [
          'Each trade is journaled to CSV and SQLite with its entry and exit reasons, profit and loss, R-multiple, maximum adverse and favorable excursion, and the regime at entry. A local dashboard shows KPI tiles; equity against two benchmarks (the index, and an equal-weighted version of the stock list, so hand-picked winners cannot pass as skill); drawdown with a regime strip; a monthly heatmap; and per-trade replay charts drawn with Matplotlib.',
          'A rulebook describes the active configuration in plain language, and a test fails if any setting is unexplained or the rulebook is out of date.',
        ],
      },
      {
        heading: 'What did the research actually show?',
        paragraphs: [
          'Most ideas did not survive. Sixteen chart rules, a learned model on 30 price and volume features, earnings headlines, calendar patterns, and intraday rules were each tested against a plain alternative after costs, and none beat it. The one idea that passed a test written down in advance and scored once on unseen data is built in, switched off by default. The negative results are recorded alongside the positive one on purpose: the harness is there to stop me from fooling myself.',
        ],
      },
    ],
  },

  'personal-finance-platform': {
    description: 'How Kevin Hoang built a self-hosted finance app with FastAPI, React, and Plaid: automatic bank sync, categorization that learns, and backups that test themselves.',
    intro: 'This is a self-hosted web app that replaced a yearly budgeting spreadsheet. Bank and card transactions arrive on their own through Plaid, get cleaned up and categorized, and only the ones the app is unsure about need a person to look at them. It runs in Docker on a home server, reachable only from the home network or over a VPN, and it backs itself up and tests its own restores.',
    sections: [
      {
        heading: 'How is the finance app put together?',
        paragraphs: [
          'It is one container. FastAPI (Python 3.12) serves both the JSON API and the built React app, SQLAlchemy 2 maps the data, and Alembic migrations evolve the schema. The React front end uses TypeScript, TanStack Query for server state, and Recharts for the dashboards.',
          'All of the financial math (taxes, budgets, shared expenses, card rewards, and paycheck estimates) lives in a core package with no I/O, which keeps it unit-testable; services around it handle bank sync, categorization, imports, and backups. Rules that change over time are data, not code: tax brackets live in one YAML file per year, and card-reward rules and merchant clean-up patterns are editable YAML files too.',
        ],
      },
      {
        heading: 'How do transactions get from the bank into the app?',
        paragraphs: [
          'Plaid connects each institution, and a scheduler inside the app (APScheduler) pulls new transactions several times a day, plus statements, holdings, and a connection health check every morning. If the server was off, missed jobs run when it comes back. Bank-connection tokens are encrypted with a key kept outside the database, and the login password is hashed with Argon2.',
          'Development runs against Plaid\'s sandbox and a separate database, so it never touches real data.',
        ],
      },
      {
        heading: 'How does categorization learn from corrections?',
        paragraphs: [
          'New purchases land in an inbox grouped by merchant, each with a cleaned-up name and a suggested category. Confirming or correcting a group turns the correction into a rule, so the next transaction from that merchant arrives already filled in. Transfers, card payments, and deposits are recognized and kept out of spending, paystub PDFs are parsed with pdfplumber for exact paycheck figures, and nightly jobs detect recurring bills and record a net-worth snapshot.',
        ],
      },
      {
        heading: 'How do you migrate years of spreadsheet history safely?',
        paragraphs: [
          'An importer built on openpyxl reads the original workbooks, with a dry-run mode that reports what it would change before anything is applied. A verify command then compares the app\'s totals with each workbook, and golden tests run that comparison against the real files, so the migration is checked by the numbers rather than by eye.',
        ],
      },
      {
        heading: 'What happens if the home server dies?',
        paragraphs: [
          'Every night the app writes a compressed database snapshot, keeping 14 daily and 12 monthly copies, optionally encrypted with age. A second machine copies new backups off the server twice a day, and every Sunday a job restores the latest backup to prove it actually works. Deploying is a single make target that copies the code to the server, builds the image there, and restarts the app.',
        ],
      },
    ],
  },
};

// The featured projects that have a write-up, in portfolio order. The project cards,
// the routes, the sitemap, the footer, and llms.txt all read this one list.
export type CaseStudyProject = ProjectInfo & { slug: string };

export const caseStudyProjects = projectData.filter(
  (project): project is CaseStudyProject => Boolean(project.slug && caseStudyData[project.slug])
);

export const caseStudyPath = (slug: string) => `/projects/${slug}`;
