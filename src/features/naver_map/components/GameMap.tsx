import { useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";
import { GameField } from "../../games/interface/games.ts";
import { useSelectedStore } from "../../../store/NaverMap/useSelectedStore.tsx";
import { useMapCoordinatesStore } from "../../../store/NaverMap/useMapCoordinatesStore.tsx";

// Add global type for naver maps
declare global {
  interface Window {
    naver: any;
  }
}

interface GameMapProps {
  mapDataList: GameField[];
  geolocation: { lat: number; lon: number } | null;
  handleCurrentGeoLocation: () => void;
}

export default function GameMap({
  mapDataList,
  geolocation,
  handleCurrentGeoLocation,
}: GameMapProps) {
  const {
    toggleSelected,
    setSelected,
    isSelected,
    setSelectedAddress,
    selectedAddress,
  } = useSelectedStore();
  const { coordinates, setCoordinates } = useMapCoordinatesStore();

  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (!window?.naver || !window.naver.maps || !window.naver.maps.LatLng)
      return;

    console.log(geolocation?.lat, geolocation?.lon);

    // create map once
    if (!mapRef.current) {
      mapRef.current = new window.naver.maps.Map("games-list", {
        center: new window.naver.maps.LatLng(
          geolocation?.lat || coordinates.lat,
          geolocation?.lon || coordinates.long
        ),
        zoom: 14,
        scrollWheel: true,
        disableKineticPan: false,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      });
    }
    const map = mapRef.current;

    // update map center
    try {
      map.setCenter(
        new window.naver.maps.LatLng(coordinates.lat, coordinates.long)
      );
    } catch {}

    return () => {};
  }, [coordinates.lat, coordinates.long, setCoordinates]);

  // Update markers when mapDataList changes
  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];

    const addressOverlapCount: Record<string, number> = {};
    mapDataList.forEach((game: GameField) => {
      const addr = game.address;
      addressOverlapCount[addr] = (addressOverlapCount[addr] || 0) + 1;
    });

    mapDataList.forEach((game: GameField) => {
      const address = game.address;
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(game.latitude, game.longitude),
        map,
        title: game.title,
      });

      const overlapped = addressOverlapCount[address] > 1;

      `<button click=${handleCurrentGeoLocation}></button>`;

      const iconContent = overlapped
        ? renderToString(
            <button
              type="button"
              style={{
                backgroundColor:
                  selectedAddress === game.address ? "#A3F1F2" : "#EBEBEB",
                border:
                  selectedAddress === game.address
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
                    selectedAddress === game.address ? "#A3F1F2" : "#EBEBEB",
                  border:
                    selectedAddress === game.address
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
                  selectedAddress === game.address ? "#A3F1F2" : "#EBEBEB",
                border:
                  selectedAddress === game.address
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

      // Map click clears selection
      window.naver.maps.Event.addListener(map, "click", () => {
        setSelected(false);
        setSelectedAddress("");
      });

      // Marker click toggles selection
      window.naver.maps.Event.addListener(marker, "click", () => {
        if (!isSelected) {
          toggleSelected();
          setCoordinates(game.latitude, game.longitude);
          setSelectedAddress(game.address);
          map.setZoom(18, true);
          map.setCenter(
            new window.naver.maps.LatLng(game.latitude, game.longitude)
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
