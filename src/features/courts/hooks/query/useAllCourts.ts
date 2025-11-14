import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllCourts } from "../../api/courts";

export const useAllCourts = (province: string[] | null, search: string | null) => {
  // normalize + deterministic key
  const provinceKey = (province || [])
    .filter(Boolean)
    .map((p) => {
      try {
        return /%[0-9A-Fa-f]{2}/.test(p) ? decodeURIComponent(p) : p;
      } catch {
        return p;
      }
    })
    .sort()
    .join("|"); // e.g. "부산|서울"

  return useInfiniteQuery({
    queryKey: ["allCourts", provinceKey, search?.trim() || ""],
    queryFn: ({ pageParam }) =>
      getAllCourts(pageParam ?? null, 20, province && province.length ? province : null, search?.trim() || null),
    getNextPageParam: (lastPage) => {
      const data = lastPage?.data;
      if (!data) return undefined;
      return data.has_more ? data.page_last_cursor : undefined;
    },
    initialPageParam: null,
    enabled: true,
    keepPreviousData: true,
  });
};