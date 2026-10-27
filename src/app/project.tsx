// Components
import { TechStack, StatusBadge } from './reuseableComponents/reuseableComponents';

// Data
import { ProjectInfo } from './data/projectData';

// MUI Framework
import NorthEastIcon from '@mui/icons-material/NorthEast';

// Styling
import * as styles from './style/constantStyles';

// Props
type ProjectProps = {
  projectInfo: ProjectInfo,
  wide?: boolean,
};

export default function Project({ projectInfo, wide = false }: ProjectProps) {
  const cardStyle = `project ${styles.featuredCardStyle} ${projectInfo.flagship ? styles.featuredCardFlagshipStyle : styles.featuredCardDefaultStyle} ${wide ? 'md:col-span-2' : ''}`;

  const constantSection = () => {
    return (
      <>
        <div className={`project-meta ${styles.featuredMetaStyle}`}>
          <span>{projectInfo.year}</span>
          <StatusBadge status={projectInfo.status} />
        </div>
        <h3 className={`project-name ${styles.featuredNameStyle}`}>
          {projectInfo.name}
          {projectInfo.href && (
            <NorthEastIcon className='ml-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' style={{ fontSize: '1rem' }} />
          )}
        </h3>
        <div className={`project-role ${styles.featuredRoleStyle}`}>{projectInfo.role}</div>
        <p className={`project-description ${styles.projectDescriptionStyle}`}>{projectInfo.summary}</p>
        <div className={`project-tech-stack mt-auto ${styles.techStackContainerStyle}`}>
          {projectInfo.techStack.map((techName) => <TechStack key={techName} name={techName} />)}
        </div>
      </>
    )
  };

  if (projectInfo.href) {
    return (
      <a className={cardStyle} href={projectInfo.href} target='_blank' rel='noopener noreferrer'>{constantSection()}</a>
    )
  }

  return (
    <div className={cardStyle}>{constantSection()}</div>
  )
};
