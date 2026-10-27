import type { Metadata } from 'next';
import './style/globals.css';

// Personal Data
import { siteData } from './data/siteData';
import { projectData } from './data/projectData';

const title = `${siteData.name} | ${siteData.jobTitle}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  title,
  description: siteData.description,
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'profile',
    url: '/',
    title,
    description: siteData.description,
    siteName: `${siteData.name} Portfolio`,
    images: [{ url: '/headshot.png', width: 750, height: 750, alt: `Portrait of ${siteData.name}` }],
  },
  twitter: {
    card: 'summary',
    title,
    description: siteData.description,
    images: ['/headshot.png'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteData.url}/#person`,
  name: siteData.name,
  url: siteData.url,
  image: `${siteData.url}/headshot.png`,
  jobTitle: siteData.jobTitle,
  email: `mailto:${siteData.email}`,
  sameAs: [ siteData.github, siteData.linkedin ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of Connecticut' },
    { '@type': 'EducationalOrganization', name: 'Hack Reactor' },
  ],
  knowsAbout: Array.from(new Set(projectData.flatMap((project) => project.techStack))),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  )
}
