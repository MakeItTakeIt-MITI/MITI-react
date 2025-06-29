import manners from "../../../../assets/v1.3/banners-sm/banner-manners-sm.png";
import community from "../../../../assets/v1.3/banners-sm/banner-community-sm.png";
import chat from "../../../../assets/v1.3/banners-sm/banner-chat-sm.png";
import seoul_court from "../../../../assets/v1.3/banners-sm/banner-seoul-court-sm.png";
import incheon_court from "../../../../assets/v1.3/banners-sm/banner-incheon-court-sm.png";
import dongtan_court from "../../../../assets/v1.3/banners-sm/banner-dongtan-court-sm.png";

type BannerType =
  | "manners"
  | "community"
  | "chat"
  | "seoul_court"
  | "incheon_court"
  | "dongtan_court";

interface BannerSmallProps {
  type: BannerType;
}

export default function BannerSmall({ type }: BannerSmallProps) {
  let bannerImg;
  switch (type) {
    case "manners":
      bannerImg = manners;
      break;
    case "community":
      bannerImg = community;
      break;
    case "chat":
      bannerImg = chat;
      break;
    case "seoul_court":
      bannerImg = seoul_court;
      break;
    case "incheon_court":
      bannerImg = incheon_court;
      break;
    case "dongtan_court":
      bannerImg = dongtan_court;
      break;
    default:
      bannerImg = manners;
      break;
  }
  return (
    <div>
      {" "}
      <img src={bannerImg} alt={type} />
    </div>
  );
}
