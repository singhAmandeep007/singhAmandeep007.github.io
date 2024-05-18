import { createGlobalStyle, css } from "styled-components";

import { breakpoints, themes } from "@/Common/styles.config";

// NOTE: Apply the default theme
document.documentElement.classList.add(themes[0].themeName);

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

		--color-scrollbar-bg: #383838;
		--color-scrollbar-thump: #6b6b6b;
		
		--tooltip-text-color: var(--color-background);
		--tooltip-background-color: var(--color-font);
		--tooltip-margin: 30px;
		--tooltip-arrow-size: 6px;
		
	}

	/* generate theme class which encapsulates theme css variables */
	${themes.map(({ themeName, colors }) => {
    return css`
      .${themeName} {
        ${colors};
      }
    `;
  })}

	/* blur effect an particles and child elements */
	.blur + #tsparticles{
		--tsParticles-opacity: 0.2;
	}
	.blur > *:not(aside){
		filter: blur(3px);
	}

	#tsparticles > canvas {
		background-color: var(--color-background);
		opacity: var(--tsParticles-opacity);
	}

	body{
		background-color: var(--color-background);
		color: var(--color-font);

		font-family: var(--font-primary);

		strong{
			color: var(--color-primary);
		}
	}

	/* font size responsiveness */
	html {
		box-sizing: border-box;
		// > 1400px
		@media only screen and (min-width: ${breakpoints.bpXXLarge}) {
				font-size: 100% !important; // 16px
		}
		// < 1400px
		@media only screen and (max-width: ${breakpoints.bpXXLarge}) {
				font-size: 87.5% !important; // 14px
		}
		// < 1200px
		@media only screen and (max-width: ${breakpoints.bpXLarge}) {
				font-size: 75% !important; // 12px
		}
		// < 768px
		@media only screen and (max-width: ${breakpoints.bpMedium}) {
				font-size: 62.5% !important; // 10px
		}
		// < 576px
		@media only screen and (max-width: ${breakpoints.bpSmall}) {
				font-size: 59.375% !important; // 9.5px
		}
		// < 425px
		@media only screen and (max-width: ${breakpoints.bpXSmall}) {
				font-size: 53.125% !important; // 8.5px
		}
		// < 375px
		@media only screen and (max-width: ${breakpoints.bpXXSmall}) {
				font-size: 50% !important; // 8px
		}
	}

	/* theme change transition effect */
	html.theme-transition,
  html.theme-transition * {
    transition: all 0.2s linear;
  }

	/* apply default style */
	a{
		font-family: inherit;
		color: inherit;
		font-size: inherit;
	}

	::selection {
		background-color: var(--color-primary);
	}
	/* scrollbar */
	*::-webkit-scrollbar{
		width: 5px;
		border-radius: 10px;
		background-color: var(--color-scrollbar-bg);
	}
	*::-webkit-scrollbar-thumb{
		background-color:  var(--color-scrollbar-thump);
	}
`;
