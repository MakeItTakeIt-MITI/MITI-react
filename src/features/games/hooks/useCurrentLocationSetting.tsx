export const useCurrentLocationSetting = ({ setGeolocation }: { setGeolocation: (coords: { lat: number; lon: number }) => void }) => {

 if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => console.log(err.message),
        { enableHighAccuracy: true }
      );
    }

}
