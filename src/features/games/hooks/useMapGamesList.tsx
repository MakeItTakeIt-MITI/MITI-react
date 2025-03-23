import { useQuery } from "@tanstack/react-query";
import { fetchMapGamesList } from "../api/map.ts";

export const useMapGamesList = (
  startdate: string,
  starttime: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  game_status: any
) => {
  return useQuery({
    queryKey: ["v1.2 Map Games List ", startdate, starttime, game_status],
    queryFn: () => fetchMapGamesList(startdate, starttime, game_status),
  });
};
