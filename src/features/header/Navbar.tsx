import { useLocation } from "react-router-dom";
import BrowserNavbar from "./BrowserNavbar.tsx";
import MobileNavbar from "./MobileNavbar.tsx";
import { useEffect } from "react";

export const Navbar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <BrowserNavbar />
      <MobileNavbar />
    </>
  );
};
