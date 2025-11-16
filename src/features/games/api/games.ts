import qs from 'qs';
import axiosUrl from "../../../utils/axios.ts";

export const gamesListOnly = async (
    startdate: string,
    starttime: string,
    game_status: string[],
    province: string[],
    search: string | null,
    cursor: number | null,
    limit: number
) => {
    try {
        const params = { startdate, starttime, game_status, province, search, cursor, limit };

        const cleanParams = Object.fromEntries(
            Object.entries(params).filter(([_, v]) => {
                if (v == null) return false;
                if (Array.isArray(v) && v.length === 0) return false;
                return true;
            })
        );


        const response = await axiosUrl.get(`/games/list`, {
            params: cleanParams,
            paramsSerializer: (params) =>
                qs.stringify(params, { arrayFormat: "repeat", encode: true }),

        });
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
    province: string[]
) => {
    try {
        const params = { startdate, starttime, game_status, province, };

        const cleanParams = Object.fromEntries(
            Object.entries(params).filter(([_, v]) => {
                if (v == null) return false;
                if (Array.isArray(v) && v.length === 0) return false;
                return true;
            })
        );

        const response = await axiosUrl.get(`/games/map`, {
            params: cleanParams,
            paramsSerializer: (params) =>
                qs.stringify(params, { arrayFormat: "repeat", encode: true }),

        });
        return response.data;

    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
};


