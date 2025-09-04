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
    startdate: string,
    starttime: string,
    game_status: string[],
) => {
    try {
        const response = await axiosUrl.get("/games/map", {
            params: {
                startdate,
                starttime,
                game_status,
            },
            paramsSerializer: (params) => {
                const usp = new URLSearchParams();

                Object.entries(params).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        value.forEach((v) => usp.append(key, v)); // ✅ multiple keys
                    } else if (value !== undefined && value !== null) {
                        usp.append(key, String(value));
                    }
                });

                return usp.toString();
            },
        });

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