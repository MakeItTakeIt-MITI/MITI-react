import { PrivateInquiryField } from "../interfaces/support"
import axiosUrl from "../utils/axios"

export const faqList = async (search?: string | undefined) => {
    try {
        const response = await axiosUrl.get(`/support/faq?search=${search}`)
        return response.data.data
    } catch {
        throw new Error
    }
}


export const privateInquiry = async (data: PrivateInquiryField) => {
    try {
        const response = await axiosUrl.post(`support/anonymous-questions`, data)
        return response.data
    } catch {
        throw new Error
    }
}

export const privateInquiriesData = async (page: number) => {
    try {
        const response = await axiosUrl.get(`support/anonymous-questions?=${page}`)
        return response.data
    } catch {
        throw new Error
    }
}

export const serviceTermsData = async () => {
    try {
        const response = await axiosUrl.get(`/support/guide`)
        return response.data
    } catch {
        throw new Error
    }
}
