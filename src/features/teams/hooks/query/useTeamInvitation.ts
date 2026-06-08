import { useQuery, useMutation } from '@tanstack/react-query';
import { getTeamInvitationDetail, acceptTeamInvitation } from '../../api/teams';

export const useTeamInvitationDetail = (token: string) => {
  return useQuery({
    queryKey: ['teamInvitationDetail', token],
    queryFn: () => getTeamInvitationDetail(token),
    enabled: !!token,
  });
};

export const useAcceptTeamInvitation = () => {
  return useMutation({
    mutationFn: (token: string) => acceptTeamInvitation(token),
  });
};
