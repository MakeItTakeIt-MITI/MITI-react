import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllCourts } from "../../api/courts";

export const useAllCourts = (
  search?: string | null | undefined,
  province?: string | null | undefined
) => {
  return useInfiniteQuery({
    queryKey: ["All Courts Data", search, province],
    queryFn: ({ pageParam }) => getAllCourts(pageParam, 20, province, search),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      const data = lastPage?.data;
      if (!data) return undefined;
      return data.has_more ? data.page_last_cursor : undefined;
    },
    staleTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};
