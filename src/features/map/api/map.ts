import axiosUrl from "../../../utils/axios.ts";

export const fetchMapGames = async (
    startdate?: string,
    starttime?: string,
    game_status?: string
) => {
    try {
        const queryParams = new URLSearchParams();

        if (startdate) queryParams.append("startdate", startdate);
        if (starttime) queryParams.append("starttime", starttime);
        if (game_status) queryParams.append("game_status", game_status);

        const response = await axiosUrl.get(`/games/map?${queryParams.toString()}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching games in map:", error);
        throw error;
    }
};
