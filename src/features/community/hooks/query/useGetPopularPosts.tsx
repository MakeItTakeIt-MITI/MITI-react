import { useQuery } from "@tanstack/react-query";
import { getPopularPosts } from "../../api/community";

export const useGetPopularPosts = () => {
  return useQuery({
    queryKey: ["Get Popular Posts"],
    queryFn: () => getPopularPosts(),
  });
};
