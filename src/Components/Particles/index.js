import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './particlesConfig';

const particlesInit = (main) => {
   //console.log(main);
   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};
const particlesLoaded = (container) => {
   //console.log(container);
};

const ParticlesContainer = () => {
   return (
      <Particles
         id="tsparticles"
         init={particlesInit}
         loaded={particlesLoaded}
         options={{ ...particlesConfig }}
      />
   );
};

export default React.memo(ParticlesContainer);
