import React from 'react';
import { ReactComponent as AppDevelopment } from './../../Assets/appDevelopment.svg';

const AppDev = () => {
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

export default AppDev;
