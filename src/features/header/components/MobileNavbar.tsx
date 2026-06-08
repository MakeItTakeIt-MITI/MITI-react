import miti_logo from "../../../assets/v1.3/navbar-logo.svg";
import bars from "../../../assets/images/bars.svg";
import close from "../../../assets/images/close.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTodaysGamesQuery } from "../../../utils/dates/date";
import AppDownloadBtn from "./AppDownloadBtn";

export default function MobileNavbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const { pathname } = useLocation();
  const isLanding = pathname === "/" || pathname === "/home";

  const handleToggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <nav
      className={
        isLanding
          ? "sm:flex md:hidden absolute top-0 left-0 right-0 z-40 flex-col w-full"
          : "sm:flex md:hidden relative flex-col w-full"
      }
    >
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-[#00000099] z-30 transition-opacity duration-300 ease-in-out ${
          displayMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDisplayMenu(false)}
      />

      <div
        className={`flex w-full justify-between items-center relative z-50 p-4 ${
          isLanding ? "bg-[#000000]" : "bg-[#141414]"
        }`}
      >
        <Link to="/home">
          <img src={miti_logo} alt="miti logo" />
        </Link>
        <button 
          type="button" 
          onClick={handleToggleMenu}
          className="w-6 h-6 overflow-hidden relative flex items-center justify-start"
          aria-label="Toggle menu"
        >
          {displayMenu ? (
            <img 
              src={close} 
              alt="close" 
              className="w-[54px] max-w-none h-6"
              style={{ transform: 'translateX(0px)' }}
            />
          ) : (
            <img 
              src={bars} 
              alt="menu" 
              className="w-6 h-6"
            />
          )}
        </button>
      </div>

      <div
        className={`absolute top-full left-0 right-0 text-white z-40 p-4 transition-all duration-300 ease-in-out transform ${
          displayMenu
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        } ${isLanding ? "bg-[#000000]" : "bg-[#141414]"}`}
      >
        <ul className="flex flex-col gap-6 items-end text-sm font-bold">
          <li onClick={() => setDisplayMenu(false)}>
            <Link to={getTodaysGamesQuery()}>경기 목록</Link>
          </li>
          <li onClick={() => setDisplayMenu(false)}>
            <Link to="teams">팀 목록</Link>
          </li>
          <li onClick={() => setDisplayMenu(false)}>
            <Link to={`courts?region=&isSearched=false&search=`}>
              경기장 목록
            </Link>
          </li>
          <li onClick={() => setDisplayMenu(false)}>
            <Link to="community?search=&category=all">게시판</Link>
          </li>
          <li onClick={() => setDisplayMenu(false)}>
            <Link to={`faq?tab=&search=`}>자주 묻는 질문</Link>
          </li>
          <li onClick={() => setDisplayMenu(false)}>
            <Link to={`inquiries?page=1`}>사용자의 문의</Link>
          </li>
          <li>
            <AppDownloadBtn />
          </li>
        </ul>
      </div>
    </nav>
  );
}

