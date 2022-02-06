import styled from 'styled-components';

export const BurgerContainer = styled.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
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
    width: 4rem;
    height: 4rem;
    border: 5px solid var(--color-primary);
    border-radius: 50%;
    position: absolute;
  }
  /* &:focus {
      outline: none;
   } */

  span {
    position: relative;

    width: 2rem;
    height: 0.25rem;
    background: var(--color-primary);
    border-radius: 10px;
    transition: all 0.3s linear;

    transform-origin: 1px;
    :first-child {
      transform: ${({ $open }) => ($open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ $open }) => ($open ? '0' : '1')};
      transform: ${({ $open }) =>
        $open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ $open }) => ($open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
