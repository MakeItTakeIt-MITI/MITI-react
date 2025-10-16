import { useQuery } from "@tanstack/react-query";
import { getCourtDetail } from "../api/courts.ts";

export const useCourtDetailData = ({ courtId }: { courtId: number }) => {
  return useQuery({
    queryKey: ["court detail", courtId],
    queryFn: () => getCourtDetail(courtId),
  });
};
