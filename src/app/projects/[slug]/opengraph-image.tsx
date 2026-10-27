// Personal Data
import { siteData } from '../../data/siteData';
import { caseStudyProjects, caseStudyPath } from '../../data/caseStudyData';

// Components
import { shareImage, shareImageSize, siteHost } from '../../shareImage';

export const alt = `A case study by ${siteData.name}`;
export const size = shareImageSize;
export const contentType = 'image/png';

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export default function OpenGraphImage({ params }: { params: { slug: string } }) {
  const project = caseStudyProjects.find((candidate) => candidate.slug === params.slug);
  return shareImage({
    eyebrow: `Case study · ${project?.year ?? ''}`,
    title: project?.name ?? siteData.name,
    subtitle: `${project?.role ?? siteData.jobTitle} · ${siteData.name}`,
    tags: project?.techStack.slice(0, 7) ?? [],
    footer: `${siteHost}${project ? caseStudyPath(project.slug) : ''}`,
  });
};
