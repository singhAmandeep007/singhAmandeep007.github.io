import ThemeIcon from './themeIcon';

/**
 * @param color Hex value format: #ffffff or ffffff
 * @param decimal lighten or darken decimal value, example 0.5 to lighten by 50% or 1.5 to darken by 50%.
 * @param opacity apply opacity
 */
function shadeColor(color, decimal, opacity = 1) {
  if (!decimal && opacity) {
    let _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return `${color}` + _opacity.toString(16).toUpperCase();
  }

  const base = color.startsWith('#') ? 1 : 0;

  let r = parseInt(color.substring(base, 3), 16);
  let g = parseInt(color.substring(base + 2, 5), 16);
  let b = parseInt(color.substring(base + 4, 7), 16);

  r = Math.round(r / decimal);
  g = Math.round(g / decimal);
  b = Math.round(b / decimal);

  r = r < 255 ? r : 255;
  g = g < 255 ? g : 255;
  b = b < 255 ? b : 255;

  const rr =
    r.toString(16).length === 1 ? `0${r.toString(16)}` : r.toString(16);
  const gg =
    g.toString(16).length === 1 ? `0${g.toString(16)}` : g.toString(16);
  const bb =
    b.toString(16).length === 1 ? `0${b.toString(16)}` : b.toString(16);

  if (decimal && opacity) {
    let _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return `#${rr}${gg}${bb}` + _opacity.toString(16).toUpperCase();
  }

  return `#${rr}${gg}${bb}`;
}
/**
 * @param themeName Name of the theme
 * @param colorPrimary Hex value format(6 char)
 * @param colorBackground Hex value format(6 char)
 * @param colorFont Hex value format(6 char)
 */
const createTheme = (themeName, colorPrimary, colorBackground, colorFont) => {
  return {
    colors: {
      '--color-primary': colorPrimary,
      '--color-primary-light-1': shadeColor(colorPrimary, 0.55),
      '--color-primary-light-2': shadeColor(colorPrimary, 0.25),
      '--color-primary-background': shadeColor(colorPrimary, 1.3, 0.8),

      '--color-background': shadeColor(colorBackground, undefined, 0.9),

      '--color-font': colorFont,

      '--color-calendar-graph-day-l4-bg': shadeColor(colorPrimary, 1.5),
      '--color-calendar-graph-day-l3-bg': shadeColor(colorPrimary, 1.1),
      '--color-calendar-graph-day-l2-bg': shadeColor(colorPrimary, 0.7),
      '--color-calendar-graph-day-l1-bg': shadeColor(colorPrimary, 0.3),
    },
    themeName,
    themeIcon: <ThemeIcon primary={colorPrimary} secondary={colorBackground} />,
  };
};

const StyleConfig = {
  themes: [
    createTheme('darkYellow', '#f7e018', '#000000', '#ffffff'),
    createTheme('whiteRed', '#ff2121', '#e2e2e2', '#000000'),
    createTheme('whiteTurquoise', '#00bd97', '#e2e2e2', '#000000'),
  ],
  breakpoints: {
    // RESPONSIVE BREAKPOINTS // css var can't be used directly in media query
    bpXXLarge: '87.5em', // 1400px
    bpXLarge: '75em', // 1200px
    bpLarge: '62em', // 992px
    bpMedium: '48em', // 768px
    bpSmall: '36em', // 576px
    bpXSmall: '36em', // 576px
    bpXXSmall: '26.5625em', // 425px
    bpXXXSmall: '23.4375em', // 375px
  },
};

const breakpoints = StyleConfig.breakpoints;
const themes = StyleConfig.themes;

export { breakpoints, themes };

export default StyleConfig;
