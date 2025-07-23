interface GameStatusProps {
  status: "open" | "closed" | "canceled" | "completed";
}

export const GameStatus = ({ status }: GameStatusProps) => {
  return (
    <span
      style={{
        backgroundColor:
          status === "open"
            ? "#1ADCDF33"
            : status === "canceled"
            ? "#99999933"
            : status === "closed"
            ? "#FF711433"
            : status === "completed"
            ? "#FFFFFF33"
            : "",
        color:
          status === "open"
            ? "#1ADCDF"
            : status === "canceled"
            ? "#999999"
            : status === "closed"
            ? "#FF7114"
            : status === "completed"
            ? "#fff"
            : "",
      }}
      className="p-1 text-[10px] rounded-[2px] h-[18px] w-full font-bold  "
    >
      {(status === "open" && "모집 중") ||
        (status === "canceled" && "경기 취소") ||
        (status === "closed" && "모집 완료") ||
        (status === "completed" && "경기 완료")}
    </span>
  );
};
