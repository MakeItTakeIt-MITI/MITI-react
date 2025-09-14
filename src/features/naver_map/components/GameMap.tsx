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

export default function GameMap({
  gamesMapData,
}: {
  gamesMapData: GameField[];
}) {
  const { toggleSelected, isSelected, setSelectedAddress, selectedAddress } =
    useSelectedStore();
  const { coordinates, setCoordinates } = useMapCoordinatesStore();

  // keep the map instance and markers in refs
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  // initialize map only once
  useEffect(() => {
    if (!window.naver) return;
    if (!mapRef.current) {
      mapRef.current = new window.naver.maps.Map("games-list", {
        center: new window.naver.maps.LatLng(coordinates.lat, coordinates.long),
        zoom: 15,
        scrollWheel: true,
        disableKineticPan: false,
      });
    }
  }, []);

  // move center when coordinates change
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setCenter(
        new window.naver.maps.LatLng(coordinates.lat, coordinates.long)
      );
    }
  }, [coordinates]);

  // update markers when gamesMapData changes
  useEffect(() => {
    if (!window.naver || !mapRef.current) return;

    const map = mapRef.current;

    // clear previous markers
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    // compute address overlaps
    const addressOverlapCount: Record<string, number> = {};
    gamesMapData?.forEach((game: GameField) => {
      const addr = game.court.address;
      addressOverlapCount[addr] = (addressOverlapCount[addr] || 0) + 1;
    });

    gamesMapData?.forEach((game: GameField) => {
      const address = game.court.address;

      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          game.court.latitude,
          game.court.longitude
        ),
        zoom: 16,
        map: map,
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
              className="relative text-[10px] font-bold  w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center"
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
                className="absolute -top-2.5 -right-2.5 rounded-full size-[1.25rem] 
                     text-[#5C5C5C]  flex items-center 
                     justify-center text-[10px] font-bold "
              >
                {addressOverlapCount[address]}
              </div>
            </button>
          )
        : renderToString(
            <a
              href={`/games/${game.id}`}
              style={{
                backgroundColor: "#EBEBEB",
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
            </a>
          );

      marker.setIcon({ content: iconContent });

      // clicking marker just updates store + map center
      window.naver.maps.Event.addListener(marker, "click", () => {
        toggleSelected();
        setCoordinates(game.court.latitude, game.court.longitude);
        setSelectedAddress(game.court.address);
        console.log(selectedAddress);
      });

      markersRef.current.push(marker);
    });
  }, [gamesMapData, isSelected, toggleSelected, setCoordinates]);

  return <div id="games-list" className="w-[700px] h-[450px] rounded-[20px]" />;
}
