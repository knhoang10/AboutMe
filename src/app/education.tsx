// Styling
import * as styles from './style/constantStyles';



type EducationProps = {
  educationInfo: {
    time: string,
    title: string,
    name: string,
    degree: string,
    text: string
  }
};

export default function Education({ educationInfo }: EducationProps) {
  return (
    <div className={`education ${styles.educationIndividualStyle}`}>
      <div className={`timeline ${styles.educationTimelineStyle}`}>{educationInfo.time}</div>
      <div className={`education-information ${styles.educationInformationStyle}`}>
        <div className={`education-title-and-name ${styles.educationNamePositionStyle}`}>{educationInfo.title} | {educationInfo.name}</div>
        <div className={`education-degree italic ${styles.educationNamePositionStyle}`}>{educationInfo.degree}</div>
        <div className={`education-description`}>{educationInfo.text}</div>
      </div>
    </div>
  )
};