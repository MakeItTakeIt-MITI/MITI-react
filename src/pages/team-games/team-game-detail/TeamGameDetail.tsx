import BannerMedium from "@/features/common/components(renewal)/banners/BannerMedium";
import TeamGameDetailContainer from "@/features/team-game-detail/components/TeamGameDetailContainer";
import TeamGameDetailsPanel from "@/features/team-game-detail/components/TeamGameDetailsPanel";
import { useTeamGameDetails } from "@/features/team-game-detail/hooks/query/useTeamGameDetails";
import { useParams } from "react-router-dom";

const TeamGameDetail = () => {
  const { id } = useParams();

  const { data: gameDetailData, isLoading } = useTeamGameDetails({ id });

  return (
    <main
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto sm:w-full md:w-[968px] flex flex-col items-center gap-[30px] py-[30px]"
    >
      <section className="w-full flex sm:flex-col md:flex-row justify-between">
        <TeamGameDetailsPanel
          gameDetailData={gameDetailData?.data || {}}
          isLoading={isLoading}
        />
        <TeamGameDetailContainer
          gameDetailData={gameDetailData?.data || {}}
          isLoading={isLoading}
        />
      </section>
      <BannerMedium type="dongtan_court" />
    </main>
  );
};

export default TeamGameDetail;
