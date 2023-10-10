// Import statements
"use client"
import './style/globals.css';

// Library
import { useState, useEffect, useRef } from 'react';

// Personal Data
import { aboutMeData } from './data/aboutMeData';
import { projectData } from './data/projectData';
import { educationData } from './data/educationData';
import { experienceData } from './data/experienceData';
import { connectWithMeData } from './data/connectWithMeData';

// Components
import Project from './project';
import Experience from './experience';
import TransitionToSection from './navigation';
import { ButtonStyle } from './reuseableComponents/reuseableComponents';

// Styling
import * as styles from './style/constantStyles';

// MUI Framework
import Education from './education';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


// Constants
const headShotURL: string = 'https://drive.google.com/uc?export=view&id=1JsF8Kkz9MTObFlyec0YO5HECDvabZokU';


export default function TransitionPage() {
  // States
  const [ fadeText, setFadeText ] = useState(false);

  // Effects
  // Transition fade into the page
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeText(true);
    }, 0);
  }, []);

  return (
    <>
      <div className={`app ${styles.appStyle} ${fadeText ? 'opacity-100' : 'opacity-0'}`}>

        {/* Left (Web) or Top (Mobile) Section */}
        <div className={`left-section ${styles.leftSectionStyle}`} >
          <div className={`introduction ${styles.introductionStyle}`}>
            {/* <img className={`head-shot ${styles.headshotStyle}`} src={headShotURL} width='250' height='250'></img> */}
            <img className={`head-shot ${styles.headshotStyle}`} src='headshot.png' width='250' height='250'></img>
            <div className={`name ${styles.nameStyle}`}>Kevin Hoang</div>
            <div className={`job-position ${styles.jobPositionStyle}`}>Software Engineer</div>
            <div className='motto'>Changing Lives Through Technology & Service</div>
          </div>
          {<TransitionToSection/>}
          <div className={`social-media ${styles.socialMediaSectionStyle}`}>
            <a href='https://github.com/knhoang10' target='_blank' className={`github-icon ${styles.iconStyle}`}><GitHubIcon style={styles.muiIconStyle} /></a>
            <a href='https://www.linkedin.com/in/knhoangre/' target='_blank' className={`linkedin-icon ${styles.iconStyle}`}><LinkedInIcon style={styles.muiIconStyle} /></a>
            <a href='https://g.co/kgs/dPsN3F' target='_blank' className={`linkedin-icon ${styles.iconStyle}`}><GoogleIcon style={styles.muiIconStyle} /></a>
            <a href='https://www.instagram.com/knhoangre/' target='_blank' className={`instagram-icon ${styles.iconStyle}`}><InstagramIcon style={styles.muiIconStyle} /></a>
          </div>
        </div>

        {/* Right (Web) or Botton (Mobile) Section */}
        <div className={`right-section ${styles.rightSectionStyle}`}>

          {/* About Me Section */}
          <section className={`about-section ${styles.aboutSectionStyle}`}>
            <p className={`about-me ${styles.newSectionTitle}`}>ABOUT ME</p>
            {aboutMeData.map((aboutMe, index) => <p key={index} className='about-me-detail'>{aboutMe.text}</p>)}
          </section>

          {/* Project Section */}
          <section className={`projects ${styles.projectSectionStyle}`}>
            <p className={`${styles.projectSectionTitle}`}>PROJECTS</p>
            {projectData.map((project, index) => <Project key={index} projectInfo={project} />)}
          </section>

          {/* Experience Section */}
          <section className={`experiences ${styles.experienceSectionStyle}`}>
            <p className={`${styles.experienceSectionTitle}`}>EXPERIENCE</p>
            {experienceData.map((experience, index) => <Experience key={index} experienceInfo={experience} />)}
          </section>

          {/* Education Section */}
          <section className={`educations ${styles.educationSectionStyle}`}>
            <p className={`${styles.educationSectionTitle}`}>EDUCATION</p>
            {educationData.map((education, index) => <Education key={index} educationInfo={education} />)}
          </section>

          {/* Connect With Me Section */}
          <section className={`connect-with-me-section ${styles.connectSectionStyle}`}>
            <p className={`connect-with-me ${styles.newSectionTitle}`}>CONNECT WITH ME!</p>
            {connectWithMeData.map((connectWithMe, index) => <p key={index} className='connect-with-me-detail'>{connectWithMe.text}</p>)}
            <div className={`redirect-buttons flex flex-row flex-wrap gap-4`}>
              <ButtonStyle text='Call' className='call-redirect-button' redirectLink='tel:8606822251' />
              <ButtonStyle text='Email' className='Email-redirect-button' redirectLink='mailto:knhoang10@gmail.com' />
              <ButtonStyle text='Resume' className='resume-redirect-button' redirectLink='https://drive.google.com/file/d/1DDo1BzYQkYhMWH0VogBXw1_CRibEKn0y/view?usp=sharing' />
              <ButtonStyle text='GitHub' className='github-redirect-button' redirectLink='https://github.com/knhoang10' />
              <ButtonStyle text='LinkedIn' className='linkedin-redirect-button' redirectLink='https://www.linkedin.com/in/knhoangre/' />
            </div>
          </section>
        </div>
      </div>
    </>
  )
};