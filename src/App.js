import React, { Suspense, useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import SidebarMenu from './Components/SidebarMenu';
import ParticlesContainer from './Components/Particles';
import { useOnClickOutside } from './Hooks/onClickOutside';
import breakPoints from './Styles/Breakpoints';

const stlyedTheme = {
   ...breakPoints,
};
const Loading = () => {
   return <div>Loading...</div>;
};

function App() {
   const [theme, setTheme] = useState('dark-theme');
   const [isChecked, setIsChecked] = useState(false);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const sidebarNode = useRef();

   useOnClickOutside(sidebarNode, () => setIsSidebarOpen(false));

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);

   const themeToggler = () => {
      if (theme === 'light-theme') {
         setTheme('dark-theme');
         setIsChecked(false);
      } else {
         setTheme('light-theme');
         setIsChecked(true);
      }

      document.querySelector('.tsparticles-canvas-el').style.backgroundColor =
         'var(--color-tsParticles)';
   };

   return (
      <div className="App">
         <ThemeProvider theme={stlyedTheme}>
            <Router>
               <Suspense fallback={<Loading />}>
                  <SidebarMenu
                     isSidebarOpen={isSidebarOpen}
                     setIsSidebarOpen={setIsSidebarOpen}
                     isChecked={isChecked}
                     themeToggler={themeToggler}
                     ref={sidebarNode}
                  />
                  <Routes />
               </Suspense>
            </Router>
         </ThemeProvider>
         <ParticlesContainer />
      </div>
   );
}

export default App;
