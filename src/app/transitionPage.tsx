// Import statements
"use client"

// Library
import { useEffect, useRef, CSSProperties } from 'react';
import Image from 'next/image';

// Personal Data
import { siteData } from './data/siteData';
import { aboutMeData } from './data/aboutMeData';
import { projectData, featuredProjects, archivedProjects, rankedTech } from './data/projectData';
import { educationData } from './data/educationData';
import { experienceData } from './data/experienceData';
import { connectWithMeData } from './data/connectWithMeData';

// Components
import Project from './project';
import ProjectArchive from './projectArchive';
import Experience from './experience';
import Education from './education';
import Navigation from './navigation';
import Marquee from './reuseableComponents/marquee';
import CountUp from './reuseableComponents/countUp';
import { ButtonStyle, PageSection, TerminalWindow, TerminalLine, SiteFooter } from './reuseableComponents/reuseableComponents';
import useReveal from './hooks/useReveal';

// Styling
import * as styles from './style/constantStyles';

// MUI Framework
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// Constants
// The intro covers the page for ~1.75s; the hero rises in as it fades.
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
const topTech = rankedTech.slice(0, 20);

// The About terminal prints real data: current roles and the most-used stack
const currentRoles = experienceData.filter((experience) => experience.time.includes('Present'));

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

      <Navigation />

      {/* Hero */}
      <header id='top' className={`hero ${styles.heroStyle}`}>
        <div className={styles.heroGridStyle}>
          <div className={styles.heroTextStyle}>
            {siteData.availability && (
              <div className={`rise availability ${styles.availabilityStyle}`} style={riseDelay(0)}>
                <span className='relative flex h-2 w-2'>
                  <span className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 motion-safe:animate-pulse-dot'></span>
                  <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400'></span>
                </span>
                {siteData.availability}
              </div>
            )}
            <h1 className={`rise name ${styles.nameStyle}`} style={riseDelay(1)}>{siteData.name}</h1>
            <p className={`rise job-position ${styles.jobPositionStyle}`} style={riseDelay(2)}>{siteData.jobTitle}</p>
            <p className={`rise motto ${styles.heroPromptStyle}`} style={riseDelay(3)}>
              <span className='text-gold' aria-hidden>&gt; </span>
              <span className='typing' style={{ '--chars': siteData.motto.length } as CSSProperties}>{siteData.motto}</span>
              <span className='caret text-gold' aria-hidden>_</span>
            </p>
            <p className={`rise intro ${styles.heroIntroStyle}`} style={riseDelay(4)}>{siteData.intro}</p>
            <div className={`rise ${styles.heroActionsStyle}`} style={riseDelay(5)}>
              <ButtonStyle text='View projects' className='projects-button' redirectLink='#projects' variant='primary' />
              <ButtonStyle text='Get in touch' className='contact-button' redirectLink='#contact' />
              <div className={`social-media ${styles.socialMediaSectionStyle}`}>
                <a href={siteData.github} target='_blank' rel='me noopener noreferrer' aria-label='GitHub' className={`github-icon ${styles.iconStyle}`}><GitHubIcon style={styles.muiIconStyle} /></a>
                <a href={siteData.linkedin} target='_blank' rel='me noopener noreferrer' aria-label='LinkedIn' className={`linkedin-icon ${styles.iconStyle}`}><LinkedInIcon style={styles.muiIconStyle} /></a>
              </div>
            </div>
          </div>
          <div className={`rise ${styles.heroPhotoStyle}`} style={riseDelay(1)}>
            <div className={styles.headshotRingStyle}>
              <Image className={`head-shot ${styles.headshotStyle}`} src={siteData.headshot} alt={`Portrait of ${siteData.name}`} width={288} height={288} priority />
            </div>
          </div>
        </div>

        <div className='rise flex flex-col gap-6' style={riseDelay(6)}>
          <div className={`stats ${styles.statsGridStyle}`}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCardStyle}>
                <span className={styles.statValueStyle}><CountUp value={stat.value} suffix={stat.suffix} /></span>
                <span className={styles.statLabelStyle}>{stat.label}</span>
              </div>
            ))}
          </div>
          <Marquee items={topTech} />
        </div>
      </header>

      <main className={`content ${styles.mainStyle}`}>

        {/* About Me Section */}
        <PageSection id='about'>
          <div className={styles.aboutGridStyle}>
            <div className='flex flex-col gap-5'>
              {aboutMeData.map((aboutMe, index) => <p key={index} className={`about-me-detail ${index === 0 ? styles.aboutLeadStyle : styles.aboutTextStyle}`}>{aboutMe.text}</p>)}
            </div>
            <TerminalWindow title='kevin@portfolio: ~' className='reveal self-start'>
              <TerminalLine command='whoami'>{siteData.name}, {siteData.jobTitle.toLowerCase()}</TerminalLine>
              <TerminalLine command='cat now.txt'>
                {currentRoles.map((role) => <div key={role.name}>{role.position} @ {role.name}</div>)}
              </TerminalLine>
              <TerminalLine command='ls stack/'>
                <div className='flex flex-wrap gap-x-4 text-gold-light/90'>
                  {topTech.slice(0, 9).map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </TerminalLine>
              {siteData.availability && (
                <TerminalLine command='echo $STATUS'><span className='text-emerald-300'>{siteData.availability.toLowerCase()}</span></TerminalLine>
              )}
              <div><span className={styles.terminalPromptStyle} aria-hidden>$ </span><span className='caret text-slate-300' aria-hidden>_</span></div>
            </TerminalWindow>
          </div>
        </PageSection>

        {/* Project Section */}
        <PageSection id='projects'>
          <div className={`featured-projects ${styles.featuredGridStyle}`}>
            {featuredProjects.map((project, index) => <Project key={project.name} projectInfo={project} wide={index === featuredProjects.length - 1 && fillsLastRowAlone} />)}
          </div>
          <ProjectArchive projects={archivedProjects} />
        </PageSection>

        {/* Experience Section */}
        <PageSection id='experience'>
          <ol className={styles.timelineStyle}>
            {experienceData.map((experience, index) => <Experience key={index} experienceInfo={experience} />)}
          </ol>
        </PageSection>

        {/* Education Section */}
        <PageSection id='education'>
          <div className={styles.educationGridStyle}>
            {educationData.map((education, index) => <Education key={index} educationInfo={education} />)}
          </div>
        </PageSection>

        {/* Connect With Me Section */}
        <PageSection id='contact'>
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
        </PageSection>
      </main>

      <SiteFooter />
    </div>
  )
};
