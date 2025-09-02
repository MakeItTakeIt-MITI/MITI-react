import axiosUrl from "../../../utils/axios.ts";

export const gamesList = async (
    district: string,
    title: string,
    pageParam: number | null,
) => {
    try {

        const response = await axiosUrl.get(`/games/list?district=${district}&title=${title}&page=${pageParam}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
};


export const mapGamesList = async (
    // startdate: string,
    // starttime: string,
    // game_status: string,
) => {
    try {

        const response = await axiosUrl.get(`/games/map?startdate=2025-09-03&starttime=17:00&game_status=closed&game_status=open&game_status=canceled&game_status=completed`);
        return response.data;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
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