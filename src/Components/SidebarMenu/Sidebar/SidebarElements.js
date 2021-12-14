import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarContainer = styled.nav`
   z-index: 9;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: var(--color-background-1);

   transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-100%)')};
   height: 100vh;
   text-align: center;
   padding: 0 3rem;
   position: absolute;
   top: 0;
   left: 0;
   transition: transform 0.3s ease-in-out;
   overflow-x: hidden;
   border-right: 5px solid var(--color-primary);

   @media (max-width: ${({ theme }) => theme.bpMedium}) {
      width: 50%;
   }
`;

export const SidebarLinkContainer = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
   border-top: 2px solid var(--color-primary);
   border-bottom: 2px solid var(--color-primary);
`;

export const SidebarLink = styled(NavLink)`
   font-size: 1.5rem;
   padding: 0.5rem 0;
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
   transition: background-position 400ms ease-out;

   &:hover {
      /* color: var(--color-primary); */
      background-position: 0 100%;
   }
   &.active {
      background-position: 0 100%;
      color: var(--color-primary);
   }

   @media (max-width: ${({ theme }) => theme.bpMedium}) {
      font-size: 1.8rem;
   }
`;

export const SidebarAvatar = styled.div`
   padding: 0 0.5rem;
   position: relative;
   filter: drop-shadow(0px 0px 30px var(--color-primary));
   img {
      width: 100%;
      height: auto;
      transform: scale(1.1);
      /* object-fit: cover;
      object-position: 0%; */
      border-radius: 10%;
      @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
         -webkit-clip-path: circle(40% at 50% 50%);
         clip-path: circle(40% at 50% 50%);
         border-radius: none;
      }
   }
   figcaption {
      position: absolute;
      top: 50%;
      left: 50%;
      //  keep it down initially
      transform: translate(-50%, 50%);
      color: #fff;
      font-size: 1rem;
      text-align: center;
      opacity: 0;
      transition: all 0.2s;
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

   font-size: 2.5rem;
   padding: 1rem;

   a {
      margin-left: -0.5rem;
      svg {
         padding: 0.4rem;
         border-radius: 50%;
         background-color: #fff;
         color: #000;
         box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
         transition: all 300ms ease;
         transition-property: color, transform;
      }

      &:hover {
         svg {
            transform: translateY(-20%);
            color: var(--color-primary);
         }
      }
   }
`;
