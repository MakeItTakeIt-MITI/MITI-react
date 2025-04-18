import axiosUrl from "../../../utils/axios.ts"

export const oAuthKakaoLogin = async (data: { access_token: string }) => {
    try {
        const res = await axiosUrl.post('/auth/login/kakao', data)
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}