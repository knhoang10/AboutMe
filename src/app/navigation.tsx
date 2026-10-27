// Library
import { useState, useEffect, useRef } from 'react';

// Data
import { siteData } from './data/siteData';
import { sectionData } from './data/sectionData';

// MUI Framework
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NorthEastIcon from '@mui/icons-material/NorthEast';

// Styling
import * as styles from './style/constantStyles';


// A sticky command bar: real anchor links (they work without JavaScript), a prompt on the
// section being read, and a reading-progress line along the bottom edge.
export default function Navigation () {
  // State
  const [ activeSectionIndex, setActiveSectionIndex ] = useState(-1);
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ scrolled, setScrolled ] = useState(false);

  // Referencing
  const progressRef = useRef<HTMLDivElement>(null);

  // When scrolling, transition the navigation
  useEffect(() => {
    const handleScroll = () => {
      // The active section is the last one whose top has passed the upper third of the screen
      const scrollPosition = window.innerHeight / 3;
      let activeIndex = -1;
      sectionData.forEach((section, index) => {
        const sectionNode = document.getElementById(section.id);
        if (sectionNode && sectionNode.getBoundingClientRect().top <= scrollPosition) activeIndex = index;
      });

      // The last section can be too short to reach that line, so reaching the bottom of the page selects it
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const atBottom = scrollable > 0 && window.scrollY >= scrollable - 2;

      // Update the section index
      setActiveSectionIndex(atBottom ? sectionData.length - 1 : activeIndex);
      setScrolled(window.scrollY > 8);

      // Reading progress, drawn straight onto the element so scrolling never re-renders for it
      progressRef.current?.style.setProperty('transform', `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navigation ${styles.navBarStyle} ${scrolled || menuOpen ? styles.navBarScrolledStyle : ''}`} aria-label='Sections'>
      <div className={styles.navInnerStyle}>
        <a href='#top' className={styles.navLogoStyle} onClick={closeMenu}>
          <span className='text-gold'>~/</span>kevin-hoang<span className='caret text-gold' aria-hidden>_</span>
        </a>

        {/* One list: a drop-down panel on phones, an inline row from lg up. Always in the HTML. */}
        <ul id='navigation-menu' className={`${menuOpen ? 'flex' : 'hidden'} ${styles.navListStyle}`}>
          {sectionData.map((section, index) => {
            const isActive = index === activeSectionIndex;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`navigation-section group ${styles.navLinkStyle} ${isActive ? styles.navLinkActiveStyle : ''}`}
                  onClick={closeMenu}
                >
                  <span className={`${styles.navPromptStyle} ${isActive ? 'opacity-100' : ''}`} aria-hidden>&gt;</span>
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className='flex items-center gap-2'>
          <a href={siteData.resume} target='_blank' rel='noopener noreferrer' className={styles.navResumeStyle}>
            Resume<NorthEastIcon style={{ fontSize: '0.85rem' }} />
          </a>
          <button
            type='button'
            className={styles.navMenuButtonStyle}
            aria-expanded={menuOpen}
            aria-controls='navigation-menu'
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon fontSize='small' /> : <MenuIcon fontSize='small' />}
          </button>
        </div>
      </div>
      <div ref={progressRef} className={styles.navProgressStyle} aria-hidden></div>
    </nav>
  )
};
