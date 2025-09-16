import axiosUrl from "../../../utils/axios"

export const getPosts = async (search: string) => {
    try {
        const response = await axiosUrl.get(`posts?search=${search}`)
        return response.data
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
}

export const getPostDetail = async (id: number) => {
    try {
        const response = await axiosUrl.get(`posts/${id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching post detail:", error);
        throw error;
    }
}