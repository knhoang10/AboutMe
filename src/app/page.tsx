// Library
import type { Metadata } from 'next';

// Components
import InitialPage from './initialPage';
import TransitionPage from './transitionPage';

// Personal Data
import { siteData } from './data/siteData';

// SEO
import { pageMetadata, personId, websiteId, JsonLd } from './seo';


const title = `${siteData.name} | ${siteData.jobTitle}`;

export const metadata: Metadata = pageMetadata({ title, description: siteData.description, path: '/' });

// The home page is a profile of one person; Google reads ProfilePage for exactly that
const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteData.url}/#profilepage`,
  url: siteData.url,
  name: title,
  isPartOf: { '@id': websiteId },
  mainEntity: { '@id': personId },
};

export default function App() {
  // The page renders straight into the HTML; the intro sits on top and fades itself out
  return (
    <>
      <JsonLd data={profilePageJsonLd} />
      <InitialPage />
      <TransitionPage />
    </>
  )
};
