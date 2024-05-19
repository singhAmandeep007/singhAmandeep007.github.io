import { resolve } from "path";

import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import checker from "vite-plugin-checker";
import inspect from "vite-plugin-inspect";
import svgr from "vite-plugin-svgr";

// READ-MORE: https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd() + "/env");

  const isDevMode = mode === "development";
  const isProdMode = mode === "production";
  const isTestMode = process.env.VITEST === "true";

  const shouldCheckESLintDev = isDevMode && JSON.parse(env.VITE_ESLINT_DEV_CHECK) ? true : false;
  const shouldCheckTypeScriptDev = isDevMode && JSON.parse(env.VITE_TSC_DEV_CHECK) ? true : false;

  const plugins = [
    svgr(),
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
              ssr: false,
              // dead code elimination
              pure: true,
            },
          ],
        ],
      },
    }),
    inspect(),
  ];
  if (!isTestMode) {
    // READ-MORE: https://github.com/fi3ework/vite-plugin-checker
    plugins.push(
      checker({
        typescript: shouldCheckTypeScriptDev,
        ...(shouldCheckESLintDev
          ? {
              eslint: {
                // for example, lint .ts and .tsx
                lintCommand:
                  'eslint --config ./.eslintrc.cjs "src/**/*.{js,jsx,ts,tsx}" --report-unused-disable-directives --max-warnings 0',
              },
            }
          : {}),
      })
    );
  }
  if (isProdMode) {
    plugins.push(
      visualizer({
        template: "treemap",
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: "./reports/build/analyze.html", // will be saved in project's root
      })
    );
  }

  return {
    server: {
      port: 3000,
      strictPort: true,
      open: true,
    },
    preview: {
      port: 5000,
      strictPort: true,
      open: true,
    },
    envDir: "./env",
    plugins,
    build: {
      outDir: "dist",
      sourcemap: true,
      // READ-MORE:  https://vitejs.dev/config/build-options#build-target
      target: "esnext",
    },
    resolve: {
      alias: [
        // eg. import slash from "~/slash";
        {
          find: /~(.+)\//,
          replacement: resolve(__dirname, "node_modules/$1"),
        },
        // eg. import Button from "@/components/Button"
        {
          find: "@",
          replacement: resolve(__dirname, "./src"),
        },
      ],
    },
    base: "/myPortfolio/",
  };
});
