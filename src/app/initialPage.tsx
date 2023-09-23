import { useState, useEffect } from 'react';

export default function InitialPage() {
  // States
  const [fadeText, setFadeText] = useState(false);

  // Effects
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeText(true);
    }, 750);
  }, []);

  return (
    <div className={`initial-page text-white flex flex-col justify-center items-center h-screen text-5xl uppercase transition-opacity duration-1000 ease-out ${fadeText ? 'opacity-0' : 'opacity-100'}`}>
      <span className="text-center">Kevin Hoang Portfolio</span>
    </div>
  )
};