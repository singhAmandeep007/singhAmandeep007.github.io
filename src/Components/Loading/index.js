import React from 'react';
import { LoadingWrapper, Loader, LoadingPath } from './LoadingElements';

function Loading() {
  return (
    <LoadingWrapper>
      <Loader>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <LoadingPath d="M 6.4 69.8 L 31.2 0 L 39.4 0 L 64.5 69.8 L 71 70.7 L 71 75 L 46.6 75 L 46.6 70.7 L 55.4 69.8 L 50.1 53.9 L 18.9 53.9 L 13.6 69.7 L 22.5 70.7 L 22.5 75 L 0 75 L 0 70.7 L 6.4 69.8 Z M 48.3 48.7 L 37 15.4 L 34.2 5.9 L 31.5 15.7 L 20.6 48.7 L 48.3 48.7 Z" />
        </svg>
      </Loader>
    </LoadingWrapper>
  );
}

export default Loading;
