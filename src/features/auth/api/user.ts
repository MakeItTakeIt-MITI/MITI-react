import axios from "axios"
export const postDeleteAccount = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken")
        const res = await axios.delete('https://api.makeittakeit.kr/auth/withdraw', {
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