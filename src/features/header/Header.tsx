import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";

export default function Header() {
  return (
    <header className="relative z-[99999]">
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
