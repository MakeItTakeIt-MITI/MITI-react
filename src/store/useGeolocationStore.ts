// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface GeolocationField {
//     location: { latitude: number; longitude: number };
//     setCurrentMyLocation: (arg: number, arg2: number) => void;
// }

// const useGeolocationStore = create(
//     persist<GeolocationField>(
//         (set) => ({
//             location: { latitude: 0, longitude: 0 },
//             setCurrentMyLocation: (latitude, longitude) => {
//                 set({ location: { latitude, longitude } });
//             }
//         }),
//         {
//             name: 'geolocationData',
//         }
//     )
// );

// export default useGeolocationStore;
