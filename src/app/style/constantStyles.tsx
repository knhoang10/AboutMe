// Page styling -----------------------------------
export const horizontalPadding = `px-6`;

export const verticalPadding = `py-4`;

export const padding = `${horizontalPadding} ${verticalPadding}`;

export const spaceBetweenDiv = 'gap-5';

export const flexColSpaceBetweenDiv = `flex flex-col ${spaceBetweenDiv}`;

export const flexRowSpaceBetweenDiv = `flex flex-row ${spaceBetweenDiv}`;


// Specific styling -----------------------------------
// Entire app
export const pageStyle = `isolate min-h-screen`;
// Hero and sections share one centered column
export const containerStyle = `mx-auto w-full max-w-5xl px-6`;
export const mainStyle = `${containerStyle} flex flex-col gap-28 pb-14 pt-10`;

// Navigation (a sticky command bar)
export const navBarStyle = `sticky top-0 z-40 border-b border-transparent transition-colors duration-300`;
export const navBarScrolledStyle = `border-white/[0.07] bg-light-black/80 backdrop-blur-md`;
export const navInnerStyle = `${containerStyle} relative flex h-16 items-center justify-between gap-6`;
export const navLogoStyle = `font-mono text-sm font-medium text-slate-100 transition-colors hover:text-white`;
// One list: a drop-down panel below lg, an inline row from lg up
export const navListStyle = `absolute inset-x-0 top-full flex-col gap-1 border-b border-white/[0.07] bg-light-black px-6 py-4 lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0`;
export const navLinkStyle = `flex items-center gap-1.5 py-2 font-mono text-xs uppercase tracking-[0.14em] text-slate-400 transition-colors hover:text-white lg:py-0`;
export const navLinkActiveStyle = `text-white`;
export const navPromptStyle = `text-gold opacity-0 transition-opacity group-hover:opacity-100`;
export const navResumeStyle = `hidden items-center gap-1 rounded-full border border-white/[0.15] px-3.5 py-1.5 font-mono text-xs text-slate-200 transition-colors hover:border-gold/60 hover:text-white sm:inline-flex`;
export const navMenuButtonStyle = `inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] text-slate-200 transition-colors hover:border-gold/60 hover:text-white lg:hidden`;
export const navProgressStyle = `absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-blue-400 to-gold`;

// Hero
export const heroStyle = `${containerStyle} flex flex-col justify-center gap-14 pb-16 pt-10 lg:min-h-[calc(100svh-4rem)] lg:pt-6`;
export const heroGridStyle = `flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16`;
export const heroTextStyle = `flex max-w-2xl flex-col items-start gap-5`;
export const availabilityStyle = `inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs font-medium text-emerald-200`;
export const nameStyle = `font-display text-5xl font-extrabold tracking-tight text-gradient-name sm:text-7xl`;
export const jobPositionStyle = `-mt-2 font-display text-xl font-medium text-slate-100 sm:text-2xl`;
export const heroPromptStyle = `font-mono text-sm text-blue-200 sm:text-base`;
export const heroIntroStyle = `max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg`;
export const heroActionsStyle = `mt-2 flex flex-wrap items-center gap-3`;
export const heroPhotoStyle = `order-first shrink-0 lg:order-none`;
export const headshotRingStyle = `photo-ring w-fit rounded-full p-[3px]`;
export const headshotStyle = `h-36 w-36 rounded-full bg-light-black sm:h-44 sm:w-44 lg:h-72 lg:w-72`;
export const socialMediaSectionStyle = `ml-1 flex items-center gap-4`;
export const iconStyle = `text-slate-400 transition ease-in-out hover:-translate-y-0.5 hover:text-white`;

// Every section: a header, then its content. scroll-mt keeps the header clear of the sticky bar.
export const sectionStyle = `flex flex-col gap-8 scroll-mt-24`;
export const sectionHeaderStyle = `reveal flex items-center gap-5`;
export const sectionTitleStyle = `font-display text-2xl font-bold uppercase tracking-[0.12em] text-white sm:text-3xl`;
export const sectionRuleStyle = `h-px flex-1 bg-gradient-to-r from-gold/50 via-white/10 to-transparent`;

