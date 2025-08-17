import SearchBar from "../../games/components/game-list/SearchBar.tsx";
import FaqTabs from "./FaqTabs.tsx";
import FaqCard from "./FaqCard.tsx";
import { FaqDataField } from "../interface/faq.ts";

interface FabContainerProps {
  handleToggleTab: (arg: string) => void;
  setInputContent: (arg: string) => void;
  data: FaqDataField[];
  isLoading: boolean;
}

const FaqContainer = ({
  handleToggleTab,
  setInputContent,
  data,
  isLoading,
}: FabContainerProps) => {
  console.log("from container", data);
  return (
    <article className="flex flex-col gap-4">
      <SearchBar setInputContent={setInputContent} title="FAQ" />

      <div className="space-y-3">
        {/* TAB LIST */}
        <FaqTabs handleToggleTab={handleToggleTab} />
        {/* FAQ Cards List */}

        <ul className="space-y-3">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {data.map((faqData: FaqDataField) => (
                <>
                  <FaqCard title={faqData.title} content={faqData.content} />
                  <hr className="bg-[#5C5C5C]" />
                </>
              ))}
            </>
          )}
        </ul>
      </div>
    </article>
  );
};

export default FaqContainer;
