// Styling
import * as styles from './style/constantStyles';


type ExperienceProps = {
  experienceInfo: {
    time: string,
    position: string,
    name: string,
    text: string,
  }
};

export default function Experience({ experienceInfo }: ExperienceProps) {
  return (
    <div className={`experience ${styles.experienceIndividualStyle}`}>
      <div className={`timeline ${styles.experienceTimelineStyle}`}>{experienceInfo.time}</div>
      <div className={`experience-information ${styles.experienceInformationStyle}`}>
        <div className={`experience-position-and-company ${styles.experienceNamePositionStyle}`}>{experienceInfo.position} | {experienceInfo.name}</div>
        <div className={`experience-description ${styles.experienceDescriptionStyle}`}>{experienceInfo.text}</div>
      </div>
    </div>
  )
};