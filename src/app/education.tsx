// Data
import { EducationInfo } from './data/educationData';

// Styling
import * as styles from './style/constantStyles';


type EducationProps = {
  educationInfo: EducationInfo
};

export default function Education({ educationInfo }: EducationProps) {
  return (
    <div className={`education ${styles.educationCardStyle}`}>
      <div className={`timeline ${styles.educationTimeStyle}`}>{educationInfo.time.replace(' - ', ' – ')}</div>
      <h3 className={`education-degree ${styles.educationDegreeStyle}`}>{educationInfo.degree}</h3>
      {educationInfo.field && <div className={`education-field ${styles.educationFieldStyle}`}>{educationInfo.field}</div>}
      <div className={`education-school ${styles.educationSchoolStyle}`}>{educationInfo.name}</div>
      <p className={`education-description ${styles.educationTextStyle}`}>{educationInfo.text}</p>
    </div>
  )
};
