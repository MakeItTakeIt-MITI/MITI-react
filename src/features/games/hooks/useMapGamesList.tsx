import { useQuery } from "@tanstack/react-query";
import { fetchMapGamesList } from "../api/map.ts";
import { STATUS_TRANSLATION } from "../../../constants/status.ts";

type StatusKey = keyof typeof STATUS_TRANSLATION;

export const useMapGamesList = (
  startdate: string,
  starttime: string,
  game_status: StatusKey[]
) => {
  return useQuery({
    queryKey: ["v11.2 Map Games List ", startdate, starttime, game_status],
    queryFn: () => fetchMapGamesList(startdate, starttime, game_status),
  });
};
