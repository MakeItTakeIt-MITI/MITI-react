import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/v11/logo.svg";
import hamburger from "../../assets/v11/hamburger.svg";
import { useState } from "react";
import { NAVITEMS } from "../../constants/navigation.ts";
import close from "../../assets/v11/mobile_close.svg";

const MobileNavbar = () => {
  const [displayTab, setDisplayTab] = useState(false);
  const { pathname } = useLocation();

  const handleOpenTab = () => {
    setDisplayTab(!displayTab);
  };

  return (
    <nav className="relative sm:flex h-[3.75rem] w-full justify-between md:hidden px-[1.25rem] py-[1rem] bg-primary-black">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <button type="button" onClick={handleOpenTab}>
        {displayTab ? (
          <img src={close} alt="close" />
        ) : (
          <img src={hamburger} alt="hamburger" />
        )}
      </button>

      {/* nav items */}
      {displayTab && (
        <div
          onMouseLeave={() => setDisplayTab(false)}
          // className="z-[999999] absolute left-0 right-0 -bottom-[10.9rem]  bg-primary-black "
          className="z-[999999] absolute left-0 right-0 top-full bg-primary-black"
        >
          {NAVITEMS.map((nav) => (
            <Link
              to={nav.path}
              onClick={() => setDisplayTab(false)}
              style={{
                color: pathname === `${nav.path}` ? "#7FEEF0" : "#fff",
              }}
              className="flex flex-col cursor-pointer font-[500] py-[.62rem] px-[1.31rem] text-primary-white w-full h-full "
            >
              {nav.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
