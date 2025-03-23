import { STATUS_TRANSLATION } from "../../../constants/status.ts";
import axiosUrl from "../../../utils/axios.ts";

type StatusKey = keyof typeof STATUS_TRANSLATION;


export const fetchMapGamesList = async (
    startdate: string,
    starttime: string,
    game_status: StatusKey[]
) => {
    try {

        const queryParams = new URLSearchParams();

        if (startdate) queryParams.append("startdate", startdate);
        if (starttime) queryParams.append("starttime", starttime);

        game_status?.forEach(statusKey => {
            const translatedStatus = STATUS_TRANSLATION[statusKey];
            if (translatedStatus) {
                queryParams.append("game_status", translatedStatus);
            }
        });

        const response = await axiosUrl.get(`/games/map?${queryParams.toString()}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
}