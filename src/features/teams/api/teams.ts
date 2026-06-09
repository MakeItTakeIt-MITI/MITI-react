import axiosUrl from "../../../utils/axios.ts";
import {
  TeamListResponse,
  TeamDetailResponse,
  TeamMembersResponse,
  TeamInvitationResponse,
  AcceptInvitationResponse,
} from "../../../interfaces/team.ts";

export const getTeamsList = async (
  cursor: string | null,
  limit: number,
  lat?: number,
  lng?: number
): Promise<TeamListResponse["data"]> => {
  try {
    const params: Record<string, string | number> = { limit };
    if (cursor) params.cursor = cursor;
    if (lat !== undefined && lng !== undefined) {
      params.lat = lat;
      params.lng = lng;
    }

    const response = await axiosUrl.get<TeamListResponse>("/teams", { params });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching teams list:", error);
    throw error;
  }
};

export const getTeamDetail = async (teamId: number): Promise<TeamDetailResponse["data"]> => {
  try {
    const response = await axiosUrl.get<TeamDetailResponse>(`/teams/${teamId}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching team detail (ID: ${teamId}):`, error);
    throw error;
  }
};

export const getTeamMembers = async (
  teamId: number,
  status?: string[]
): Promise<TeamMembersResponse["data"]> => {
  try {
    const params = status ? { status } : undefined;
    const response = await axiosUrl.get<TeamMembersResponse>(`/teams/${teamId}/members`, { params });
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching team members (ID: ${teamId}):`, error);
    throw error;
  }
};

export const getTeamInvitationDetail = async (
  token: string
): Promise<TeamInvitationResponse["data"]> => {
  try {
    const response = await axiosUrl.get<TeamInvitationResponse>(
      `/teams/invitations/${token}`
    );
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching team invitation detail (Token: ${token}):`, error);
    throw error;
  }
};

export const acceptTeamInvitation = async (
  token: string
): Promise<AcceptInvitationResponse["data"]> => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axiosUrl.post<AcceptInvitationResponse>(
      `/teams/invitations/${token}/accept`,
      {},
      {
        headers: {
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(`Error accepting team invitation (Token: ${token}):`, error);
    throw error;
  }
};


