import settings_mobile from "../../../../assets/v1.3/games/settings_icon.png";
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
          <img src={settings_mobile} alt="settings_mobile" />
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
