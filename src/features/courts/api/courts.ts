import qs from "qs";

import axiosUrl from "../../../utils/axios.ts"


export const getAllCourts = async (
    cursor: number | null,
    limit: number | null,
    province: string[] | null,
    search: string | null | undefined
) => {
    try {
        const params = { cursor, limit, search, province };

        const cleanParams = Object.fromEntries(
            Object.entries(params).filter(([_, v]) => {
                if (v == null) return false;
                if (Array.isArray(v) && v.length === 0) return false;
                if (typeof v === "string" && v.trim() === "") return false;
                return true;
            })
        );

        const response = await axiosUrl.get("/courts", {
            params: cleanParams,
            paramsSerializer: (params) =>
                qs.stringify(params, { arrayFormat: "repeat", encode: true }),
        });

        return response.data;
    } catch (err) {
        throw new Error("Failed to fetch courts");
    }
};


export const getCourtsGamesList = async (courtId: number | null, cursor: number | null, limit: number | null) => {
    try {
        const response = await axiosUrl.get(`/courts/${courtId}/games`,
            { params: { cursor, limit } })
        return response.data
    } catch {
        throw new Error
    }
}

export const getCourtDetail = async (courtId: number) => {
    try {
        const response = await axiosUrl.get(`/courts/${courtId}`)
        return response.data
    } catch {
        throw new Error
    }
}

