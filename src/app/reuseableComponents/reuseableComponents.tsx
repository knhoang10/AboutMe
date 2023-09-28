// Style
import * as styles from '../style/constantStyles';


// Button
type ButtonProps = {
  text: string;
  className: string;
  redirectLink: string;
};

export function ButtonStyle({ text, className, redirectLink}: ButtonProps) {
  return (
    <a href={redirectLink} target='_blank' className={`${className} ${styles.outerButtonStyle}`}>
      <span className={styles.innerButtonStyle}></span>
      <span className='relative text-center'>{text}</span>
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