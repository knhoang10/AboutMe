import { individualProjectExperience } from "./style/constantStyles";

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
      <div className='timeline basis-1/4'>{experienceInfo.time}</div>
      <div className='experience-information basis-3/4'>
        <div className='experience-position-and-company'>{experienceInfo.position} | {experienceInfo.name}</div>
        <div className='experience-description'>{experienceInfo.text}</div>
      </div>
    </div>
  )
};