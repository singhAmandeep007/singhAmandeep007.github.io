import { useLayoutEffect, useState } from "react";

export function useLockedBody(initialIsLocked = false) {
  const [isLocked, setIsLocked] = useState(initialIsLocked);

  // trigger the side effect before render
  useLayoutEffect(() => {
    if (!isLocked) {
      return;
    }

    // save initial body style
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // lock body scroll
    document.body.style.overflow = "hidden";

    const root = document.getElementById("root");
    // get the scrollBar width
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    // avoid width reflow
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [isLocked]);

  return {
    isLocked,
    setIsLocked,
  };
}
