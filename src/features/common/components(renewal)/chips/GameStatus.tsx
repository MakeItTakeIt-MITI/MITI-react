interface GameStatusProps {
  status: "open" | "closed" | "canceled" | "completed" | (string & {});
}

export const GameStatus = ({ status }: GameStatusProps) => {
  const statusKeyValue = {
    open: "모집중",
    closed: "모집마감",
    canceled: "경기 취소",
    completed: "경기 완료",
  };
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
      {statusKeyValue[status as keyof typeof statusKeyValue] || status}
    </span>
  );
};
