import React, { useState } from 'react';
import { ResumeContainer, ResumeLetter } from './ResumeElements';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Resume = () => {
   const [isOpen, setIsOpen] = useState(false);
   const url =
      'https://drive.google.com/uc?export=download&id=1Jaat1Itw2p0zDzaK8bfQGC3FrnC0pTx2';
   const downloadFile = () => {
      window.location.href = url;
   };

   return (
      <ResumeContainer
         title={`${isOpen ? 'click to close' : 'click to open'}`}
         $isOpen={isOpen}
      >
         <div className="sticker" onClick={() => setIsOpen(!isOpen)}>
            <span>Resume</span>
         </div>
         <div className="cover"></div>
         <div className="letter">
            <ResumeLetter onClick={downloadFile} $isOpen={isOpen}>
               <div
                  className="resume-letter-header"
                  title="click to download resume"
               >
                  <h1>Amandeep Singh</h1>{' '}
                  <AiOutlineCloudDownload onClick={downloadFile} size="20" />
               </div>
               <div>
                  <hr />
                  <h3>Full Stack Developer</h3>{' '}
                  {Array.from({ length: 10 }, () => {
                     let width = Math.round(Math.random() * (100 - 1) + 1);
                     return (
                        <hr
                           style={{
                              width: `${width}%`,
                           }}
                        />
                     );
                  })}
               </div>
            </ResumeLetter>
         </div>
      </ResumeContainer>
   );
};

export default Resume;
