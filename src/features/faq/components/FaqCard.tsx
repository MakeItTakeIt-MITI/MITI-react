import { useState } from "react";
import drop_arrow from "../../../assets/v1.3/icon/drop_arrow.svg";
import up_arrow from "../../../assets/v1.3/icon/drop_up.svg";
import DOMPurify from "dompurify";
import "../faq.css";

interface FaqCardProps {
  title: string;
  content: string;
}

const FaqCard = ({ title, content }: FaqCardProps) => {
  const [toggle, setToggle] = useState(false);

  const handleToggleFaq = () => {
    setToggle(!toggle);
  };
  return (
    <li
      style={{
        height: toggle ? "" : "48px",
      }}
      className="py-3 w-full space-y-3"
    >
      <button
        type="button"
        onClick={handleToggleFaq}
        onKeyDown={handleToggleFaq}
        className="w-full flex items-center justify-between"
      >
        <h1 className=" truncate sm:text-base md:text-[18px] font-[400] text-white ">
          {title}
        </h1>
        <img src={toggle ? up_arrow : drop_arrow} alt="toggle button" />
      </button>
      {toggle && (
        <p
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          className=" text-[#e8e8e8] font-400 "
        />
      )}
    </li>
  );
};

export default FaqCard;
