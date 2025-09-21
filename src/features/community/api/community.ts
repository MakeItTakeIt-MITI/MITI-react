import axiosUrl from "../../../utils/axios"

export const getPosts = async (search: string, category: string) => {
    try {
        const response = await axiosUrl.get(`posts?search=${search}&category=${category}`)
        return response.data
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
}

export const getPopularTopics = async () => {
    try {
        const response = await axiosUrl.get(`/posts/popular-search-word`)
        return response.data
    } catch (error) {
        console.error("Error fetching popular topics:", error);
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

export const getPostComments = async (id: number) => {
    try {
        const response = await axiosUrl.get(`posts/${id}/comments`)
        return response.data
    } catch (error) {
        console.error("Error fetching post detail:", error);
        throw error;
    }
}