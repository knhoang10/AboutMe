// Personal Data
import { siteData } from '../data/siteData';
import { rankedTech } from '../data/projectData';

// Components
import { shareImage, shareImageSize, siteHost } from '../shareImage';

export const alt = `Resume of ${siteData.name}, ${siteData.jobTitle}`;
export const size = shareImageSize;
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return shareImage({
    eyebrow: 'Resume',
    title: siteData.name,
    subtitle: `${siteData.jobTitle} · ${siteData.location}`,
    tags: rankedTech.slice(0, 7),
    footer: `${siteHost}${siteData.resume}`,
    withPhoto: true,
  });
};
