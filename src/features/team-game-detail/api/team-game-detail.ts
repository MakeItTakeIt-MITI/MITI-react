import axiosUrl from "../../../utils/axios.ts";

export const getTeamGameDetail = async (id: string | undefined) => {
    try {
        const response = await axiosUrl.get(`/team-games/${id}`);
        return response.data;
    } catch {
        throw new Error();
    }
};
