import { themes } from "@/Common/styles.config";
import { ThemeIcon } from "@/Components/ThemeIcon";
import { useEffect, useState } from "react";
import { ThemeIconWrapper, ThemeTogglerContainer } from "./ThemeTogglerElements";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState(themes[0].themeName);

  useEffect(() => {
    document.documentElement.classList.add("theme-transition");

    document.documentElement.addEventListener(
      "transitionend",
      () => {
        if (document.documentElement) {
          document.documentElement.classList.remove("theme-transition");
        }
      },
      { once: true }
    );

    document.documentElement.className = `theme-transition ${theme}`;
  }, [theme]);

  return (
    <ThemeTogglerContainer>
      {themes.map(({ themeName, colorPrimary, colorBackground }) => {
        return (
          <ThemeIconWrapper
            className={theme === themeName ? "is-selected" : ""}
            onClick={() => setTheme(themeName)}
            key={themeName}
          >
            <ThemeIcon
              primary={colorPrimary}
              secondary={colorBackground}
            />
          </ThemeIconWrapper>
        );
      })}
    </ThemeTogglerContainer>
  );
};
