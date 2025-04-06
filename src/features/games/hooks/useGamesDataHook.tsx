import { useQuery } from "@tanstack/react-query";
import { getAllGames } from "../api/games.ts";

interface Params {
  startdate?: string;
  starttime?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  status?: any;
}

export const useGamesDataHook = ({ startdate, starttime, status }: Params) => {
  return useQuery({
    queryKey: ["games list", startdate, starttime, ...(status || [])],
    queryFn: () => getAllGames(startdate, starttime, status),
  });
};
