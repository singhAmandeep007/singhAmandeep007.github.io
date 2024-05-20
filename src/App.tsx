import { ThemeProvider } from "styled-components";

import { breakpoints, COLOR_VARIANTS } from "@/Common/styles.config";
import { GlobalStyle } from "./GlobalStyle";
import { Router } from "./Router";

const theme = {
  ...breakpoints,
  color: COLOR_VARIANTS,
} as const;

export type TTheme = typeof theme;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
