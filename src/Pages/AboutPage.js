import React from 'react';
import styled from 'styled-components';
import techIcons from './../Common/techIcons';
import ReactMarkdown from 'react-markdown';
import {
  SectionContainer,
  Wrapper,
  SectionTitle,
  ExternalLinkWithIcon,
} from '../Components/CommonElements';
import profileImg from './../Assets/profilePic.png';
import GithubCalendar from '../Components/GithubCalendar';

const AboutPage = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <SectionTitle>About me</SectionTitle>
        <SectionContent>
          <Avatar>
            <div className="avatar-border"></div>
            <div className="avatar-wrapper">
              <img src={data.profileImg} alt="profile" />
            </div>
          </Avatar>
          <Content>
            <ReactMarkdown
              children={data.content}
              components={{
                a: ({ node, ...props }) => (
                  <ExternalLinkWithIcon
                    {...props}
                    fontSize="calc(1.2rem + 0.2vh)"
                  />
                ),
              }}
            />
            <SectionTitle
              as="h3"
              style={{ fontSize: '1.5rem', margin: '4rem 0 2rem 0' }}
            >
              My Stack
            </SectionTitle>
            <Stack>
              <ul>
                {data.stack.map((tech, i) => {
                  return (
                    <li key={tech.label}>
                      <img
                        src={tech.logo}
                        alt={'stack ' + tech.label}
                        title={tech.label}
                      />
                    </li>
                  );
                })}
              </ul>
            </Stack>
          </Content>
        </SectionContent>
        <SectionTitle
          as="h3"
          style={{ fontSize: '1.5rem', margin: '4rem 0 2rem 0' }}
        >
          My Github Contributions
        </SectionTitle>
        <GithubCalendar />
      </Wrapper>
    </SectionContainer>
  );
};

export default AboutPage;

const data = {
  profileImg: profileImg,
  content: `Hello, I’m Amandeep Singh. I’m a fullstack developer and a postgraduate student specializing in developing and designing exceptional and beautiful web applications. 
	\n I’m currently working as a software developer at **[GTROPY](https://gtropy.com/)**, Delhi.
	\n My experience as a self taught proficient web developer allows me to come up with smart solutions to technical challenges.
	\n I’m  a coding enthusiast and passionate about learning and implementing web technologies.
	\n I enjoy travelling and playing badminton, I also write articles about web on **[Coders League](https://codersleague.herokuapp.com)**.`,
  stack: [...Object.values(techIcons)],
};

const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.bpLarge}) {
    gap: 2rem;
    flex-direction: column;
  }

  & > * {
    flex: 1;
  }
`;
const Avatar = styled.div`
  position: relative;
  margin: 0 auto;

  .avatar-border {
    height: 25rem;
    width: 25rem;
    position: absolute;
    top: 0px;
    left: 0px;
    border: 5px solid var(--color-primary);
    border-radius: 5px;
    z-index: 1;
    transition: 0.2s ease-in;
  }
  .avatar-wrapper {
    position: relative;
    z-index: 2;

    img {
      height: 35rem;
      width: 35rem;
      object-fit: cover;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  p {
    margin-bottom: 1rem;
    line-height: 1.3;
    letter-spacing: 1px;
  }
`;

const Stack = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0rem 0 5rem 0;
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
      transition: transform 0.4s ease;
      width: 50%;
    }

    @media (max-width: ${({ theme }) => theme.bpMedium}) {
      gap: 3rem;
      flex-wrap: nowrap;
      overflow-x: scroll;
      margin: -2rem 0;
      height: 10rem;
      justify-content: flex-start;
      li {
        height: 2rem;
        width: 2rem;
        background-color: transparent;
      }
      img {
        width: 3rem;
      }
    }
  }
`;
