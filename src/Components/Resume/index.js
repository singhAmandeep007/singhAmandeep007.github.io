import React, { useState } from 'react';
import { ResumeContainer, ResumeLetter } from './ResumeElements';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Resume = ({ devName, devTitle, devResumeDownloadLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  const downloadFile = () => {
    window.location.href = devResumeDownloadLink;
  };
  const handleResumeClick = () => {
    setIsOpen(!isOpen);
    if (!isViewed) {
      setIsViewed(true);
    }
  };
  return (
    <ResumeContainer
      title={`${isOpen ? 'click to close' : 'click to open'}`}
      $isOpen={isOpen}
      $isViewed={isViewed}
    >
      <div className="sticker" onClick={handleResumeClick}>
        <span>Resume</span>
      </div>
      <div className="cover"></div>
      <div className="letter">
        <ResumeLetter onClick={downloadFile} $isOpen={isOpen}>
          <div
            className="resume-letter-header"
            title="click to download resume"
          >
            <h1>{devName}</h1>{' '}
            <AiOutlineCloudDownload onClick={downloadFile} size="20" />
          </div>
          <div>
            <hr />
            <h2>{devTitle}</h2> {<ResumePage />}
          </div>
        </ResumeLetter>
      </div>
    </ResumeContainer>
  );
};

export default React.memo(Resume);

const ResumePage = React.memo(() => {
  const page = Array.from({ length: 10 }, (_, k) => {
    let width = Math.round(Math.random() * (100 - 1) + 1);
    return (
      <hr
        key={k}
        style={{
          width: `${width}%`,
        }}
      />
    );
  });
  return <>{page}</>;
});
