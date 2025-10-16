import axios from "axios"


export const oAuthKakaoLogin = async (data: { access_token: string }) => {
    try {
        const accessToken = localStorage.getItem("accessToken")

        const res = await axios.post('https://api.makeittakeit.kr/auth/login/kakao', data, {
            headers: {
                "Content-Type": "application/json",
                ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
            },
            withCredentials: true,
        })

        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
