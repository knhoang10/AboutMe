// Page styling -----------------------------------
export const horizontalPadding = `px-6`;

export const verticalPadding = `py-4`;

export const padding = `${horizontalPadding} ${verticalPadding}`;

export const spaceBetweenDiv = 'gap-5';

export const spaceBetweenRightSections = `pb-0`;

export const flexColSpaceBetweenDiv = `flex flex-col ${spaceBetweenDiv}`;

export const flexRowSpaceBetweenDiv = `flex flex-row ${spaceBetweenDiv}`;


// Specific styling -----------------------------------
// Entire app
export const pageStyle = `isolate min-h-screen`;
export const appStyle = `lg:flex lg:flex-row lg:mx-auto lg:min-h-screen lg:max-w-screen-xl lg:px-24`;

// Left Section
export const leftSectionStyle = `basis-1/3 lg:sticky justify-between max-h-screen top-0 lg:py-14 ${flexColSpaceBetweenDiv} ${padding}`;
export const introductionStyle = `flex flex-col gap-3 lg:items-start items-center lg:text-left text-center`;
export const headshotRingStyle = `photo-ring rounded-full p-[3px]`;
export const headshotStyle = `rounded-full bg-light-black`;
export const nameStyle = `text-5xl font-bold tracking-tight text-gradient-name`;
export const jobPositionStyle = `text-xl text-slate-100`;
export const mottoStyle = `text-sm`;
export const availabilityStyle = `mt-1 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs font-medium text-emerald-200`;
export const socialMediaSectionStyle = `${flexRowSpaceBetweenDiv} lg:justify-start justify-center `
export const iconStyle = `transition ease-in-out hover:text-white hover:-translate-1 hover:scale-125`;

// Right Section
export const rightSectionStyle = `basis-2/3 min-w-0 flex flex-col gap-28 py-14 px-4 lg:px-0`;
// Body text sits inside the column gutter on phones, and indents to match the cards on desktop
export const textGutterStyle = `px-2 lg:px-6`;

export const newSectionTitle = `font-bold tracking-[0.18em] text-xl text-gradient`;
export const sectionRuleLeftStyle = `h-px flex-1 bg-gradient-to-r from-transparent to-white/25`;
export const sectionRuleRightStyle = `h-px flex-1 bg-gradient-to-l from-transparent to-white/25`;

// Section Containers
export const aboutSectionStyle = `${flexColSpaceBetweenDiv} ${spaceBetweenRightSections}`;
export const connectSectionStyle = `${textGutterStyle} ${verticalPadding} ${flexColSpaceBetweenDiv}`;


// Common project, experience, and education styles
// Sections
export const projectSectionStyle = `${flexColSpaceBetweenDiv} ${spaceBetweenRightSections}`;
export const experienceSectionStyle = projectSectionStyle;
export const educationSectionStyle = projectSectionStyle;

// Timeline
export const projectTimelineStyle = `lg:basis-1/5 text-xs font-semibold uppercase tracking-[0.2em] text-gold/80 lg:pt-1`;
export const experienceTimelineStyle = projectTimelineStyle;
export const educationTimelineStyle = projectTimelineStyle;

// Information Details
export const projectInformationStyle = `lg:basis-4/5 ${flexColSpaceBetweenDiv}`;
export const experienceInformationStyle = projectInformationStyle;
export const educationInformationStyle = projectInformationStyle;

// Name and Position
export const projectNamePositionStyle = `font-bold text-white flex flow-row justify-between`;
export const experienceNamePositionStyle = projectNamePositionStyle;
export const educationNamePositionStyle = projectNamePositionStyle;

// Description
export const projectDescriptionStyle = `text-slate-300`;
export const experienceDescriptionStyle = projectDescriptionStyle;
export const educationDescriptionStyle = projectDescriptionStyle;

// Individual Section
export const projectIndividualStyle = `reveal shine card card-hover ${padding} flex lg:flex-row flex-col gap-3`;
export const experienceIndividualStyle = projectIndividualStyle;
export const educationIndividualStyle = projectIndividualStyle;

// Featured project cards
export const featuredGridStyle = `grid gap-5 md:grid-cols-2`;
export const featuredCardStyle = `reveal shine group flex flex-col gap-4 rounded-2xl p-6 transition duration-300 hover:-translate-y-1`;
export const featuredCardDefaultStyle = `card card-hover`;
export const featuredCardFlagshipStyle = `sweep-border hover:shadow-glow-gold md:col-span-2`;
export const featuredMetaStyle = `flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold/80`;
export const featuredNameStyle = `text-lg font-bold text-white group-hover:text-blue-300 transition-colors`;
export const featuredRoleStyle = `-mt-3 text-sm text-slate-400`;

// Status badges
export const statusBadgeStyle = `inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold normal-case tracking-normal`;
export const statusBadgeColors = {
  live: `bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-400/25`,
  stealth: `bg-gold/10 text-gold-light ring-1 ring-inset ring-gold/30`,
  private: `bg-slate-400/10 text-slate-300 ring-1 ring-inset ring-slate-400/20`,
  archived: `bg-slate-400/5 text-slate-400 ring-1 ring-inset ring-slate-400/[0.15]`,
};

// Archive table
export const archiveTitleStyle = `mt-6 px-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400`;
export const archiveRowStyle = `reveal grid grid-cols-[3.5rem_1fr_auto] items-start gap-x-4 gap-y-1 border-b border-white/[0.06] px-1 py-4 md:grid-cols-[3.5rem_minmax(0,14rem)_1fr_auto]`;
export const archiveYearStyle = `pt-0.5 text-xs font-semibold tracking-wider text-gold/80`;
export const archiveNameStyle = `font-semibold text-white`;
export const archiveSummaryStyle = `text-sm text-slate-400`;
export const archiveStackStyle = `col-start-2 col-span-2 flex flex-wrap gap-1.5 md:col-span-1 md:col-start-3 md:row-start-1`;
export const archiveLinkStyle = `inline-flex items-center gap-1 text-sm font-medium text-blue-300 hover:text-gold-light transition-colors`;

// Stats and marquee
export const statsGridStyle = `grid grid-cols-3 gap-3 ${textGutterStyle}`;
export const statCardStyle = `card px-4 py-5 text-center`;
export const statValueStyle = `block text-3xl font-bold text-white`;
export const statLabelStyle = `mt-1 block text-xs uppercase tracking-[0.15em] text-slate-400`;
export const marqueeStyle = `py-2 text-sm font-medium text-slate-300`;

// Tech Stack
export const techStackContainerStyle = `flex flex-wrap gap-2`;

// Tech Stack
export const techStackStyle = `
  rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-200 ring-1 ring-inset ring-blue-400/20
`;

// Material UI
export const muiIconStyle = { fontSize: '2rem' };
