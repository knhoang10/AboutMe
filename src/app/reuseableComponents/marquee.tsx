// Style
import * as styles from '../style/constantStyles';

/**
 * A slow, endless ribbon of words. The list is rendered twice and slid by half its
 * width, so the loop is seamless; the copy is aria-hidden so screen readers hear it
 * once. Pauses on hover; still under reduced motion.
 */
export default function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className='flex shrink-0 items-center' aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className='flex items-center whitespace-nowrap px-5'>
          <span className='mr-5 h-1.5 w-1.5 rotate-45 bg-gold' aria-hidden></span>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] ${styles.marqueeStyle}`}>
      <div className='flex w-max motion-safe:animate-marquee group-hover:[animation-play-state:paused]'>
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
};
