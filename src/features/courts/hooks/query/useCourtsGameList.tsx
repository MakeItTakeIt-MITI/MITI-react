import { useInfiniteQuery } from "@tanstack/react-query";
import { getCourtsGamesList } from "../../api/courts";

const useCourtsGameList = (courtId: number) => {
  return useInfiniteQuery({
    queryKey: ["Available Games in for court ID", courtId],
    queryFn: ({ pageParam }) => getCourtsGamesList(courtId, pageParam, 20),

    getNextPageParam: (lastPage) => {
      const data = lastPage?.data;
      if (!data) return undefined;
      return data.has_more ? data.page_last_cursor : undefined;
    },
    initialPageParam: null,
    staleTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};

export default useCourtsGameList;
