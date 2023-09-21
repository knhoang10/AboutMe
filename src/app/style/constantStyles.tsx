// Props
type ButtonProps = {
  text: string;
  className: string;
  redirectLink: string;
};

export function ButtonStyle({ text, className, redirectLink}: ButtonProps) {
  const outerStyle = `
    relative bg-blue-500 rounded-lg overflow-hidden text-white px-5 py-2.5 group
  `;
  const innerStyle = `
    absolute w-0 rounded-lg group-hover:w-full rounded-lg transition-all ease-out duration-200 h-full bg-blue-700 left-0 top-0
  `;
  return (
    <a href={redirectLink} target='_blank' className={`${className} ${outerStyle}`}>
      <span className={innerStyle}></span>
      <span className='relative'>{text}</span>
    </a>
  )
};

// Common styling
export const rightPadding = `py-4 px-6`;

export const spaceBetweenDiv = 'gap-4';

export const flexColSpaceBetweenDiv = `flex flex-col ${spaceBetweenDiv}`;

// Specific styling
// Left Section
export const nameStyle = `text-5xl`;
export const jobPositionStyle = `text-2xl`;


// Right Section
export const rightSections = `
  ${rightPadding} ${flexColSpaceBetweenDiv}
`;

export const individualProjectExperience = `
  ${rightPadding} flex flex-row hover:bg-slate-300 rounded-2xl
`;

export const timelineStyle = `basis-1/4`;
export const projectExperienceInformationStyle = `basis-3/4`;
