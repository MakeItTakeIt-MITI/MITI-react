import { useQuery } from "@tanstack/react-query";
import { privateInquiriesData } from "../../../api/support.ts";

export const useInquiriesDataHook = (page: number) => {
  return useQuery({
    queryKey: ["Private quiries list", page],
    queryFn: () => privateInquiriesData(page),
  });
};
