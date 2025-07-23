import { DistrictEnum } from "../enum/courts.ts";

export const DistrictLabel: Record<DistrictEnum, string> = {
    [DistrictEnum.SEOUL]: "서울",
    [DistrictEnum.GYEONGGI]: "경기",
    [DistrictEnum.INCHEON]: "인천",
    [DistrictEnum.BUSAN]: "부산",
    [DistrictEnum.DAEGU]: "대구",
    [DistrictEnum.GWANGJU]: "광주",
    [DistrictEnum.DAEJEON]: "대전",
    [DistrictEnum.ULSAN]: "울산",
    [DistrictEnum.SEJONG]: "세종",
    [DistrictEnum.GANGWON]: "강원",
    [DistrictEnum.CHUNGBUK]: "충북",
    [DistrictEnum.CHUNGNAM]: "충남",
    [DistrictEnum.JEONBUK]: "전북",
    [DistrictEnum.JEONNAM]: "전남",
    [DistrictEnum.GYEONGBUK]: "경북",
    [DistrictEnum.GYEONGNAM]: "경남",
    [DistrictEnum.JEJU]: "제주",
};

// 수도권 vs 비수도권 구분
export const DistrictRegion: Record<DistrictEnum, "수도권" | "비수도권"> = {
    [DistrictEnum.SEOUL]: "수도권",
    [DistrictEnum.GYEONGGI]: "수도권",
    [DistrictEnum.INCHEON]: "수도권",
    [DistrictEnum.BUSAN]: "비수도권",
    [DistrictEnum.DAEGU]: "비수도권",
    [DistrictEnum.GWANGJU]: "비수도권",
    [DistrictEnum.DAEJEON]: "비수도권",
    [DistrictEnum.ULSAN]: "비수도권",
    [DistrictEnum.SEJONG]: "비수도권",
    [DistrictEnum.GANGWON]: "비수도권",
    [DistrictEnum.CHUNGBUK]: "비수도권",
    [DistrictEnum.CHUNGNAM]: "비수도권",
    [DistrictEnum.JEONBUK]: "비수도권",
    [DistrictEnum.JEONNAM]: "비수도권",
    [DistrictEnum.GYEONGBUK]: "비수도권",
    [DistrictEnum.GYEONGNAM]: "비수도권",
    [DistrictEnum.JEJU]: "비수도권",
};
