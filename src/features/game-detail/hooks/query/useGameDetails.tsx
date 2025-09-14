import { useQuery } from "@tanstack/react-query";
import { getGameDetail } from "../../api/game-detail";

interface GameDetailParams {
  id: string | undefined;
}

export const useGameDetails = ({ id }: GameDetailParams) => {
  return useQuery({
    queryKey: ["game detail", id],
    queryFn: () => getGameDetail(id),
  });
};
