import styled from "styled-components";

export const ThemeContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ThemeTogglerContainer = styled.button`
  color: ${({ theme }) => `var(${theme.color.background})`};
  font-size: 35px;
  cursor: pointer;
  border-radius: 50%;
  border: 0;
  background-color: ${({ theme }) => `var(${theme.color.primary})`};

  display: flex;
  align-items: center;

  svg {
    margin: 5px;
  }
`;

export const ThemesIconsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

export const ThemeIconWrapper = styled.li`
  list-style: none;
  transition: 0.2s;
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg circle {
    filter: drop-shadow(0px 0px 2px #000);
  }

  &:hover {
    font-size: 40px;
  }
  &.is-selected {
    font-size: 40px;
  }
`;
