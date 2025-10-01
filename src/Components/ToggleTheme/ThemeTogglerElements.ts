import styled from "styled-components";

export const ThemeContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 0;
  padding: 2rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 30px 0 0 30px;
  box-shadow: -2px 0px 10px -5px ${({ theme }) => `var(${theme.color.primary})`};

  backdrop-filter: blur(5px) saturate(180%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
  transition:
    background 0.3s,
    box-shadow 0.3s;
`;

export const ThemeTogglerContainer = styled.button`
  color: ${({ theme }) => `var(${theme.color.background})`};
  cursor: pointer;
  border-radius: 50%;
  border: 0;
  background-color: ${({ theme }) => `var(${theme.color.primary})`};
  display: flex;
  align-items: center;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  svg {
    padding: 0.4rem;
    font-size: 2.5rem;
  }

  &:hover {
    transform: scale(1.1) rotate(-8deg);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  }
`;

export const ThemeIconWrapper = styled.li`
  list-style: none;
  transition:
    transform 0.22s cubic-bezier(0.4, 2, 0.6, 1),
    filter 0.22s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.18) rotate(-8deg);
    filter: brightness(1.2) drop-shadow(0 0 8px #fff);
  }
  &.is-selected {
    transform: scale(1.25);
    filter: drop-shadow(0 0 12px var(--color-primary));
  }
`;

export const ThemesIconsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;
