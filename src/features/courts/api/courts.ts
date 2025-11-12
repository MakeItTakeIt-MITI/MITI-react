
import axiosUrl from "../../../utils/axios.ts"


export const getAllCourts = async (
    cursor: number | null,
    limit: number | null,
    province: string[] | null,
    search: string | null
) => {
    try {
        const response = await axiosUrl.get(`/courts`, {
            params: { cursor, limit, search, province: province },
            paramsSerializer: (params) => {
                const usp = new URLSearchParams();
                if (params.province && Array.isArray(params.province)) {
                    params.province.forEach((p: string) => usp.append("province", p));
                }

                return usp.toString();
            },
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

