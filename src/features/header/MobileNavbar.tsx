import miti_logo from "../../assets/v1.3/navbar-logo.svg";
import hamburger from "../../assets/v1.3/hamburger.svg";
import toggle_close from "../../assets/v1.3/navigation/toggle_close.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTodaysGamesQuery } from "../../utils/dates/date";

export default function MobileNavbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  const handleToggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <nav
      className={
        isLanding
          ? "sm:flex md:hidden absolute top-0 left-0 right-0 z-40 flex-col gap-4 w-full bg-[#000000D9] p-4"
          : "sm:flex md:hidden relative flex-col gap-4 w-full bg-[#141414] p-4"
      }
    >
      <div className="flex w-full justify-between items-center">
        <Link to="/">
          <img src={miti_logo} alt="miti logo" />
        </Link>
        <button type="button" onClick={handleToggleMenu}>
          <img src={displayMenu ? toggle_close : hamburger} alt="menu" />
        </button>
      </div>

      {displayMenu && (
        <div className="absolute top-14 left-0 right-0 text-white bg-[#141414] z-[99999] p-4">
          <ul className="flex flex-col gap-6 items-end text-sm font-bold ">
            <li onClick={() => setDisplayMenu(false)}>
              <Link to={getTodaysGamesQuery()}>경기 목록</Link>
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
              <button
                style={{
                  color: "#262626",
                }}
                className="py-2 px-3 bg-[#1ADCDF] rounded-full text-xs font-bold "
              >
                앱 다운로
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
