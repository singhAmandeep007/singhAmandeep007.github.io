import styled from "styled-components";

export const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.bpLarge}) {
    gap: 2rem;
    flex-direction: column;
  }

  & > * {
    flex: 1;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  flex: 0.5;

  .avatar-border {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    border: 5px solid ${({ theme }) => `var(${theme.color.primary})`};
    border-radius: 5px;
    z-index: 1;
    transition: 0.2s ease-in;

    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    max-width: calc(21rem + 10px);
  }
  .avatar-wrapper {
    position: relative;
    z-index: 2;
    padding-top: 10px;
    margin: 5px;

    img {
      object-fit: cover;
      height: 100%;
      max-width: 21rem;
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  p {
    margin-bottom: 1rem;
  }
`;

export const Stack = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;

    li {
      margin: 1rem 2rem;
      border-radius: 50%;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover,
      &:focus {
        background-color: transparent;
        img {
          transform: scale(1.3);
        }
      }
      transition: background-color 0.2s ease-in-out;

      width: 50px;
      height: 50px;
    }
    img {
      transition: transform 0.4s ease;
      width: 25px;
    }

    @media (max-width: ${({ theme }) => theme.bpMedium}) {
      flex-wrap: nowrap;
      overflow-x: scroll;
      margin: 0;
      justify-content: flex-start;

      li {
        background-color: transparent;
      }
    }
  }
`;
