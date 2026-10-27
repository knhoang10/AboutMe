// Import statements
"use client"

// Library
import { useEffect, useRef, CSSProperties } from 'react';
import Image from 'next/image';

// Personal Data
import { siteData } from './data/siteData';
import { aboutMeData } from './data/aboutMeData';
import { projectData, featuredProjects, archivedProjects } from './data/projectData';
import { educationData } from './data/educationData';
import { experienceData } from './data/experienceData';
import { connectWithMeData } from './data/connectWithMeData';

// Components
import Project from './project';
import ProjectArchive from './projectArchive';
import Experience from './experience';
import Education from './education';
import TransitionToSection from './navigation';
import Marquee from './reuseableComponents/marquee';
import CountUp from './reuseableComponents/countUp';
import { ButtonStyle, SectionHeader } from './reuseableComponents/reuseableComponents';
import useReveal from './hooks/useReveal';

// Styling
import * as styles from './style/constantStyles';

// MUI Framework
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// Constants
// The intro covers the page for ~1.75s; the left column rises in as it fades.
const riseStartMs = 1200;
const riseStepMs = 90;
const riseDelay = (step: number): CSSProperties => ({ animationDelay: `${riseStartMs + step * riseStepMs}ms` });

// Stats are derived from the data so they can never drift from what the page lists
const projectCount = projectData.length;
const liveCount = projectData.filter((project) => project.status === 'live').length;
const firstEngineeringYear = Math.min(...experienceData.map((experience) => Number(experience.time.slice(0, 4))));
const yearsEngineering = new Date().getFullYear() - firstEngineeringYear;
const stats = [
  { value: projectCount, label: 'Projects' },
  { value: liveCount, label: 'Live today' },
  { value: yearsEngineering, label: 'Years engineering', suffix: '+' },
];

// The most-used technologies across every project, most frequent first
const techCounts = projectData.flatMap((project) => project.techStack).reduce<Record<string, number>>((counts, tech) => {
  counts[tech] = (counts[tech] || 0) + 1;
  return counts;
}, {});
const topTech = Object.keys(techCounts).sort((a, b) => techCounts[b] - techCounts[a]).slice(0, 20);

// The flagship spans the full grid width; an odd card left over at the end does too
const fillsLastRowAlone = featuredProjects.filter((project) => !project.flagship).length % 2 === 1;


