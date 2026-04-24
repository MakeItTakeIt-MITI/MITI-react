import CourtsCard from "./CourtsCard.tsx";

import "../../../../features/common/scrollbar.css";
import { CourtsField } from "../../interface/courts.ts";

const SkeletonCourtsCard = () => (
  <li className="flex flex-col gap-3 animate-pulse">
    <div className="w-[180px] h-[180px] bg-[#2A2A2A] rounded-lg" />
    <div className="w-[180px] h-[50px] flex flex-col justify-between">
      <div className="h-4 w-32 bg-[#2A2A2A] rounded" />
      <div className="h-3 w-28 bg-[#2A2A2A] rounded" />
      <div className="h-3 w-16 bg-[#2A2A2A] rounded" />
    </div>
  </li>
);

const CourtsListSkeleton = () => (
  <ul className="custom-scrollbar sm:p-0 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center sm:h-[600px] md:h-[560px] overflow-y-auto">
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
  if (isLoading) {
    return <CourtsListSkeleton />;
  }

  return (
    <ul className="custom-scrollbar sm:p-0 md:p-6 grid grid-cols-2 md:grid-cols-4 md:gap-4 sm:gap-[13px] justify-items-center sm:h-[600px] md:h-[560px] overflow-y-auto">
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
            images={courtData.images}
          />
        );
      })}
      {hasNextPage && (
        <div
          ref={courtsListRef}
          className="h-1 w-full opacity-0 col-span-2 md:col-span-4"
        />
      )}
    </ul>
  );
};

export default CourtsListContainer;
