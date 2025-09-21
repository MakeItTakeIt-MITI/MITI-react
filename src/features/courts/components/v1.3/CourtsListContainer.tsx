import CourtsCard from "./CourtsCard.tsx";

import "../../../../features/common/scrollbar.css";
import { CourtsField } from "../../interface/courts.ts";

interface CourtsListContainerProps {
  courstDataPage: CourtsField[] | undefined;
  hasNextPage: boolean;
  courtsListRef: (node?: Element | null | undefined) => void;
  geoLatitude: string | number | null | undefined;
  geoLongitude: string | number | null | undefined;
}

const CourtsListContainer = ({
  courstDataPage,
  hasNextPage,
  courtsListRef,
  geoLatitude,
  geoLongitude,
}: CourtsListContainerProps) => {
  return (
    <ul className="custom-scrollbar sm:p-0 md:p-6 flex flex-col gap-2 sm:h-[600px] md:h-[560px] overflow-y-auto">
      {courstDataPage?.map((courtData) => {
        return (
          <CourtsCard
            id={courtData.id}
            title={courtData.name}
            address={courtData.address}
            address_detail={courtData.address_detail}
            latitude={courtData.latitude}
            longitude={courtData.longitude}
            key={courtData.id}
            geoLatitude={geoLatitude}
            geoLongitude={geoLongitude}
          />
        );
      })}
      {hasNextPage && (
        <div ref={courtsListRef} className="h-1 w-full opacity-0" />
      )}
    </ul>
  );
};

export default CourtsListContainer;
