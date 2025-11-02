import { CourtsField, CourtGamesDetailsField } from "../../interface/courts";
import CourtDetailGamesList from "./CourtDetailGamesList";
import { CourtDetailsCard } from "./CourtDetailsCard";

interface CourtInfoContainerProps {
  courtDetailData: CourtsField;
  courtsGamesPageContent: CourtGamesDetailsField[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  geoLatitude: number | undefined;
  geoLongitude: number | undefined;
}

const CourtInfoContainer = ({
  courtDetailData,
  courtsGamesPageContent,
  fetchNextPage,
  hasNextPage,
  geoLatitude,
  geoLongitude,
}: CourtInfoContainerProps) => {
  return (
    <div className="flex flex-col gap-[32px] sm:w-full md:w-[410px] md:px-0 sm:px-4">
      {/* court detail info */}
      <CourtDetailsCard
        courtDetailData={courtDetailData}
        geoLatitude={geoLatitude}
        geoLongitude={geoLongitude}
      />
      {/* games list */}

      <CourtDetailGamesList
        courtsGamesPageContent={courtsGamesPageContent}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default CourtInfoContainer;
