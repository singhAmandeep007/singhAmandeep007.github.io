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

   border-right: 5px solid var(--color-primary);
`;

export const SidebarLinkContainer = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
   border-top: 2px solid var(--color-primary);
   border-bottom: 2px solid var(--color-primary);
`;

export const SidebarLink = styled(NavLink)`
   font-size: 1.4rem;
   padding: 0.5rem 0;
   font-weight: bold;
   color: var(--color-font);
   text-decoration: none;
   cursor: pointer;
   transition: color 0.2s linear;

   &:hover {
      color: var(--color-primary);
   }
   &.active {
      color: var(--color-primary);
   }
`;

export const SidebarAvatar = styled.div`
   text-align: center;
   padding: 1rem 0 0 0;
   img {
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
      border: 5px solid var(--color-primary);
      object-fit: cover;
      object-position: 0%;
   }
`;

export const SidebarSocial = styled.div`
   display: flex;
   justify-content: center;

   font-size: 2.5rem;

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
            transform: translateY(-50%);
            color: var(--color-primary);
         }
      }
   }
`;
