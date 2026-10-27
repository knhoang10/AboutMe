// Library
import type { Metadata } from 'next';

// Personal Data
import { siteData } from './data/siteData';
import { projectData } from './data/projectData';
import { experienceData } from './data/experienceData';
import { educationData } from './data/educationData';
import { resumeData } from './data/resumeData';


// Every page builds its head here, so the title, canonical, and share tags can never drift
// apart. The share image comes from the opengraph-image file next to each route.
type PageMetadataProps = {
  title: string,
  description: string,
  path: string,
  type?: 'profile' | 'article',
};

export function pageMetadata({ title, description, path, type = 'profile' }: PageMetadataProps): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type, url: path, title, description, siteName: siteData.name, locale: 'en_US' },
    twitter: { card: 'summary_large_image', title, description },
  };
}


// Structured data -----------------------------------
// The layout emits the WebSite and Person nodes on every page, so any page can point at
// them by @id and the reference resolves.
export const personId = `${siteData.url}/#person`;
export const websiteId = `${siteData.url}/#website`;

const currentRoles = experienceData.filter((experience) => experience.time.includes('Present'));
const schools = Array.from(new Map(educationData.map((education) => [ education.name, education ])).values());
const region = { '@type': 'State', name: siteData.region.name, address: { '@type': 'PostalAddress', addressRegion: siteData.region.code, addressCountry: siteData.region.country } };

export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteData.url,
      name: siteData.name,
      description: siteData.description,
      inLanguage: 'en-US',
      publisher: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: siteData.name,
      url: siteData.url,
      image: `${siteData.url}/headshot.png`,
      jobTitle: siteData.jobTitle,
      description: siteData.description,
      email: `mailto:${siteData.email}`,
      homeLocation: region,
      worksFor: currentRoles.map((role) => ({ '@type': 'Organization', name: role.name })),
      hasOccupation: {
        '@type': 'Occupation',
        name: siteData.jobTitle,
        occupationLocation: region,
        skills: resumeData.skills.flatMap((skill) => skill.items),
      },
      alumniOf: schools.map((school) => ({ '@type': school.schoolType, name: school.name })),
      hasCredential: educationData.map((education) => ({
        '@type': 'EducationalOccupationalCredential',
        name: education.field ? `${education.degree}, ${education.field}` : education.degree,
        credentialCategory: education.schoolType === 'CollegeOrUniversity' ? 'degree' : 'certificate',
        recognizedBy: { '@type': education.schoolType, name: education.name },
      })),
      knowsAbout: Array.from(new Set(projectData.flatMap((project) => project.techStack))),
      sameAs: [ siteData.github, siteData.linkedin ],
    },
  ],
};

// A <script> holding JSON-LD. `<` is escaped so no string in the data can close the tag.
export function JsonLd({ data }: { data: object }) {
  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
};
