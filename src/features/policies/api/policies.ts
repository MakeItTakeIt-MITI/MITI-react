import axiosUrl from "../../../utils/axios"



export const policesData = async () => {
    try {
        const response = await axiosUrl.get(`/policies`)
        return response.data
    } catch {
        throw new Error
    }
}

export const policyDetailsData = async (id: number) => {
    try {
        const response = await axiosUrl.get(`/policies/${id}`)
        return response.data
    } catch {
        throw new Error
    }
}

