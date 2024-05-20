import styled from "styled-components";

export const Project = styled.li`
  display: grid;

  gap: 2rem;

  &:nth-child(odd) {
    grid-template-areas: "image content";
    grid-template-columns: 3fr 2fr;
  }
  &:nth-child(even) {
    grid-template-areas: "content image";
    grid-template-columns: 2fr 3fr;
  }

  margin: 5rem 0;
  min-height: calc(100dvh - 10rem);

  @media (max-width: ${({ theme }) => theme.bpMedium}) {
    min-height: calc(100vh - 20rem);

    &:nth-child(odd) {
      grid-template-areas:
        "image"
        "content";
      grid-template-columns: 1fr;
    }
    &:nth-child(even) {
      grid-template-areas:
        "image"
        "content";
      grid-template-columns: 1fr;
    }

    grid-template-rows: min-content 1fr;
  }

  .project-image {
    grid-area: image;
  }

  .project-content {
    grid-area: content;
  }

  .project-title {
    font-size: 2rem;
    color: ${({ theme }) => `var(${theme.color.primary})`};
    margin-bottom: 2rem;
  }

  .project-description {
    p {
      margin-bottom: 0.8rem;
      font-size: 1.4rem;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      margin: 0.5rem 1rem 0 0;
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => `var(${theme.color.primary})`};

      &:hover,
      &:focus {
        color: ${({ theme }) => `var(${theme.color.primary})`};
        svg {
          transform: scale(1.5);
        }
      }
    }
  }

  .project-stack {
    margin: 1rem 0;
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      list-style: none;

      li {
        margin: 0.5rem 1rem 0 0;

        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover,
        &:focus {
          background-color: transparent;
          img {
            transform: scale(2);
          }
        }
        transition: background-color 0.2s ease-in-out;
      }

      img {
        width: 50%;
        height: 100%;
        transition: transform 0.4s ease;
      }
    }
  }
`;

export const WindowFrame = styled.div`
  width: 100%;
  background-color: var(--color-slider-window);
  color: #ffffff;
  display: flex;
  padding: 0.5rem;
  align-items: center;

  .window-buttons {
    display: flex;
    align-items: center;

    span {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      margin: 0 2px;
      display: inline-block;
      &:nth-child(1) {
        background-color: #ff5f57;
      }
      &:nth-child(2) {
        background-color: #ffbd2e;
      }
      &:nth-child(3) {
        background-color: #28ca41;
      }
    }
  }
  .window-title {
    flex: 1;
    text-align: right;
    font-size: 1rem;
    color: #ffffff;
  }
`;
