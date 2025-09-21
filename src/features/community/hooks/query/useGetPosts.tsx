import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/community";

export const useGetPosts = (search: string, category: string) => {
  return useQuery({
    queryKey: ["Get Posts Data", search, category],
    queryFn: () => getPosts(search, category),
  });
};
