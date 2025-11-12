import { Link, useLocation } from "react-router-dom";
import navbar_logo from "../../../assets/v1.3/navbar-logo.svg";
import { getTodaysGamesQuery } from "../../../utils/dates/date";
import AppDownloadBtn from "./AppDownloadBtn";
import { isActivePath } from "../utils/isActivePath";

export default function DesktopNavbar() {
  const { pathname } = useLocation();

  // make navbar transparent only on landing (root) page
  const isLanding = pathname === "/";

  return (
    <nav
      className={
        (isLanding
          ? "sm:hidden md:flex absolute top-0 left-0 right-0 px-[360px] h-[60px] bg-[#000000D9] items-center justify-center z-40"
          : "sm:hidden md:flex w-full px-[360px] h-[60px] bg-[#141414] items-center justify-center") +
        " transition-colors"
      }
    >
      <div className=" h-[28px] w-[1200px]  flex items-center  justify-between">
        <Link to="/">
          <img src={navbar_logo} alt="miti logo" />
        </Link>
        <ul className="flex items-center gap-5 text-white font-bold text-sm">
          <li
            style={{
              color: isActivePath(pathname, "/games") ? "#1ADCDF" : "white",
            }}
          >
            <Link to={`games`}>경기 목록</Link>
          </li>
          <li
            style={{
              color: isActivePath(pathname, "/courts") ? "#1ADCDF" : "white",
            }}
          >
            <Link to={`courts?search=`}>경기장 목록</Link>
          </li>
          <li
            style={{
              color: isActivePath(pathname, "/community") ? "#1ADCDF" : "white",
            }}
          >
            <Link to="community?search=&category=all">게시판</Link>
          </li>
          <li
            style={{
              color: isActivePath(pathname, "/faq") ? "#1ADCDF" : "white",
            }}
          >
            <Link to={`faq?tab=&search=`}>자주 묻는 질문</Link>
          </li>
          <li
            style={{
              color: isActivePath(pathname, "/inquiries") ? "#1ADCDF" : "white",
            }}
          >
            <Link to={`inquiries?page=1`}>사용자의 문의</Link>
          </li>
        </ul>
        <AppDownloadBtn />
      </div>
    </nav>
  );
}
