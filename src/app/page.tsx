// Components
import InitialPage from './initialPage';
import TransitionPage from './transitionPage';


export default function App() {
  // The page renders straight into the HTML; the intro sits on top and fades itself out
  return (
    <>
      <InitialPage />
      <TransitionPage />
    </>
  )
};
