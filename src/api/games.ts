import { STATUS_TRANSLATION } from "../constants/status.ts";
import axiosUrl from "../utils/axios.ts";

type StatusKey = keyof typeof STATUS_TRANSLATION;


export const getAllGames = async (
    startdate?: string,
    startime?: string,
    status?: StatusKey[]
) => {

    try {
        const queryParams = new URLSearchParams();

        if (startdate) queryParams.append("startdate", startdate);
        if (startime) queryParams.append("starttime", startime);
        status?.forEach(status => {
            const translatedStatus = STATUS_TRANSLATION[status];
            if (translatedStatus) {
                queryParams.append('game_status', translatedStatus); // Adds multiple game_status params
            }
        });


        const response = await axiosUrl.get(`/games/map?${queryParams.toString()}`);
        // const response = await axiosUrl.get(`/games/map`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch games data");
    }
};

export const getGameDetail = async (id: number) => {
    try {
        const response = await axiosUrl.get(`/games/${id}`)
        return response.data
    } catch {
        throw new Error
    }
}