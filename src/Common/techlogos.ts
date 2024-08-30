export const techLogoNames = [
  "react",
  "html",
  "pwa",
  "css",
  "bootstrap",
  "express",
  "git",
  "github",
  "materialui",
  "mongodb",
  "socketio",
  "typescript",
  "nodejs",
  "javascript",
  "redux",
  "sass",
  "d3",
  "vuejs",
  "styledcomponents",
  "postman",
  "cypress",
  "jest",
  "msw",
  "nextjs",
  "playwright",
  "python",
  "storybook",
  "vitejs",
  "amcharts",
  "semanticui",
] as const;

type TTechLogoName = (typeof techLogoNames)[number];

export type TTechLogo = Record<TTechLogoName, { label: string; src: string }>;

export const techLogos = techLogoNames.reduce((acc, logoName) => {
  acc[logoName] = {
    label: logoName[0].toUpperCase() + logoName.slice(1),
    src: `./logos/${logoName}.svg`,
  };
  return acc;
}, {} as TTechLogo);
