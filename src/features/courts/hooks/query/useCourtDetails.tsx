import { useQuery } from "@tanstack/react-query";
import { getCourtDetail } from "../../api/courts";

export default function useCourtDetails(courtId: number) {
  return useQuery({
    queryKey: ["courtDetails", courtId],
    queryFn: () => getCourtDetail(courtId),
  });
}
