
import axiosUrl from "../../../utils/axios.ts"



export const getAllCourts = async (cursor: number | null, limit: number | null, province: string | null | undefined, search: string | null | undefined) => {
    try {
        const response = await axiosUrl.get(`/courts`, { params: { cursor, limit, province, search } })
        return response.data
    } catch {
        throw new Error
    }
}

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

