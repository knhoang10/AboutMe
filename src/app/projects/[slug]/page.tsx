// Library
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Personal Data
import { siteData } from '../../data/siteData';
import { caseStudyData, caseStudyProjects, caseStudyPath } from '../../data/caseStudyData';

// Components
import { ButtonStyle, StatusBadge, TechStackList, SiteFooter } from '../../reuseableComponents/reuseableComponents';

// SEO
import { pageMetadata, personId, websiteId, JsonLd } from '../../seo';

// Styling
import * as styles from '../../style/constantStyles';


// One page per featured project, prerendered at build time. Any other slug is a real 404.
type CaseStudyPageProps = {
  params: { slug: string },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

const findProject = (slug: string) => caseStudyProjects.find((project) => project.slug === slug);

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const project = findProject(params.slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.name} Case Study | ${siteData.name}`,
    description: caseStudyData[project.slug].description,
    path: caseStudyPath(project.slug),
    type: 'article',
  });
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = findProject(params.slug);
  if (!project) notFound();

  const caseStudy = caseStudyData[project.slug];
  const url = `${siteData.url}${caseStudyPath(project.slug)}`;

  // The visible trail and its BreadcrumbList are built from this one array, so they always match
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/#projects' },
    { name: project.name, path: caseStudyPath(project.slug) },
  ];

  // The neighbors in portfolio order, wrapping around at the ends
  const index = caseStudyProjects.indexOf(project);
  const previous = caseStudyProjects[(index - 1 + caseStudyProjects.length) % caseStudyProjects.length];
  const next = caseStudyProjects[(index + 1) % caseStudyProjects.length];

  const externalLabel = project.href?.includes('github.com') ? 'View the code' : 'Visit the live site';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${url}#article`,
        url,
        headline: `${project.name}: how it was built`,
        description: caseStudy.description,
        inLanguage: 'en-US',
        author: { '@id': personId },
        isPartOf: { '@id': websiteId },
        keywords: project.techStack.join(', '),
        about: {
          '@type': 'SoftwareApplication',
          name: project.name,
          ...(project.status === 'live' && project.href ? { url: project.href } : {}),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, position) => ({
          '@type': 'ListItem',
          position: position + 1,
          name: crumb.name,
          item: `${siteData.url}${crumb.path === '/' ? '' : crumb.path}`,
        })),
      },
    ],
  };

  return (
    <div className={`page ${styles.pageStyle}`}>
      <JsonLd data={jsonLd} />
      <div className='ambient' aria-hidden>
        <div className='grid-lines absolute inset-0'></div>
      </div>

      <div className={styles.caseStudyBarStyle}>
        <Link href='/' className={styles.navLogoStyle}><span className='text-gold'>~/</span>kevin-hoang</Link>
        <div className={styles.caseStudyBarLinksStyle}>
          <Link href='/#projects' className={styles.navLinkStyle}>Projects</Link>
          <Link href={siteData.resume} className={`${styles.navResumeStyle} !inline-flex`}>Resume</Link>
        </div>
      </div>

      <main className={styles.caseStudyMainStyle}>
        <article className='flex flex-col gap-12'>
          <header className={styles.caseStudyHeaderStyle}>
            <nav aria-label='Breadcrumb'>
              <ol className={styles.breadcrumbStyle}>
                {breadcrumbs.map((crumb, position) => (
                  <li key={crumb.path} className='flex items-center gap-2'>
                    {position > 0 && <span className='text-gold' aria-hidden>/</span>}
                    {position < breadcrumbs.length - 1
                      ? <Link href={crumb.path} className={styles.breadcrumbLinkStyle}>{crumb.name}</Link>
                      : <span aria-current='page' className='text-slate-200'>{crumb.name}</span>}
                  </li>
                ))}
              </ol>
            </nav>

            <div className={styles.featuredMetaStyle}>
              <span className={styles.featuredYearStyle}>{project.year}</span>
              <StatusBadge status={project.status} />
            </div>
            <h1 className={styles.caseStudyTitleStyle}>{project.name}</h1>
            <p className={styles.caseStudyRoleStyle}>{project.role}</p>
            <p className={styles.caseStudyIntroStyle}>{caseStudy.intro}</p>
            <TechStackList names={project.techStack} />
            {project.href && (
              <ButtonStyle text={externalLabel} className='case-study-link' redirectLink={project.href} variant='primary' />
            )}
          </header>

          <div className={styles.caseStudyBodyStyle}>
            {caseStudy.sections.map((section) => (
              <section key={section.heading} className={styles.caseStudySectionStyle}>
                <h2 className={styles.caseStudyHeadingStyle}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className={styles.bodyTextStyle}>{paragraph}</p>)}
                {section.bullets && (
                  <ul className={styles.caseStudyBulletsStyle}>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>

        <nav aria-label='More case studies' className={styles.caseStudyPagerStyle}>
          <Link href={caseStudyPath(previous.slug)} className={styles.caseStudyPagerCardStyle}>
            <span className={styles.monoLabelStyle}>&larr; Previous</span>
            <span className={styles.caseStudyPagerNameStyle}>{previous.name}</span>
          </Link>
          <Link href={caseStudyPath(next.slug)} className={`${styles.caseStudyPagerCardStyle} ${styles.caseStudyPagerNextStyle}`}>
            <span className={styles.monoLabelStyle}>Next &rarr;</span>
            <span className={styles.caseStudyPagerNameStyle}>{next.name}</span>
          </Link>
        </nav>

        <div className={styles.connectPanelStyle}>
          <p className={styles.connectHeadingStyle}>Want to talk through how it was built?</p>
          <p className={styles.connectTextStyle}>
            {siteData.availability && `I'm ${siteData.availability.charAt(0).toLowerCase()}${siteData.availability.slice(1)}. `}
            Happy to walk through the architecture, the trade-offs, or the code.
          </p>
          <div className={styles.connectButtonsStyle}>
            <ButtonStyle text='Email me' className='email-redirect-button' redirectLink={`mailto:${siteData.email}`} variant='primary' />
            <ButtonStyle text='Resume' className='resume-redirect-button' redirectLink={siteData.resume} />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
};
