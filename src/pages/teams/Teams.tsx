import React from 'react';
import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import { useTeamsPage } from "./hooks/useTeamsPage.ts";
import { TeamListContainer } from "../../features/teams/components/TeamListContainer.tsx";

export const Teams: React.FC = () => {
  const {
    allTeams,
    isTeamsListLoading,
    isFetchingNextPage,
    inViewTeamListRef,
  } = useTeamsPage();

  return (
    <main
      style={{ backgroundColor: "#141414" }}
      className="mx-auto min-h-screen w-full flex flex-col items-center gap-6 px-4 md:px-0 pb-10 pt-4"
    >
      {/* 상단 배너 */}
      <BannerMedium type="community" className="w-full max-w-[800px]" />

      {/* 메인 레이아웃 컨테이너 */}
      <div className="w-full max-w-[800px] flex flex-col gap-5">
        {/* 타이틀 영역 */}
        <div className="flex flex-col gap-1.5 pt-2">
          {/* 모바일 화면용 타이틀 */}
          <h1 className="block md:hidden text-xl font-bold text-white tracking-tight">
            팀 목록
          </h1>
          <p className="block md:hidden text-xs text-[#ebebeb] whitespace-pre-line leading-relaxed">
            {"팀원을 모집중인 팀 목록입니다!\n지금 바로 가입해보세요!"}
          </p>

          {/* 데스크톱 화면용 타이틀 */}
          <h1 className="hidden md:block text-xl md:text-2xl font-bold text-white tracking-tight">
            🏀 농구 팀 찾기
          </h1>
          <p className="hidden md:block text-xs md:text-sm text-[#ebebeb]">
            주변에 함께 운동할 매너 있고 열정 가득한 농구 팀들을 탐색해 보세요.
          </p>
        </div>

        {/* 팀 카드 리스트 */}
        <TeamListContainer
          teams={allTeams}
          isLoading={isTeamsListLoading}
          isFetchingNextPage={isFetchingNextPage}
          inViewRef={inViewTeamListRef}
        />
      </div>
    </main>
  );
};
