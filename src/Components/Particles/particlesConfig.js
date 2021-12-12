import techLogos from './../../Common/techIcons';

const particlesConfig = {
   background: {
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
      color: {
         value: '#000',
      },
   },
   fullScreen: {
      enable: true,
      zIndex: -1,
   },
   fps_limit: 60,

   particles: {
      number: { density: { enable: true, value_area: 500 }, value: 25 },
      line_linked: {
         color: '#fff', //random
         distance: 150,
         enable: true,
         opacity: 0.5,
         width: 1,
      },
      move: {
         attract: { enable: false, rotateX: 600, rotateY: 1200 },
         bounce: false,
         direction: 'none',
         enable: true,
         out_mode: 'out',
         random: false,
         speed: 3,
         straight: false,
      },

      opacity: {
         anim: { enable: true, opacity_min: 0.1, speed: 1, sync: false },
         random: false,
         value: 0.5,
      },
      shape: {
         type: ['image'],
         image: [],
         polygon: { nb_sides: 5 },
      },
      size: {
         value: 15,
      },
   },

   retina_detect: true,
};

// push logos
for (let item in techLogos) {
   particlesConfig.particles.shape.image.push({
      src: techLogos[item]['logo'],
      height: 10,
      width: 10,
   });
}

export default particlesConfig;
