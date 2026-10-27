// Components
import { StatusBadge } from './reuseableComponents/reuseableComponents';

// Data
import { ProjectInfo } from './data/projectData';

// MUI Framework
import NorthEastIcon from '@mui/icons-material/NorthEast';

// Styling
import * as styles from './style/constantStyles';

// Props
type ProjectArchiveProps = {
  projects: ProjectInfo[],
};

export default function ProjectArchive({ projects }: ProjectArchiveProps) {
  // Newest first; projects from the same year keep their listed order
  const sortedProjects = [ ...projects ].sort((a, b) => Number(b.year) - Number(a.year));

  // One row; a project with a link makes the whole row the link
  const row = (project: ProjectInfo) => (
    <>
      <span className={styles.archiveYearStyle}>{project.year}</span>
      <div className='min-w-0'>
        <div className={styles.archiveNameStyle}>{project.name}</div>
        <p className={styles.archiveSummaryStyle}>{project.summary}</p>
        <p className={styles.archiveStackStyle}>{project.techStack.join(' · ')}</p>
      </div>
      <div className='flex justify-end'>
        {project.href ? (
          <span className={styles.archiveLinkStyle}>
            {project.href.includes('github.com') ? 'Code' : 'Visit'}
            <NorthEastIcon className='transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' style={{ fontSize: '0.9rem' }} />
          </span>
        ) : (
          <StatusBadge status={project.status} />
        )}
      </div>
    </>
  );

  return (
    <div className='project-archive'>
      <div className={styles.archiveHeaderStyle}>
        <h3 className={styles.archiveTitleStyle}>More projects</h3>
        <span className={styles.archiveCountStyle}>{projects.length} more</span>
      </div>
      <ul>
        {sortedProjects.map((project) => (
          <li key={project.name} className={styles.archiveItemStyle}>
            {project.href ? (
              <a className={`archive-row ${styles.archiveRowStyle}`} href={project.href} target='_blank' rel='noopener noreferrer'>{row(project)}</a>
            ) : (
              <div className={`archive-row ${styles.archiveRowStyle}`}>{row(project)}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
};
