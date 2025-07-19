import manners from "../../../../assets/v1.3/banners-md/manners-md.png";
import community from "../../../../assets/v1.3/banners-md/community-md.png";
import chat from "../../../../assets/v1.3/banners-md/chat-md.png";
import seoul_court from "../../../../assets/v1.3/banners-md/seoul-court-md.png";
import incheon_court from "../../../../assets/v1.3/banners-md/incheon-court-md.png";
import dongtan_court from "../../../../assets/v1.3/banners-md/dongtan-court-md.png";

type BannerType =
  | "manners"
  | "community"
  | "chat"
  | "seoul_court"
  | "incheon_court"
  | "dongtan_court";

interface BannerMediumProps {
  type: BannerType;
}

export default function BannerMedium({ type }: BannerMediumProps) {
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
    <div className="w-[800px]">
      <img src={bannerImg} alt={type} />
    </div>
  );
}
