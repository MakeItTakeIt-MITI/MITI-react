import { useQuery } from "@tanstack/react-query";
import { getPopularTopics } from "../../api/community";

export const useGetPopularTopics = () => {
  return useQuery({
    queryKey: ["Get Popular Topics"],
    queryFn: () => getPopularTopics(),
  });
};
