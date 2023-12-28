import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { bounce, flicker } from './animations';

export const SidebarContainer = styled.nav`
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
      0deg,
      var(--color-primary-background) 10%,
      var(--color-background) 90%
    )
    100% no-repeat;

  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100dvh;
  text-align: center;
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  overflow-x: hidden;
  border-right: 4px solid var(--color-primary);

  width: 25%;
  min-width: 230px;
  max-width: 330px;

  gap: 2rem;
`;

export const SidebarWrapper = styled.div`
  margin: 55px 0 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > :last-child {
    margin-top: auto;
  }
`;

export const SidebarLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const SidebarLink = styled(NavLink)`
  font-size: 2rem;

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
    background-position: 0 100%;
    transform: scale(1.15);
  }
  &.active {
    background-position: 0 100%;
    color: var(--color-primary);
  }
`;

export const SidebarAvatar = styled.div`
  animation: 2s linear both;
  animation-name: ${({ $open }) => ($open ? flicker : null)};
  animation-delay: ${({ $delay }) => `${$delay}s`};

  padding: 0 0px;
  position: relative;
  filter: drop-shadow(0px 0px 5px var(--color-primary));
  margin-bottom: -3.5rem;
  width: 100%;
  max-width: 300px;

  img {
    width: 100%;
    height: auto;

    object-fit: cover;
    object-position: 50%;
    border-radius: 10%;
    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
      -webkit-clip-path: circle(65% at 50% 40%);
      clip-path: circle(65% at 50% 40%);
      transform: scale(0.8);
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
    transition: transform 0.3s;
    backface-visibility: hidden;
  }

  &:hover img {
    transition: transform 0.3s;
    filter: blur(3px) brightness(70%);
    transform: scale(0.7);
  }
  &:hover figcaption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const SidebarSocial = styled.div`
  z-index: 5;
  display: flex;
  justify-content: center;

  font-size: 35px;
  padding: 10px;
`;

export const Divider = styled.div`
  height: 3px;
  width: 80%;
  border-radius: 5px;
  background-color: var(--color-primary);
`;

export const SidebarSocialLink = styled.a`
  display: flex;
  margin-left: -5px;

  animation: 1.5s linear both;
  animation-name: ${({ $open }) => ($open ? bounce : null)};
  animation-delay: ${({ $delay }) => `${$delay * 0.1}s`};

  svg {
    padding: 3px;
    border-radius: 50%;
    background-color: var(--color-font);
    color: var(--color-primary);
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  }
`;
