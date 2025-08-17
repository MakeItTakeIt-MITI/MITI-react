import { useCallback, useState } from "react";
import FaqContainer from "../../features/faq/components/FaqContainer.tsx";
import { useSearchParams } from "react-router-dom";
import { useFaqDataHook } from "../../features/faq/hooks/useFaqDataHook.tsx";

const Faq = () => {
  const [inputContent, setInputContent] = useState<string>(() => "");

  const [searchParams, setSearchParams] = useSearchParams();

  // function passed as a prop, useCallBack to prevent re-render
  const handleToggleTab = useCallback(
    (selected: string) => {
      const params = Object.fromEntries(searchParams.entries());
      setSearchParams({ ...params, tab: selected });
    },
    [searchParams, setSearchParams]
  );

  const { data, isLoading } = useFaqDataHook(inputContent);

  return (
    <section className="w-[800px] min-h-[838px] mx-auto my-10 py-[30px] flex flex-col gap-[36px]">
      <div className="space-y-5 text-white">
        <h1 className="text-[32px] font-bold">자주 묻는 질문</h1>
        <p className="text-[18px] ">궁금하신 내용의 답변을 모아두었어요.</p>
      </div>
      <FaqContainer
        handleToggleTab={handleToggleTab}
        setInputContent={setInputContent}
        data={data}
        isLoading={isLoading}
        currentTab={searchParams.get("tab")}
      />
    </section>
  );
};

export default Faq;
