import { Link } from "react-router-dom";
import navbar_logo from "../../assets/v1.3/navbar-logo.svg";
import { getTodaysGamesQuery } from "../../utils/dates/date";

export default function DesktopNavbar() {
  return (
    <nav className="sm:hidden md:flex w-full px-[360px] h-[60px] bg-[#141414]  items-center justify-center ">
      <div className=" h-[28px] w-[1200px]  flex items-center  justify-between">
        <img src={navbar_logo} alt="miti logo" />
        <ul className="flex items-center gap-5 text-white font-bold text-sm">
          <li>
            <Link to={getTodaysGamesQuery()}>경기 목록</Link>
          </li>
          <li>
            <Link to={`courts?region=&search=`}>경기장 목록</Link>
          </li>
          <li>
            <Link to="community?search=">게시판</Link>
          </li>
          <li>
            <Link to={`faq?tab=all`}>자주 묻는 질문</Link>
          </li>
          <li>
            <Link to={`inquiries?page=1`}>사용자의 문의</Link>
          </li>
        </ul>
        <button className="py-2 px-3 bg-[#1ADCDF] rounded-full text-xs font-bold text-[#262626">
          앱 다운로
        </button>
      </div>
    </nav>
  );
}
