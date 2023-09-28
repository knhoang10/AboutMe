// Import statements
"use client"
import './style/globals.css';

// Components
import InitialPage from './initialPage';
import TransitionPage from './transitionPage';

// Libraries
import { useState, useEffect } from 'react';


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