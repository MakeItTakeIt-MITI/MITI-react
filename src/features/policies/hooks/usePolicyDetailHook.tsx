import { useQuery } from "@tanstack/react-query";
import { policyDetailsData } from "../api/policies";

interface PolicyDetailProps {
  policyId: number;
}

export const usePolicyDetailHook = ({ policyId }: PolicyDetailProps) => {
  return useQuery({
    queryKey: ["Policy details", policyId],
    queryFn: () => policyDetailsData(policyId),
  });
};
