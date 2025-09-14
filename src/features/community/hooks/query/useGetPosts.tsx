import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/community";

export const useGetPosts = (search: string) => {
  return useQuery({
    queryKey: ["Posts", search],
    queryFn: () => getPosts(search),
  });
};
