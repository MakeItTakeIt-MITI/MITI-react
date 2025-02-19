export const GameStatus = ({ status }: { status: string }) => {
  return (
    <span
      style={{
        backgroundColor:
          status === "open"
            ? "#b9dbdc"
            : status === "canceled"
              ? "#E3C6CB"
              : status === "closed"
                ? "#B9DBDC"
                : status === "completed"
                  ? "#C1C1C1"
                  : "",

        color:
          status === "open"
            ? "#4152EB"
            : status === "canceled"
              ? "#C93568"
              : status === "closed"
                ? "#00979A"
                : status === "completed"
                  ? "#484848"
                  : "",
      }}
      className="p-[.25rem] text-[10px] rounded-[0.125rem] w-full font-bold  "
    >
      {(status === "open" && "모집중") ||
        (status === "canceled" && "경기 취소") ||
        (status === "closed" && "모집 마감") ||
        (status === "completed" && "경기 완료")}
    </span>
  );
};
