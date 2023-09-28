import './style/globals.css';

// Libaries
import { useState } from 'react';

// Components
import { TechStack } from './reuseableComponents/reuseableComponents';

// MUI Framework
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

// Styling
import * as styles from './style/constantStyles';

// Props
type ProjectProps = {
  projectInfo: {
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
        <div className={`timeline ${styles.projectTimelineStyle}`}>{projectInfo.time}</div>
        <div className={`project-information ${styles.projectInformationStyle}`}>
          <div className={`project-position-and-name ${styles.projectNamePositionStyle}`}>{projectInfo.position} | {projectInfo.name} {showRedirectSymbol()}</div>
          <div className={`project-description ${styles.projectDescriptionStyle}`}>{projectInfo.text}</div>
          <div className={`project-tech-stack ${styles.techStackContainerStyle}`}>
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
      <div className={`project ${styles.projectIndividualStyle}`} >{constantSection()}</div>
    )
  };

  const linkDoesExist = () => {
    return (
      <a className={`project ${styles.projectIndividualStyle}`} href={projectInfo.redirectLink} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{constantSection()}</a>
    )
  };

  return projectInfo.link ? linkDoesExist() : linkDoesNotExist();

};