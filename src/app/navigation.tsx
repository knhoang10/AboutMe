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
      let offsets = Array.from(sectionNodes).map((node, index2) => ({
        index: Number(node.getAttribute('data-index')),

        // Change the last section to have a lower point to make sure that the navigation changes
        offset: index2 !== sections.length - 1 ? node.offsetTop : node.offsetTop - window.innerHeight / 2.5,
      }));

      // When section reaches half way then change navigation
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Change index if scroll position is greater or less than the section position
      const activeIndex = offsets.findIndex(offset => offset.offset > scrollPosition) - 1;

      // Update the section index
      setActiveSectionIndex(activeIndex === -2 ? sections.length - 1 : activeIndex);
    };

    window.addEventListener('scroll', handleScroll);
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