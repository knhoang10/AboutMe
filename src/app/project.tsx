import { individualProjectExperience, timelineStyle, projectExperienceInformationStyle } from "./style/constantStyles";

type ProjectProps = {
  projectInfo: {
    id: number
    time: string,
    position: string,
    name: string,
    text: string,
    redirectLink: string,
    link: boolean,
  }
};

export default function Project({ projectInfo }: ProjectProps) {

  const linkDoesNotExist = () => {
    return (
      <div className={`project ${individualProjectExperience}`}>
        <div className={`timeline ${timelineStyle}`}>{projectInfo.time}</div>
        <div className={`project-information ${projectExperienceInformationStyle}`}>
          <div className='project-position-and-name'>{projectInfo.position} | {projectInfo.name}</div>
          <div className='project-description'>{projectInfo.text}</div>
        </div>
      </div>
    )
  };

  const linkDoesExist = () => {
    return (
      <a className={`project ${individualProjectExperience}`} href='https://shelfshare.org/' target='_blank'>
        <div className={`timeline ${timelineStyle}`}>{projectInfo.time}</div>
        <div className={`project-information ${projectExperienceInformationStyle}`}>
          <div className='project-position-and-name'>{projectInfo.position} | {projectInfo.name}</div>
          <div className='project-description'>{projectInfo.text}</div>
        </div>
      </a>
    )
  };

  return projectInfo.link ? linkDoesExist() : linkDoesNotExist();
};