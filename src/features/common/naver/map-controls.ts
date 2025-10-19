export function setGeolocation(setGeoLatitude: (arg: number) => void, setGeoLongtitude: (arg: number) => void) {

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            setGeoLatitude(latitude);
            setGeoLongtitude(longitude);
            return;
        },
        (error) => {
            console.error("geolocation error:", error.message);
        }
    );

}