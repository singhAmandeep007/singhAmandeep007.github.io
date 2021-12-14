const particlesConfig = {
   background: {
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
      // color: {
      //    value: '#000',
      // },
   },
   fullScreen: {
      enable: true,
      zIndex: -1,
   },
   fps_limit: 30,

   particles: {
      number: { density: { enable: true, value_area: 750 }, value: 20 },
      line_linked: {
         enable: false,
      },
      move: {
         attract: { enable: false, rotateX: 500, rotateY: 1000 },
         direction: 'none',
         enable: true,
         out_mode: 'out',
         random: false,
         speed: 3,
         straight: false,
      },

      opacity: {
         anim: { enable: true, opacity_min: 0.05, speed: 0.5, sync: false },
         random: false,
         value: 0.4,
      },
      shape: {
         type: ['image'],
         image: [],
         // polygon: { nb_sides: 5 },
      },
      size: {
         value: 15,
      },
   },

   retina_detect: false,
};

export default particlesConfig;
