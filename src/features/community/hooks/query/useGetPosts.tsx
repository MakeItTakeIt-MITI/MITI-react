import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/community";

export const useGetPosts = (search: string, category: string) => {
  return useQuery({
    queryKey: ["Fetch All Posts List", search, category],
    queryFn: () => getPosts(search, category),
  });
};
