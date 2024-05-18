import { techIcons } from "@/Common/techIcons";

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
  fpsLimit: 120,
  particles: {
    number: {
      density: {
        enable: true,
      },
      value: 40,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 500,
          y: 1000,
        },
      },
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
        speed: 0.2,
        sync: false,
        delay: 2,
      },
      value: { min: 0, max: 0.3 },
    },
    size: {
      value: 15,
    },
    shape: {
      options: {
        image: [],
      },
      type: "image",
    },
  },
  preload: [],

  detectRetina: true,
};

const particleOptionsImage = Object.keys(techIcons).map((iconName) => ({
  name: iconName,
}));
const particleOptionsPreload = Object.keys(techIcons).map((iconName) => ({
  src: techIcons[iconName as keyof typeof techIcons].logo,
  name: iconName,
}));

// @ts-expect-error-next-line
particlesOptions.particles.shape.options.image = particleOptionsImage;
particlesOptions.preload = particleOptionsPreload;

export { particlesOptions };
