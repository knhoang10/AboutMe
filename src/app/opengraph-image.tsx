// Personal Data
import { siteData } from './data/siteData';
import { rankedTech } from './data/projectData';

// Components
import { shareImage, shareImageSize, siteHost } from './shareImage';

export const alt = `${siteData.name}, ${siteData.jobTitle}`;
export const size = shareImageSize;
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return shareImage({
    eyebrow: siteData.availability || 'Portfolio',
    title: siteData.name,
    subtitle: `${siteData.jobTitle} · ${siteData.location}`,
    tags: rankedTech.slice(0, 7),
    footer: siteHost,
    withPhoto: true,
  });
};
