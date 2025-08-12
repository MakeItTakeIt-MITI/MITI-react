import { useSearchParams } from "react-router-dom";
import Sidebar from "../../features/courts/components/Sidebar.tsx";
import { useCallback } from "react";

export default function Courts() {
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
      className="mx-auto  w-[968px] flex flex-col items-center gap-[30px] py-[30px]"
    >
      <article className="flex gap-[30px]">
        <Sidebar handleSelectRegion={handleSelectRegion} />
        <div className=" w-[700px] min-h-[1px] flex flex-col gap-[20px]"></div>
      </article>
    </section>
  );
}
