import { useInfiniteQuery } from "@tanstack/react-query";
import { gamesList } from "../../api/games.ts";

export const useGamesList = (district: string, title: string) => {
  return useInfiniteQuery({
    queryKey: ["All Games List", district, title],
    queryFn: ({ pageParam = 1 }) => gamesList(district, title, pageParam),

    initialPageParam: 1,
    getNextPageParam: (page) => {
      const currentPage = page.data.current_index + 1;
      const lastPage = page.data.end_index;
      const hasNextPage = currentPage <= lastPage;

      return hasNextPage ? currentPage : null;
    },
  });
};
