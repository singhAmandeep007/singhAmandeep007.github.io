import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import ReactMarkdown from "react-markdown";

import { Slider } from "@/Components/Slider";

import { data } from "./ProjectsData";
import { Project, WindowFrame } from "./ProjectsElements";

import { ExternalLinkWithIcon, SectionContainer, SectionTitle, Wrapper } from "@/Components/CommonElements";

export const ProjectsPage = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <SectionTitle>Projects I’ve Developed</SectionTitle>
        <ul style={{ listStyle: "none" }}>
          {data.map(({ key, projectName, projectDescription, projectStack, projectSlides, projectLinks }) => {
            return (
              <Project key={key}>
                <div className="project-image">
                  <WindowFrame>
                    <div className="window-buttons">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p className="window-title">{projectName}</p>
                  </WindowFrame>
                  <Slider slides={projectSlides} />
                </div>
                <div className="project-content">
                  <div className="project-title">
                    <h3>&lt; {projectName} /&gt;</h3>
                  </div>
                  <div className="project-description">
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
                      {projectDescription}
                    </ReactMarkdown>
                  </div>
                  <div className="project-stack">
                    <ul>
                      {projectStack.map((tech) => {
                        return (
                          <li key={tech.label}>
                            <img
                              width={20}
                              height={20}
                              src={tech.src}
                              alt={tech.label}
                              title={tech.label}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="project-links">
                    {projectLinks.live && (
                      <a
                        href={projectLinks.live}
                        aria-label="external link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <RiExternalLinkFill />
                      </a>
                    )}
                    {projectLinks.github && (
                      <a
                        href={projectLinks.github}
                        aria-label="github link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <RiGithubFill />
                      </a>
                    )}
                  </div>
                </div>
              </Project>
            );
          })}
        </ul>
      </Wrapper>
    </SectionContainer>
  );
};
