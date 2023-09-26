import { individualProjectExperience, timelineStyle, projectExperienceInformationStyle, projectExperienceNamePositionStyle, projectExperienceDescriptionStyle } from "./style/constantStyles";


type EducationProps = {
  educationInfo: {
    id: number,
    time: string,
    title: string,
    name: string,
    degree: string,
    text: string
  }
};

export default function Education({ educationInfo }: EducationProps) {
  return (
    <div className={`education ${individualProjectExperience}`}>
      <div className={`timeline ${timelineStyle}`}>{educationInfo.time}</div>
      <div className={`education-information ${projectExperienceInformationStyle}`}>
        <div className={`education-title-and-name ${projectExperienceNamePositionStyle}`}>{educationInfo.title} | {educationInfo.name}</div>
        <div className={`education-degree italic ${projectExperienceDescriptionStyle}`}>{educationInfo.degree}</div>
        <div className={`education-description`}>{educationInfo.text}</div>
      </div>
    </div>
  )
};