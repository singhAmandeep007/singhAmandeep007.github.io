import { breakpoints } from "@/Common/styles.config";
import { ThemeProvider } from "styled-components";

import { Router } from "./Router";
import { GlobalStyle } from "./Styles/GlobalStyle";

const theme = {
  ...breakpoints,
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
