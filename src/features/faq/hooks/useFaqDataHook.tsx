import { useQuery } from "@tanstack/react-query";
import { faqList } from "../api/faq.ts";

export const useFaqDataHook = (search?: string | undefined) => {
  return useQuery({
    queryKey: ["FAQ List", search],
    queryFn: () => faqList(search),
    staleTime: 5000,
  });
};
