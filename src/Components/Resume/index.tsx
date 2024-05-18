import { useCallback, useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { ResumeContainer, ResumeLetter, ResumeSticker } from "./ResumeElements";

type TResumeProps = {
  devName: string;
  devTitle: string;
  devResumeDownloadLink: string;
};

export const Resume = ({ devName, devTitle, devResumeDownloadLink }: TResumeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  const downloadFile = useCallback(() => {
    window.location.href = devResumeDownloadLink;
  }, [devResumeDownloadLink]);

  const handleResumeClick = useCallback(() => {
    setIsOpen(!isOpen);
    if (!isViewed) {
      setIsViewed(true);
    }
  }, [isOpen, isViewed]);

  return (
    <ResumeContainer
      title={`${isOpen ? "Click to close" : "Click to open"}`}
      $isOpen={isOpen}
      $isViewed={isViewed}
    >
      <ResumeSticker onClick={handleResumeClick}>
        <span>Resume</span>
      </ResumeSticker>
      <div className="cover"></div>
      <div className="letter">
        <ResumeLetter
          onClick={downloadFile}
          $isOpen={isOpen}
          title="Click to download resume"
        >
          <div className="resume-letter-header">
            <h1>{devName}</h1>
            <AiOutlineCloudDownload
              onClick={downloadFile}
              size="20"
            />
          </div>
          <div>
            <hr />
            <h4>{devTitle}</h4> {<ResumePage />}
          </div>
        </ResumeLetter>
      </div>
    </ResumeContainer>
  );
};

const ResumePage = () => {
  const page = Array.from({ length: 10 }, (_, key) => {
    const width = Math.round(Math.random() * (100 - 1) + 1);
    return (
      <hr
        key={key}
        style={{
          width: `${width}%`,
        }}
      />
    );
  });
  return <>{page}</>;
};
