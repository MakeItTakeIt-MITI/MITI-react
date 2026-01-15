import { useQuery } from "@tanstack/react-query";
import { fetchPlaylist } from "../api/youtube";

export const useYoutuBePlaylist = (playlistId: string, apiKey: string) => {
  return useQuery({
    queryKey: ["youtubePlaylist", playlistId],
    queryFn: () => fetchPlaylist(playlistId, apiKey),
  });
};
