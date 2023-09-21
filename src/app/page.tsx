// Import statements
"use client"
import './style/globals.css';
import { useState, useEffect } from 'react';
import { promises as fs } from 'fs';
import InitialPage from './initialPage';
import { Navigation } from './navigation';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ButtonStyle } from './style/constantStyles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { projectData } from './data/projectData';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import { experienceData } from './data/experienceData';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import Experience from './experience';
import Project from './project';
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
    <>
      {showInitialPage ? <InitialPage /> : <TransitionPage />}
    </>
  )
};