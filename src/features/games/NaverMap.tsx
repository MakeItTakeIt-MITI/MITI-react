/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { AllGamesProps } from "../../interfaces/games.ts";
import current_marker from "../../assets/v11/current_pin.svg";
import selected_marker from "../../assets/v11/current_pin_selected.svg";
import marker_loading from "../../assets/v11/marker-loading.gif";
import { setGeolocation } from "../common/naver/map-controls.ts";

declare global {
  interface Window {
    naver: any;
  }
}

if (!window.naver) {
  console.error("Error in loading Naver Maps");
}
const { naver } = window;

interface NaverMapProps extends AllGamesProps {
  handleSetSelected?: () => void;
  setSelectedAddress: (arg: string) => void;
  setIsAddressSelected: (arg: boolean) => void;
  isAddressSelected?: boolean;
  latitude?: string | null;
  longitude?: string | null;
  isGameCardSelected?: boolean;
  gameId?: number;
}

const NaverMap = ({
  allGamesData,
  setSelectedAddress,
  setIsAddressSelected,
  latitude,
  longitude,
  isGameCardSelected,
  gameId,
}: NaverMapProps) => {
  // const { latitude, longitude } = useLatLongStore();
  const [geoLatitude, setGeoLatitude] = useState<null | number>(null);
  const [geoLongitude, setGeoLongtitude] = useState<null | number>(null);

  const addressesList: string[] = [];
  if (allGamesData && Array.isArray(allGamesData)) {
    allGamesData?.forEach((game) => {
      addressesList.push(game.court.address);
    });
  }

  useEffect(() => {
    const naverMap = new naver.maps.Map("games-map", {
      center: new naver.maps.LatLng(37.554722, 126.972778),
      zoom: 14,
      scrollWheel: true,
      disableKineticPan: false,
      // tileDuration: 700,
    });

    // 지도 이동 이벤트
    if (latitude !== null && longitude !== null) {
      const location = new naver.maps.LatLng(latitude, longitude);
      naverMap.setCenter(location);
    }

    // 다중 마커 표시
    let selectedMarker: any | null = null;

    for (let index = 0; index < allGamesData?.length; index++) {
      const game = allGamesData[index];

      const filteredAddresses = addressesList.filter(
        (address) => address === game.court.address
      );

      const markerCount = filteredAddresses.length;

      const markerHTML = `
      <a href="games/${
        game.id
      }" id="elem nt-${index}"  class="relative text-[12px] font-bold border border-[#d4d4d4]  bg-[#f5f5f5] w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center">
           <span>${game.fee.toLocaleString("ko-KR", {
             style: "currency",
             currency: "KRW",
           })}</span>
          <span class="font-[300] text-[10px] text-[#737373]">/ ${game.starttime.slice(
            0,
            5
          )}</span>
      </a>`;

      const overlappedMarkerHTML = `
      <button key=${
        game.id
      } id="element-${index}"  type="button" " class="cursor-pointer relative text-[12px] font-bold border border-[#d4d4d4]  bg-[#f5f5f5] w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center">
          <span>${game.fee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}</span>
          <span class="font-[300] text-[10px] text-[#737373]">/ ${game.starttime.slice(
            0,
            5
          )}</span>
  
          ${
            filteredAddresses?.length >= 2
              ? `<div class="absolute -top-2.5 -right-2.5 rounded-full size-[1.25rem] bg-[#404040] 
               text-[#fff] flex items-center justify-center text-[10px] font-bold">
               ${markerCount >= 99 ? "+99" : markerCount}
               </div>`
              : ""
          }
          </button>`;

      const selectedMarkerHTML = `
  <a href="/games/${game.id}" key=${
        game.id
      } id="element-${index}" type="button" 
    class="cursor-pointer relative text-[12px] font-bold border border-[#525252] bg-[#BFF9FA] 
    w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center">
      <span>${game.fee.toLocaleString("ko-KR", {
        style: "currency",
        currency: "KRW",
      })}</span>
      <span class="font-[300] text-[10px] text-[#737373]">/ ${game.starttime.slice(
        0,
        5
      )}</span>
      ${
        filteredAddresses?.length >= 2
          ? `<div class="absolute -top-2.5 -right-2.5 rounded-full size-[1.25rem] bg-[#404040] 
           text-[#fff] flex items-center justify-center text-[10px] font-bold">
           ${markerCount >= 99 ? "+99" : markerCount}
           </div>`
          : ""
      }
  </a>`;

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(
          game.court.latitude,
          game.court.longitude
        ),
        zoom: 12,
        map: naverMap,
        gameId: game.id,
        markerHTML: markerHTML,
        overlappedMarkerHTML: overlappedMarkerHTML,
        selectedMarkerHTML: selectedMarkerHTML,
        zIndex: gameId === game.id ? 100 : 1,
      });

      marker.setIcon({
        content:
          isGameCardSelected && gameId === game.id
            ? selectedMarkerHTML
            : filteredAddresses?.length > 1
            ? overlappedMarkerHTML
            : markerHTML,
      });

      naver.maps.Event.addListener(marker, "click", function () {
        //change marker back to non-selected marker on 2 click
        if (selectedMarker === marker) {
          marker.setIcon({
            content: overlappedMarkerHTML,
          });

          selectedMarker = null;
        } else {
          if (selectedMarker) {
            selectedMarker.setIcon({
              content: selectedMarker.overlappedMarkerHTML,
            });
          }

          // 다중 마커 렌더링
          marker.setIcon({
            content: selectedMarkerHTML,
          });

          // clicked card

          selectedMarker = marker;
        }

        setIsAddressSelected(selectedMarker !== null);
        setSelectedAddress(game.court.address);
      });
    }

    // custom overlay
    let isSelected = false;
    const locationBtnHtml = `<button class='mt-[10px] ml-[10px] p-2 flex gap-2 items-center justify-center bg-[#fff] size-[44px] rounded-full  '> <img src=${current_marker} alt="current location"   />  </button>`;
    const selectedLocationBtn = `<button class='mt-[10px] ml-[10px] p-2 flex gap-2 items-center justify-center bg-[#fff] size-[44px] rounded-full  '> <img src=${selected_marker} alt="selected current"   />  </button>`;
    const loadingBtnHTML = `<button class='mt-[10px] ml-[10px] p-2 flex gap-2 items-center justify-center bg-[#fff] size-[44px] rounded-full  '> <img src=${marker_loading} alt="marker loading"   />  </button>`;

    // custom overlay event
    naver.maps.Event.once(naverMap, "init", function () {
      const customControl = new naver.maps.CustomControl(locationBtnHtml, {
        position: naver.maps.Position.TOP_LEFT,
      });
      customControl.setMap(naverMap);
      naver.maps.Event.addDOMListener(
        customControl.getElement(),
        "click",
        function () {
          isSelected = !isSelected;

          setGeolocation(setGeoLatitude, setGeoLongtitude);
          // geolocation();
          if (isSelected) {
            customControl.getElement().innerHTML = loadingBtnHTML;
            setTimeout(function () {
              customControl.getElement().innerHTML = selectedLocationBtn;
              naverMap.setZoom(15);
              naverMap.setCenter(
                new naver.maps.LatLng(geoLatitude, geoLongitude)
              );

              setTimeout(() => {
                customControl.getElement().innerHTML = locationBtnHtml;
                isSelected = false;
              }, 1500);
            }, 800);
          } else {
            customControl.getElement().innerHTML = locationBtnHtml;
          }
        }
      );
    });

    setGeolocation(setGeoLatitude, setGeoLongtitude);
  }, [
    allGamesData,
    setSelectedAddress,
    setIsAddressSelected,
    geoLatitude,
    geoLongitude,
    latitude,
    longitude,
    gameId,
    isGameCardSelected,
  ]);
  return (
    <div
      id="games-map"
      className=" sm:hidden md:w-full md:block h-[494px] rounded-[20px]"
    ></div>
  );
};

export default NaverMap;
