import { useQuery } from "@tanstack/react-query";
import { mapGamesList } from "../../api/games.ts";

export const useMapGamesList = (
  startdate: string,
  starttime: string,
  game_status: string[]
) => {
  return useQuery({
    queryKey: ["mapGames list", startdate, starttime, game_status],
    queryFn: () => mapGamesList(startdate, starttime, game_status),
  });
};
