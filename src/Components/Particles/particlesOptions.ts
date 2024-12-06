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
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
      },
    },
    color: {
      value: ["#ffffff", "#000000"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },

      animation: {
        enable: false,
        speed: 3,
        sync: false,
      },
    },
    size: {
      value: 2,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "right",
      random: false,
      straight: true,
      outModes: "out",
    },
    zIndex: {
      value: 5,
      opacityRate: 0.5,
    },
  },
  fpsLimit: 60,
  preload: [],
  detectRetina: true,
};

export { particlesOptions };
