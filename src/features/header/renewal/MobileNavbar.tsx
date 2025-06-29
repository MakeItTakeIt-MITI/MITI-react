import miti_logo from "../../../assets/v1.3/navbar-logo.svg";
import hamburger from "../../../assets/v1.3/hamburger.svg";

export default function MobileNavbar() {
  return (
    <nav className="w-full h-[60px] bg-[#141414] p-4 flex items-center justify-between">
      <img src={miti_logo} alt="miti logo" />

      <button type="button">
        <img src={hamburger} alt="menu" />
      </button>
    </nav>
  );
}
