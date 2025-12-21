import useGameStatusStore from "../../store/useGameStatusStore";

const GameStatusContainer = () => {
  const { gameStatusArray, toggleStatusSelection } = useGameStatusStore();

  return (
    <div
      role="group"
      aria-label="게임 상태 선택"
      className="flex flex-col gap-4"
    >
      <p className="font-bold text-sm text-[#fff]">경기 상태</p>
      <div className="flex md:flex-col gap-2.5">
        <div className="flex gap-2.5">
          {gameStatusArray[0].map((gameStatus, cellIndex) => (
            <span
              style={{
                backgroundColor: gameStatus.isSelected ? "#1ADCDF" : "",
                color: gameStatus.isSelected ? "#000" : "#999",
                borderColor: gameStatus.isSelected ? "#1ADCDF" : "#707070",
                fontWeight: gameStatus.isSelected ? "500" : "normal",
              }}
              className="py-2.5 px-3  text-sm rounded-[50px] border transition-all duration-500 ease-in-out"
            >
              <button
                onClick={() => toggleStatusSelection(0, cellIndex)}
                type="button"
              >
                {gameStatus.tag}
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2.5">
          {gameStatusArray[1].map((gameStatus, cellIndex) => (
            <span
              key={gameStatus.status}
              style={{
                backgroundColor: gameStatus.isSelected ? "#1ADCDF" : "",
                color: gameStatus.isSelected ? "#000" : "#999",
                borderColor: gameStatus.isSelected ? "#1ADCDF" : "#707070",
                fontWeight: gameStatus.isSelected ? "500" : "normal",
              }}
              className="py-2.5 px-3  text-sm rounded-[50px] border transition-all duration-500 ease-in-out"
            >
              <button
                onClick={() => toggleStatusSelection(1, cellIndex)}
                type="button"
              >
                {gameStatus.tag}
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameStatusContainer;
