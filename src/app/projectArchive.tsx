// Components
import { TechStack, StatusBadge } from './reuseableComponents/reuseableComponents';

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

  return (
    <div className='project-archive'>
      <h3 className={styles.archiveTitleStyle}>More projects</h3>
      <div className='mt-2 border-t border-white/[0.06]'>
        {sortedProjects.map((project) => (
          <div key={project.name} className={`archive-row ${styles.archiveRowStyle}`}>
            <span className={styles.archiveYearStyle}>{project.year}</span>
            <div className='min-w-0'>
              <div className={styles.archiveNameStyle}>{project.name}</div>
              <div className={styles.archiveSummaryStyle}>{project.summary}</div>
            </div>
            <div className={styles.archiveStackStyle}>
              {project.techStack.map((techName) => <TechStack key={techName} name={techName} />)}
            </div>
            <div className='col-start-3 row-start-1 flex justify-end md:col-start-4'>
              {project.href ? (
                <a className={styles.archiveLinkStyle} href={project.href} target='_blank' rel='noopener noreferrer' aria-label={`Open ${project.name}`}>
                  {project.href.includes('github.com') ? 'Code' : 'Visit'}
                  <NorthEastIcon style={{ fontSize: '0.9rem' }} />
                </a>
              ) : (
                <StatusBadge status={project.status} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};
