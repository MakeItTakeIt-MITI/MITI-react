import { useQuery } from "@tanstack/react-query";
import { getGameDetail } from "../../../api/games.ts";

interface GameDetailParams {
  id: number;
}

export const useGameDetailDataHook = ({ id }: GameDetailParams) => {
  return useQuery({
    queryKey: ["game detail", id],
    queryFn: () => getGameDetail(id),
  });
};
