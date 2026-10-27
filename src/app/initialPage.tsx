// Data
import { siteData } from './data/siteData';

export default function InitialPage() {
  // Fades out in pure CSS (.splash in globals.css), then stops catching clicks
  return (
    <div className='initial-page splash fixed inset-0 z-50 flex flex-col justify-center items-center bg-light-black text-white text-5xl uppercase' aria-hidden>
      <span className="text-center">{siteData.name} Portfolio</span>
    </div>
  )
};
