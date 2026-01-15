import axios from "axios";

export const fetchPlaylist = async (PLAYLIST_ID: string, API_KEY: string) => {
    try {
        const res = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
            params: {
                part: "snippet,contentDetails",
                playlistId: PLAYLIST_ID,
                maxResults: 4,
                key: API_KEY,
            },
        });
        return res.data

    } catch (err) {
        console.error("YouTube API error:", err);
    }
};