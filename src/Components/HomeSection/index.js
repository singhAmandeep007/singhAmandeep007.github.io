import React from 'react';
import { HomeSectionContainer, Handwave } from './HomeSectionElements';
import handwavesign from './waving-hand-sign.svg';

const index = () => {
   return (
      <HomeSectionContainer>
         <div className="typography">
            <h1>
               Hi There!{' '}
               <Handwave
                  role="img"
                  aria-labelledby="handwave"
                  src={handwavesign}
                  alt="handwave"
               ></Handwave>
            </h1>
            <h1>
               Hi, I'm <span>Amandeep Singh</span>
            </h1>
            <p>
               {' '}
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
               nihil voluptates ea dolore vel repellat? Quia tenetur non quam
               exercitationem. Lorem ipsum dolor sit a
            </p>
         </div>
      </HomeSectionContainer>
   );
};

export default index;
