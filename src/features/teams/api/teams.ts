import axiosUrl from "../../../utils/axios.ts";
import { TeamListResponse } from "../../../interfaces/team.ts";

export const getTeamsList = async (
  cursor: string | null,
  limit: number,
  lat?: number,
  lng?: number
): Promise<TeamListResponse["data"]> => {
  try {
    const params: Record<string, any> = { limit };
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
