interface StatusProps {
  status: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function GameFilterStatus({
  status,
  isSelected,
  onClick,
}: StatusProps) {
  return (
    <span
      style={{
        backgroundColor: isSelected ? "#1ADCDF" : "",
        color: isSelected ? "#000" : "#999",
        borderColor: isSelected ? "#1ADCDF" : "#707070",
      }}
      className="py-2.5 px-3  text-sm rounded-[50px] border"
    >
      <button onClick={onClick} type="button">
        {status}
      </button>
    </span>
  );
}
