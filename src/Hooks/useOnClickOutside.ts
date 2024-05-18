import { RefObject, useEffect } from "react";

/**
 * add listener to the document to check if clicked element is not the element we want to track clicks or if the clicked element is inside the element we want to track clicks. If so, we don’t do anything, otherwise, we call handler function.
 * @param {React.MutableRefObject} ref
 * @param {Function} handler
 */
export const useOnClickOutside = (ref: RefObject<HTMLElement | null>, handler: (event?: MouseEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
