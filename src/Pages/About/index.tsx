import { ExternalLinkWithIcon, SectionContainer, SectionTitle, Wrapper } from "@/Components/CommonElements";
import GithubData from "@/Components/GithubData";
import ReactMarkdown from "react-markdown";

import { data } from "./AboutData";
import { Avatar, Content, SectionContent, Stack } from "./AboutElements";

export const AboutPage = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <SectionTitle>About me</SectionTitle>
        <SectionContent>
          <Avatar>
            <div className="avatar-border"></div>
            <div className="avatar-wrapper">
              <img
                src={data.profileImg}
                alt="profile"
              />
            </div>
          </Avatar>
          <Content>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <ExternalLinkWithIcon
                    {...props}
                    fontSize="1.2rem"
                  />
                ),
              }}
            >
              {data.content}
            </ReactMarkdown>
            <SectionTitle
              as="h3"
              style={{ fontSize: "2rem", margin: "4rem 0 2rem 0" }}
            >
              My Stack
            </SectionTitle>
            <Stack>
              <ul>
                {data.stack.map((tech) => {
                  return (
                    <li key={tech.label}>
                      <img
                        src={tech.src}
                        alt={"stack " + tech.label}
                        title={tech.label}
                      />
                    </li>
                  );
                })}
              </ul>
            </Stack>
          </Content>
        </SectionContent>

        <GithubData username={data.githubUsername} />
      </Wrapper>
    </SectionContainer>
  );
};
