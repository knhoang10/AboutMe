// Components
import { StatusBadge, TechStackList, LinkArrow } from './reuseableComponents/reuseableComponents';

// Data
import { ProjectInfo } from './data/projectData';

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
        <div className={styles.archiveStackStyle}>
          <TechStackList names={project.techStack} />
        </div>
      </div>
      <div className='flex justify-end'>
        {project.href ? (
          <span className={styles.archiveLinkStyle}>
            <span className='hidden sm:inline'>{project.href.includes('github.com') ? 'Code' : 'Visit'}</span>
            <LinkArrow small />
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
              <a className={`archive-row ${styles.archiveRowStyle} ${styles.archiveRowLinkStyle}`} href={project.href} target='_blank' rel='noopener noreferrer' aria-label={`${project.name} (${project.href.includes('github.com') ? 'code' : 'live site'}, opens in a new tab)`}>{row(project)}</a>
            ) : (
              <div className={`archive-row ${styles.archiveRowStyle}`}>{row(project)}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
};
