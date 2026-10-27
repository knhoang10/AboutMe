import { siteData } from '../data/siteData';
import { resumeData } from '../data/resumeData';
import { caseStudyData, caseStudyProjects, caseStudyPath } from '../data/caseStudyData';

// /llms.txt: a short, hand-picked index for AI crawlers. Not the sitemap: who Kevin is,
// how to reach him, and the pages worth reading, each with one line. Built from the same
// data as the pages, so it can't drift from them.
const lines = [
  `# ${siteData.name}`,
  '',
  `> ${siteData.description}`,
  '',
  `${siteData.name} is a ${siteData.jobTitle.toLowerCase()} based in ${siteData.location}.${siteData.availability ? ` ${siteData.availability}.` : ''}`,
  '',
  '## Contact',
  '',
  `- Email: ${siteData.email}`,
  `- GitHub: ${siteData.github}`,
  `- LinkedIn: ${siteData.linkedin}`,
  '',
  '## Pages',
  '',
  `- [Portfolio](${siteData.url}/): projects, experience, and education`,
  `- [Resume](${siteData.url}${siteData.resume}): skills, experience, projects, and education as plain text`,
  `- [Resume PDF](${siteData.url}${resumeData.pdfPath}): the same resume as a PDF`,
  '',
  '## Case studies',
  '',
  ...caseStudyProjects.map((project) => `- [${project.name}](${siteData.url}${caseStudyPath(project.slug)}): ${caseStudyData[project.slug].description}`),
  '',
];

export function GET() {
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
