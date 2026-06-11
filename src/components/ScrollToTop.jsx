import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly force window viewport to snap back up to the absolute top
    window.scrollTo(0, 0);
  }, [pathname]); // Fires flawlessly every single time the route path updates

  return null; // This utility is purely structural and renders no UI footprint
};

export default ScrollToTop;