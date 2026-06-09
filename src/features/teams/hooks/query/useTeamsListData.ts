import { useInfiniteQuery } from "@tanstack/react-query";
import { getTeamsList } from "../../api/teams.ts";

export const useTeamsListData = (
  isGeoSorted: boolean,
  lat?: number,
  lng?: number
) => {
  return useInfiniteQuery({
    queryKey: ["teams list", isGeoSorted, lat, lng],
    queryFn: ({ pageParam }) =>
      getTeamsList(pageParam, 20, lat, lng),
    getNextPageParam: (lastPage) => {
      return lastPage.has_more ? lastPage.page_last_cursor : undefined;
    },
    initialPageParam: null as string | null,
  });
};
