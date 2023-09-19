"use client"
import './style/globals.css';
import { useState } from 'react';
import { BegPage } from './begPage';
import { ButtonStyle } from './style/constantStyles';
import { Navigation } from './navigation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';


export default function App() {

  const headShotURL: string = 'https://drive.google.com/uc?export=view&id=1JsF8Kkz9MTObFlyec0YO5HECDvabZokU';


  return (
    <>
      <BegPage />
      <div className='app flex flex-row'>
        <div className='introduction basis-1/3 justify-center justify-items-center'>
          <img className='head-shot rounded-full' src={headShotURL} width='250' height='250'></img>
          <div className='name'>Kevin Hoang</div>
          <div className='job-position'>Full Stack Engineer</div>
          <div className='motto'>Changing Lives Through Technology & Service</div>
          <div className='phone-number'>860-682-2251</div>
          <div className='email'>KNHoang10@gmail.com</div>
          <div className='social-media'>
            <a href='https://github.com/knhoang10' target='_blank'><GitHubIcon /></a>
            <a href='https://www.linkedin.com/in/knhoangre/' target='_blank'><LinkedInIcon /></a>
          </div>
        </div>

        <div className='basis-3/4 flex flex-col'>
          <div className='about'>
            <p className='getting-into-software'>In 2007, my first experience in web development was redesigning my MySpace homepage. I have had the liberty to build applications for corporations and small businesses.</p>
            <p className='what-i-am-doing-now'>Presently, I am actively engaged in software initiatives to expand my real estate business. This allows me to free up valuable time and resources to concentrate on the paramount aspect of any thriving business—my valued clients. </p>
            <p className='about-hobbies'> When I am not stationed behind a computer, you will likely find me at the gym or out and about, eager to connect with new faces and engage with the world!</p>
          </div>

          <div className='projects'>
            <div className='project'>
              <div className='timeline'>2023</div>
              <div className='project-information'>
                <div className='project-position-and-name'>Full Stack Engineer | Listing Platform</div>
                <div className='project-description'>Real estate marketplace that provides users with resources about properties on the market. It lists all the properties on the market and gives the users power to make an informed decision based on user inputs.</div>
              </div>
            </div>
            <div className='project'>
              <div className='timeline'>2023</div>
              <div className='project-information'>

                <div className='project-position-and-name'>Full Stack Engineer | Shelf Share</div>
                <div className='project-description'>Book-sharing platform where users can rent out their personal libraries. Users can sign up and log in via Google accounts, input essential information, scan their books into the system, and manage borrowing and lending activities. The platform also offers a book review feature and an API for advertisers to analyze book trends.</div>
              </div>

            </div>
            <div className='project'>
              <div className='timeline'>2023</div>
              <div className='project-information'>

                <div className='project-position-and-name'>Back-End Engineer | Atelier Back-End Design</div>
                <div className='project-description'>E-commerce store showcasing capability of handling high traffic volumes and performance. Custom routes were created to match with the Atelier User Interface Design project. Routes were tested for average response times and success rates.</div>
              </div>

            </div>
            <div className='project'>
              <div className='timeline'>2023</div>
              <div className='project-information'>

                <div className='project-position-and-name'>Front-End Engineer | Atelier User Interface Design</div>
                <div className='project-description'>E-commerce store showcasing a variety of clothing lines with detailed information about each product. Every product has its own different styles, description, related items, question and answers, and review sections.</div>
              </div>

            </div>
            <div className='project'>
              <div className='timeline'>2022</div>
              <div className='project-information'>

                <div className='project-position-and-name'>Software Engineer | Facebook Marketplace Postings</div>
                <div className='project-description'>Performed software testing through different builds to ensure that engine performance has increased and other sections have not been compromised.</div>
              </div>

            </div>
          </div>

          <div className='experiences'>
            <div className='experience flex flex-row'>
              <div className='timeline basis-1/4'>Jun 2021 - Present</div>
              <div className='project-information basis-3/4'>

                <div className='job-position-and-company'>Real Estate Agent | eXp Realty & Keller Williams Realty</div>
                <div className='experience-description'>Designed and analyzed complex system functionalities to significantly increase efficiency. Also, managed and communicated with a team of engineers to certify processes.</div>
              </div>

            </div>


            <div className='experience'>
              <div className='timeline'>Jan 2020 - Mar 2022</div>
              <div className='project-information'>

                <div className='job-position-and-company'>Mechanical Design Engineer | Collins Aerospace</div>
                <div className='experience-description'>Designed and analyzed complex system functionalities to significantly increase efficiency. Also, managed and communicated with a team of engineers to certify processes.</div>
              </div>
            </div>

            <div className='experience'>
              <div className='timeline'>Jun 2017 - Dec 2019</div>
              <div className='project-information'>

                <div className='job-position-and-company'>Aerospace System Engineer | Belcan</div>
                <div className='experience-description'>Performed software testing through different builds to ensure that engine performance has increased and other sections have not been compromised.</div>

              </div>

            </div>
          </div>
          <div className='more-information'>
            <div className='more-information-description'>

              There's more to me than just my projects & experience. I am looking to connect with others so that we can change lives through technology & service.
            </div>
            <div className='more-information-description'>
              Don't hesitate to get in touch! I'm always thrilled to discuss both my personal journey & professional projects. Whether it's delving into my resume, exploring my LinkedIn profile, or diving into the nitty gritty of my projects on GitHub.
            </div>
            <ButtonStyle text='Resume' className='resume-redirect-button' redirectLink='https://drive.google.com/file/d/1DDo1BzYQkYhMWH0VogBXw1_CRibEKn0y/view?usp=sharing' />
            <ButtonStyle text='LinkedIn' className='linkedin-redirect-button' redirectLink='https://www.linkedin.com/in/knhoangre/' />
            <ButtonStyle text='GitHub' className='github-redirect-button' redirectLink='https://github.com/knhoang10' />
          </div>
        </div>
      </div>
    </>
  )
};