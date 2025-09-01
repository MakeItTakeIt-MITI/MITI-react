import CourtDetailGamesList from "./CourtDetailGamesList.tsx";
import { CourtDetailsCard } from "./CourtDetailsCard.tsx";

interface CourtDataField {
  name: string;
  address: string;
  address_detail: string;
  distance: number;
  info: string;
  latitude: string;
  longitude: string;
}

interface CourtInfoContainerProps {
  courtDetailData: CourtDataField;
  geoLatitude: string | number | null | undefined;
  geoLongitude: string | number | null | undefined;
}

const CourtInfoContainer = ({
  courtDetailData,
  geoLatitude,
  geoLongitude,
}: CourtInfoContainerProps) => {
  return (
    <div className="flex flex-col gap-[32px] w-[410px]">
      {/* court detail info */}
      <CourtDetailsCard
        courtDetailData={courtDetailData}
        geoLatitude={geoLatitude}
        geoLongitude={geoLongitude}
      />
      {/* games list */}
      {/* <CourtDetailGamesList courtDetailData={courtDetailData} /> */}
    </div>
  );
};

export default CourtInfoContainer;
