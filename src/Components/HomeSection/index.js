import React from 'react';
import Resume from './Resume';
import data from './HomeSectionData';
import ReactMarkdown from 'react-markdown';
import {
  HomeSectionContainer,
  HomeSectionTypography,
  HomeSectionResume,
  Handwave,
} from './HomeSectionElements';
import { ExternalLinkWithIcon } from './../CommonElements';
import handwavesign from './waving-hand-sign.svg';

const HomeSection = () => {
  return (
    <HomeSectionContainer>
      <div className="homeSection-wrapper">
        <HomeSectionTypography>
          <h1>
            Hi There!{' '}
            <Handwave
              role="img"
              aria-labelledby="handwave"
              src={handwavesign}
              alt="handwave"
            ></Handwave>
          </h1>
          <h2>
            I'm <span>&lt;{data.devName} /&gt;</span>
          </h2>

          <div>
            <ReactMarkdown
              children={data.short_description}
              components={{
                a: ({ node, ...props }) => (
                  <ExternalLinkWithIcon {...props} fontSize="1.5rem" />
                ),
              }}
            />
          </div>
        </HomeSectionTypography>
        <HomeSectionResume>
          <Resume
            devName={data.devName}
            devTitle={data.devTitle}
            devResumeDownloadLink={data.devResumeDownloadLink}
          />
        </HomeSectionResume>
      </div>
    </HomeSectionContainer>
  );
};

export default HomeSection;
