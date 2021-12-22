import { createGlobalStyle } from 'styled-components';
import breakPoints from './Breakpoints';

export const GlobalStyle = createGlobalStyle`

 /* reset */
 	*,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
   }

   :root{
      --font-primary:'Montserrat', sans-serif;
		--tsParticles-opacity:1;
		--color-background-dark:rgba(50, 50, 50, 0.5);
		--color-font-dark: #000;
   }

   .light-theme{
		--color-primary: rgb(0, 189, 151);
      --color-primary-light: rgb(144, 239, 219);
		--color-primary-light-2: rgb(156, 255, 235);

		--color-secondary: rgb(247, 224, 24);
      --color-secondary-light: rgb(251, 238, 132);
		--color-secondary-light-2: rgb(252, 242, 159);

		--color-primary-background: rgba(0, 189, 151,0.55);
		--color-background:rgba(226, 226, 226,0.8);
      --color-background-1: rgb(226, 226, 226);
      --color-background-light-1: rgb(255, 255, 255);

		--color-font: rgb(0,0,0);

		--color-tsParticles:#fff;

		/*  */
      

      --color-font-light: #313131;
      --color-font-dark-1: #313131;
      --color-font-dark-2: #151515;

      --color-sidebar: #E4E4E4;
      --color-scrollbar-bg: #383838;
      --color-scrollbar-thump: #6b6b6b;
      --color-scrollbar-track: #383838;
   }
   .dark-theme{
		--color-primary: rgb(247, 224, 24);
      --color-primary-light: rgb(251, 238, 132);
      --color-primary-light-2: rgb(252, 242, 159);

      --color-secondary: rgb(0, 189, 151);
      --color-secondary-light: rgb(144, 239, 219);
		--color-secondary-light-2: rgb(156, 255, 235);


		--color-primary-background: rgba(247, 224, 24,0.55);
		--color-background:rgba(50, 50, 50, 0.8);
      --color-background-1: rgb(50, 50, 50);
      --color-background--light-1: rgb(100, 100, 100);

		--color-font: rgb(255, 255, 255);

		--color-tsParticles:#000;

		/*  */

      --color-font-light: #a4acc4;
      --color-font-dark-1: #313131;
      --color-font-dark-2: #151515;

      --color-sidebar: #191D2B;
      --color-scrollbar-bg: #383838;
      --color-scrollbar-thump: #6b6b6b;
      --color-scrollbar-track: #383838;
   }
	/* blur effect an particles and child elements */
	.blur + #tsparticles{
		--tsParticles-opacity:0.2;
	}
	.blur > *:not(aside){
		filter: blur(3px);
	}
	
	.tsparticles-canvas-el{
		background-color: var(--color-tsParticles);
		opacity: var(--tsParticles-opacity);
	}

   body{
      background-color: var(--color-background-1);
      color: var(--color-font);

      font-family: var(--font-primary);

		strong{
			color: var(--color-primary);
		}
   }

   /* font size responsiveness */
   html {
      box-sizing: border-box;

      @media only screen and (min-width: ${breakPoints.bpXXLarge}) {
         font-size: 100% !important; // 16px
      }
      
      @media only screen and (max-width: ${breakPoints.bpXXLarge}) {
         font-size: 87.5% !important; // 14px
      }

      @media only screen and (max-width: ${breakPoints.bpXLarge}) {
         font-size: 75% !important; // 12px
      }

      @media only screen and (max-width: ${breakPoints.bpMedium}) {
         font-size: 62.5% !important; // 10px
      }
      @media only screen and (max-width: ${breakPoints.bpSmall}) {
         font-size: 59.375% !important; // 9.5px
      }
      @media only screen and (max-width: ${breakPoints.bpXSmall}) {
         font-size: 56.25% !important; // 9px
      }
      @media only screen and (max-width: ${breakPoints.bpXXSmall}) {
         font-size: 53.125% !important; // 8.5px
      }
      @media only screen and (max-width: ${breakPoints.bpXXXSmall}) {
         font-size: 50% !important; // 8px
      }
   }

   /* apply default style */
   a{
      font-family: inherit;
      color: inherit;
      font-size: inherit;

   }
   /* h1,h2,h3,h4,h5,h6,span,p{
      color: var(--color-font);
   } */

   ::selection {
      background-color: var(--color-primary);
      color: var(--color-secondary);
   }
   /* scrollbar */
   body::-webkit-scrollbar{
      width: 9px;
      background-color: var(--color-scrollbar-bg);
   }
   body::-webkit-scrollbar-thumb{
      border-radius: 9px;
      background-color:  var(--color-scrollbar-thump);
   }
   body::-webkit-scrollbar-track{
      border-radius: 9px;
      background-color:  var(--color-scrollbar-track);
   }

`;
