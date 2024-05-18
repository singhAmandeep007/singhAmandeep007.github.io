import { ThemeProvider } from "styled-components";

import { breakpoints, getTheme } from "@/Common/styles.config";
import { GlobalStyle } from "./GlobalStyle";
import { Router } from "./Router";

const theme = {
  ...breakpoints,
  currentTheme: getTheme(),
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
