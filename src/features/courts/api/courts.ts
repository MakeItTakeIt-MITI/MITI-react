
import axiosUrl from "../../../utils/axios.ts"



export const getAllCourts = async (cursor: number | null, limit: number | null, province: string | null | undefined) => {
    try {
        const response = await axiosUrl.get(`/courts?cursor=${cursor}&limit=${limit}`, { params: { province } })
        return response.data
    } catch {
        throw new Error
    }
}

export const getCourtsGamesList = async (courtId: number | null, page: number) => {
    try {
        const response = await axiosUrl.get(`/courts/${courtId}/games?page=${page}`)
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

