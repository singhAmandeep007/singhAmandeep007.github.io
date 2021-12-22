import styled, { keyframes } from 'styled-components';

const shake = keyframes`
      0% {
         transform: translate(0, 0);
      }
      1.7% {
         transform: translate(10px, 0);
      }
      3.5% {
         transform: translate(0, 0);
      }
      5.3% {
         transform: translate(10px, 0);
      }
      7.1% {
         transform: translate(0, 0);
      }
      8.9% {
         transform: translate(10px, 0);
      }
      10.7% {
         transform: translate(0, 0);
      }
      100% {
         transform: translate(0, 0);
      }
`;

export const ResumeContainer = styled.div`
   width: 30em;
   height: 20em;
   background: var(--color-primary-light-2);
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
   position: relative;
   transform-style: preserve-3d;
   pointer-events: none;

   animation: ${shake} 1.12s ease;
   animation-iteration-count: ${({ $isViewed }) =>
      $isViewed ? '0' : 'infinite'};

   &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      border-left: 15em solid transparent;
      border-right: 15em solid var(--color-primary);
      border-top: 10em solid transparent;
      border-bottom: 10em solid var(--color-primary);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      z-index: 4;
   }
   &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      border-left: 15em solid var(--color-primary-light);
      border-right: 15em solid transparent;
      border-top: 10em solid transparent;
      border-bottom: 10em solid var(--color-primary-light);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      z-index: 4;
   }

   .cover::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border-left: 15em solid transparent;
      border-right: 15em solid transparent;
      border-top: 10em solid var(--color-primary-light-2);
      border-bottom: 10em solid transparent;
      z-index: ${({ $isOpen }) => ($isOpen ? '2' : '6')};
      transform-origin: top;
      transform: ${({ $isOpen }) =>
         $isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)'};
      transition: ${({ $isOpen }) =>
         $isOpen ? 'all 1s ease' : 'all 1s 1s ease'};
   }
   .letter {
      position: absolute;
      z-index: 3;
      top: ${({ $isOpen }) => ($isOpen ? '-8em' : '0px')};
      left: 1em;
      background: #d7d7d7e8;
      width: 28em;
      height: 18em;
      border-radius: 20px;
      transition: ${({ $isOpen }) =>
         $isOpen ? 'all 1s 1s ease' : 'all 1s ease'};
   }

   .sticker {
      pointer-events: auto;
      cursor: pointer;
      width: 7em;
      height: 7em;
      background: linear-gradient(
         to top right,
         var(--color-secondary-light) 60%,
         var(--color-secondary) 75%,
         transparent 75%,
         transparent 100%
      );
      position: relative;
      border-radius: 100%;
      text-align: center;

      box-shadow: 0px 4px 1px 0px var(--color-primary);
      z-index: 11;

      /* position: absolute; */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-tap-highlight-color: transparent;

      span {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         color: var(--color-font-dark);
         font-weight: 900;
         /* text-decoration: underline; */
         letter-spacing: 0.1em;
      }

      &:before {
         pointer-events: none;
         content: '';
         position: absolute;
         top: -51%;
         left: 50%;
         width: 7em;
         height: 7em;
         background: linear-gradient(
            to bottom left,
            transparent 75%,
            var(--color-primary-light) 75%,
            var(--color-primary-light) 100%
         );
         border-radius: 100%;
      }
   }

   /* &:hover .cover:before {
      transform: rotateX(180deg);
      transition: all 1s ease;
      z-index: 2;
   } */
   /*&:hover .letter {
      top: -8em;
      transition: all 1s 1s ease;
   } */
`;

export const ResumeLetter = styled.div`
   pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
   padding: 2em;
   width: 100%;
   height: 100%;
   font-size: 0.9em;
   color: var(--color-font-dark);
   font-weight: 800;
   cursor: pointer;

   display: flex;
   flex-direction: column;

   align-content: center;

   .resume-letter-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   h2 {
      margin-bottom: 1.5em;
   }
   hr {
      margin-bottom: 0.8em;
      background-color: var(--color-font-dark);
      height: 0.1em;
      border: none;
   }
`;
