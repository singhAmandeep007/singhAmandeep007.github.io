import type { ISourceOptions } from "@tsparticles/engine";

const particlesOptions: ISourceOptions = {
  // background: {
  //   position: "50% 50%",
  //   repeat: "no-repeat",
  //   size: "cover",
  // },
  // fullScreen: {
  //   enable: true,
  //   zIndex: -1,
  // },
  // fps_limit: 30,

  // particles: {
  //   number: { density: { enable: true, value_area: 750 }, value: 20 },
  //   line_linked: {
  //     enable: false,
  //   },
  //   move: {
  //     attract: { enable: false, rotateX: 500, rotateY: 1000 },
  //     direction: "none",
  //     enable: true,
  //     out_mode: "out",
  //     random: false,
  //     speed: 3,
  //     straight: false,
  //   },

  //   opacity: {
  //     anim: { enable: true, opacity_min: 0.05, speed: 0.5, sync: false },
  //     random: false,
  //     value: 0.4,
  //   },
  //   shape: {
  //     type: ["image"],

  //     image: [],
  //   },
  //   size: {
  //     value: 15,
  //   },
  // },
  particles: {
    shape: {
      type: "square", // starting from v2, this require the square shape script
    },
  },
  preset: "bubbles",

  retina_detect: false,
};

/**
 * ...Object.keys(techIcons).map((iconName) => ({
          // @ts-expect-error jkdl fds daf
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src: techIcons[iconName]["logo"],
          height: 10,
          width: 10,
        })),
 */

export { particlesOptions };
