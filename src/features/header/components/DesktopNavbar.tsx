import { Link, useLocation } from "react-router-dom";
import navbar_logo from "../../../assets/v1.3/navbar-logo.svg";
import AppDownloadBtn from "./AppDownloadBtn";
import { isActivePath } from "../utils/isActivePath";

export default function DesktopNavbar() {
  const { pathname } = useLocation();

  const isLanding = pathname === "/";

  return (
    <nav
      aria-label="웹페이지 기본 내비게이션"
      className={
        (isLanding
          ? "sm:hidden md:flex  px-[360px] h-[60px] bg-[#000000D9] items-center justify-center z-40"
          : "sm:hidden md:flex w-full px-[360px] h-[60px] bg-[#141414] items-center justify-center") +
        " transition-colors"
      }
    >
      <div className=" h-[28px] w-[1200px]  flex items-center  justify-between">
        <Link to="/" aria-label="랜딩 페이지로 이동">
          <img src={navbar_logo} alt="미티 로고" />
        </Link>
        <ul
          className="flex items-center gap-5 text-white font-bold text-sm"
          role="menubar"
          aria-label="주요 페이지 이동 메뉴"
        >
          <li role="none">
            <Link
              role="menuitem"
              aria-current={
                isActivePath(pathname, "/games") ? "page" : undefined
              }
              to={`games`}
              style={{
                color: isActivePath(pathname, "/games") ? "#1ADCDF" : "white",
              }}
            >
              경기 목록
            </Link>
          </li>
          <li role="none">
            <Link
              role="menuitem"
              aria-current={
                isActivePath(pathname, "/courts") ? "page" : undefined
              }
              to={`courts?search=`}
              style={{
                color: isActivePath(pathname, "/courts") ? "#1ADCDF" : "white",
              }}
            >
              경기장 목록
            </Link>
          </li>
          <li role="none">
            <Link
              role="menuitem"
              aria-current={
                isActivePath(pathname, "/community") ? "page" : undefined
              }
              to="community?search=&category=all"
              style={{
                color: isActivePath(pathname, "/community")
                  ? "#1ADCDF"
                  : "white",
              }}
            >
              게시판
            </Link>
          </li>
          <li role="none">
            <Link
              role="menuitem"
              aria-current={isActivePath(pathname, "/faq") ? "page" : undefined}
              to={`faq?tab=&search=`}
              style={{
                color: isActivePath(pathname, "/faq") ? "#1ADCDF" : "white",
              }}
            >
              자주 묻는 질문
            </Link>
          </li>
          <li role="none">
            <Link
              role="menuitem"
              aria-current={
                isActivePath(pathname, "/inquiries") ? "page" : undefined
              }
              to={`inquiries?page=1`}
              style={{
                color: isActivePath(pathname, "/inquiries")
                  ? "#1ADCDF"
                  : "white",
              }}
            >
              사용자의 문의
            </Link>
          </li>
        </ul>
        <AppDownloadBtn aria-label="앱 다운로드 버튼" />
      </div>
    </nav>
  );
}
