import { useCallback, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTeamsListData } from "../../../features/teams/hooks/query/useTeamsListData";

export const useTeamsPage = () => {
  const [isGeoSorted, setIsGeoSorted] = useState(false);
  const [geolocation, setGeolocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // 모바일 사이드바/필터 박스 토글용
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);

  const handleToggleMobileFilterBox = useCallback(() => {
    setIsFilterBoxOpen((prev) => !prev);
  }, []);

  const handleToggleGeoSort = useCallback(() => {
    if (!isGeoSorted) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setGeolocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            setIsGeoSorted(true);
          },
          (error) => {
            console.error("Geolocation error:", error);
            alert("위치 정보를 가져올 수 없습니다. 권한을 확인해주세요.");
          },
          { enableHighAccuracy: true }
        );
      } else {
        alert("이 브라우저에서는 위치 서비스를 지원하지 않습니다.");
      }
    } else {
      setIsGeoSorted(false);
      setGeolocation(null);
    }
  }, [isGeoSorted]);

  const { ref: inViewTeamListRef, inView } = useInView({
    threshold: 0.2,
  });

  const {
    data: teamsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isTeamsListLoading,
  } = useTeamsListData(
    isGeoSorted,
    geolocation?.lat,
    geolocation?.lng
  );

  const allTeams = teamsData?.pages.flatMap((page) => page.items) || [];

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return {
    isFilterBoxOpen,
    handleToggleMobileFilterBox,
    isGeoSorted,
    handleToggleGeoSort,
    allTeams,
    isTeamsListLoading,
    isFetchingNextPage,
    inViewTeamListRef,
  };
};