// Shared text
export const bodyTextStyle = `leading-relaxed text-slate-400`;
export const monoLabelStyle = `font-mono text-xs uppercase tracking-[0.14em] text-slate-400`;


// About -----------------------------------
export const aboutGridStyle = `grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-12`;
export const aboutLeadStyle = `reveal text-lg leading-relaxed text-slate-200 sm:text-xl`;
export const aboutTextStyle = `reveal ${bodyTextStyle}`;

// Terminal window
export const terminalStyle = `overflow-hidden rounded-xl border border-white/10 bg-[#0d1217]/90 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]`;
export const terminalBarStyle = `relative flex items-center border-b border-white/[0.07] bg-white/[0.03] px-4 py-2.5`;
export const terminalTitleStyle = `absolute inset-x-0 text-center font-mono text-[0.7rem] text-slate-500`;
export const terminalBodyStyle = `flex flex-col gap-4 p-5 font-mono text-[0.8rem] leading-6`;
export const terminalPromptStyle = `text-gold`;
export const terminalCommandStyle = `text-slate-100`;
export const terminalOutputStyle = `text-slate-400`;

// Stats: one strip split by hairlines instead of three boxes
export const statsGridStyle = `grid grid-cols-3 divide-x divide-white/10 border-y border-white/10`;
export const statCardStyle = `flex flex-col items-center gap-2 px-2 py-6 text-center sm:items-start sm:px-8 sm:text-left sm:first:pl-0`;
export const statValueStyle = `font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl`;
export const statLabelStyle = `font-mono text-[0.68rem] uppercase tracking-[0.14em] text-slate-400`;
export const marqueeStyle = `py-1 font-mono text-[0.8rem] text-slate-300`;


// Projects -----------------------------------
export const featuredGridStyle = `grid gap-5 md:grid-cols-2`;
export const featuredCardStyle = `reveal shine group flex flex-col gap-5 rounded-2xl p-6 sm:p-7 transition duration-300 hover:-translate-y-1`;
export const featuredCardDefaultStyle = `card card-hover`;
export const featuredCardFlagshipStyle = `sweep-border hover:shadow-glow-gold md:col-span-2`;
// Full-width cards put the write-up and the stack side by side
export const featuredWideBodyStyle = `flex flex-col gap-5 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-10`;
export const featuredMetaStyle = `flex items-center justify-between gap-3`;
export const featuredYearStyle = `font-mono text-xs font-medium tracking-wider text-slate-400`;
export const featuredNameStyle = `font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-200`;
export const featuredRoleStyle = `mt-1 text-sm font-medium text-blue-300/90`;
export const featuredSummaryStyle = `text-[0.95rem] ${bodyTextStyle} transition-colors group-hover:text-slate-300`;
export const featuredStackLabelStyle = `${monoLabelStyle} mb-3 hidden text-[0.68rem] md:block`;

// Status badges
export const statusBadgeStyle = `inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold`;
export const statusBadgeColors = {
  live: `bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-400/25`,
  stealth: `bg-blue-400/10 text-blue-200 ring-1 ring-inset ring-blue-400/30`,
  private: `bg-slate-400/10 text-slate-300 ring-1 ring-inset ring-slate-400/20`,
  archived: `bg-slate-400/5 text-slate-400 ring-1 ring-inset ring-slate-400/[0.15]`,
};

