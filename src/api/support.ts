import { InquiryDetailField, PrivateInquiryField } from "../interfaces/support"
import axiosUrl from "../utils/axios"

export const faqList = async (search?: string | undefined) => {
    try {
        const response = await axiosUrl.get(`/support/faq?search=${search}`)
        return response.data.data
    } catch {
        throw new Error
    }
}


export const addPrivateInquiry = async (data: PrivateInquiryField) => {
    try {
        const response = await axiosUrl.post(`support/anonymous-questions`, data)
        return response.data
    } catch {
        throw new Error
    }
}

export const privateInquiriesData = async (page: number) => {
    try {
        const response = await axiosUrl.get(`support/anonymous-questions?page=${page}`)
        return response.data
    } catch {
        throw new Error
    }
}

export const privateInquiryDetails = async (inquiryId: number, password: InquiryDetailField, setErrorStatus: (arg: number) => void) => {
    try {

        const response = await axiosUrl.post(`support/anonymous-questions/${inquiryId}`, password);
        return response.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {

        setErrorStatus(error.response.status);

        console.log(error.response.status)
    }
}

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

