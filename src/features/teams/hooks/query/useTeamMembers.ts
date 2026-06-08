import { useQuery } from '@tanstack/react-query';
import { getTeamMembers } from '../../api/teams';

export const useTeamMembers = (teamId: number, status?: string[]) => {
  return useQuery({
    queryKey: ['teamMembers', teamId, status],
    queryFn: () => getTeamMembers(teamId, status),
    enabled: !isNaN(teamId),
  });
};
