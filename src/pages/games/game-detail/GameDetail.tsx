import { useParams } from "react-router-dom";
import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import GameDetailsPanel from "../../features/game-detail/components/GameDetailsPanel.tsx";
import GameDetailContainer from "../../features/game-detail/components/GameDetailContainer.tsx";
import { useGameDetails } from "../../features/game-detail/hooks/query/useGameDetails.tsx";

const GameDetail = () => {
  const { id } = useParams();

  const { data: gameDetailData, isLoading } = useGameDetails({ id });

  return (
    <main
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto  sm:w-full md:w-[968px] flex flex-col items-center gap-[30px] py-[30px] "
    >
      <section className="w-full  flex sm:flex-col  md:flex-row justify-between">
        <GameDetailsPanel
          gameDetailData={gameDetailData?.data || {}}
          isLoading={isLoading}
        />
        <GameDetailContainer
          gameDetailData={gameDetailData?.data || {}}
          isLoading={isLoading}
        />
      </section>
      <BannerMedium type="dongtan_court" />
    </main>
  );
};

export default GameDetail;
