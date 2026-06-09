import { useQuery } from "@tanstack/react-query";
import { mapGamesList } from "../../api/games.ts";

export const useMapGamesList = (
  startdate: string,
  starttime: string,
  status: string[],
  province: string[]
) => {
  return useQuery({
    queryKey: ["matches map", startdate, starttime, status, province],
    queryFn: () => mapGamesList(startdate, starttime, status, province),
  });
};
