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
  preload: [],
  detectRetina: true,
};

export { particlesOptions };
