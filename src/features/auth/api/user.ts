import axiosUrl from "../../../utils/axios.ts"

export const postDeleteAccount = async () => {
    try {
        const res = await axiosUrl.delete('/auth/withdraw')
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}