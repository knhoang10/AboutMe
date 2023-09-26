// Common styling -----------------------------------
export const rightPadding = ` py-4 px-6`;

export const spaceBetweenDiv = 'gap-5';

export const flexColSpaceBetweenDiv = `flex flex-col ${spaceBetweenDiv}`;

export const newSectionTitle = `font-bold underline decoration-solid`;

// Specific styling -----------------------------------
// Left Section
export const nameStyle = `text-5xl text-white`;
export const jobPositionStyle = `text-2xl text-slate-100`;

// Right Section
export const rightSections = `
  ${rightPadding} ${flexColSpaceBetweenDiv}
`;

export const individualProjectExperience = `
  ${rightPadding} flex lg:flex-row flex-col hover:bg-slate-800 rounded-2xl
`;

export const timelineStyle = `lg:basis-1/5`;
export const projectExperienceInformationStyle = `lg:basis-4/5 ${flexColSpaceBetweenDiv}`;
export const projectExperienceNamePositionStyle = `font-bold text-white`;
export const projectExperienceDescriptionStyle = `text-slate-300`;

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
export const iconStyle = { fontSize: '2rem' };