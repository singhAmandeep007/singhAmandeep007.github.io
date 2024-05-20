/**
 * @param color Hex value format: #ffffff or ffffff
 * @param opacity apply opacity
 * @param decimal lighten or darken decimal value, example 0.5 to lighten by 50% or 1.5 to darken by 50%.
 */
function shadeColor({ color, opacity = 1, decimal }: { color: string; opacity?: number; decimal?: number }) {
  if (!decimal && opacity) {
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return `${color}` + _opacity.toString(16).toUpperCase();
  }

  const base = color.startsWith("#") ? 1 : 0;

  let r = parseInt(color.substring(base, 3), 16);
  let g = parseInt(color.substring(base + 2, 5), 16);
  let b = parseInt(color.substring(base + 4, 7), 16);

  if (decimal) {
    r = Math.round(r / decimal);
    g = Math.round(g / decimal);
    b = Math.round(b / decimal);
  }

  r = r < 255 ? r : 255;
  g = g < 255 ? g : 255;
  b = b < 255 ? b : 255;

  const rr = r.toString(16).length === 1 ? `0${r.toString(16)}` : r.toString(16);
  const gg = g.toString(16).length === 1 ? `0${g.toString(16)}` : g.toString(16);
  const bb = b.toString(16).length === 1 ? `0${b.toString(16)}` : b.toString(16);

  if (decimal && opacity) {
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return `#${rr}${gg}${bb}` + _opacity.toString(16).toUpperCase();
  }

  return `#${rr}${gg}${bb}`;
}

export const COLOR_VARIANTS = {
  primary: "--color-primary",
  "primary-light-1": "--color-primary-light-1",
  "primary-light-2": "--color-primary-light-2",
  "primary-background": "--color-primary-background",
  background: "--color-background",
  font: "--color-font",
  "github-calendar-cell-outline": "--color-github-calendar-cell-outline",
  "github-calendar-day-bg": "--color-github-calendar-day-bg",
  "github-calendar-day-bg-l4": "--color-github-calendar-day-bg-l4",
  "github-calendar-day-bg-l3": "--color-github-calendar-day-bg-l3",
  "github-calendar-day-bg-l2": "--color-github-calendar-day-bg-l2",
  "github-calendar-day-bg-l1": "--color-github-calendar-day-bg-l1",
} as const;

/**
 * @param themeName Name of the theme
 * @param colorPrimary Hex value format(6 char)
 * @param colorBackground Hex value format(6 char)
 * @param colorFont Hex value format(6 char)
 */
type TCreateTheme = {
  themeName: string;
  colorPrimary: string;
  colorBackground: string;
  colorFont: `#${string}`;
};
const createTheme = ({ colorBackground, colorFont, colorPrimary, themeName }: TCreateTheme) => {
  return {
    colors: {
      [COLOR_VARIANTS.primary]: colorPrimary,
      [COLOR_VARIANTS["primary-light-1"]]: shadeColor({ color: colorPrimary, decimal: 0.55 }),
      [COLOR_VARIANTS["primary-light-2"]]: shadeColor({ color: colorPrimary, decimal: 0.25 }),
      [COLOR_VARIANTS["primary-background"]]: shadeColor({ color: colorPrimary, decimal: 1.3, opacity: 0.8 }),

      [COLOR_VARIANTS.background]: shadeColor({ color: colorBackground, opacity: 0.9 }),

      [COLOR_VARIANTS.font]: colorFont,

      // Github calendar graph colors
      [COLOR_VARIANTS["github-calendar-cell-outline"]]: "#69696948",
      [COLOR_VARIANTS["github-calendar-day-bg"]]: shadeColor({ color: colorBackground }),
      [COLOR_VARIANTS["github-calendar-day-bg-l4"]]: shadeColor({ color: colorPrimary, decimal: 1 }),
      [COLOR_VARIANTS["github-calendar-day-bg-l3"]]: shadeColor({ color: colorPrimary, opacity: 0.8 }),
      [COLOR_VARIANTS["github-calendar-day-bg-l2"]]: shadeColor({ color: colorPrimary, opacity: 0.4 }),
      [COLOR_VARIANTS["github-calendar-day-bg-l1"]]: shadeColor({ color: colorPrimary, opacity: 0.2 }),
    },
    themeName,
    colorBackground,
    colorFont,
    colorPrimary,
  };
};

export const breakpoints = {
  // RESPONSIVE BREAKPOINTS // css var can't be used directly in media query
  bpXXLarge: "87.5em", // 1400px
  bpXLarge: "75em", // 1200px
  bpLarge: "62em", // 992px
  bpMedium: "48em", // 768px
  bpSmall: "36em", // 576px
  bpXSmall: "26.5625em", // 425px
  bpXXSmall: "23.4375em", // 375px
} as const;

export type TBreakpoints = typeof breakpoints;

export const themes = [
  createTheme({ themeName: "darkYellow", colorPrimary: "#f7e018", colorBackground: "#000000", colorFont: "#ffffff" }),
  createTheme({ themeName: "whiteRed", colorPrimary: "#ff2121", colorBackground: "#e2e2e2", colorFont: "#000000" }),
  createTheme({
    themeName: "whiteTurquoise",
    colorPrimary: "#81B622",
    colorBackground: "#000000",
    colorFont: "#ffffff",
  }),
  createTheme({ themeName: "blueGreen", colorPrimary: "#3CACAE", colorBackground: "#ffffff", colorFont: "#000000" }),
  createTheme({ themeName: "roseRed", colorPrimary: "#FF0080", colorBackground: "#000000", colorFont: "#ffffff" }),
];
