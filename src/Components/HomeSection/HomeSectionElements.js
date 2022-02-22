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

export const HomeSectionContainer = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;
  display: flex;

  .homeSection-wrapper {
    width: 80%;

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
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: normal;
  }
  h2 {
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
    white-space: nowrap;

    span {
      color: var(--color-primary);
      text-decoration: underline;
      word-break: keep-all;
    }
  }

  p {
    font-size: calc(1rem + 0.8vw);
    line-height: 1.5;
    margin-bottom: 1rem;
    font-weight: normal;
  }
  @media (max-width: ${({ theme }) => theme.bpMedium}) {
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: calc(1rem + 0.8vh);
    }
  }
`;

export const HomeSectionResume = styled.div`
  padding: 1rem;

  font-size: 0.7rem;

  @media (max-width: ${({ theme }) => theme.bpMedium}) {
    font-size: 1rem;
  }
`;

export const Handwave = styled.img`
  height: 3rem;
  width: 3rem;
  animation-name: ${waveAnimation};
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;
