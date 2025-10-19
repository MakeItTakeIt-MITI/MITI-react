import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";

export default function Header() {
  return (
    <header>
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
