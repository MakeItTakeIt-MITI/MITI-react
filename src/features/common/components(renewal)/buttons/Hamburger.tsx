import hamburger_open from "../../../../assets/v1.3/hamburger.svg";
import hamburger_closed from "../../../../assets/v1.3/hamburger-close.svg";

interface HamburgerProps {
  onClick: () => void;
  isClicked: boolean;
}

export default function Hamburger({ onClick, isClicked }: HamburgerProps) {
  return (
    <button type="button" onClick={onClick}>
      {isClicked ? (
        <img src={hamburger_closed} alt="hamburger closed" />
      ) : (
        <img src={hamburger_open} alt="hamburger open" />
      )}
    </button>
  );
}
