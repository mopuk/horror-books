import React, { useState, useEffect } from "react";

function getCurrentScroll() {
  const { scrollY } = window;
  return scrollY;
}
export function useCurrentScroll() {
  const [scrollHeight, setScrollheight] = useState(0);

  useEffect(() => {
    function handleScrolling() {
      setScrollheight(getCurrentScroll);
    }

    window.addEventListener("scroll", handleScrolling);
    return () => window.removeEventListener("scroll", handleScrolling);
  }, []);

  return scrollHeight;
}