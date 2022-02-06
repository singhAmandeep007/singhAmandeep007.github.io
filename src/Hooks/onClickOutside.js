import { useEffect } from 'react';

// NOTE: add listener to the document if clicked element is our current element or if the clicked element contains the current element. If so, we don’t do anything, otherwise, we call handler function.
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
