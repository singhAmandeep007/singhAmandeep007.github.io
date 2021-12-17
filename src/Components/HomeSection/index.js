import React from 'react';
import Resume from './Resume';
import data from './HomeSectionData';

import {
   HomeSectionContainer,
   HomeSectionTypography,
   HomeSectionResume,
   Handwave,
} from './HomeSectionElements';
import handwavesign from './waving-hand-sign.svg';
import { BiLinkExternal } from 'react-icons/bi';

const index = () => {
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

               <p>
                  {' '}
                  {data.short_description}{' '}
                  <span>
                     <a href={data.links[0].href} rel="noreferrer">
                        {data.links[0].title}.{' '}
                        <BiLinkExternal
                           size="10px"
                           title="link"
                           style={{
                              marginBottom: '0.5rem',
                              marginLeft: '-0.5rem',
                           }}
                        />
                     </a>
                  </span>
               </p>
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

export default index;
