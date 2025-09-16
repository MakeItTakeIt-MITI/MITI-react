import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "../../api/community";

export const useGetPostDetails = (id: number) => {
  return useQuery({
    queryKey: ["Posts Details", id],
    queryFn: () => getPostDetail(id),
  });
};
