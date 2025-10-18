import React from "react";
import InquiryCard from "./InquiryCard.tsx";
import { InquiriesField } from "../interface/inquries.ts";

interface InquiriesListContainerProps {
  inquriesPageContentData?: InquiriesField[];
  isLoading?: boolean;
}

// if isLoading, show skeletons animating instead of actual content
const SkeletonItem = () => (
  <li className="py-4 border-b border-[#2A2A2A]">
    <div className="animate-pulse">
      <div className="h-5 bg-[#2A2A2A] rounded w-2/3 mb-3" />
      <div className="flex items-center gap-3">
        <div className="h-3 w-16 bg-[#2A2A2A] rounded" />
        <div className="h-3 w-12 bg-[#2A2A2A] rounded" />
      </div>
    </div>
  </li>
);

// main container component for inquiries list
const InquiriesListContainer: React.FC<InquiriesListContainerProps> = ({
  inquriesPageContentData = [],
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <ul className="sm:h-full md:min-h-[520px]">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonItem key={`skeleton-${i}`} />
        ))}
      </ul>
    );
  }

  // handle empty state
  if (!inquriesPageContentData.length) {
    return (
      <div className="text-[#999] text-center py-8">
        등록된 문의가 없습니다.
      </div>
    );
  }

  // render actual inquiries list
  return (
    <ul className="sm:h-full md:min-h-[520px]">
      {inquriesPageContentData.map((inquiry) => {
        const [year, month, day] = inquiry.created_at
          ?.split?.("T")?.[0]
          ?.split?.("-") ?? ["", "", ""];

        return (
          <InquiryCard
            isAnswered={inquiry.num_of_answers > 0}
            id={inquiry.id}
            year={year}
            month={month}
            day={day}
            title={inquiry.title}
            nickname={inquiry.nickname}
          />
        );
      })}
    </ul>
  );
};

export default InquiriesListContainer;
