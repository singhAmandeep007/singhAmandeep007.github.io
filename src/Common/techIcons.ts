import bootstrapSvg from "@/Assets/icons/bootstrap.svg";
import cssSvg from "@/Assets/icons/css.svg";
import cypressSvg from "@/Assets/icons/cypress.svg";
import d3Svg from "@/Assets/icons/d3.svg";
import expressSvg from "@/Assets/icons/express.svg";
import gitSvg from "@/Assets/icons/git.svg";
import githubSvg from "@/Assets/icons/github.svg";
import htmlSvg from "@/Assets/icons/html.svg";
import javascriptSvg from "@/Assets/icons/javascript.svg";
import jestSvg from "@/Assets/icons/jest.svg";
import materialuiSvg from "@/Assets/icons/materialui.svg";
import mongodbSvg from "@/Assets/icons/mongodb.svg";
import mswSvg from "@/Assets/icons/msw.svg";
import nextjsSvg from "@/Assets/icons/nextjs.svg";
import nodejsSvg from "@/Assets/icons/nodejs.svg";
import playwrightSvg from "@/Assets/icons/playwright.svg";
import postmanSvg from "@/Assets/icons/postman.svg";
import pwaSvg from "@/Assets/icons/pwa.svg";
import pythonSvg from "@/Assets/icons/python.svg";
import reactSvg from "@/Assets/icons/react.svg";
import reduxSvg from "@/Assets/icons/redux.svg";
import sassSvg from "@/Assets/icons/sass.svg";
import socketioSvg from "@/Assets/icons/socketio.svg";
import storyblookSvg from "@/Assets/icons/storybook.svg";
import styledComponentsSvg from "@/Assets/icons/styled-components.svg";
import typescriptSvg from "@/Assets/icons/typescript.svg";
import vitejsSvg from "@/Assets/icons/vitejs.svg";
import vuejsSvg from "@/Assets/icons/vue-js.svg";

import amChartsSvg from "@/Assets/icons/amcharts.svg";
import semanticUISvg from "@/Assets/icons/semantic-ui.svg";

export type TTechIcon = Record<string, { label: string; logo: string }>;

export const techIcons = {
  react: {
    label: "React",
    logo: reactSvg,
  },
  html: {
    label: "HTML",
    logo: htmlSvg,
  },
  pwa: {
    label: "PWA",
    logo: pwaSvg,
  },
  css: {
    label: "CSS",
    logo: cssSvg,
  },
  bootstrap: {
    label: "Bootstrap",
    logo: bootstrapSvg,
  },

  expressjs: {
    label: "Express.js",
    logo: expressSvg,
  },
  git: {
    label: "Git",
    logo: gitSvg,
  },
  github: {
    label: "GitHub",
    logo: githubSvg,
  },
  materialui: {
    label: "Material UI",
    logo: materialuiSvg,
  },
  mongodb: {
    label: "MongoDB",
    logo: mongodbSvg,
  },

  socketio: {
    label: "Socket.io",
    logo: socketioSvg,
  },
  typescript: {
    label: "TypeScript",
    logo: typescriptSvg,
  },

  nodejs: {
    label: "Node.js",
    logo: nodejsSvg,
  },
  javascript: {
    label: "JavaScript",
    logo: javascriptSvg,
  },

  redux: {
    label: "Redux",
    logo: reduxSvg,
  },
  sass: {
    label: "Sass",
    logo: sassSvg,
  },
  d3: {
    label: "D3",
    logo: d3Svg,
  },
  vue: {
    label: "Vue",
    logo: vuejsSvg,
  },
  styledComponents: {
    label: "Styled-Components",
    logo: styledComponentsSvg,
  },
  postman: {
    label: "Postman",
    logo: postmanSvg,
  },
  cypress: {
    label: "Cypress",
    logo: cypressSvg,
  },
  jest: {
    label: "Jest",
    logo: jestSvg,
  },
  msw: {
    label: "MSW",
    logo: mswSvg,
  },
  nextjs: {
    label: "Next.js",
    logo: nextjsSvg,
  },
  playwright: {
    label: "Playwright",
    logo: playwrightSvg,
  },
  python: {
    label: "Python",
    logo: pythonSvg,
  },
  storybook: {
    label: "Storybook",
    logo: storyblookSvg,
  },
  vitejs: {
    label: "Vite",
    logo: vitejsSvg,
  },
  amcharts: {
    label: "AM Charts",
    logo: amChartsSvg,
  },
  semanticui: {
    label: "Semantic UI",
    logo: semanticUISvg,
  },
} as const;

export type TTechIcons = typeof techIcons;
