interface TabProps {
  isSelected: boolean;
  content: string;
  onClick: () => void;
}

export default function Tab({ isSelected, content, onClick }: TabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        color: isSelected ? "#1ADCDF" : "#999",
        borderColor: isSelected ? "#1ADCDF" : "#999",
        width: "60px",
        height: "26px",
      }}
      className=" border-b text-sm font-bold"
    >
      {content}
    </button>
  );
}
