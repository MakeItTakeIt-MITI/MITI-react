import filter from "../../assets/v11/filter.svg";
import NaverMap from "./NaverMap";
import GameListContainer from "./GameListContainer";
import FilteredStatus from "../game-filter/FilteredStatus";
import useGameFilterStore from "../../store/useGameFilterStore";
// import useTimeFieldStore from "../../store/useTimeStore";
// import useStatusSelectionStore from "../../store/useStatusSelectionStore";
// import useDateSelectionStore from "../../store/useDateSelectionStore";
import { Game } from "../../interfaces/games";
import { useState } from "react";
import MobileGameListContainer from "./MobileGameListContainer";
import FilteredGameListContainer from "./FilteredGameListContainer";
import MoveToAppBanner from "../common/MoveToAppBanner";

interface MainContentProps {
  handleToggleFilterBox: () => void;
  allGamesData: Game[];
  isLoading: boolean;
}

const MainContent = ({
  handleToggleFilterBox,
  allGamesData,
  isLoading,
}: MainContentProps) => {
  const { selectedStatus, selectedDate, selectedTimeDate } =
    useGameFilterStore();
  const [selected, setSelected] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [isAddressSelected, setIsAddressSelected] = useState<boolean>(false);

  const [latitude, setLatitude] = useState<null | string>(null);
  const [longitude, setLongitude] = useState<null | string>(null);

  const handleSetCoords = (lat: string, long: string) => {
    setLatitude(lat);
    setLongitude(long);
  };

  const handleSetSelected = () => {
    setSelected(!selected);
  };

  return (
    <section className="page-padding bg-secondary-black min-h-screen sm:px-[0.81rem] md:px-0  ">
      <div className=" page-layer sm:px-[0.5rem] md:px-0 h-full sm:space-y-[1.75rem] md:space-y-[2.62rem]">
        {/* Top */}
        <div className="space-y-5 sm:text-center md:text-left text-[#fff]">
          <h1 className="sm:font-bold md:font-[600] sm:text-[26px] md:text-[32px]">
            MITI 경기 목록
          </h1>
          <p className="sm:text-sm md:text-[20px] sm:font-[500] md:font-[400]">
            당신의 참여 기다리는 경기들입니다. 지금 참여하세요!
          </p>
        </div>
        {/* Bottom */}
        <div className="sm:space-y-[1.25rem] md:space-y-5">
          <>
            {/* Filter Row  & non-mobile */}
            <div className="flex items-center justify-between w-full ">
              <div className=" flex  items-center justify-start gap-3    md:px-0  sm:overflow-x-scroll sm:overflow-y-hidden md:overflow-hidden  ">
                <FilteredStatus
                  handleDisplayFilterBox={handleToggleFilterBox}
                  content={selectedDate}
                />
                <FilteredStatus
                  content={selectedTimeDate}
                  handleDisplayFilterBox={handleToggleFilterBox}
                />
                <FilteredStatus
                  content={selectedStatus}
                  handleDisplayFilterBox={handleToggleFilterBox}
                />
              </div>
              <button
                className="sm:hidden md:block"
                type="button"
                onClick={handleToggleFilterBox}
              >
                <img src={filter} alt="filter" />
              </button>
            </div>
          </>
          {/* Game list and map container */}
          <div className="flex gap-5 h-full ">
            {isAddressSelected ? (
              <FilteredGameListContainer
                allGamesData={allGamesData}
                selectedAddress={selectedAddress}
              />
            ) : (
              <GameListContainer
                allGamesData={allGamesData}
                handleSetCoords={handleSetCoords}
                isLoading={isLoading}
              />
            )}
            <MobileGameListContainer allGamesData={allGamesData} />
            <NaverMap
              allGamesData={allGamesData}
              handleSetSelected={handleSetSelected}
              setSelectedAddress={setSelectedAddress}
              setIsAddressSelected={setIsAddressSelected}
              isAddressSelected={isAddressSelected}
              latitude={latitude}
              longitude={longitude}
            />
          </div>
        </div>
        <MoveToAppBanner />
      </div>
    </section>
  );
};

export default MainContent;
