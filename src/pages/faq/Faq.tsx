import { useCallback, useState } from "react";
import FaqContainer from "../../features/faq/components/FaqContainer.tsx";
import { useSearchParams } from "react-router-dom";
import { useFaqDataHook } from "../../features/faq/hooks/useFaqDataHook.tsx";

const Faq = () => {
  const [inputContent] = useState<string>(() => "");

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const { data, isLoading } = useFaqDataHook(
    inputContent ? inputContent : search ?? undefined
  );

  // function passed as a prop, useCallBack to prevent re-render
  const handleToggleTab = useCallback(
    (selected: string) => {
      const params = Object.fromEntries(searchParams.entries());
      setSearchParams({ ...params, tab: selected });
    },
    [searchParams, setSearchParams]
  );

  const currentTab = searchParams.get("tab");

  return (
    <section className="sm:w-full sm:py-3 sm:px-4  md:w-[800px] min-h-[838px] mx-auto md:my-10 md:py-[30px] flex flex-col gap-[36px]">
      <div className="space-y-5 text-white">
        <h1 className="md:text-[32px] sm:text-[28px] font-bold">
          자주 묻는 질문
        </h1>
        <p className="md:text-[18px]  sm:text-[16px]">
          궁금하신 내용의 답변을 모아두었어요.
        </p>
      </div>
      <FaqContainer
        handleToggleTab={handleToggleTab}
        data={data}
        isLoading={isLoading}
        currentTab={currentTab}
      />
    </section>
  );
};

export default Faq;
