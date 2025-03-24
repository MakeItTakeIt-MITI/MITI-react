import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchGamesList } from "../api/games.ts";

export const useGamesList = (district: string, title: string) => {
  return useInfiniteQuery({
    queryKey: ["v1.2 Games List", district, title],
    queryFn: ({ pageParam = 1 }) => fetchGamesList(district, title, pageParam),

    initialPageParam: 1,
    getNextPageParam: (page) => {
      const currentPage = page.data.current_index + 1;
      const lastPage = page.data.end_index;
      const hasNextPage = currentPage <= lastPage;

      return hasNextPage ? currentPage : null;
    },
  });
};
