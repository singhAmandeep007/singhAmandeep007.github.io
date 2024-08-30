import { techLogos } from "@/Common/techlogos";

import type { ISourceOptions } from "@tsparticles/engine";

const particlesOptions: ISourceOptions = {
  background: {
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  fullScreen: {
    enable: true,
    // no effect
    zIndex: -1,
  },
  fpsLimit: 60,
  particles: {
    number: {
      density: {
        enable: true,
      },
      value: 40,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 3,
      straight: false,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
        delay: 1,
      },
      value: { min: 0, max: 0.5 },
    },
    size: {
      value: 18,
    },
    shape: {
      // READ-MORE: https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_Particles_Shape_IShape.IShape.html
      options: {
        image: [],
      },
      type: "image",
    },
  },
  preload: [],

  detectRetina: true,
};

const particleOptionsImage = Object.values(techLogos).map(({ src }) => ({
  src,
}));

// @ts-expect-error-next-line
particlesOptions.particles.shape.options.image = particleOptionsImage;

export { particlesOptions };
