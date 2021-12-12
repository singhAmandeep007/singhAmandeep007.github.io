import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
   0% {
     transform: rotate(-14deg);
   }
   10% {
     transform: rotate(14deg);
   }
   20% {
     transform: rotate(-8deg);
   }
   30% {
     transform: rotate(14deg);
   }
   40% {
     transform: rotate(-4deg);
   }
   50% {
     transform: rotate(10deg);
   }
   60% {
     transform: rotate(0deg);
   } 
   /* Reset for the last half to pause */
   100% {
     transform: rotate(0deg);
   }
`;

export const HomeSectionContainer = styled.header`
   width: 100%;
   height: 100vh;

   position: relative;

   .homeSection-wrapper {
      width: 80%;
      padding-top: 5rem;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      margin: auto;

      @media (max-width: ${({ theme }) => theme.bpMedium}) {
         flex-direction: column;
      }
   }
`;

export const HomeSectionTypography = styled.div`
   padding: 1rem;

   h1 {
      font-size: 4rem;
      margin-bottom: 2rem;
   }
   h4 {
      font-size: 3rem;
      font-weight: normal;
      margin-bottom: 2.5rem;
      line-height: 1.4;

      span {
         color: var(--color-primary);
         border-bottom: 2px solid var(--color-primary);
      }
   }

   p {
      font-size: 1.6rem;
      line-height: 1.4;
      span {
         border-bottom: 2px solid var(--color-primary);
         a {
            text-decoration: none;
         }
      }
   }
`;

export const HomeSectionThumbnail = styled.div`
   padding: 1rem;
   color: var(--color-primary);
   svg {
      max-width: 90%;
      max-height: 90%;
   }
`;

export const Handwave = styled.img`
   height: 4rem;
   width: 4rem;
   animation-name: ${waveAnimation};
   animation-duration: 2.1s;
   animation-iteration-count: infinite;
   transform-origin: 70% 70%;
   display: inline-block;
`;
