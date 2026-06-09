import { useQuery } from '@tanstack/react-query';
import { getTeamDetail } from '../../api/teams.ts';

export const useTeamDetail = (teamId: number) => {
  return useQuery({
    queryKey: ['teamDetail', teamId],
    queryFn: () => getTeamDetail(teamId),
    enabled: !isNaN(teamId),
  });
};
