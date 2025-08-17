import InquiryCard from "./InquiryCard.tsx";

const InquiriesListContainer = () => {
  return (
    <ul>
      <InquiryCard
        isAnswered={true}
        year="2025"
        month="05"
        day="19"
        title="낵네임 변경"
        nickname="MITI"
      />
      <InquiryCard
        isAnswered={false}
        year="2025"
        month="05"
        day="19"
        title="낵네임 변경"
        nickname="MITI"
      />
      <InquiryCard
        isAnswered={true}
        year="2025"
        month="05"
        day="19"
        title="낵네임 변경"
        nickname="MITI"
      />
    </ul>
  );
};

export default InquiriesListContainer;
