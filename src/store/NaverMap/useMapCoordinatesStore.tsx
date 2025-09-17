import { create } from "zustand";

interface Coordinates {
  lat: string;
  long: string;
}

interface MapCoordinatesState {
  coordinates: Coordinates;
  setCoordinates: (lat: string, long: string) => void;
}

export const useMapCoordinatesStore = create<MapCoordinatesState>((set) => ({
  coordinates: { lat: "37.554722", long: "126.972778" },
  setCoordinates: (lat, long) => set({ coordinates: { lat, long } }),
}));
