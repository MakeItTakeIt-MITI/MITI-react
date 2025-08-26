export function useCalculateDistance(
    lat1: string,
    lon1: string,
    lat2: string | number,
    lon2: string | number
): number {
    const R = 6371;
    const dLat = (Number(lat2) - Number(lat1)) * (Math.PI / 180);
    const dLon = (Number(lon2) - Number(lon1)) * (Math.PI / 180);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(Number(lat1) * (Math.PI / 180)) *
        Math.cos(Number(lat2) * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}