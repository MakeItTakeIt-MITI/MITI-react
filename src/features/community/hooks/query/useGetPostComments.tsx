import { useQuery } from "@tanstack/react-query";
import { getPostComments } from "../../api/community";

export const useGetPostComments = (id: number) => {
  return useQuery({
    queryKey: ["Posts Comments", id],
    queryFn: () => getPostComments(id),
  });
};
