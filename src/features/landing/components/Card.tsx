import { Link } from "react-router-dom";
import chevron_right from "../../../assets/v1.3/icon/chevron-right.svg";

interface CardProps {
  title: string;
  card_header: string;
  button_text: string;
}

function Card({ title, card_header, button_text }: CardProps) {
  return (
    <div className="w-[409px] h-[165px] p-6 flex flex-col gap-3 bg-[#142323] rounded-lg">
      <div className="space-y-6">
        <h1 className="font-bold text-base text-[#47E3E5]">{title}</h1>
        <h2 className="text-[24px] font-bold text-white">{card_header}</h2>
      </div>

      <Link to="/" className="flex items-center gap-1">
        <span className="text-sm font-base text-white">{button_text}</span>
        <img src={chevron_right} alt={chevron_right} />
      </Link>
    </div>
  );
}

export default Card;
