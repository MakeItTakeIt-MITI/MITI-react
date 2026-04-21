import { create } from 'zustand';

interface LatLongField {
    latitude: string | null;
    longitude: string | null;
    setLatitude: (arg: string) => void;
    setLongitude: (arg: string) => void

}


const useLatLongStore = create<LatLongField>((set) => ({
    latitude: null,
    longitude: null,
    setLatitude: (lat) => set({ latitude: lat }),
    setLongitude: (long) => set({ longitude: long }),

}));

export default useLatLongStore;
