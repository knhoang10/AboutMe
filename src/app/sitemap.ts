import type { MetadataRoute } from 'next';
import { siteData } from './data/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  return [ { url: siteData.url, lastModified: new Date() } ];
}
