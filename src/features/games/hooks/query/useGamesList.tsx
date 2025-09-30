import { useInfiniteQuery } from "@tanstack/react-query";
import { gamesListOnly } from "../../api/games.ts";

export const useGamesListOnly = (district: string, title: string) => {
  return useInfiniteQuery({
    queryKey: ["Fetch Games List", district, title],
    queryFn: ({ pageParam = 1 }) => gamesListOnly(district, title, pageParam),

    initialPageParam: 1,
    getNextPageParam: (page) => {
      const currentPage = page.data.current_index + 1;
      const lastPage = page.data.end_index;
      const hasNextPage = currentPage <= lastPage;

      return hasNextPage ? currentPage : null;
    },
  });
};
