import CourtsCard from "./CourtsCard.tsx";

import "../../../../features/common/scrollbar.css";
import { CourtsField } from "../../interface/courts.ts";

const SkeletonCourtsCard = () => (
  <li className="w-full sm:h-[66px] md:h-[72px] py-3 flex">
    <div className="flex justify-between w-full animate-pulse">
      <div className="space-y-2 max-w-[667px]">
        <div className="h-5 md:h-6 w-48 bg-[#2A2A2A] rounded" />
        <div className="flex space-x-2">
          <div className="h-3 w-32 bg-[#2A2A2A] rounded" />
          <div className="h-3 w-24 bg-[#2A2A2A] rounded" />
        </div>
      </div>
      <div className="flex items-end gap-2">
        <div className="w-4 h-4 bg-[#2A2A2A] rounded" />
        <div className="flex space-x-1">
          <div className="h-3 w-8 bg-[#2A2A2A] rounded" />
          <div className="h-3 w-4 bg-[#2A2A2A] rounded" />
        </div>
      </div>
    </div>
  </li>
);

const CourtsListSkeleton = () => (
  <ul className="custom-scrollbar sm:p-0 md:p-6 flex flex-col gap-2 sm:h-[600px] md:h-[560px] overflow-y-auto">
    {Array.from({ length: 8 }).map((_, i) => (
      <SkeletonCourtsCard key={`skeleton-${i}`} />
    ))}
  </ul>
);

interface CourtsListContainerProps {
  courstDataPage: CourtsField[] | undefined;
  hasNextPage: boolean;
  courtsListRef: (node?: Element | null | undefined) => void;
  geoLatitude: string | number | null | undefined;
  geoLongitude: string | number | null | undefined;
  isLoading?: boolean;
}

const CourtsListContainer = ({
  courstDataPage,
  hasNextPage,
  courtsListRef,
  geoLatitude,
  geoLongitude,
  isLoading = false,
}: CourtsListContainerProps) => {
  // Show skeleton when loading
  if (isLoading) {
    return <CourtsListSkeleton />;
  }

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
