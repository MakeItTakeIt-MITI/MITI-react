import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { key, search } = useLocation();

  console.log(key);
  console.log(search);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key, search]);

  return null;
};
