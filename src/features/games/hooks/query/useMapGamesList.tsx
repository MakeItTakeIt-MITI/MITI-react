import { useQuery } from "@tanstack/react-query";
import { fetchMapGamesList, mapGamesList } from "../../api/games.ts";

export const useMapGamesList = () =>
  // startdate: string,
  // starttime: string,
  // game_status: any
  {
    return useQuery({
      queryKey: ["Map Games List "],
      queryFn: () => mapGamesList(),
    });
  };
