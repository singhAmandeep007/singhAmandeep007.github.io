/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import "styled-components";
import { type TTheme } from "./App";

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
