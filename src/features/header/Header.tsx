import DesktopNavbar from "./DesktopNavbar.tsx";
import MobileNavbar from "./MobileNavbar.tsx";

export default function Header() {
  return (
    <header>
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
