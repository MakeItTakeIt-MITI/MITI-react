import { useQuery } from "@tanstack/react-query";
import { getTeamGameDetail } from "../../api/team-game-detail.ts";

interface TeamGameDetailParams {
  id: string | undefined;
}

export const useTeamGameDetails = ({ id }: TeamGameDetailParams) => {
  return useQuery({
    queryKey: ["team game detail", id],
    queryFn: () => getTeamGameDetail(id),
  });
};
