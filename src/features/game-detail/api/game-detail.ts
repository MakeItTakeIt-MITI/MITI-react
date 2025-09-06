import axiosUrl from "../../../utils/axios"

export const getGameDetail = async (id: string) => {
    try {
        const response = await axiosUrl.get(`/games/${id}`)
        return response.data
    } catch {
        throw new Error
    }
}