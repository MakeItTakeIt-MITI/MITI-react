import { useInfiniteQuery } from "@tanstack/react-query";
import { getCourtsGamesList } from "../../api/courts";

const useCourtsGameList = (courtId: number) => {
  return useInfiniteQuery({
    queryKey: ["Courts Games List", courtId],
    queryFn: ({ pageParam = 1 }) => getCourtsGamesList(courtId, pageParam),

    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page_last_cursor, has_more } = lastPage.data;

      return has_more ? page_last_cursor : undefined;
    },
    staleTime: 0,
  });
};

export default useCourtsGameList;
