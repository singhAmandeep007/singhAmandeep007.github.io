import styled from 'styled-components';

export const ThemeTogglerContainer = styled.ul`
  padding: 1.3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const ThemeIconWrapper = styled.li`
  list-style: none;
  margin-left: -10px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0px 0px 2px #000);
    svg circle {
      stroke-width: 10;
    }
  }
  &.is-selected {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 2px #000);
  }
`;
