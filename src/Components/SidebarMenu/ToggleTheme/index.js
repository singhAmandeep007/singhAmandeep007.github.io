import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import {
   ThemeTogglerContainer,
   TogglerLabel,
   TogglerInput,
} from './ThemeTogglerElements';

const ToggleTheme = ({ isChecked, themeToggler }) => {
   return (
      <ThemeTogglerContainer>
         <BsMoon />

         <TogglerInput
            // value=""
            checked={isChecked}
            type="checkbox"
            id="toogleTheme"
            onChange={themeToggler}
         />
         <TogglerLabel htmlFor="toogleTheme"> </TogglerLabel>

         <BsSun />
      </ThemeTogglerContainer>
   );
};

export default ToggleTheme;
