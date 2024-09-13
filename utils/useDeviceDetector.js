import { useState, useEffect } from "react";

function useDeviceDetector() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0 
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      // This will only run in the browser
      function handleWindowSizeChange() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const isDesktop = width >= 1024;

  return { isDesktop, width };
}

export default useDeviceDetector;
