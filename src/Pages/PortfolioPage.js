import React from 'react';
import { ReactComponent as AppDevelopment } from './appDevelopment.svg';

const PortfolioPage = () => {
   return (
      <div
         style={{
            color: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10rem',
         }}
      >
         <AppDevelopment
            style={{
               maxWidth: '90%',
               maxHeight: '90%',
            }}
         />
      </div>
   );
};

export default PortfolioPage;
