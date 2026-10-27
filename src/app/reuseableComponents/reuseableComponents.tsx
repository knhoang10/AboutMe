// Style
import * as styles from '../style/constantStyles';

// Data
import { ProjectStatus } from '../data/projectData';


// Button
type ButtonProps = {
  text: string;
  className: string;
  redirectLink: string;
  variant?: 'primary' | 'ghost';
};

export function ButtonStyle({ text, className, redirectLink, variant = 'ghost' }: ButtonProps) {
  const opensNewTab = redirectLink.startsWith('http');
  return (
    <a
      href={redirectLink}
      target={opensNewTab ? '_blank' : undefined}
      rel={opensNewTab ? 'noopener noreferrer' : undefined}
      className={`${className} ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
    >
      {text}
    </a>
  )
};

// Tech Stack
type TechStackProps = {
  name: string;
};

export function TechStack({ name }: TechStackProps) {
  return (
    <div className={`tech-stack-${name} ${styles.techStackStyle}`}>
      {name}
    </div>
  )
};

// Status Badge
const statusLabels: Record<ProjectStatus, string> = {
  live: 'Live',
  stealth: 'Stealth',
  private: 'Private',
  archived: 'Archived',
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`${styles.statusBadgeStyle} ${styles.statusBadgeColors[status]}`}>
      {status === 'live' && (
        <span className='relative flex h-1.5 w-1.5'>
          <span className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 motion-safe:animate-pulse-dot'></span>
          <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400'></span>
        </span>
      )}
      {statusLabels[status]}
    </span>
  )
};
