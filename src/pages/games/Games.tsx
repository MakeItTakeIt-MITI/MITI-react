import { useEffect, useState } from "react";
import MainContent from "../../features/games/components/MainContent.tsx";
import Footer from "../../features/common/components/Footer.tsx";
import useDateSelectionStore from "../../store/useDateSelectionStore.ts";
import useTimeFieldStore from "../../store/useTimeStore.ts";
import useStatusSelectionStore from "../../store/useStatusSelectionStore.ts";

import useCurrentMonthStore from "../../store/useCurrentMonthStore.ts";

import { useFilterBox } from "../../features/games/hooks/useFilterBox.tsx";
import { useFilterBoxSettings } from "../../features/games/hooks/useFilterBoxSettings.tsx";
import { useMapGamesList } from "../../features/games/hooks/useMapGamesList.tsx";
import GameFilterContainer from "../../features/games/components/game-filter/GameFilterContainer.tsx";
import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import Navbar from "../../features/header/renewal/Navbar.tsx";
import Sidebar from "../../features/games/components/sidebar/Sidebar.tsx";
import Tab from "../../features/common/components(renewal)/chips/Tab.tsx";

export const Games = () => {
  // const [displayFilterBox, setDisplayFilterBox] = useState<boolean>(false);

  // const { handleToggleFilterBox } = useFilterBox(
  //   displayFilterBox,
  //   setDisplayFilterBox
  // );

  // const { handleResetFilters, handleApplyFilters } =
  //   useFilterBoxSettings(setDisplayFilterBox);

  // //zustand store
  // const { yearMonthDay } = useDateSelectionStore();
  // const { formattedFullTime } = useTimeFieldStore();
  // const { selectedStatuses } = useStatusSelectionStore();
  // const { currentMonth } = useCurrentMonthStore();

  // const { data: mapGamesData, isLoading } = useMapGamesList(
  //   yearMonthDay,
  //   formattedFullTime,
  //   selectedStatuses
  // );

  // useEffect(() => {}, [selectedStatuses, displayFilterBox]);

  return (
    <>
      <section
        style={{
          backgroundColor: "#141414",
        }}
        className="mx-auto  w-[968px] flex flex-col items-center gap-[30px] py-[30px]"
      >
        <BannerMedium type="manners" />
        {/* Displays games filter sidebar and games list */}
        <article className="flex gap-[30px]">
          <Sidebar />
          <div className=" w-[700px] flex flex-col gap-[30px]">
            <div className="flex">
              <Tab
                content="지도"
                isSelected
                onClick={() => console.log("hello")}
              />
              <Tab
                content="리스트"
                isSelected={false}
                onClick={() => console.log("hello")}
              />
            </div>
          </div>
        </article>
      </section>
      {/* <Footer /> */}

      {/* {displayFilterBox && (
        <GameFilterContainer
          handleToggleFilterBox={handleToggleFilterBox}
          handleResetFilters={handleResetFilters}
          handleApplyFilters={handleApplyFilters}
          currentMonth={currentMonth}
        />
      )} */}
      {/* <header className="bg-games_web bg-center bg-cover bg-no-repeat  h-[20rem] sm:hidden md:flex justify-center items-center bg-[#000] relative">
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
      </header> */}

      {/* mobile hero */}
      {/* <header className="bg-games_mobile bg-center bg-cover bg-no-repeat    sm:flex items-center  justify-center md:hidden h-[16.125rem]  ">
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
      </header> */}
      {/* <MainContent
        handleToggleFilterBox={handleToggleFilterBox}
        allGamesData={mapGamesData?.data}
        isLoading={isLoading}
      />

      <Footer /> */}
    </>
  );
};
