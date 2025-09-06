import { useParams, useSearchParams } from "react-router-dom";
import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import GameDetailsPanel from "../../features/game-detail/components/GameDetailsPanel.tsx";
import GameDetailContainer from "../../features/game-detail/components/GameDetailContainer.tsx";
import { useGameDetails } from "../../features/game-detail/hooks/query/useGameDetails.tsx";

const GameDetail = () => {
  const { id } = useParams();

  const { data: gameDetailData } = useGameDetails({ id });

  console.log(gameDetailData?.data);
  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto  w-[968px] flex flex-col items-center gap-[30px] py-[30px]"
    >
      <article className="w-full  flex justify-between">
        <GameDetailsPanel gameDetailData={gameDetailData?.data} />
        <GameDetailContainer gameDetailData={gameDetailData?.data} />
      </article>
      <BannerMedium type="dongtan_court" />
    </section>
  );
};

export default GameDetail;
