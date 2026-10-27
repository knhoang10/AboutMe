// The resume at /resume and /Kevin-Hoang-Resume.pdf. Experience, education and projects
// come from the same data files as the portfolio; only the summary and the skill
// groupings live here. Every skill is used in a project in projectData (SQL, Node.js and
// Git sit underneath PostgreSQL, Express and every repo).
export const resumeData = {
  pdfPath: '/Kevin-Hoang-Resume.pdf',
  summary: 'Full-stack software engineer building production web apps, automation, and data tools with TypeScript, React, Next.js, Python, and PostgreSQL. Background in aerospace systems engineering and a Master of Science in Mechanical Engineering, bringing an engineer\'s rigor to testing, validation, and shipping software end to end.',
  skills: [
    { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Swift', 'HTML', 'CSS'] },
    { group: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'TanStack Query', 'PWA', 'IndexedDB'] },
    { group: 'Backend & Data', items: ['Node.js', 'Express', 'FastAPI', 'Flask', 'Django', 'PostgreSQL', 'Supabase', 'Prisma', 'SQLAlchemy', 'Redis', 'BullMQ', 'pandas', 'NumPy'] },
    { group: 'Infrastructure & Tools', items: ['Docker', 'Vercel', 'Git', 'Stripe', 'Plaid API', 'Claude API', 'Puppeteer', 'Selenium', 'Jest', 'React Testing Library', 'K6'] },
  ],
};
