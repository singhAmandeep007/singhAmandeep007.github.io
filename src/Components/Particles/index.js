import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './particlesConfig';

import techLogos from './../../Common/techIcons';

const particlesInit = (main) => {
   //console.log(main);
   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};
const particlesLoaded = (container) => {
   console.log(container);
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

const ParticlesContainer = () => {
   return (
      <Particles
         id="tsparticles"
         init={particlesInit}
         loaded={particlesLoaded}
         options={particlesConfig}
      />
   );
};

export default React.memo(ParticlesContainer);
