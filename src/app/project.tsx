// Components
import { TechStackList, StatusBadge } from './reuseableComponents/reuseableComponents';

// Data
import { ProjectInfo } from './data/projectData';

// MUI Framework
import NorthEastIcon from '@mui/icons-material/NorthEast';

// Styling
import * as styles from './style/constantStyles';

// Constants
// Half-width cards show this many pills; the rest fold into a "+N" chip
const halfCardTechLimit = 6;

// Props
type ProjectProps = {
  projectInfo: ProjectInfo,
  wide?: boolean,
};

export default function Project({ projectInfo, wide = false }: ProjectProps) {
  const spansRow = wide || projectInfo.flagship;
  const cardStyle = `project ${styles.featuredCardStyle} ${projectInfo.flagship ? styles.featuredCardFlagshipStyle : styles.featuredCardDefaultStyle} ${wide ? 'md:col-span-2' : ''}`;

  const heading = (
    <div>
      <h3 className={`project-name ${styles.featuredNameStyle}`}>
        {projectInfo.name}
        {projectInfo.href && (
          <NorthEastIcon className='ml-1.5 align-[-0.1em] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' style={{ fontSize: '1.05rem' }} />
        )}
      </h3>
      <div className={`project-role ${styles.featuredRoleStyle}`}>{projectInfo.role}</div>
    </div>
  );

  const summary = <p className={`project-description ${styles.featuredSummaryStyle}`}>{projectInfo.summary}</p>;

  const techStack = (
    <div className='project-tech-stack'>
      <TechStackList names={projectInfo.techStack} limit={spansRow ? undefined : halfCardTechLimit} />
    </div>
  );

  const constantSection = () => {
    return (
      <>
        <div className={`project-meta ${styles.featuredMetaStyle}`}>
          <span className={styles.featuredYearStyle}>{projectInfo.year}</span>
          <StatusBadge status={projectInfo.status} />
        </div>
        {spansRow ? (
          <div className={styles.featuredWideBodyStyle}>
            <div className='flex flex-col gap-4'>
              {heading}
              {summary}
            </div>
            <div>
              <div className={styles.featuredStackLabelStyle}>Built with</div>
              {techStack}
            </div>
          </div>
        ) : (
          <>
            {heading}
            {summary}
            <div className='mt-auto'>{techStack}</div>
          </>
        )}
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
