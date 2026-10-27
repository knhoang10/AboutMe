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

// One stop on the timeline; a role that runs to the present gets the lit dot
export default function Experience({ experienceInfo }: ExperienceProps) {
  const isCurrent = experienceInfo.time.includes('Present');
  return (
    <li className={`experience ${styles.timelineItemStyle}`}>
      <span className={`${styles.timelineDotStyle} ${isCurrent ? styles.timelineDotCurrentStyle : styles.timelineDotPastStyle}`} aria-hidden></span>
      <div className={`timeline ${styles.timelineTimeStyle}`}>{experienceInfo.time.replace(' - ', ' – ')}</div>
      <h3 className={`experience-position ${styles.timelineTitleStyle}`}>{experienceInfo.position}</h3>
      <div className={`experience-company ${styles.timelineCompanyStyle}`}>{experienceInfo.name}</div>
      <p className={`experience-description ${styles.timelineTextStyle}`}>{experienceInfo.text}</p>
    </li>
  )
};
