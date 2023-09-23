// Import statements
"use client"
import './style/globals.css';
import { useState, useEffect } from 'react';
import { ButtonStyle } from './reuseableComponents/reuseableComponents';
import { projectData } from './data/projectData';
import { educationData } from './data/educationData';
import { experienceData } from './data/experienceData';
import Experience from './experience';
import Project from './project';
import { rightSections, flexColSpaceBetweenDiv, nameStyle, jobPositionStyle, iconStyle, newSectionTitle } from './style/constantStyles';

// MUI
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Education from './education';

// Constants
const headShotURL: string = 'https://drive.google.com/uc?export=view&id=1JsF8Kkz9MTObFlyec0YO5HECDvabZokU';

export default function TransitionPage() {
  // States
  const [ fadeText, setFadeText ] = useState(false);

  // Effects
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeText(true);
    }, 0);
  }, []);

  return (
    <>
      <div className={`app lg:flex lg:flex-row lg:mx-auto lg:min-h-screen lg:max-w-screen-xl lg:px-24 font-sans transition-opacity duration-1000 ease-in ${fadeText ? 'opacity-100' : 'opacity-0'}`}>
        <div className='basis-1/3 lg:sticky gap-4 flex flex-col justify-between max-h-screen top-0 sm:py-14 px-6'>
          <div className='introduction flex flex-col gap-4 justify-center content-center'>
            <img className='head-shot rounded-full' src={headShotURL} width='250' height='250'></img>
            <div className={`name ${nameStyle}`}>Kevin Hoang</div>
            <div className={`job-position ${jobPositionStyle}`}>Full Stack Engineer</div>
            <div className='motto'>Changing Lives Through Technology & Service</div>
            {/* <div className='phone-number'>860-682-2251</div>
            <div className='email'>KNHoang10@gmail.com</div> */}
          </div>
          <div className='social-media flex flex-row gap-5'>
            <a href='https://github.com/knhoang10' target='_blank' className={`github-icon ${iconStyle} hover:text-white`}><GitHubIcon style={iconStyle} /></a>
            <a href='https://www.linkedin.com/in/knhoangre/' target='_blank' className={`linkedin-icon ${iconStyle} hover:text-white`}><LinkedInIcon style={iconStyle} /></a>
            <a href='https://g.co/kgs/dPsN3F' target='_blank' className={`linkedin-icon ${iconStyle} hover:text-white`}><GoogleIcon style={iconStyle} /></a>
            <a href='https://www.instagram.com/knhoangre/' target='_blank' className={`instagram-icon ${iconStyle} hover:text-white`}><InstagramIcon style={iconStyle} /></a>
          </div>
        </div>

        <div className={`basis-2/3 ${flexColSpaceBetweenDiv} py-14`}>
          <div className={`about-section ${rightSections} pb-15`}>
            <p className={`about-me ${newSectionTitle}`}>ABOUT ME</p>
            <p className='getting-into-software'>Sometime long ago, my first experience in web development was redesigning my MySpace homepage. It was really ugly, but thankfully technology has improved and it allowed me to create better designed websites. I have had the liberty to build applications for corporations and small businesses.</p>
            <p className='what-i-am-doing-now'>Presently, I am actively engaged in software initiatives to expand my real estate business. This allows me to free up valuable time and resources to concentrate on the paramount aspect of any thriving business—my valued clients. </p>
            <p className='about-hobbies'> I don't just hide behind the desk though! You will likely find me at the gym or out and about, eager to connect with new faces and engage with the world!</p>
          </div>

          <div className={`projects ${flexColSpaceBetweenDiv} pb-15`}>
            <p className={`${rightSections} ${newSectionTitle}`}>PROJECTS</p>
            {projectData.map((project) => <Project key={project.id} projectInfo={project} />)}
          </div>

          <div className={`experiences ${flexColSpaceBetweenDiv} pb-15`}>
            <p className={`${rightSections} ${newSectionTitle}`}>EXPERIENCES</p>
            {experienceData.map((experience) => <Experience key={experience.id} experienceInfo={experience} />)}
          </div>

          <div className={`educations ${flexColSpaceBetweenDiv} pb-15`}>
            <p className={`${rightSections} ${newSectionTitle}`}>EDUCATIONS</p>
            {educationData.map((education) => <Education key={education.id} educationInfo={education} />)}
          </div>

          <div className={`connect-with-me-section ${rightSections}`}>
            <p className={`connect-with-me ${newSectionTitle}`}>CONNECT WITH ME!</p>
            <div className='connect-with-me-description'>
              There's more to me than just my projects & experience. I am looking to connect with others so that we can change lives through technology & service.
            </div>
            <div className='connect-with-me-description'>
              Don't hesitate to get in touch! I'm always thrilled to discuss both my personal journey & professional projects. Whether it's delving into my resume, exploring my LinkedIn profile, or diving into the nitty gritty of my projects on GitHub.
            </div>
            <div className={`redirect-buttons flex flex-row gap-4`}>
              <ButtonStyle text='Call' className='call-redirect-button' redirectLink='tel:8606822251' />
              <ButtonStyle text='Email' className='Email-redirect-button' redirectLink='mailto:knhoang10@gmail.com?subject=We%20Want%20To%20Hire%20You!' />
              <ButtonStyle text='Resume' className='resume-redirect-button' redirectLink='https://drive.google.com/file/d/1DDo1BzYQkYhMWH0VogBXw1_CRibEKn0y/view?usp=sharing' />
              <ButtonStyle text='GitHub' className='github-redirect-button' redirectLink='https://github.com/knhoang10' />
              <ButtonStyle text='LinkedIn' className='linkedin-redirect-button' redirectLink='https://www.linkedin.com/in/knhoangre/' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};