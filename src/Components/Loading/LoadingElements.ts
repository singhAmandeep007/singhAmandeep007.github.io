import styled, { keyframes } from "styled-components";

const stroke = keyframes`
	from {
		stroke-dashoffset: 500;
	}
	to {
		stroke-dashoffset: 0;	
	}
`;

export const LoadingWrapper = styled.div`
  background: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  height: 8rem;
  width: 8rem;
  @media (max-width: ${({ theme }) => theme.bpMedium}) {
    width: 2000px;
  }
`;

export const LoadingPath = styled.path`
  stroke: var(--color-primary);
  stroke-width: 3;
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: ${stroke} 1500ms linear infinite;
`;
