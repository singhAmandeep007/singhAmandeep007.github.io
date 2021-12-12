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

   .typography {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 80%;
   }
`;

export const Handwave = styled.img`
   height: 20px;
   width: 20px;
   animation-name: ${waveAnimation};
   animation-duration: 2.1s;
   animation-iteration-count: infinite;
   transform-origin: 70% 70%;
   display: inline-block;
`;
