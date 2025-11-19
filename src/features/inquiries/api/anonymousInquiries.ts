import axiosUrl from "../../../utils/axios"

export const getAnonymousInquiries = async (cursor: number | null, limit: number, search: string) => {
    try {
        const response = await axiosUrl.get(`/support/anonymous-questions`, {
            params: {
                cursor: cursor,
                limit,
                search,
            },
        });
        return response.data
    } catch (error) {
        console.error("Error fetching anonymous inquiries:", error);
        throw error;
    }

}