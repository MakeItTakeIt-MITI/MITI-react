interface ButtonProps {
  type: "button" | "submit";
  size: "lg" | "md" | "sm";
  content: string;
}

export default function Button({
  type = "button",
  size = "md",
  content = "btn",
}: ButtonProps) {
  const widthClass =
    size === "lg" ? "w-[360px]" : size === "md" ? "w-[225px]" : "w-[96px]";

  return (
    <button
      disabled
      className={`
        font-bold
        h-[44px]
        rounded-lg
        bg-[#1ADCDF]
    
         ${widthClass}
      `}
      type={type}
    >
      {content}
    </button>
  );
}
