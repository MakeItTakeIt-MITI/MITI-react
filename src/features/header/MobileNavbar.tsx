import miti_logo from "../../assets/v1.3/navbar-logo.svg";
import hamburger from "../../assets/v1.3/hamburger.svg";
import { useState } from "react";

export default function MobileNavbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleToggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <nav
      style={{
        height: displayMenu ? "307px" : "60px",
      }}
      className={`sm:flex md:hidden relative flex-col   w-full  bg-[#141414] p-4  `}
    >
      <div className="flex w-full justify-between items-center">
        <img src={miti_logo} alt="miti logo" />

        <button type="button" onClick={handleToggleMenu}>
          <img src={hamburger} alt="menu" />
        </button>
      </div>

      {displayMenu && (
        <div className="absolute bottom-0 right-0 left-0">
          <ul className=" flex flex-col gap-6 mt-6 text-white">
            <li>
              <a href="/courts">경기장 찾기</a>
            </li>
            <li>
              <a href="/games">경기 찾기</a>
            </li>
            <li>
              <a href="/community">커뮤니티</a>
            </li>
            <li>
              <a href="/mypage">마이페이지</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
