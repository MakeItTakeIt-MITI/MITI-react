import { useSearchParams } from "react-router-dom";
import { useCallback, useState } from "react";
import SearchBar from "../../features/games/components/game-list/SearchBar.tsx";
import Sidebar from "../../features/courts/components/renewal/Sidebar.tsx";
import MediumMap from "../../features/naver_map/components/MediumMap.tsx";
import CourtGamesContainer from "../../features/courts/components/renewal/CourtGamesContainer.tsx";

export default function CourtDetails() {
  const [inputContent, setInputContent] = useState("");
  console.log(inputContent);

  const [searchParams, setSearchParams] = useSearchParams();

  // callback function to filter by region
  const handleSelectRegion = useCallback(
    (region: string) => {
      const params = Object.fromEntries(searchParams.entries());

      // toggle
      if (searchParams.get("region") === region) {
        const { ...rest } = params;
        setSearchParams({ ...rest, region: "" });
      } else {
        setSearchParams({ ...params, region });
      }
    },

    [setSearchParams, searchParams]
  );

  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto  w-[968px] min-h-[840px] flex flex-col items-center gap-[30px] py-[30px]"
    >
      <article className="flex gap-6">
        <Sidebar handleSelectRegion={handleSelectRegion} />
        <div className=" w-[800px] min-h-[1px] flex flex-col gap-[20px]">
          <SearchBar setInputContent={setInputContent} title="경기장" />
          {/* <CourtsListContainer /> */}
          <div className="flex gap-[30px]">
            <MediumMap id="court_details_map" />
            <CourtGamesContainer />
          </div>
        </div>
      </article>
    </section>
  );
}
