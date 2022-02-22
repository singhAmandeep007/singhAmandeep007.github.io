import styled from 'styled-components';

export const BurgerContainer = styled.button`
  position: fixed;
  top: 22.5px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
  &::before {
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border: 4px solid var(--color-primary);
    border-radius: 50%;
    position: absolute;
  }
  /* &:focus {
      outline: none;
   } */

  span {
    position: relative;

    width: 25px;
    height: 2.5px;
    background: var(--color-primary);
    border-radius: 5px;
    transition: all 0.3s linear;

    transform-origin: 3px;
    :first-child {
      transform: ${({ $open }) => ($open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ $open }) => ($open ? '0' : '1')};
      transform: ${({ $open }) =>
        $open ? 'translateX(25px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ $open }) => ($open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
