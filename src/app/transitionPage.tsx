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
import { ButtonStyle } from './reuseableComponents/reuseableComponents';
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

  // Header
  const headerTitle = (titleName: string) => {
    return (
      <div className="reveal flex items-center gap-6 w-full">
        <div className={styles.sectionRuleLeftStyle}></div>
        <h2 className={styles.newSectionTitle}>{titleName}</h2>
        <div className={styles.sectionRuleRightStyle}></div>
      </div>
    )
  };

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
          <section className={`about-section rise ${styles.aboutSectionStyle}`} style={riseDelay(3)}>
            {headerTitle('ABOUT ME')}
            {aboutMeData.map((aboutMe, index) => <p key={index} className={`about-me-detail ${styles.textGutterStyle}`}>{aboutMe.text}</p>)}
            <div className={`stats ${styles.statsGridStyle}`}>
              <div className={styles.statCardStyle}>
                <span className={styles.statValueStyle}><CountUp value={projectCount} /></span>
                <span className={styles.statLabelStyle}>Projects</span>
              </div>
              <div className={styles.statCardStyle}>
                <span className={styles.statValueStyle}><CountUp value={liveCount} /></span>
                <span className={styles.statLabelStyle}>Live today</span>
              </div>
              <div className={styles.statCardStyle}>
                <span className={styles.statValueStyle}><CountUp value={yearsEngineering} suffix='+' /></span>
                <span className={styles.statLabelStyle}>Years engineering</span>
              </div>
            </div>
            <Marquee items={topTech} />
          </section>

          {/* Project Section */}
          <section className={`projects ${styles.projectSectionStyle}`}>
            {headerTitle('PROJECTS')}
            <div className={`featured-projects ${styles.featuredGridStyle}`}>
              {featuredProjects.map((project, index) => <Project key={project.name} projectInfo={project} wide={index === featuredProjects.length - 1 && fillsLastRowAlone} />)}
            </div>
            <ProjectArchive projects={archivedProjects} />
          </section>

          {/* Experience Section */}
          <section className={`experiences ${styles.experienceSectionStyle}`}>
            {headerTitle('EXPERIENCE')}
            {experienceData.map((experience, index) => <Experience key={index} experienceInfo={experience} />)}
          </section>

          {/* Education Section */}
          <section className={`educations ${styles.educationSectionStyle}`}>
            {headerTitle('EDUCATION')}
            {educationData.map((education, index) => <Education key={index} educationInfo={education} />)}
          </section>

          {/* Connect With Me Section */}
          <section className={`connect-with-me-section ${styles.connectSectionStyle}`}>
            {headerTitle('CONNECT WITH ME!')}
            {connectWithMeData.map((connectWithMe, index) => <p key={index} className={`reveal connect-with-me-detail`}>{connectWithMe.text}</p>)}
            <div className={`reveal redirect-buttons flex flex-row flex-wrap gap-4 pt-2`}>
              <ButtonStyle text='Email' className='email-redirect-button' redirectLink={`mailto:${siteData.email}`} variant='primary' />
              <ButtonStyle text='Call' className='call-redirect-button' redirectLink={`tel:${siteData.phoneTel}`} />
              <ButtonStyle text='Resume' className='resume-redirect-button' redirectLink={siteData.resume} />
            </div>
          </section>

          <footer className={`${styles.textGutterStyle} text-xs text-slate-500`}>
            Designed &amp; built by {siteData.name} with Next.js, Tailwind CSS, and Vercel.
          </footer>
        </main>
      </div >
    </div>
  )
};
