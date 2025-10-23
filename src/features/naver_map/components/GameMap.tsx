import { useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";
import { GameField } from "../../games/interface/games.ts";
import { useSelectedStore } from "../../../store/NaverMap/useSelectedStore.tsx";
import { useMapCoordinatesStore } from "../../../store/NaverMap/useMapCoordinatesStore.tsx";

// Current location button
import findMylocationDeactivated from "../../../assets/v1.3/map/location_deactivated.png";
import findMylocationActivated from "../../../assets/v1.3/map/location_activated.png";

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
  const {
    toggleSelected,
    setSelected,
    isSelected,
    setSelectedAddress,
    selectedAddress,
  } = useSelectedStore();
  const { coordinates, setCoordinates } = useMapCoordinatesStore();

  // keep the map instance and markers in refs
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  // initialize map only once
  useEffect(() => {
    if (!window.naver || !window.naver.maps || !window.naver.maps.LatLng) return;
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
    if (mapRef.current && window.naver && window.naver.maps && window.naver.maps.LatLng) {
      mapRef.current.setCenter(
        new window.naver.maps.LatLng(coordinates.lat, coordinates.long)
      );
    }



  }, [coordinates]);

  // update markers when gamesMapData changes
  useEffect(() => {
    if (!window.naver || !window.naver.maps || !window.naver.maps.LatLng || !mapRef.current) return;

    const map = mapRef.current;


       // Find my Location Button UI and event
    // const locationBtnHtml = `
    //   <button type="button" id="find-my-location-btn" 
    //           style=" cursor: pointer; display: flex; align-items: center; justify-content: center;">
    //     <img 
    //     style="width:24px height 24px"
    //     src="${findMylocationDeactivated}" alt="Find My Location" style="width: 24px; height: 24px;" />
    //   </button>
    // `;
    
    // const customControl = new window.naver.maps.CustomControl(locationBtnHtml, {
    //   position: window.naver.maps.Position.TOP_LEFT
    // });
    // customControl.setMap(map);

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
        if (!isSelected) {
          toggleSelected();
          setCoordinates(game.court.latitude, game.court.longitude);
          setSelectedAddress(game.court.address);
        } else {
          setSelected(false);
          setSelectedAddress("");
        }
      });

      markersRef.current.push(marker);

    


    });

   



  }, [
    gamesMapData,
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
