import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import GameDetailContainer from "../../features/games/components/game-details/GameDetailContainer.tsx";
import GameDetailsPanel from "../../features/games/components/game-details/GameDetailsPanel.tsx";

const GameDetail = () => {
  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto  w-[968px] flex flex-col items-center gap-[30px] py-[30px]"
    >
      <article className="w-full h-[870px] flex justify-between">
        <GameDetailsPanel />
        <GameDetailContainer />
      </article>
      <BannerMedium type="dongtan_court" />
    </section>
  );
};

export default GameDetail;
