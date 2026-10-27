import type { MetadataRoute } from 'next';
import { siteData } from './data/siteData';
import { caseStudyProjects, caseStudyPath } from './data/caseStudyData';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteData.url, lastModified: new Date() },
    { url: `${siteData.url}/resume`, lastModified: new Date() },
    ...caseStudyProjects.map((project) => ({ url: `${siteData.url}${caseStudyPath(project.slug)}`, lastModified: new Date() })),
  ];
}
