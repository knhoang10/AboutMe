import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './style/globals.css';

// Personal Data
import { siteData } from './data/siteData';

// SEO
import { siteGraph, JsonLd } from './seo';

// Fonts (self-hosted by Next at build time)
const displayFont = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const monoFont = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

// Site-wide defaults. Each page sets its own title, description, and canonical with pageMetadata.
export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  title: `${siteData.name} | ${siteData.jobTitle}`,
  description: siteData.description,
  authors: [{ name: siteData.name, url: siteData.url }],
  creator: siteData.name,
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${monoFont.variable}`}>
      <body>
        <JsonLd data={siteGraph} />
        {children}
      </body>
    </html>
  )
}
