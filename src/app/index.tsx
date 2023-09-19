import { App } from './page';
import { createRoot } from 'react-dom/client';
// import React from 'react';

const node = document.getElementById('app');
const root = createRoot(node);
root.render(<App />);