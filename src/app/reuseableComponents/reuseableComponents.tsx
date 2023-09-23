import {outerButtonStyle, innerButtonStyle, techStackStyle} from '../style/constantStyles';

// Button
type ButtonProps = {
  text: string;
  className: string;
  redirectLink: string;
};

export function ButtonStyle({ text, className, redirectLink}: ButtonProps) {
  return (
    <a href={redirectLink} target='_blank' className={`${className} ${outerButtonStyle}`}>
      <span className={innerButtonStyle}></span>
      <span className='relative'>{text}</span>
    </a>
  )
};

// Tech Stack
type TechStackProps = {
  name: string;
};

export function TechStack({ name }: TechStackProps) {
  return (
    <div className={`tech-stack-${name} ${techStackStyle}`}>
      {name}
    </div>
  )
};