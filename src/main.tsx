import React from "react";
import { createRoot } from "react-dom/client";

import { themes } from "@/Common/styles.config";

import App from "./App";

// NOTE: Apply the default theme
document.documentElement.classList.add(themes[0].themeName);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
