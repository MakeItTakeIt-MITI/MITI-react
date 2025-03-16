import axiosUrl from "../../../utils/axios.ts";

export const fetchGamesList = async (
    district?: string,
    title?: string,
    page?: number
) => {
    try {
        const response = await axiosUrl.get("/games/list", {
            params: {
                district,
                title,
                page,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
};