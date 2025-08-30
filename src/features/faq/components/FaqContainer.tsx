import SearchBar from "../../common/components(renewal)/search/SearchBar.tsx";
import FaqTabs from "./FaqTabs.tsx";
import FaqCard from "./FaqCard.tsx";
import { FaqDataField } from "../interface/faq.ts";

interface FabContainerProps {
  handleToggleTab: (arg: string) => void;
  data: FaqDataField[];
  isLoading: boolean;
  currentTab: string | null;
}

const FaqContainer = ({
  handleToggleTab,
  data,
  isLoading,
  currentTab,
}: FabContainerProps) => {
  console.log(currentTab);

  return (
    <article className="flex flex-col gap-4">
      <SearchBar paramKey="search" title="FAQ" />

      <div className="space-y-3">
        {/* TAB LIST */}
        <FaqTabs handleToggleTab={handleToggleTab} />
        {/* FAQ Cards List */}

        <ul className="space-y-3">
          {isLoading ? (
            <p className="flex items-center justify-center text-white h-[400px]">
              Loading...
            </p>
          ) : (
            <>
              {data
                .filter(
                  (faqData) =>
                    currentTab === "all" || faqData.category === currentTab
                )
                .map((faqData) => (
                  <li key={faqData.id}>
                    <FaqCard title={faqData.title} content={faqData.content} />
                    <hr className="border-0 h-[0.5px] bg-[#fff]" />
                  </li>
                ))}
            </>
          )}
        </ul>
      </div>
    </article>
  );
};

export default FaqContainer;
