import { GameStatusLabel } from "../../../constants/games.ts";
import { GameStatusEnum } from "../../../enum/games.ts";

interface GameStatusProps {
  status: GameStatusEnum;
}

export const GameStatus = ({ status }: GameStatusProps) => {
  const label = GameStatusLabel[status];
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
      {label}
    </span>
  );
};
