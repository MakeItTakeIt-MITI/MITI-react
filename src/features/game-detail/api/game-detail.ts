import axiosUrl from "../../../utils/axios"

export const getGameDetail = async (id: string | undefined) => {
    try {
        const response = await axiosUrl.get(`/games/${id}`)
        return response.data
    } catch {
        throw new Error
    }
}