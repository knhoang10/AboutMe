// Library
import { useState, useEffect, useRef } from 'react';

// MUI Framework
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

// Constants
const sections = [ 'ABOUT ME', 'PROJECTS', 'EXPERIENCE', 'EDUCATION', 'CONNECT WITH ME!' ];


export default function Navigation () {
  // State
  const [ activeSectionIndex, setActiveSectionIndex ] = useState(0);

  // When scrolling, transition the navigation
  useEffect(() => {
    const handleScroll = () => {
      const sectionNodes = document.querySelectorAll('section');

      // The active section is the last one whose top has passed the upper third of the screen
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let activeIndex = 0;
      sectionNodes.forEach((node, index) => {
        if (node.offsetTop <= scrollPosition) activeIndex = index;
      });

      // The last section can be too short to reach that line, so reaching the bottom of the page selects it
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      // Update the section index
      setActiveSectionIndex(atBottom ? sections.length - 1 : activeIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Referencing
  const inputRef = useRef<HTMLDivElement>(null);

  // Functions
  // Scrolling to the different sections
  const scrollToIndex = (index: number) => {
    const sectionNodes = document.querySelectorAll('section');
    const sectionNode = sectionNodes[ index ];
    sectionNode?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center'
    });
  };


  return (
    <div ref={inputRef} className="navigation flex flex-col items-start hidden lg:block">
      {sections.map((section, index) => (
        <div key={index} className={`navigation-section flex flex-row gap-3 hover:text-white hover:font-bold group ${index === activeSectionIndex ? 'text-white font-bold' : ''}`}>
          <div className={`navigation-arrow-icon group-hover:block ${index === activeSectionIndex ? 'block' : 'hidden'}`}>
            <KeyboardDoubleArrowRightIcon />
          </div>
          <button key={index} className='navigation-section-button' onClick={() => scrollToIndex(index)}>{section}</button>
        </div>
      ))}
    </div>
  )
};