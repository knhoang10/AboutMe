// Prints the /resume page to public/Kevin-Hoang-Resume.pdf with headless Chrome, so the PDF is
// the same text as the page (selectable and readable by applicant tracking systems).
//
// Run after changing anything the resume shows:  npm run build && npm run resume:pdf
// Set CHROME_PATH if Chrome is not in the default macOS location.
import { spawn, execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const port = 3399;
const url = `http://localhost:${port}/resume`;
const output = 'public/Kevin-Hoang-Resume.pdf';
const chrome = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

if (!existsSync(chrome)) {
  console.error(`Chrome not found at ${chrome}. Set CHROME_PATH.`);
  process.exit(1);
}

// Serve the production build on a spare port
const server = spawn('npx', [ 'next', 'start', '-p', String(port) ], { stdio: 'ignore' });
const stop = () => server.kill();

try {
  // Wait for the server to answer
  const started = Date.now();
  for (;;) {
    try {
      if ((await fetch(url)).ok) break;
    } catch {}
    if (Date.now() - started > 30000) throw new Error(`No response from ${url}. Did you run npm run build?`);
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  execFileSync(chrome, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${output}`,
    url,
  ], { stdio: 'ignore' });
  console.log(`Wrote ${output}`);
} finally {
  stop();
}
