import { CourtsDetailGameListField, CourtsField } from "../../interface/courts";
import CourtDetailGamesList from "./CourtDetailGamesList";
import { CourtDetailsCard } from "./CourtDetailsCard";

interface CourtInfoContainerProps {
  courtDetailData: CourtsField;
  courtGamesList: CourtsDetailGameListField[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  geoLatitude: number | undefined;
  geoLongitude: number | undefined;
}

const CourtInfoContainer = ({
  courtDetailData,
  courtGamesList,
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
        courtGamesList={courtGamesList}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default CourtInfoContainer;
