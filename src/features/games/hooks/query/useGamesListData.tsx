import { useInfiniteQuery } from "@tanstack/react-query";
import { gamesListOnly } from "../../api/games";

export const useGamesListData = (
  startdate: string,
  starttime: string,
  game_status: string[],
  selectedProvince: string[]
) => {
  return useInfiniteQuery({
    queryKey: [
      "All Games List",
      startdate,
      starttime,
      ...game_status,
      ...selectedProvince,
    ],
    queryFn: ({ pageParam }) =>
      gamesListOnly(
        startdate,
        starttime,
        game_status,
        selectedProvince,
        pageParam,
        20
      ),
    getNextPageParam: (lastPage) => {
      const data = lastPage?.data;
      if (!data) return undefined;
      return data.has_more ? data.page_last_cursor : undefined;
    },
    initialPageParam: null,
  });
};
