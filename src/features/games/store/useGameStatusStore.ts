import {create} from 'zustand';

interface GameStatus {
  status: string;
  tag: string;
  isSelected: boolean;
}

interface GameStatusState {
  gameStatusArray: GameStatus[][];
  toggleStatusSelection: (rowIndex: number, cellIndex: number) => void;
  resetAllStatuses: () => void;
}

const useGameStatusStore = create<GameStatusState>((set) => ({
  gameStatusArray: [
    [
      { status: "open", tag: '모집 중', isSelected: true },
      { status: "closed", tag: '모집 마감', isSelected: true },
    ],
    [
      { status: "canceled", tag: '경기 취소', isSelected: true },
      { status: "completed", tag: '경기 완료', isSelected: true },
    ],
  ],

  toggleStatusSelection: (rowIndex: number, cellIndex: number) => {
    set((state: GameStatusState) => {
      const newArray = state.gameStatusArray.map((row: GameStatus[], rIndex: number) => {
        if (rIndex === rowIndex) {
          return row.map((cell: GameStatus, cIndex: number) => {
            if (cIndex === cellIndex) {
              return { ...cell, isSelected: !cell.isSelected }; // Toggle isSelected
            }
            return cell;
          });
        }
        return row;
      });
      return { gameStatusArray: newArray };
    });
  },

  resetAllStatuses: () => {
    set((state: GameStatusState) => ({
      gameStatusArray: state.gameStatusArray.map((row: GameStatus[]) =>
        row.map((status: GameStatus) => ({
          ...status,
          isSelected: true
        }))
      )
    }));
  },
 
}));

export default useGameStatusStore;
