import { useInfiniteQuery } from "@tanstack/react-query";
import { gamesListOnly } from "../../api/games";

export const useGamesListData = (
  status: string[],
  selectedProvince: string[],
  search: string | null
) => {
  return useInfiniteQuery({
    queryKey: ["matches list", ...status, ...selectedProvince, search],
    queryFn: ({ pageParam }) =>
      gamesListOnly(status, selectedProvince, search, pageParam, 20),
    getNextPageParam: (lastPage) => {
      const data = lastPage?.data;
      // if (!data) return undefined;
      return data.has_more ? data.page_last_cursor : undefined;
    },
    initialPageParam: null,
  });
};
