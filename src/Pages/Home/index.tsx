import { Resume } from "@/Components/Resume";
import ReactMarkdown from "react-markdown";

import { ExternalLinkWithIcon, SectionContainer } from "@/Components/CommonElements";
import { data } from "./HomeData";
import { Handwave, HomeSectionResume, HomeSectionTypography, HomeSectionWrapper } from "./HomeElements";

export const HomePage = () => {
  return (
    <SectionContainer>
      <HomeSectionWrapper>
        <HomeSectionTypography>
          <h1>
            Hi There!{" "}
            <Handwave
              role="img"
              aria-labelledby="handwave"
              src={"./wavinghandsign.svg"}
              alt="handwave"
            ></Handwave>
          </h1>
          <h2>
            I&apos;m <span>&lt;{data.devName} /&gt;</span>
          </h2>

          <div>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <ExternalLinkWithIcon
                    {...props}
                    fontSize="1.5rem"
                  />
                ),
              }}
            >
              {data.shortDescription}
            </ReactMarkdown>
          </div>
        </HomeSectionTypography>
        <HomeSectionResume>
          <Resume
            devName={data.devName}
            devTitle={data.devTitle}
            devResumeDownloadLink={data.devResumeDownloadLink}
          />
        </HomeSectionResume>
      </HomeSectionWrapper>
    </SectionContainer>
  );
};
