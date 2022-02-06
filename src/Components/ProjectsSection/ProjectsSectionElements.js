import styled from 'styled-components';

export const ProjectSectionContainer = styled.section`
  width: 100%;

  .projectSection-wrapper {
    width: 80%;
    padding-top: 10rem;

    height: 100%;

    margin: auto;

    @media (max-width: ${({ theme }) => theme.bpMedium}) {
      flex-direction: column;
    }

    .title {
      display: flex;
      align-items: center;
      position: relative;
      margin: 0px 0px 4rem;
      width: 100%;
      font-size: 3rem;
      white-space: nowrap;

      &::after {
        content: '';
        display: block;
        position: relative;
        width: 100%;
        height: 1px;
        margin-left: 2rem;
        background-color: var(--color-font);
      }

      @media (max-width: ${({ theme }) => theme.bpMedium}) {
        font-size: 2rem;
      }
    }

    ul {
      list-style: none;
      margin: 0px;
      padding: 0px;
    }
  }
`;

export const Project = styled.li`
  display: grid;
  gap: 2rem;
  :nth-child(odd) {
    grid-template-areas: 'image content';
    grid-template-columns: 3fr 2fr;
  }
  :nth-child(even) {
    grid-template-areas: 'content image';
    grid-template-columns: 2fr 3fr;
  }

  margin: 5rem 0;
  min-height: calc(100vh - 10rem);

  @media (max-width: ${({ theme }) => theme.bpMedium}) {
    min-height: calc(100vh - 20rem);
    :nth-child(odd) {
      grid-template-areas:
        'image'
        'content';
      grid-template-columns: 1fr;
    }
    :nth-child(even) {
      grid-template-areas:
        'image'
        'content';
      grid-template-columns: 1fr;
    }

    grid-template-rows: 1fr 1fr;
  }

  .project-image {
    grid-area: image;
  }
  .project-content {
    grid-area: content;
  }
  .project-title {
    font-size: 2rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
  .project-description {
    p {
      line-height: 1.3;
      margin-bottom: 0.8rem;
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
      border: 2px solid var(--color-primary);

      &:hover,
      &:focus {
        color: var(--color-primary);
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
  z-index: 100;
  /* height: 1rem; */
  width: 100%;
  background-color: #393939;
  color: #ffffff;
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;

  .window-buttons {
    display: flex;
    align-items: center;

    span {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      margin: 0 2px;
      background-color: red;
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
