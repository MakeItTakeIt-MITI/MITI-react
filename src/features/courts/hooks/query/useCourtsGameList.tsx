import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCourtsGamesList } from "../../api/courts";

const useCourtsGameList = (courtId: number) => {
  return useInfiniteQuery({
    queryKey: ["Courts Games List", courtId],
    queryFn: ({ pageParam = 1 }) => getCourtsGamesList(courtId, pageParam),

    initialPageParam: 1,
    getNextPageParam: (page) => {
      const currentPage = page.data.current_index + 1;
      const lastPage = page.data.end_index;
      const hasNextPage = currentPage <= lastPage;

      return hasNextPage ? currentPage : null;
    },
  });
};

export default useCourtsGameList;
