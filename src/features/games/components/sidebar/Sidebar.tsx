import { useSearchParams } from "react-router-dom";
import DatesField from "./DatesField.tsx";
import ResetStatusField from "./ResetStatusField.tsx";
import TimesField from "./TimesField.tsx";
import { useCallback } from "react";
import GameStatusContainer from "./GameStatusContainer.tsx";
import RegionField from "./RegionField.tsx";
export default function Sidebar() {
  const [searchParams, setSearchParams] = useSearchParams();

  // !       {/* TEMPORARILY DISABLED UNDER FURTHER UPDATE */}
  // callback function to filter by province
  const handleSelectRegion = useCallback(
    (province: string) => {
      const params = Object.fromEntries(searchParams.entries());

      // Keep all the current game_status values
      const gameStatuses = searchParams.getAll("game_status");

      // Toggle province
      let updatedParams: Record<string, string | string[]> = {
        ...params,
        province,
      };

      if (searchParams.get("province") === province) {
        // remove province if toggled off
        const { province: _, ...rest } = params;
        updatedParams = { ...rest };
      }

      // Ensure game_status values persist
      setSearchParams(() => {
        const newParams = new URLSearchParams(updatedParams as any);
        gameStatuses.forEach((status) => {
          newParams.append("game_status", status);
        });
        return newParams;
      });
    },
    [setSearchParams, searchParams]
  );

  return (
    <aside
      style={{
        width: "238px",
        height: "",
      }}
      className="p-4 sm:hidden md:flex flex-col gap-5 "
    >
      {/* reset all filters */}
      <ResetStatusField />

      {/* date selector (updates year, month, day in URL) */}
      <DatesField />

      {/* time selector */}
      <TimesField />

      <GameStatusContainer />

      {/* province filter */}
      {/* TEMPORARILY DISABLED UNDER FURTHER UPDATE */}
      <RegionField handleSelectProvince={handleSelectRegion} />
    </aside>
  );
}
