import { useQuery } from "@tanstack/react-query";
import { mapGamesList } from "../../api/games.ts";

export const useMapGamesList = (
  startdate: string,
  starttime: string,
  game_status: string[],
  province: string | null
) => {
  return useQuery({
    queryKey: ["Map Games List ", startdate, starttime, game_status, province],
    queryFn: () => mapGamesList(startdate, starttime, game_status, province),
  });
};
