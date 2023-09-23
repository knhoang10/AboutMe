import { useState, useEffect } from 'react';
import { individualProjectExperience, timelineStyle, projectExperienceInformationStyle, projectExperienceNamePositionStyle, projectExperienceDescriptionStyle } from "./style/constantStyles";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './style/globals.css';
import { TechStack } from './reuseableComponents/reuseableComponents';


type ProjectProps = {
  projectInfo: {
    id: number
    time: string,
    position: string,
    name: string,
    text: string,
    redirectLink: string,
    link: boolean,
    techStack: string[],
  }
};

export default function Project({ projectInfo }: ProjectProps) {
  // State
  const [ symbolAnimate, setSymbolAnimate ] = useState(false);

  // Custom functions
  const handleMouseEnter = () => { setSymbolAnimate(true) };
  const handleMouseLeave = () => { setSymbolAnimate(false) };

  const constantSection = () => {
    return (
      <>
        <div className={`timeline ${timelineStyle}`}>{projectInfo.time}</div>
        <div className={`project-information ${projectExperienceInformationStyle}`}>
          <div className={`project-position-and-name flex flow-row justify-between ${projectExperienceNamePositionStyle}`}>{projectInfo.position} | {projectInfo.name} {showRedirectSymbol()}</div>
          <div className={`project-description ${projectExperienceDescriptionStyle}`}>{projectInfo.text}</div>
          <div className={`project-tech-stack flex flex-wrap gap-2`}>
            {projectInfo.techStack.map((techName) => <TechStack key={techName} name={techName} />)}
          </div>
        </div>
      </>
    )
  };

  const showRedirectSymbol = () => {
    if (projectInfo.link) {
      return (
        <div className={`redirect-symbol ${symbolAnimate ? `animate-shake` : ``}`}>
          <KeyboardDoubleArrowRightIcon />
        </div>
      )
    }
  };

  const linkDoesNotExist = () => {
    return (
      <div className={`project ${individualProjectExperience}`} >{constantSection()}</div>
    )
  };

  const linkDoesExist = () => {
    return (
      <a className={`project ${individualProjectExperience}`} href={projectInfo.redirectLink} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{constantSection()}</a>
    )
  };

  return projectInfo.link ? linkDoesExist() : linkDoesNotExist();

};