import { useSearchParams } from "react-router-dom";
import Sidebar from "../../features/courts/components/v1.3/Sidebar.tsx";
import { useCallback, useState } from "react";
import SearchBar from "../../features/games/components/game-list/SearchBar.tsx";
import CourtsListContainer from "../../features/courts/components/v1.3/CourtsListContainer.tsx";
import { useAllCourts } from "../../features/courts/hooks/query/useAllCourts.tsx";

export default function Courts() {
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

  const { data: courtsData } = useAllCourts();
  const courstDataPage = courtsData?.pages[0].data.page_content;
  console.log(courstDataPage);

  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto  w-[968px] flex flex-col items-center gap-[30px] py-[30px]"
    >
      <article className="flex gap-[30px]">
        <Sidebar handleSelectRegion={handleSelectRegion} />
        <div className=" w-[800px] min-h-[1px] flex flex-col gap-[20px]">
          <SearchBar setInputContent={setInputContent} title="경기장" />
          <CourtsListContainer courstDataPage={courstDataPage} />
        </div>
      </article>
    </section>
  );
}
