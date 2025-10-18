import axiosUrl from "../../../utils/axios"

export const fetchAnonymousInquiries = async (pageParam: number) => {
    try {
        const response = await axiosUrl.get(`/support/anonymous-questions?page=${pageParam}`);
        return response.data
    } catch (error) {
        console.error("Error fetching anonymous inquiries:", error);
        throw error;
    }

}