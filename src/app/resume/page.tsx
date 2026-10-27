// Library
import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';

// Personal Data
import { siteData } from '../data/siteData';
import { resumeData } from '../data/resumeData';
import { experienceData } from '../data/experienceData';
import { educationData } from '../data/educationData';
import { featuredProjects } from '../data/projectData';

// Styling
import * as styles from '../style/constantStyles';


// A plain, single-column resume: real text in standard sections, so applicant tracking
// systems and search engines can read it. The PDF is this page printed (npm run resume:pdf).
const title = `Resume | ${siteData.name}, ${siteData.jobTitle}`;
const description = `Resume of ${siteData.name}, ${siteData.jobTitle}: skills, experience, projects, and education.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/resume' },
  openGraph: {
    type: 'profile',
    url: '/resume',
    title,
    description,
    siteName: `${siteData.name} Portfolio`,
    images: [{ url: '/headshot.png', width: 750, height: 750, alt: `Portrait of ${siteData.name}` }],
  },
};

// Helpers
const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
const displayTime = (time: string) => time.replace(' - ', ' – ');
const sentences = (text: string) => text.split(/(?<=\.)\s+/).filter(Boolean);

// Newest first; projects from the same year keep their portfolio order
const resumeProjects = [ ...featuredProjects ].sort((a, b) => Number(b.year) - Number(a.year));

const contactItems = [
  { label: siteData.email, href: `mailto:${siteData.email}` },
  { label: siteData.phoneDisplay, href: `tel:${siteData.phoneTel}` },
  { label: displayUrl(siteData.url), href: siteData.url },
  { label: displayUrl(siteData.github), href: siteData.github },
  { label: displayUrl(siteData.linkedin), href: siteData.linkedin },
];

function ResumeSection({ title, children }: { title: string, children: ReactNode }) {
  return (
    <section className={styles.resumeSectionStyle}>
      <h2 className={styles.resumeHeadingStyle}>{title}</h2>
      {children}
    </section>
  )
};

export default function ResumePage() {
  return (
    <div className={styles.resumePageStyle}>
      <div className={styles.resumeToolbarStyle}>
        <Link href='/' className={styles.resumeBackStyle}>&larr; <span className='text-gold'>~/</span>kevin-hoang</Link>
        <a href={resumeData.pdfPath} download className='btn-primary'>Download PDF</a>
      </div>

      <article className={styles.resumeSheetStyle}>
        <header className='mb-5'>
          <h1 className={styles.resumeNameStyle}>{siteData.name}</h1>
          <p className={styles.resumeTitleStyle}>{siteData.jobTitle}</p>
          <p className={styles.resumeContactStyle}>
            {contactItems.map((item, index) => (
              <span key={item.label}>
                {index > 0 && <span className='px-1.5 text-slate-400'>|</span>}
                <a href={item.href} className='hover:underline'>{item.label}</a>
              </span>
            ))}
          </p>
        </header>

        <ResumeSection title='Summary'>
          <p>{resumeData.summary}</p>
        </ResumeSection>

        <ResumeSection title='Skills'>
          <ul className='flex flex-col gap-1'>
            {resumeData.skills.map((skill) => (
              <li key={skill.group}><strong className='font-semibold text-slate-900'>{skill.group}:</strong> {skill.items.join(', ')}</li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title='Experience'>
          {experienceData.map((experience) => (
            <div key={experience.name} className={styles.resumeEntryStyle}>
              <div className={styles.resumeEntryHeadStyle}>
                <h3 className={styles.resumeEntryTitleStyle}>{experience.position}, {experience.name}</h3>
                <span className={styles.resumeDateStyle}>{displayTime(experience.time)}</span>
              </div>
              <ul className={styles.resumeBulletsStyle}>
                {sentences(experience.text).map((sentence) => <li key={sentence}>{sentence}</li>)}
              </ul>
            </div>
          ))}
        </ResumeSection>

        <ResumeSection title='Projects'>
          {resumeProjects.map((project) => (
            <div key={project.name} className={styles.resumeEntryStyle}>
              <div className={styles.resumeEntryHeadStyle}>
                <h3 className={styles.resumeEntryTitleStyle}>
                  {project.name}, {project.role}
                  {project.href && <> <span className='font-normal text-slate-500'>|</span> <a href={project.href} className='font-normal text-blue-800 hover:underline'>{displayUrl(project.href)}</a></>}
                </h3>
                <span className={styles.resumeDateStyle}>{project.year}</span>
              </div>
              <p>{project.summary}</p>
              <p className='mt-0.5 text-slate-600'><span className='font-semibold text-slate-700'>Tech:</span> {project.techStack.join(', ')}</p>
            </div>
          ))}
        </ResumeSection>

        <ResumeSection title='Education'>
          {educationData.map((education) => (
            <div key={education.degree} className={styles.resumeEntryStyle}>
              <div className={styles.resumeEntryHeadStyle}>
                <h3 className={styles.resumeEntryTitleStyle}>
                  {education.degree}{education.field && `, ${education.field}`}
                </h3>
                <span className={styles.resumeDateStyle}>{displayTime(education.time)}</span>
              </div>
              <p>{education.name}</p>
            </div>
          ))}
        </ResumeSection>
      </article>
    </div>
  )
};
