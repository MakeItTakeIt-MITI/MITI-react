import filter from "../../assets/v11/filter.svg";
import NaverMap from "./NaverMap.tsx";
import GameListContainer from "./GameListContainer.tsx";
import FilteredStatus from "../game-filter/FilteredStatus.tsx";
import useGameFilterStore from "../../store/useGameFilterStore.ts";
// import useTimeFieldStore from "../../store/useTimeStore";
// import useStatusSelectionStore from "../../store/useStatusSelectionStore";
// import useDateSelectionStore from "../../store/useDateSelectionStore";
import { Game } from "../../interfaces/games.ts";
import { useState } from "react";
import MobileGameListContainer from "./MobileGameListContainer.tsx";
import FilteredGameListContainer from "./FilteredGameListContainer.tsx";
import MoveToAppBanner from "../common/MoveToAppBanner.tsx";

import right_arrow from "../../assets/v11.2/right_arrow.svg";
import { Link } from "react-router-dom";

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
  const [isGameCardSelected, setIsGameCardSelected] = useState(false);
  const [gameId, setGameId] = useState(0);

  const handleSetCoords = (lat: string, long: string, id: number) => {
    setIsGameCardSelected(true);
    setGameId(id);
    setLatitude(lat);
    setLongitude(long);
  };

  const handleSetSelected = () => {
    setSelected(!selected);
  };

  return (
    <>
      <section className="page-padding bg-secondary-black min-h-screen sm:px-[0.81rem] md:px-0  ">
        <div className=" page-layer sm:px-[0.5rem] md:px-0 h-full sm:space-y-[1.75rem] md:space-y-[2.62rem]">
          {/* Top */}
          {/* Top */}
          <div className="flex items-center justify-between">
            <div className="space-y-5  text-[#fff]">
              <h1 className="sm:font-bold md:font-[600] sm:text-[26px] md:text-[32px]">
                MITI 경기 목록
              </h1>
              <p className="sm:text-sm md:text-[20px] sm:font-[500] md:font-[400]">
                당신의 참여 기다리는 경기들입니다. 지금 참여하세요!
              </p>
            </div>
            <Link to="list" className="sm:hidden md:block">
              <button
                type="button"
                className="text-sm font-[600] text-[#fff] flex"
              >
                <span> 전체 경기</span>
                <img src={right_arrow} alt="right" />
              </button>
            </Link>
          </div>
          <NaverMap
            allGamesData={allGamesData}
            handleSetSelected={handleSetSelected}
            setSelectedAddress={setSelectedAddress}
            setIsAddressSelected={setIsAddressSelected}
            isAddressSelected={isAddressSelected}
            latitude={latitude}
            longitude={longitude}
            isGameCardSelected={isGameCardSelected}
            gameId={gameId}
          />
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
                  gameId={gameId}
                />
              )}
              <MobileGameListContainer allGamesData={allGamesData} />
            </div>
            <Link to="list" className="md:hidden full sm:flex  justify-end">
              <button
                type="button"
                className="text-xs font-[600] text-[#fff] flex"
              >
                <span> 전체 경기</span>
                <img src={right_arrow} alt="right" />
              </button>
            </Link>
          </div>
          <MoveToAppBanner />
        </div>
      </section>
    </>
  );
};

export default MainContent;
