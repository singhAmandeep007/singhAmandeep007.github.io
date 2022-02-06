import React, { useEffect, useRef } from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './particlesConfig';

import techLogos from './../../Common/techIcons';

const particlesInit = (main) => {
  //console.log(main);
  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};
const particlesLoaded = (container) => {
  //console.log(container);
  //load svg

  // push logos
  for (let item in techLogos) {
    particlesConfig.particles.shape.image.push({
      src: techLogos[item]['logo'],
      height: 10,
      width: 10,
    });
  }
};

const ParticlesContainer = ({ isSidebarOpen }) => {
  let particleRef = useRef(null);

  useEffect(() => {
    if (particleRef.current) {
      if (isSidebarOpen) {
        particleRef.current.pause();
      } else {
        particleRef.current.play();
      }
    }
  }, [isSidebarOpen]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
      container={particleRef}
    />
  );
};

export default React.memo(ParticlesContainer);
