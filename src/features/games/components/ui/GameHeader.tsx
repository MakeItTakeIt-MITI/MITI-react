import settings_mobile from "../../../../assets/v1.3/games/settings_icon.png";
import MobileSettingsContainer from "../filters/game-filter/mobile/MobileSettingsContainer.tsx";

interface GameHeaderProps {
  gameCount: number;
  handleToggleMobileFilterBox: () => void;
  selectedProvince: string[];
  handleResetProvince: () => void;
}

export default function GameHeader({
  gameCount,
  handleToggleMobileFilterBox,
  selectedProvince,
  handleResetProvince,
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
      <MobileSettingsContainer
        handleToggleMobileFilterBox={handleToggleMobileFilterBox}
        selectedProvince={selectedProvince}
        handleResetProvince={handleResetProvince}
      />
    </div>
  );
}
