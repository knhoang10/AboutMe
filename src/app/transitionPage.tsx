// Import statements
"use client"
import './style/globals.css';
import { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ButtonStyle } from './style/constantStyles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { projectData } from './data/projectData';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import { experienceData } from './data/experienceData';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import Experience from './experience';
import Project from './project';
import { rightSections, flexColSpaceBetweenDiv, nameStyle, jobPositionStyle } from './style/constantStyles';

// Constants
const headShotURL: string = 'https://drive.google.com/uc?export=view&id=1JsF8Kkz9MTObFlyec0YO5HECDvabZokU';

export default function TransitionPage() {

  return (
    <>
      <div className='app flex flex-row mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='basis-1/3 sticky gap-4 flex flex-col justify-between max-h-screen top-0'>
          <div className='introduction flex flex-col gap-4'>
            <img className='head-shot rounded-full' src={headShotURL} width='250' height='250'></img>
            <div className={`name ${nameStyle}`}>Kevin Hoang</div>
            <div className={`job-position ${jobPositionStyle}`}>Full Stack Engineer</div>
            <div className='motto'>Changing Lives Through Technology & Service</div>
            <div className='phone-number'>860-682-2251</div>
            <div className='email'>KNHoang10@gmail.com</div>
          </div>
          <div className='social-media'>
            <a href='https://github.com/knhoang10' target='_blank'><GitHubIcon /></a>
            <a href='https://www.linkedin.com/in/knhoangre/' target='_blank'><LinkedInIcon /></a>
          </div>
        </div>

        <div className={`basis-2/3 ${flexColSpaceBetweenDiv}`}>
          <div className={`about ${rightSections}`}>
            <p className='getting-into-software'>Sometime long ago, my first experience in web development was redesigning my MySpace homepage. I have had the liberty to build applications for corporations and small businesses.</p>
            <p className='what-i-am-doing-now'>Presently, I am actively engaged in software initiatives to expand my real estate business. This allows me to free up valuable time and resources to concentrate on the paramount aspect of any thriving business—my valued clients. </p>
            <p className='about-hobbies'> When I am not stationed behind a computer, you will likely find me at the gym or out and about, eager to connect with new faces and engage with the world!</p>
          </div>

          <div className={`projects ${flexColSpaceBetweenDiv}`}>
            {projectData.map((project) => <Project key={project.id} projectInfo={project} />)}
          </div>

          <div className={`experiences ${flexColSpaceBetweenDiv}`}>
            {experienceData.map((experience) => <Experience key={experience.id} experienceInfo={experience} />)}
          </div>

          <div className={`more-information ${rightSections}`}>
            <div className='more-information-description'>
              There's more to me than just my projects & experience. I am looking to connect with others so that we can change lives through technology & service.
            </div>
            <div className='more-information-description'>
              Don't hesitate to get in touch! I'm always thrilled to discuss both my personal journey & professional projects. Whether it's delving into my resume, exploring my LinkedIn profile, or diving into the nitty gritty of my projects on GitHub.
            </div>
            <div className='redirect-buttons'>
              <ButtonStyle text='Resume' className='resume-redirect-button' redirectLink='https://drive.google.com/file/d/1DDo1BzYQkYhMWH0VogBXw1_CRibEKn0y/view?usp=sharing' />
              <ButtonStyle text='LinkedIn' className='linkedin-redirect-button' redirectLink='https://www.linkedin.com/in/knhoangre/' />
              <ButtonStyle text='GitHub' className='github-redirect-button' redirectLink='https://github.com/knhoang10' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};