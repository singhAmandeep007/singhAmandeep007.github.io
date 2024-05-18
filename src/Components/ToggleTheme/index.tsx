import { useEffect, useRef, useState } from "react";
import { MdOutlinePalette } from "react-icons/md";

import { themes } from "@/Common/styles.config";
import { ThemeIcon } from "@/Components/ThemeIcon";
import { useOnClickOutside } from "@/Hooks/useOnClickOutside";

import { ThemeContainer, ThemeIconWrapper, ThemeTogglerContainer, ThemesIconsContainer } from "./ThemeTogglerElements";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState(themes[0].themeName);
  const [isOpen, setIsOpen] = useState(false);

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

  const themeNode = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(themeNode, () => setIsOpen(false));

  return (
    <ThemeContainer ref={themeNode}>
      {isOpen && (
        <ThemesIconsContainer>
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
        </ThemesIconsContainer>
      )}
      <ThemeTogglerContainer>
        <MdOutlinePalette onClick={() => setIsOpen((isOpen) => !isOpen)} />
      </ThemeTogglerContainer>
    </ThemeContainer>
  );
};
