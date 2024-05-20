import styled, { css } from "styled-components";

const SlideFullscreen = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.8);

  .awssld {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    .awssld__content > div img {
      object-fit: contain;
    }
  }
`;
const SlideControlButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  padding: 0;
  border-radius: 50%;
  color: ${({ theme }) => `var(${theme.color.primary})`};
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition:
    opacity 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  border: 1px solid ${({ theme }) => `var(${theme.color.primary})`};
  font-size: 1.2rem;
`;

export const SlideContainer = styled.div<{ $fullscreen: boolean }>`
  position: relative;

  ${({ $fullscreen }) => $fullscreen && SlideFullscreen};

  .awssld {
    --control-button-width: 4rem;
    --control-button-height: 4rem;
    --content-background-color: transparent;
    --control-button-background: rgba(0, 0, 0, 0.5);
  }

  .awssld__content > div {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  .awssld__controls button {
    ${SlideControlButton};

    &:hover,
    &:focus {
      background-color: rgb(0, 0, 0);
    }

    opacity: ${({ $fullscreen }) => ($fullscreen ? "1" : "0")}; //condition
    pointer-events: none;
  }
  &:hover .awssld__controls button {
    opacity: 1;
    pointer-events: initial;
  }

  .awssld__prev {
    left: 2.5%;
  }

  .awssld__next {
    right: 2.5%;
  }
  .slide-control {
    ${SlideControlButton};

    opacity: ${({ $fullscreen }) => ($fullscreen ? "1" : "0")};
    pointer-events: none;

    &:hover,
    &:focus {
      background-color: rgb(0, 0, 0);
    }
  }

  &:hover .slide-control,
  &:focus .slide-control {
    opacity: 1;
    pointer-events: initial;
    will-change: background-color;
  }
  .slide-control.is-fullscreen {
    position: absolute;
    right: 2.5%;
    margin-top: 2.5%;
    z-index: 15;
  }
`;

export const SlideCaption = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: var(--color-slider-window);

  .slide-caption-text {
    flex: 1;
  }
`;
