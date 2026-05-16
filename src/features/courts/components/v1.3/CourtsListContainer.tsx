import CourtsCard from "./CourtsCard.tsx";

import "../../../../features/common/scrollbar.css";
import { CourtsField } from "../../interface/courts.ts";

const SkeletonCourtsCard = () => (
  <li className="flex flex-col md:gap-3 sm:gap-2 animate-pulse">
    <div className="md:size-[180px] sm:size-[165px] bg-neutral-800 rounded-lg" />
    <div className="md:w-[180px] sm:w-[165px] flex flex-col md:gap-[4px] sm:gap-2">
      <div className="h-4 w-3/4 bg-neutral-800 rounded" />
      <div className="h-3 w-full bg-neutral-800 rounded" />
      <div className="h-[10px] w-12 bg-neutral-800 rounded self-end" />
    </div>
  </li>
);

const CourtsListSkeleton = () => (
  <ul className="custom-scrollbar sm:p-0 md:p-6 grid grid-cols-2 md:grid-cols-4 md:gap-4 sm:gap-[13px] justify-center sm:h-[600px] md:h-[560px] overflow-y-auto">
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
  isFetchingNextPage?: boolean;
}

const CourtsListContainer = ({
  courstDataPage,
  hasNextPage,
  courtsListRef,
  geoLatitude,
  geoLongitude,
  isLoading = false,
  isFetchingNextPage = false,
}: CourtsListContainerProps) => {
  if (isLoading) {
    return <CourtsListSkeleton />;
  }

  return (
    <ul className="custom-scrollbar sm:p-0 md:p-6 grid grid-cols-2 md:grid-cols-4 md:gap-4 sm:gap-[13px] justify-center sm:h-[600px] md:h-[560px] overflow-y-auto">
      {courstDataPage?.map((courtData, index) => {
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
            animationIndex={index}
          />
        );
      })}
      {hasNextPage && (
        <div
          ref={courtsListRef}
          className="h-1 w-full opacity-0 col-span-2 md:col-span-4"
        />
      )}
      {isFetchingNextPage &&
        Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCourtsCard key={`fetch-skeleton-${i}`} />
        ))}
    </ul>
  );
};

export default CourtsListContainer;
