// Components
import { TechStackList, StatusBadge, LinkArrow } from './reuseableComponents/reuseableComponents';

// Data
import { ProjectInfo } from './data/projectData';

// Styling
import * as styles from './style/constantStyles';

// Props
type ProjectProps = {
  projectInfo: ProjectInfo,
  wide?: boolean,
};

export default function Project({ projectInfo, wide = false }: ProjectProps) {
  const spansRow = wide || projectInfo.flagship;
  const href = projectInfo.href;
  const surfaceStyle = projectInfo.flagship ? styles.featuredCardFlagshipStyle : href ? styles.featuredCardLinkStyle : styles.featuredCardStaticStyle;
  const cardStyle = `project ${styles.featuredCardStyle} ${surfaceStyle} ${wide ? 'md:col-span-2' : ''}`;

  const heading = (
    <div>
      <h3 className={`project-name ${styles.featuredNameStyle}`}>{projectInfo.name}</h3>
      <div className={`project-role ${styles.featuredRoleStyle}`}>{projectInfo.role}</div>
    </div>
  );

  const summary = <p className={`project-description ${styles.featuredSummaryStyle}`}>{projectInfo.summary}</p>;

  const techStack = (
    <div className='project-tech-stack'>
      <TechStackList names={projectInfo.techStack} />
    </div>
  );

  // Where a linked card goes, spelled out, with the animated arrow
  const linkFooter = href && (
    <div className={`project-link ${styles.featuredLinkFooterStyle}`}>
      <span>
        <span className={styles.featuredLinkLabelStyle}>{href.includes('github.com') ? 'View the code' : 'Visit the live site'}</span>
        <span className={styles.featuredLinkHostStyle}>{href.replace(/^https?:\/\/(www\.)?/, '')}</span>
      </span>
      <LinkArrow />
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
        {linkFooter}
      </>
    )
  };

  if (href) {
    return (
      <a className={cardStyle} href={href} target='_blank' rel='noopener noreferrer'>{constantSection()}</a>
    )
  }

  return (
    <div className={cardStyle}>{constantSection()}</div>
  )
};
