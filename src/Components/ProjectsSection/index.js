import React from 'react';
import {
  ProjectSectionContainer,
  Project,
  WindowFrame,
} from './ProjectsSectionElements';
import data from './ProjectsSectionData';
import ReactMarkdown from 'react-markdown';
import { ExternalLinkWithIcon } from './../CommonElements';
import Slider from './../Slider';
import { RiGithubFill, RiExternalLinkFill } from 'react-icons/ri';

const ProjectSection = () => {
  return (
    <ProjectSectionContainer>
      <div className="projectSection-wrapper">
        <h2 className="title">Projects I’ve Developed</h2>
        <ul>
          {data.map(
            ({
              key,
              projectName,
              projectDescription,
              projectStack,
              projectSlides,
              projectLinks,
            }) => {
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
                        children={projectDescription}
                        components={{
                          a: ({ node, ...props }) => (
                            <ExternalLinkWithIcon
                              {...props}
                              fontSize="calc(1.2rem + 0.2vh)"
                            />
                          ),
                        }}
                      />
                    </div>
                    <div className="project-stack">
                      <ul>
                        {projectStack.map((tech, i) => {
                          return (
                            <li key={tech.label}>
                              <img
                                width={20}
                                height={20}
                                src={tech.logo}
                                alt={tech.label}
                                title={tech.label}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="project-links">
                      <a
                        href={projectLinks.live}
                        aria-label="external link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <RiExternalLinkFill />
                      </a>
                      <a
                        href={projectLinks.github}
                        aria-label="github link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <RiGithubFill />
                      </a>
                    </div>
                  </div>
                </Project>
              );
            }
          )}
        </ul>
      </div>
    </ProjectSectionContainer>
  );
};

export default ProjectSection;
