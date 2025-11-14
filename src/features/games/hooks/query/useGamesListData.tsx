import { useInfiniteQuery } from "@tanstack/react-query";
import { gamesListOnly } from "../../api/games";

export const useGamesListData = (
  game_status: string[],
  selectedProvince: string[]
) => {
  return useInfiniteQuery({
    queryKey: ["All Games List", ...game_status, ...selectedProvince],
    queryFn: ({ pageParam }) =>
      gamesListOnly(game_status, selectedProvince, pageParam, 20),
    getNextPageParam: (lastPage) => {
      const data = lastPage?.data;
      if (!data) return undefined;
      return data.has_more ? data.page_last_cursor : undefined;
    },
    initialPageParam: null,
  });
};
