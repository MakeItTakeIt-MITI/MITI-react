import { useQuery } from "@tanstack/react-query";
import { fetchMapGamesList } from "../api/games.ts";

export const useMapGamesList = (
  startdate?: string,
  starttime?: string,
  game_status?: string[]
) => {
  return useQuery({
    queryKey: ["v11.2 Map Games List ", startdate, starttime, game_status],
    queryFn: () => fetchMapGamesList(startdate, starttime, game_status),
  });
};
