import styled from "styled-components";

export const BurgerContainer = styled.button<{ $open: boolean }>`
  position: fixed;
  top: 22px;
  left: 22px;
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
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border: 4px solid var(--color-primary);
    border-radius: 50%;
    position: absolute;
    @media (max-width: ${({ theme }) => theme.bpMedium}) {
      width: 45px;
      height: 45px;
    }
  }

  &:focus {
    outline: none;
  }

  span {
    position: relative;

    width: 25px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 5px;
    transition: all 0.3s linear;

    :first-child {
      transform: ${({ $open }) => ($open ? "translate(0px, 7px) rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ $open }) => ($open ? "0" : "1")};
      transform: ${({ $open }) => ($open ? "translateX(195px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ $open }) => ($open ? "translate(0px, -7px) rotate(-45deg)" : "rotate(0)")};
    }
    @media (max-width: ${({ theme }) => theme.bpMedium}) {
      width: 20px;
    }
  }
`;
