import axiosUrl from "../../../utils/axios.ts";

export const gamesListOnly = async (
    game_status: string[],
    // province: string[],
    cursor: number | null,
    limit: number
) => {
    try {
        const response = await axiosUrl.get(`/games/list`, {
            params: {
                game_status,
                // province,
                cursor,
                limit
            },
            paramsSerializer: (params) => {
                const usp = new URLSearchParams();

                Object.entries(params).forEach(([key, value]) => {
                    if (Array.isArray(value) && value.length > 0) {
                        value.forEach((v) => usp.append(key, v));
                    } else if (value !== undefined && value !== null && value !== "") {
                        usp.append(key, String(value));
                    }
                });

                return usp.toString();
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
};


export const mapGamesList = async (
    startdate: string,
    starttime: string,
    game_status: string[],
    // province: string[]
) => {
    try {
        const response = await axiosUrl.get("/games/map", {
            params: {
                startdate,
                starttime,
                game_status,
                // province,
            },
            paramsSerializer: (params) => {
                const usp = new URLSearchParams();

                Object.entries(params).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        value.forEach((v) => usp.append(key, v)); // ✅ multiple keys
                    } else if (value !== undefined && value !== null) {
                        usp.append(key, String(value));
                    }
                });

                return usp.toString();
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
};