// Archive table
export const archiveHeaderStyle = `reveal mt-6 flex items-baseline justify-between border-b border-white/10 pb-3`;
export const archiveTitleStyle = `font-display text-lg font-bold text-white`;
export const archiveCountStyle = `font-mono text-xs text-slate-500`;
export const archiveItemStyle = `reveal border-b border-white/[0.06]`;
export const archiveRowStyle = `group -mx-3 my-1 grid grid-cols-[3rem_minmax(0,1fr)_auto] items-start gap-x-4 rounded-xl px-3 py-4 transition-colors hover:bg-white/[0.035] sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-x-6`;
export const archiveYearStyle = `pt-1 font-mono text-xs text-slate-500`;
export const archiveNameStyle = `font-display font-semibold text-white transition-colors group-hover:text-blue-200`;
export const archiveSummaryStyle = `mt-1 text-sm ${bodyTextStyle}`;
export const archiveStackStyle = `mt-2.5 font-mono text-[0.7rem] leading-relaxed text-gold-light/75`;
export const archiveLinkStyle = `inline-flex items-center gap-1 pt-0.5 text-sm font-medium text-blue-300 transition-colors group-hover:text-gold-light`;


// Experience timeline -----------------------------------
export const timelineStyle = `flex max-w-3xl flex-col`;
// The rail is each entry's left border, so it runs unbroken and stops at the last entry.
// From sm up the dates move out to a column left of the rail.
export const timelineItemStyle = `reveal relative border-l border-white/10 pb-12 pl-8 last:pb-0 sm:ml-[10.5rem]`;
export const timelineTimeStyle = `mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400 sm:absolute sm:right-[calc(100%+2rem)] sm:top-2 sm:mb-0 sm:w-[8.5rem] sm:text-right`;
export const timelineDotStyle = `absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full sm:top-2.5`;
export const timelineDotCurrentStyle = `bg-gold shadow-[0_0_0_4px_rgba(201,164,92,0.18)]`;
export const timelineDotPastStyle = `bg-light-black ring-2 ring-slate-500`;
export const timelineTitleStyle = `font-display text-lg font-bold tracking-tight text-white`;
export const timelineCompanyStyle = `font-medium text-blue-300`;
export const timelineTextStyle = `mt-3 ${bodyTextStyle}`;


// Education -----------------------------------
export const educationGridStyle = `grid gap-5 md:grid-cols-3`;
export const educationCardStyle = `reveal shine card card-hover flex flex-col gap-3 p-6`;
export const educationTimeStyle = `font-mono text-xs tracking-wider text-gold`;
export const educationDegreeStyle = `font-display font-bold leading-snug text-white`;
export const educationFieldStyle = `-mt-1 text-sm text-slate-400`;
export const educationSchoolStyle = `text-sm font-medium text-blue-300`;
export const educationTextStyle = `mt-1 border-t border-white/[0.06] pt-3 text-sm ${bodyTextStyle}`;


// Connect -----------------------------------
export const connectPanelStyle = `reveal cta-panel relative overflow-hidden rounded-3xl border border-white/10 px-6 py-12 text-center sm:px-12 sm:py-16`;
export const connectHeadingStyle = `mx-auto max-w-lg [text-wrap:balance] font-display text-3xl font-bold tracking-tight text-white sm:text-4xl`;
export const connectTextStyle = `mx-auto mt-5 max-w-xl ${bodyTextStyle}`;
export const connectButtonsStyle = `mt-8 flex flex-row flex-wrap justify-center gap-3`;
export const connectEmailStyle = `mt-6 inline-block font-mono text-sm text-slate-400 transition-colors hover:text-gold-light`;


// Tech Stack -----------------------------------
export const techStackContainerStyle = `flex flex-wrap gap-2`;

// Champagne on the cool background, so the stack reads at a glance
export const techStackStyle = `
  rounded-full bg-gold/[0.12] px-2.5 py-1 text-xs font-medium text-gold-light ring-1 ring-inset ring-gold/40 transition-colors group-hover:bg-gold/[0.18]
`;
export const techStackMoreStyle = `rounded-full px-2.5 py-1 text-xs font-medium text-slate-400 ring-1 ring-inset ring-white/15`;

// Material UI
export const muiIconStyle = { fontSize: '2rem' };
