import { individualProjectExperience, timelineStyle, projectExperienceInformationStyle, projectExperienceNamePositionStyle, projectExperienceDescriptionStyle } from "./style/constantStyles";


type ExperienceProps = {
  experienceInfo: {
    id: number,
    time: string,
    position: string,
    name: string,
    text: string,
  }
};

export default function Experience({ experienceInfo }: ExperienceProps) {
  return (
    <div className={`experience ${individualProjectExperience}`}>
      <div className={`timeline ${timelineStyle}`}>{experienceInfo.time}</div>
      <div className={`experience-information ${projectExperienceInformationStyle}`}>
        <div className={`experience-position-and-company ${projectExperienceNamePositionStyle}`}>{experienceInfo.position} | {experienceInfo.name}</div>
        <div className={`experience-description ${projectExperienceDescriptionStyle}`}>{experienceInfo.text}</div>
      </div>
    </div>
  )
};