export default function TransitionPage() {
  useReveal();

  // Cursor spotlight (desktop only; the layer is hidden below lg)
  const spotlightRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      spotlightRef.current?.style.setProperty('--spot-x', `${event.clientX}px`);
      spotlightRef.current?.style.setProperty('--spot-y', `${event.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`page ${styles.pageStyle}`}>
      {/* Background layers */}
      <div className='ambient' aria-hidden>
        <div className='grid-lines absolute inset-0'></div>
      </div>
      <div ref={spotlightRef} className='spotlight pointer-events-none fixed inset-0 -z-10 hidden lg:block' aria-hidden></div>

      <div className={`app ${styles.appStyle}`}>

        {/* Left (Web) or Top (Mobile) Section */}
        <header className={`left-section ${styles.leftSectionStyle}`} >
          <div className={`introduction ${styles.introductionStyle}`}>
            <div className={`rise ${styles.headshotRingStyle}`} style={riseDelay(0)}>
              <Image className={`head-shot ${styles.headshotStyle}`} src={siteData.headshot} alt={`Portrait of ${siteData.name}`} width={250} height={250} priority />
            </div>
            <h1 className={`rise name ${styles.nameStyle}`} style={riseDelay(1)}>{siteData.name}</h1>
            <div className={`rise job-position ${styles.jobPositionStyle}`} style={riseDelay(2)}>{siteData.jobTitle}</div>
            <div className={`rise motto ${styles.mottoStyle}`} style={riseDelay(3)}>{siteData.motto}</div>
            <div className={`rise availability ${styles.availabilityStyle}`} style={riseDelay(4)}>
              <span className='relative flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 motion-safe:animate-pulse-dot'></span>
                <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400'></span>
              </span>
              Open to new opportunities
            </div>
          </div>
          <nav className='rise hidden lg:block' style={riseDelay(5)} aria-label='Sections'>
            <TransitionToSection />
          </nav>
          <div className={`rise social-media ${styles.socialMediaSectionStyle}`} style={riseDelay(6)}>
            <a href={siteData.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub' className={`github-icon ${styles.iconStyle}`}><GitHubIcon style={styles.muiIconStyle} /></a>
            <a href={siteData.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className={`linkedin-icon ${styles.iconStyle}`}><LinkedInIcon style={styles.muiIconStyle} /></a>
          </div>
        </header>

        {/* Right (Web) or Botton (Mobile) Section */}
        <main className={`right-section ${styles.rightSectionStyle}`}>

          {/* About Me Section */}
          <section className={`about-section rise ${styles.sectionStyle}`} style={riseDelay(3)}>
            <SectionHeader index={1} title='About Me' />
            <div className='flex flex-col gap-5'>
              {aboutMeData.map((aboutMe, index) => <p key={index} className={`about-me-detail ${index === 0 ? styles.aboutLeadStyle : styles.aboutTextStyle}`}>{aboutMe.text}</p>)}
            </div>
            <div className={`stats ${styles.statsGridStyle}`}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statCardStyle}>
                  <span className={styles.statValueStyle}><CountUp value={stat.value} suffix={stat.suffix} /></span>
                  <span className={styles.statLabelStyle}>{stat.label}</span>
                </div>
              ))}
            </div>
            <Marquee items={topTech} />
          </section>

          {/* Project Section */}
          <section className={`projects ${styles.sectionStyle}`}>
            <SectionHeader index={2} title='Projects' />
            <div className={`featured-projects ${styles.featuredGridStyle}`}>
              {featuredProjects.map((project, index) => <Project key={project.name} projectInfo={project} wide={index === featuredProjects.length - 1 && fillsLastRowAlone} />)}
            </div>
            <ProjectArchive projects={archivedProjects} />
          </section>

          {/* Experience Section */}
          <section className={`experiences ${styles.sectionStyle}`}>
            <SectionHeader index={3} title='Experience' />
            <ol className={styles.timelineStyle}>
              {experienceData.map((experience, index) => <Experience key={index} experienceInfo={experience} />)}
            </ol>
          </section>

          {/* Education Section */}
          <section className={`educations ${styles.sectionStyle}`}>
            <SectionHeader index={4} title='Education' />
            <div className={styles.educationGridStyle}>
              {educationData.map((education, index) => <Education key={index} educationInfo={education} />)}
            </div>
          </section>

          {/* Connect With Me Section */}
          <section className={`connect-with-me-section ${styles.sectionStyle}`}>
            <SectionHeader index={5} title='Connect With Me' />
            <div className={`connect-panel ${styles.connectPanelStyle}`}>
              <p className={styles.connectHeadingStyle}>{connectWithMeData.heading}</p>
              <p className={`connect-with-me-detail ${styles.connectTextStyle}`}>{connectWithMeData.text}</p>
              <div className={`redirect-buttons ${styles.connectButtonsStyle}`}>
                <ButtonStyle text='Email' className='email-redirect-button' redirectLink={`mailto:${siteData.email}`} variant='primary' />
                <ButtonStyle text='Call' className='call-redirect-button' redirectLink={`tel:${siteData.phoneTel}`} />
                <ButtonStyle text='Resume' className='resume-redirect-button' redirectLink={siteData.resume} />
              </div>
              <a className={styles.connectEmailStyle} href={`mailto:${siteData.email}`}>{siteData.email}</a>
            </div>
          </section>

          <footer className='font-mono text-[0.7rem] text-slate-500'>
            Designed &amp; built by {siteData.name} with Next.js, Tailwind CSS, and Vercel.
          </footer>
        </main>
      </div >
    </div>
  )
};
