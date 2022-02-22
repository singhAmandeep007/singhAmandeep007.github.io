import React, { Suspense, useState, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import SidebarMenu from './Components/SidebarMenu';
import ParticlesContainer from './Components/Particles';
import { useOnClickOutside } from './Hooks/onClickOutside';
import { breakpoints } from './Common/styles.config';
import Loading from './Components/Loading';

const stlyedTheme = {
  ...breakpoints,
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarNode = useRef();

  useOnClickOutside(sidebarNode, () => setIsSidebarOpen(false));

  return (
    <main>
      <div className={`App ${isSidebarOpen ? 'blur' : ''}`}>
        <ThemeProvider theme={stlyedTheme}>
          <Router>
            <Suspense fallback={<Loading />}>
              <SidebarMenu
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                ref={sidebarNode}
              />
              <Routes />
            </Suspense>
          </Router>
        </ThemeProvider>
      </div>
      <ParticlesContainer isSidebarOpen={isSidebarOpen} />
    </main>
  );
}

export default App;
