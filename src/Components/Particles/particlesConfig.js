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
         image: [
            {
               src: techLogos.bootstrap.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.github.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.d3.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.mongodb.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.materialui.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.typescript.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.javascript.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.redux.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.react.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.vue.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.styledComponents.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.socketio.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.sass.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.semanticui.logo,
               height: 10,
               width: 10,
            },
            {
               src: techLogos.nodejs.logo,
               height: 10,
               width: 10,
            },
         ],
         polygon: { nb_sides: 5 },
      },
      size: {
         value: 15,
      },
   },

   retina_detect: true,
};

export default particlesConfig;
