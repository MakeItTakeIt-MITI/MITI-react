import filter_icon from "../../../../assets/images/filter.svg";
import CurrentFilterSettings from "../filters/game-filter/mobile/CurrentFilterSettings.tsx";

interface GameHeaderProps {
  gameCount: number;
  handleToggleMobileFilterBox: () => void;
  selectedProvince: string[];
  handleResetProvince: () => void;
  tab: string;
}

export default function GameHeader({
  gameCount,
  handleToggleMobileFilterBox,
  selectedProvince,
  handleResetProvince,
  tab,
}: GameHeaderProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-[400] text-white">
          총 {gameCount}개의 경기
        </span>
        <button
          className="md:hidden sm:block"
          onClick={handleToggleMobileFilterBox}
          type="button"
        >
          <img src={filter_icon} alt="filter_icon" />
        </button>
      </div>

      {/* Mobile Game Status */}
      <CurrentFilterSettings
        handleToggleMobileFilterBox={handleToggleMobileFilterBox}
        selectedProvince={selectedProvince}
        handleResetProvince={handleResetProvince}
        tab={tab}
      />
    </div>
  );
}
