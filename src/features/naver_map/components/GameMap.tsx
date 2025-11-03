import { useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";
import { GameField } from "../../games/interface/games.ts";
import { useSelectedStore } from "../../../store/NaverMap/useSelectedStore.tsx";
import { useMapCoordinatesStore } from "../../../store/NaverMap/useMapCoordinatesStore.tsx";

// Current location button images
// import findMylocationDeactivated from "../../../assets/v1.3/map/location_deactivated.png";
// import findMylocationActivated from "../../../assets/v1.3/map/location_activated.png";
// import findMylocationLoading from "../../../assets/v1.3/map/marker-loading.gif";

// Add global type for naver maps
declare global {
  interface Window {
    naver: any;
  }
}

export default function GameMap({ mapDataList }: { mapDataList: GameField[] }) {
  const {
    toggleSelected,
    setSelected,
    isSelected,
    setSelectedAddress,
    selectedAddress,
  } = useSelectedStore();
  const { coordinates, setCoordinates } = useMapCoordinatesStore();

  // const [isLocating, setIsLocating] = useState(false);
  // const [isLocationActive, setIsLocationActive] = useState(false);

  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const customControlRef = useRef<any>(null);

  // Create map & custom control robustly (create control once, update HTML on state changes)
  useEffect(() => {
    if (!window?.naver || !window.naver.maps || !window.naver.maps.LatLng)
      return;

    // create map once
    if (!mapRef.current) {
      mapRef.current = new window.naver.maps.Map("games-list", {
        center: new window.naver.maps.LatLng(coordinates.lat, coordinates.long),
        zoom: 13,
        scrollWheel: true,
        disableKineticPan: false,
      });
    }
    const map = mapRef.current;

    // const getButtonHTML = () => {
    //   if (isLocating) {
    //     return `<button class='h-[44px] w-[44px] flex items-center justify-center'>
    //               <img src="${findMylocationLoading}" alt="Loading" class="h-[28px] w-[28px]" />
    //             </button>`;
    //   }
    //   if (isLocationActive) {
    //     return `<button class='h-[44px] w-[44px] flex items-center justify-center'>
    //               <img src="${findMylocationActivated}" alt="Active" class="" />
    //             </button>`;
    //   }
    //   return `<button class='h-[44px] w-[44px] flex items-center justify-center'>
    //             <img src="${findMylocationDeactivated}" alt="Location" class="" />
    //           </button>`;
    // };

    // create control only once
    // if (!customControlRef.current) {
    //   const control = new window.naver.maps.CustomControl(getButtonHTML(), {
    //     position: window.naver.maps.Position.TOP_LEFT,
    //   });
    //   control.setMap(map);

    //   // attach click handler once
    //   try {
    //     window.naver.maps.Event.addDOMListener(
    //       control.getElement(),
    //       "click",
    //       () => {
    //         if (isLocating) return;
    //         setIsLocating(true);
    //         if (navigator.geolocation) {
    //           navigator.geolocation.getCurrentPosition(
    //             (pos) => {
    //               const { latitude, longitude } = pos.coords;
    //               setCoordinates(latitude, longitude);
    //               setTimeout(() => {
    //                 setIsLocating(false);
    //                 setIsLocationActive(true);
    //                 map.panTo(
    //                   new window.naver.maps.LatLng(latitude, longitude)
    //                 );
    //                 // set zoom to 14 when the control is clicked
    //                 try {
    //                   map.setZoom(14, true);
    //                 } catch {}
    //                 setTimeout(() => setIsLocationActive(false), 1800);
    //               }, 700);
    //             },
    //             () => {
    //               setIsLocating(false);
    //             },
    //             { enableHighAccuracy: true }
    //           );
    //         } else {
    //           setIsLocating(false);
    //         }
    //       }
    //     );
    //   } catch {
    //     /* ignore DOM listener attach failures */
    //   }

    //   // nudge wrapper to flush-left if needed
    //   try {
    //     const el = control.getElement?.();
    //     if (el?.parentElement) {
    //       el.parentElement.style.left = "0px";
    //       el.parentElement.style.marginLeft = "0px";
    //     }
    //   } catch {}

    //   customControlRef.current = control;
    // } else {
    //   // update control HTML instead of recreating
    //   try {
    //     const el = customControlRef.current.getElement?.();
    //     if (el) el.innerHTML = getButtonHTML();
    //   } catch {
    //     /* ignore update errors */
    //   }
    // }

    // keep center in sync
    try {
      map.setCenter(
        new window.naver.maps.LatLng(coordinates.lat, coordinates.long)
      );
    } catch {}

    return () => {
      if (customControlRef.current) {
        try {
          customControlRef.current.setMap(null);
        } catch {}
        customControlRef.current = null;
      }
    };
  }, [
    coordinates.lat,
    coordinates.long,
    // isLocating,
    // isLocationActive,
    setCoordinates,
  ]);

  // Update markers when mapDataList changes
  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];

    const addressOverlapCount: Record<string, number> = {};
    mapDataList.forEach((game: GameField) => {
      const addr = game.court.address;
      addressOverlapCount[addr] = (addressOverlapCount[addr] || 0) + 1;
    });

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

      // Map click clears selection
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
