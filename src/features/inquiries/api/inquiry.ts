import { InquiryDetailField, PrivateInquiryField } from "../../../interfaces/support"
import axiosUrl from "../../../utils/axios"

export const addPrivateInquiry = async (data: PrivateInquiryField) => {
    try {
        const response = await axiosUrl.post(`support/anonymous-questions`, data)
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