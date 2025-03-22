import axiosUrl from "../../../utils/axios.ts";




export const fetchGamesList = async (
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


export const fetchMapGamesList = async (
    startdate: string,
    starttime: string,
    game_status: string[]
) => {
    try {
        const params = {
            startdate: startdate,
            starttime: starttime,
            game_status: game_status,
        };


        const response = await axiosUrl.get(`/games/map`, { params });
        // 
        return response.data
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
}