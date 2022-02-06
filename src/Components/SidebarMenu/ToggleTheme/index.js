import React, { useState, useEffect } from 'react';
import {
  ThemeTogglerContainer,
  ThemeIconWrapper,
} from './ThemeTogglerElements';
import { themes } from '../../../Common/styles.config';

const ToggleTheme = () => {
  const [theme, setTheme] = useState(themes[0].themeName);

  useEffect(() => {
    document.documentElement.className = theme;
    // localestorage
  }, [theme]);

  return (
    <ThemeTogglerContainer>
      {themes.map(({ themeName, themeIcon }) => {
        return (
          <ThemeIconWrapper
            className={theme === themeName ? 'is-selected' : ''}
            onClick={() => setTheme(themeName)}
            key={themeName}
          >
            {themeIcon}
          </ThemeIconWrapper>
        );
      })}
    </ThemeTogglerContainer>
  );
};

export default ToggleTheme;
