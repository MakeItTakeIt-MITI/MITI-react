import { useState } from "react";
import SearchBar from "../../games/components/game-list/SearchBar.tsx";
import FaqTabs from "./FaqTabs.tsx";
import FaqCard from "./FaqCard.tsx";

interface FabContainerProps {
  handleToggleTab: (arg: string) => void;
  handleSearch: (arg: string) => void;
}

const FaqContainer = ({ handleToggleTab, handleSearch }: FabContainerProps) => {
  return (
    <article className="flex flex-col gap-4">
      <SearchBar title="FAQ" />

      <div className="space-y-3">
        {/* TAB LIST */}
        <FaqTabs handleToggleTab={handleToggleTab} />
        {/* FAQ Cards List */}

        <ul className="space-y-3">
          <FaqCard />
          <hr className="bg-[#5C5C5C]" />
          <FaqCard />
          <hr className="bg-[#5C5C5C]" />
          <FaqCard />
          <hr className="bg-[#5C5C5C]" />
          <FaqCard />
          <hr className="bg-[#5C5C5C]" />
        </ul>
      </div>
    </article>
  );
};

export default FaqContainer;
