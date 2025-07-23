import { DistrictEnum } from "../enum/courts.ts";


export const DistrictLabel: Record<DistrictEnum, string> = {
    [DistrictEnum.서울]: "서울",
    [DistrictEnum.경기]: "경기",
    [DistrictEnum.인천]: "인천",
    [DistrictEnum.부산]: "부산",
    [DistrictEnum.대구]: "대구",
    [DistrictEnum.광주]: "광주",
    [DistrictEnum.대전]: "대전",
    [DistrictEnum.울산]: "울산",
    [DistrictEnum.세종]: "세종",
    [DistrictEnum.강원]: "강원",
    [DistrictEnum.충북]: "충북",
    [DistrictEnum.충남]: "충남",
    [DistrictEnum.전북]: "전북",
    [DistrictEnum.전남]: "전남",
    [DistrictEnum.경북]: "경북",
    [DistrictEnum.경남]: "경남",
    [DistrictEnum.제주]: "제주",
};

export const DistrictRegion: Record<DistrictEnum, "수도권" | "비수도권"> = {
    [DistrictEnum.서울]: "수도권",
    [DistrictEnum.경기]: "수도권",
    [DistrictEnum.인천]: "수도권",
    [DistrictEnum.부산]: "비수도권",
    [DistrictEnum.대구]: "비수도권",
    [DistrictEnum.광주]: "비수도권",
    [DistrictEnum.대전]: "비수도권",
    [DistrictEnum.울산]: "비수도권",
    [DistrictEnum.세종]: "비수도권",
    [DistrictEnum.강원]: "비수도권",
    [DistrictEnum.충북]: "비수도권",
    [DistrictEnum.충남]: "비수도권",
    [DistrictEnum.전북]: "비수도권",
    [DistrictEnum.전남]: "비수도권",
    [DistrictEnum.경북]: "비수도권",
    [DistrictEnum.경남]: "비수도권",
    [DistrictEnum.제주]: "비수도권",
};