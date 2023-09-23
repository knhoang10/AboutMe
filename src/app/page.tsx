// Import statements
"use client"
import './style/globals.css';
import InitialPage from './initialPage';
import { useState, useEffect } from 'react';
import TransitionPage from './transitionPage';

// Constants
const headShotURL: string = 'https://drive.google.com/uc?export=view&id=1JsF8Kkz9MTObFlyec0YO5HECDvabZokU';

export default function App() {

  // States
  const [showInitialPage, setShowInitialPage] = useState(true);

  // Effects
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowInitialPage(false);
    }, 1750);
  }, []);

  return (
    <div className='bg-light-black text-slate-300'>
      {showInitialPage ? <InitialPage /> : <TransitionPage />}
    </div>
  )
};