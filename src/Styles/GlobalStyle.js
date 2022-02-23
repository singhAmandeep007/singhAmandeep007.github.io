import { createGlobalStyle, css } from 'styled-components';
import { themes, breakpoints } from '../Common/styles.config';

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

		--color-calendar-graph-day-bg: #c1c1c1;
	}

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

	.tsparticles-canvas-el{
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

		@media only screen and (min-width: ${breakpoints.bpXXLarge}) {
				font-size: 100% !important; // 16px
		}

		@media only screen and (max-width: ${breakpoints.bpXXLarge}) {
				font-size: 87.5% !important; // 14px
		}

		@media only screen and (max-width: ${breakpoints.bpXLarge}) {
				font-size: 75% !important; // 12px
		}

		@media only screen and (max-width: ${breakpoints.bpMedium}) {
				font-size: 62.5% !important; // 10px
		}
		@media only screen and (max-width: ${breakpoints.bpSmall}) {
				font-size: 59.375% !important; // 9.5px
		}
		@media only screen and (max-width: ${breakpoints.bpXSmall}) {
				font-size: 56.25% !important; // 9px
		}
		@media only screen and (max-width: ${breakpoints.bpXXSmall}) {
				font-size: 53.125% !important; // 8.5px
		}
		@media only screen and (max-width: ${breakpoints.bpXXXSmall}) {
				font-size: 50% !important; // 8px
		}
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
	body::-webkit-scrollbar{
		width: 8px;
		background-color: var(--color-scrollbar-bg);
	}
	body::-webkit-scrollbar-thumb{
		background-color:  var(--color-scrollbar-thump);
	}

`;
