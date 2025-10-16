import InquiryCard from "./InquiryCard.tsx";
import { InquiriesField } from "../interface/inquries.ts";

interface InquiriesListContainerProps {
  inquriesPageContentData: InquiriesField[];
}

const InquiriesListContainer = ({
  inquriesPageContentData,
}: InquiriesListContainerProps) => {
  return (
    <ul className="sm:h-full md:min-h-[520px]">
      {inquriesPageContentData?.map((inquiry) => (
        <li key={inquiry.id}>
          <InquiryCard
            isAnswered={inquiry.num_of_answers > 0}
            id={inquiry.id}
            year={inquiry.created_at.split("T")[0].split("-")[0]}
            month={inquiry.created_at.split("T")[0].split("-")[1]}
            day={inquiry.created_at.split("T")[0].split("-")[2]}
            title={inquiry.title}
            nickname={inquiry.nickname}
          />
        </li>
      ))}
    </ul>
  );
};

export default InquiriesListContainer;
