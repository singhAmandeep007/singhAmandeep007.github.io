import styled from 'styled-components';

export const ThemeTogglerContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(30px, 2rem, 35px);
`;

export const ThemeIconWrapper = styled.li`
  list-style: none;
  margin-left: -6px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 0px 2px #000);
    svg circle {
      stroke-width: 10;
    }
  }
  &.is-selected {
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 2px #000);
  }
`;
