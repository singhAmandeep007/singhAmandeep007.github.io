import { stylesConfig } from "@/Common/styles.config";
import { ThemeIcon } from "@/Components/ThemeIcon";
import { useEffect, useState } from "react";
import { ThemeIconWrapper, ThemeTogglerContainer } from "./ThemeTogglerElements";

export const ToggleTheme = () => {
  const themes = stylesConfig.themes;

  const [theme, setTheme] = useState(themes[0].themeName);

  useEffect(() => {
    document.documentElement.className = theme;
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
