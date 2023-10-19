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
export const appStyle = `lg:flex lg:flex-row lg:mx-auto lg:min-h-screen lg:max-w-screen-xl lg:px-24 transition-opacity duration-1000 ease-in`;

// Left Section
export const leftSectionStyle = `basis-1/3 lg:sticky justify-between max-h-screen top-0 lg:py-14 ${flexColSpaceBetweenDiv} ${padding}`;
export const introductionStyle = `flex flex-col gap-3 lg:items-start items-center`;
export const headshotStyle = `rounded-full`;
export const nameStyle = `text-5xl text-white`;
export const jobPositionStyle = `text-xl text-slate-100`;
export const mottoStyle = `text-sm`;
export const socialMediaSectionStyle = `${flexRowSpaceBetweenDiv} lg:justify-start justify-center `
export const iconStyle = `transition ease-in-out hover:text-white hover:-translate-1 hover:scale-125`;

// Right Section
// export const rightSectionStyle = `basis-2/3 ${flexColSpaceBetweenDiv} py-14`;
export const rightSectionStyle = `basis-2/3 flex flex-col gap-28 py-14`;

export const newSectionTitle = `font-bold decoration-solid text-xl`;
export const projectSectionTitle = `${newSectionTitle} ${horizontalPadding}`;
export const experienceSectionTitle = projectSectionTitle;
export const educationSectionTitle = projectSectionTitle;

// Section Containers
export const aboutSectionStyle = `${padding} ${flexColSpaceBetweenDiv} ${spaceBetweenRightSections}`;
export const connectSectionStyle = `${padding} ${flexColSpaceBetweenDiv}`;


// Common project, experience, and education styles
// Sections
export const projectSectionStyle = `${flexColSpaceBetweenDiv} ${spaceBetweenRightSections}`;
export const experienceSectionStyle = projectSectionStyle;
export const educationSectionStyle = projectSectionStyle;

// Timeline
export const projectTimelineStyle = `lg:basis-1/5`;
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
export const projectIndividualStyle = `${padding} flex lg:flex-row flex-col hover:bg-slate-800 rounded-2xl`;
export const experienceIndividualStyle = projectIndividualStyle;
export const educationIndividualStyle = projectIndividualStyle;

// Tech Stack
export const techStackContainerStyle = `flex flex-wrap gap-2`;

// Button
// Reusable button
export const outerButtonStyle = `
relative lg:w-[18%] w-[30%] bg-slate-800 rounded-lg overflow-hidden text-slate-300 px-5 py-2 group flex justify-center items-center
`;
export const innerButtonStyle = `
absolute w-0 rounded-lg group-hover:w-full rounded-lg transition-all ease-out duration-200 h-full bg-blue-700 left-0 top-0
`;

// Tech Stack
export const techStackStyle = `
  bg-blue-700 text-xs rounded-lg px-2.5 py-1
`;

// Material UI
export const muiIconStyle = { fontSize: '2rem' };