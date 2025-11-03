import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/community";

export const useGetPosts = (search: string, category: string) => {
  return useInfiniteQuery({
    queryKey: ["Fetch All Posts List", search, category],
    queryFn: ({ pageParam }) => getPosts(search, category, pageParam, 20),
    getNextPageParam: (lastPage) => {
      const data = lastPage?.data;
      if (!data) return undefined;
      return data.has_more ? data.page_last_cursor : undefined;
    },
    initialPageParam: null,
  });
};
