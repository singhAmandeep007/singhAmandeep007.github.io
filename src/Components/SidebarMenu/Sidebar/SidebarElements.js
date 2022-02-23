import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarContainer = styled.nav`
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      0deg,
      var(--color-primary-background) 10%,
      var(--color-background) 90%
    )
    100% no-repeat;

  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: center;
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  overflow-x: hidden;
  border-right: 5px solid var(--color-primary);

  width: 25%;
  @media (max-width: ${({ theme }) => theme.bpMedium}) {
    width: 60%;
  }
`;

export const SidebarLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &::before {
    content: '';
    height: 3px;
    width: 200px;
    border-radius: 5px;
    background-color: var(--color-primary);
  }
`;

export const SidebarLink = styled(NavLink)`
  font-size: 1.5rem;
  padding: 5px 0;
  font-weight: bold;
  color: var(--color-font);
  text-decoration: none;
  cursor: pointer;

  overflow: hidden;

  background: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-primary) 50%,
    var(--color-font) 50%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 300ms ease-in;

  &:hover,
  &:focus {
    /* color: var(--color-primary); */
    background-position: 0 100%;
    transform: scale(1.2);
  }
  &.active {
    background-position: 0 100%;
    color: var(--color-primary);
  }

  @media (max-width: ${({ theme }) => theme.bpMedium}) {
    font-size: 2rem;
  }
`;

export const SidebarAvatar = styled.div`
  padding: 0 0px;
  position: relative;
  filter: drop-shadow(0px 0px 5px var(--color-primary));
  margin-bottom: 10px;
  width: 100%;
  max-width: 300px;
  img {
    width: 100%;
    height: auto;

    object-fit: cover;
    object-position: 50%;
    border-radius: 10%;
    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
      -webkit-clip-path: circle(40% at 50% 50%);
      clip-path: circle(40% at 50% 50%);
      transform: scale(1.1);
    }
  }
  figcaption {
    position: absolute;
    top: 50%;
    left: 50%;
    /* keep it down initially */
    transform: translate(-50%, 50%);
    color: #fff;
    font-size: 1.1rem;
    text-align: center;
    opacity: 0;
    transition: transform 0.2s;
    backface-visibility: hidden;
  }

  &:hover img {
    filter: blur(3px) brightness(70%);
    transform: scale(1);
  }
  &:hover figcaption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const SidebarSocial = styled.div`
  display: flex;
  justify-content: center;

  font-size: 35px;
  padding: 10px;

  a {
    margin-left: -5px;
    svg {
      padding: 3px;
      border-radius: 50%;
      background-color: #fff;
      color: #000;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
      transition: 300ms ease;
      transition-property: color, transform;
    }

    &:hover {
      svg {
        transform: translateY(-15%);
        color: var(--color-primary);
      }
    }
  }
`;
