import FaqContainer from "../../features/faq/components/FaqContainer.tsx";

const Faq = () => {
  return (
    <section className="w-[800px] min-h-[838px] mx-auto my-10 py-[30px] flex flex-col gap-[36px]">
      <div className="space-y-5 text-white">
        <h1 className="text-[32px] font-bold">자주 묻는 질문</h1>
        <p className="text-[18px] ">궁금하신 내용의 답변을 모아두었어요.</p>
      </div>
      <FaqContainer />
    </section>
  );
};

export default Faq;
