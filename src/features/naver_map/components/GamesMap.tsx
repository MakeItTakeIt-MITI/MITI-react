import { GameField } from "@/features/games/interface/games";
import { useMapCoordinatesStore } from "@/store/NaverMap/useMapCoordinatesStore";
import { useSelectedStore } from "@/store/NaverMap/useSelectedStore";
import { useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";

// Add global type for naver maps
declare global {
  interface Window {
    naver: any;
  }
}

const { naver } = window;

interface GamesMapProps {
  mapDataList: GameField[];
  geolocation: { lat: number; lon: number } | null;
  // handleCurrentGeoLocation: () => void;
}

function GamesMap({
  mapDataList,
  geolocation,
}: // handleCurrentGeoLocation,
GamesMapProps) {
  const {
    toggleSelected,
    setSelected,
    isSelected,
    setSelectedAddress,
    selectedAddress,
  } = useSelectedStore();

  const { coordinates, setCoordinates } = useMapCoordinatesStore();

  const markersRef = useRef<string[]>([]);

  useEffect(() => {
    if (!window.naver || !window.naver.maps) return;

    // * Render Naver Map UI *
    const map = new window.naver.maps.Map("games-list", {
      center: new window.naver.maps.LatLng(
        geolocation?.lat || coordinates.lat,
        geolocation?.lon || coordinates.long
      ),
      zoom: 13,
      scrollWheel: true,
    });

    // * Count Address Overlaps *
    const addressOverlapCount: Record<string, number> = {};
    mapDataList.forEach((game: GameField) => {
      const addr = game.court.address;
      addressOverlapCount[addr] = (addressOverlapCount[addr] || 0) + 1;
    });

    // * Create Markers for Each Game */
    mapDataList.forEach((game: GameField) => {
      const address = game.court.address;
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          game.court.latitude,
          game.court.longitude
        ),
        map,
        title: game.title,
      });
      const overlapped = addressOverlapCount[address] > 1;

      const iconContent = overlapped
        ? renderToString(
            <button
              type="button"
              style={{
                backgroundColor:
                  selectedAddress === game.court.address
                    ? "#A3F1F2"
                    : "#EBEBEB",
                border:
                  selectedAddress === game.court.address
                    ? "1px solid black"
                    : "#d4d4d4",
              }}
              className="relative text-[10px] font-bold w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center"
            >
              <span className="flex items-center gap-1">
                {game.fee !== 0
                  ? game.fee.toLocaleString("kr") + " 원"
                  : "무료"}
              </span>
              <span className="font-[300] text-[10px] text-[#737373]">
                / {game.starttime.slice(0, 5)}
              </span>
              <div
                style={{
                  backgroundColor:
                    selectedAddress === game.court.address
                      ? "#A3F1F2"
                      : "#EBEBEB",
                  border:
                    selectedAddress === game.court.address
                      ? "1px solid black"
                      : "#999",
                }}
                className="absolute -top-2.5 -right-2.5 rounded-full size-[1.25rem] flex items-center justify-center text-[10px] font-bold"
              >
                {addressOverlapCount[address]}
              </div>
            </button>
          )
        : renderToString(
            <button
              style={{
                backgroundColor:
                  selectedAddress === game.court.address
                    ? "#A3F1F2"
                    : "#EBEBEB",
                border:
                  selectedAddress === game.court.address
                    ? "1px solid black"
                    : "#d4d4d4",
              }}
              className="relative text-[10px] font-bold border border-[#d4d4d4] w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center"
            >
              <span className="flex items-center gap-1">
                {game.fee !== 0
                  ? game.fee.toLocaleString("kr") + " 원"
                  : "무료"}
              </span>
              <span className="font-[300] text-[10px] text-[#737373]">
                / {game.starttime.slice(0, 5)}
              </span>
            </button>
          );

      marker.setIcon({ content: iconContent });

      // * Marker Click Event to clear selection*/
      window.naver.maps.Event.addListener(map, "click", () => {
        setSelected(false);
        setSelectedAddress("");
      });

      // Marker click toggles selection
      window.naver.maps.Event.addListener(marker, "click", () => {
        if (!isSelected) {
          toggleSelected();
          setCoordinates(game.court.latitude, game.court.longitude);
          setSelectedAddress(game.court.address);
          map.setZoom(18, true);
          map.setCenter(
            new window.naver.maps.LatLng(
              game.court.latitude,
              game.court.longitude
            )
          );
        } else {
          setSelected(false);
          setSelectedAddress("");
        }
      });

      markersRef.current.push(marker);
    });
  }, [
    mapDataList,
    isSelected,
    selectedAddress,
    toggleSelected,
    setSelected,
    setCoordinates,
  ]);

  return (
    <div
      id="games-list"
      className="w-full md:w-[700px] sm:h-[241px] md:h-[450px] md:rounded-[20px]"
    />
  );
}

export default GamesMap;
