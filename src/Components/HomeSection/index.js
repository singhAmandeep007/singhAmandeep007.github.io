import React from 'react';
import {
   HomeSectionContainer,
   HomeSectionTypography,
   HomeSectionThumbnail,
   Handwave,
} from './HomeSectionElements';
import handwavesign from './waving-hand-sign.svg';
import { ReactComponent as AppDevelopment } from './appDevelopment.svg';

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
               <h4>
                  I'm <span> &lt; Amandeep Singh /&gt;</span> and I'm a
                  FullStack developer!
               </h4>

               <p>
                  {' '}
                  I’m a software engineer specializing in developing and
                  designing exceptional and beautiful web applications. I also
                  write articles about web on{' '}
                  <span>
                     <a
                        href="http://codersleague.herokuapp.com/signup"
                        rel="noreferrer"
                     >
                        Coders League.
                     </a>
                  </span>
               </p>
            </HomeSectionTypography>

            <HomeSectionThumbnail>
               <AppDevelopment />
            </HomeSectionThumbnail>
         </div>
      </HomeSectionContainer>
   );
};

export default index;
