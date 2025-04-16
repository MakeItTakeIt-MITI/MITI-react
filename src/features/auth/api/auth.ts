import axiosUrl from "../../../utils/axios.ts"
import { EmailLoginField } from "../interface/auth.ts"
export const postEmailLogin = async (data: EmailLoginField) => {
    try {
        const res = await axiosUrl.post("auth/login/email", data);
        return res.data;
    } catch (error) {
        console.log(error)
        throw error
    }
};