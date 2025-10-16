import axios from "axios";
import { EmailLoginField } from "../interface/auth.ts"


export const postEmailLogin = async (data: EmailLoginField) => {
    try {
        const res = await axios.post("https://api.makeittakeit.kr/auth/login/email", data, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        console.log(error)
        throw error
    }
};