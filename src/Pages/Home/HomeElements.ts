import { Wrapper } from "@/Components/CommonElements";
import styled, { keyframes } from "styled-components";

export const waveAnimation = keyframes`
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

export const HomeSectionWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100dvh; */
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.bpLarge}) {
    flex-direction: column;
    gap: 0rem;
  }
`;

export const HomeSectionTypography = styled.div`
  margin: 1rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: normal;
  }
  h2 {
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
    white-space: nowrap;

    span {
      color: ${({ theme }) => `var(${theme.color.primary})`};
      text-decoration: underline;
      word-break: keep-all;
    }
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: normal;
  }

  @media (max-width: ${({ theme }) => theme.bpMedium}) {
    h2 {
      font-size: 3rem;
    }
  }
`;

export const HomeSectionResume = styled.div`
  margin: 1rem;
  font-size: 1rem;
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
