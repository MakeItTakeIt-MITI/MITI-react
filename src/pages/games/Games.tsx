import { useEffect, useState } from "react";
import MainContent from "../../components/games/MainContent.tsx";
import GameFilterContainer from "../../components/game-filter/GameFilterContainer.tsx";
import Footer from "../../components/common/Footer.tsx";
import useDateSelectionStore from "../../store/useDateSelectionStore.ts";
import useTimeFieldStore from "../../store/useTimeStore.ts";
import useStatusSelectionStore from "../../store/useStatusSelectionStore.ts";

import useCurrentMonthStore from "../../store/useCurrentMonthStore.ts";

import { useFilterBox } from "../../hooks/game-list-filters/useFilterBox.tsx";
import { useFilterBoxSettings } from "../../hooks/game-list-filters/useFilterBoxSettings.tsx";
import { useMapGamesList } from "../../features/games/hooks/useMapGamesList.tsx";

export const Games = () => {
  const [displayFilterBox, setDisplayFilterBox] = useState<boolean>(false);

  // react custom hooks
  const { handleToggleFilterBox } = useFilterBox(
    displayFilterBox,
    setDisplayFilterBox
  );

  const { handleResetFilters, handleApplyFilters } =
    useFilterBoxSettings(setDisplayFilterBox);

  //zustand store
  const { yearMonthDay } = useDateSelectionStore();
  const { formattedFullTime } = useTimeFieldStore();
  const { selectedStatuses } = useStatusSelectionStore();
  const { currentMonth } = useCurrentMonthStore();

  const { data: mapGamesData, isLoading } = useMapGamesList(
    yearMonthDay,
    formattedFullTime,
    selectedStatuses
  );

  useEffect(() => {}, [selectedStatuses, displayFilterBox]);

  return (
    <>
      {displayFilterBox && (
        <GameFilterContainer
          handleToggleFilterBox={handleToggleFilterBox}
          handleResetFilters={handleResetFilters}
          handleApplyFilters={handleApplyFilters}
          currentMonth={currentMonth}
        />
      )}
      <header className="bg-games_web bg-center bg-cover bg-no-repeat  h-[20rem] sm:hidden md:flex justify-center items-center bg-[#000] relative">
        {/* pc hero */}
        <div className="absolute md:w-[768px] flex flex-col sm:items-center md:items-start justify-center gap-[1.25rem] text-[#fff] ">
          <p className="text-base font-bold text-primary-teal">
            MITI 서비스 런칭
          </p>
          <h1 className="font-bold  text-[44px]">
            오늘 퇴근하고 농구 어떠세요?
          </h1>
          <p className="font-[400] text-[20px]">
            당신 근처의 경기를 지금 찾아보세요.
          </p>
        </div>
      </header>

      {/* mobile hero */}
      <header className="bg-games_mobile bg-center bg-cover bg-no-repeat    sm:flex items-center  justify-center md:hidden h-[16.125rem]  ">
        <div className="flexCenter flex-col gap-[1.5rem] text-[#fff]  ">
          <div className="space-y-[.75rem] text-center">
            <p className="text-sm font-bold text-primary-teal">
              MITI 서비스 런칭
            </p>
            <h1 className="font-bold text-[24px]">
              오늘 퇴근하고 농구 어떠세요?
            </h1>
          </div>
          <h2 className="font-[300] text-sm">
            당신 근처의 경기를 지금 찾아보세요.{" "}
          </h2>
        </div>
      </header>
      <MainContent
        handleToggleFilterBox={handleToggleFilterBox}
        allGamesData={mapGamesData?.data}
        isLoading={isLoading}
      />

      <Footer />
    </>
  );
};
