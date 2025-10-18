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

// simple skeleton row with Tailwind animation
const SkeletonItem = () => (
  <li className="py-4">
    <div className="animate-pulse space-y-3">
      <div className="flex gap-4">
        <div className="h-6 bg-[#2A2A2A] rounded w-full" />
        <div className="h-6 bg-[#2A2A2A] rounded w-[24px]" />
      </div>
      <div className="h-1 bg-[#2A2A2A] rounded w-full" />
    </div>
  </li>
);

const FaqContainer = ({
  handleToggleTab,
  data = [],
  isLoading,
  currentTab,
}: FabContainerProps) => {
  // if isLoading then render skeleton UI
  if (isLoading) {
    return (
      <article className="flex flex-col gap-4">
        <SearchBar paramKey="search" title="FAQ" />
        <div className="space-y-3">
          <FaqTabs handleToggleTab={handleToggleTab} currentTab={currentTab} />
          <ul className="space-y-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <SkeletonItem key={`skeleton-${i}`} />
            ))}
          </ul>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col gap-4">
      <SearchBar paramKey="search" title="FAQ" />

      <div className="space-y-3">
        {/* TAB LIST */}
        <FaqTabs handleToggleTab={handleToggleTab} currentTab={currentTab} />

        {/* FAQ Cards List */}
        <ul className="space-y-3">
          {(data ?? [])
            .filter((faqData) =>
              currentTab === "" || currentTab === null
                ? true
                : faqData.category === currentTab
            )
            .map((faqData) => (
              <li key={faqData.id}>
                <FaqCard title={faqData.title} content={faqData.content} />
                <hr className="border-0 h-[0.5px] bg-[#fff]" />
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
};

export default FaqContainer;
