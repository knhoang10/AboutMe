// Library
import { ReactNode } from 'react';

// Style
import * as styles from '../style/constantStyles';

// MUI Framework
import NorthEastIcon from '@mui/icons-material/NorthEast';

// Data
import { ProjectStatus } from '../data/projectData';
import { SectionId, sectionTitle } from '../data/sectionData';


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

// Section Header
type SectionHeaderProps = {
  id: string;
  title: string;
};

export function SectionHeader({ id, title }: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeaderStyle}>
      <h2 id={id} className={styles.sectionTitleStyle}>{title}</h2>
      <span className={styles.sectionRuleStyle} aria-hidden></span>
    </div>
  )
};

// Page Section: the anchor id, the header, and the nav label all come from sectionData
type PageSectionProps = {
  id: SectionId;
  className?: string;
  children: ReactNode;
};

export function PageSection({ id, className = '', children }: PageSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`${id}-section ${styles.sectionStyle} ${className}`}>
      <SectionHeader id={`${id}-title`} title={sectionTitle(id)} />
      {children}
    </section>
  )
};

// Terminal Window
type TerminalWindowProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

export function TerminalWindow({ title, className = '', children }: TerminalWindowProps) {
  return (
    <div className={`${styles.terminalStyle} ${className}`}>
      <div className={styles.terminalBarStyle}>
        <span className='flex gap-1.5' aria-hidden>
          <span className='h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80'></span>
          <span className='h-2.5 w-2.5 rounded-full bg-[#febc2e]/80'></span>
          <span className='h-2.5 w-2.5 rounded-full bg-[#28c840]/80'></span>
        </span>
        <span className={styles.terminalTitleStyle}>{title}</span>
      </div>
      <div className={styles.terminalBodyStyle}>{children}</div>
    </div>
  )
};

// One command and what it printed
type TerminalLineProps = {
  command: string;
  children: ReactNode;
};

export function TerminalLine({ command, children }: TerminalLineProps) {
  return (
    <div>
      <div><span className={styles.terminalPromptStyle} aria-hidden>$ </span><span className={styles.terminalCommandStyle}>{command}</span></div>
      <div className={styles.terminalOutputStyle}>{children}</div>
    </div>
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

// A row of tech pills, every one shown
type TechStackListProps = {
  names: string[];
};

export function TechStackList({ names }: TechStackListProps) {
  return (
    <div className={styles.techStackContainerStyle}>
      {names.map((techName) => <TechStack key={techName} name={techName} />)}
    </div>
  )
};

// Link Arrow: the cue that a card or row goes somewhere. Animated by .link-arrow in globals.css
// when its `group` parent is hovered or focused.
type LinkArrowProps = {
  small?: boolean;
};

export function LinkArrow({ small = false }: LinkArrowProps) {
  const iconStyle = { fontSize: small ? '0.85rem' : '1rem' };
  return (
    <span className={small ? styles.linkArrowSmallStyle : styles.linkArrowStyle} aria-hidden>
      <NorthEastIcon className='link-arrow-out' style={iconStyle} />
      <NorthEastIcon className='link-arrow-in' style={iconStyle} />
    </span>
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
