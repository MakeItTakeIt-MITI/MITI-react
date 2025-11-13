import { create } from "zustand";

interface ProvinceCell {
    province: string;
    isSelected: boolean;
}

interface ProvinceState {
    provinces: ProvinceCell[];
    toggleProvince: (index: number) => void;
    toggleProvinceByName: (name: string) => void;
    resetAll: (selected?: boolean) => void;
    selectedProvinces: () => string[];
}

const REGION_LIST = [
    "서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산", "세종",
    "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주",
];

export const useProvinceStore = create<ProvinceState>((set, get) => ({
    provinces: REGION_LIST.map((p) => ({ province: p, isSelected: true })),

    toggleProvince: (index) =>
        set((state) => ({
            provinces: state.provinces.map((cell, i) =>
                i === index ? { ...cell, isSelected: !cell.isSelected } : cell
            ),
        })),

    toggleProvinceByName: (name) =>
        set((state) => ({
            provinces: state.provinces.map((cell) =>
                cell.province === name
                    ? { ...cell, isSelected: !cell.isSelected }
                    : cell
            ),
        })),

    resetAll: (selected = true) =>
        set((state) => ({
            provinces: state.provinces.map((cell) => ({
                ...cell,
                isSelected: selected,
            })),
        })),

    selectedProvinces: () =>
        get().provinces.filter((p) => p.isSelected).map((p) => p.province),
}));