import avatar_xs from "../../../../assets/v1.3/avatar/size-xs.png";
import avatar_s from "../../../../assets/v1.3/avatar/size-s.png";
import avatar_m from "../../../../assets/v1.3/avatar/size-m.png";
import avatar_l from "../../../../assets/v1.3/avatar/size-l.png";
import avatar_xl from "../../../../assets/v1.3/avatar/size-xl.png";

const avatarMap = {
  xs: avatar_xs,
  s: avatar_s,
  m: avatar_m,
  l: avatar_l,
  xl: avatar_xl,
};

export default function Avatar({
  size,
}: {
  size: "xs" | "s" | "m" | "l" | "xl";
}) {
  return <img src={avatarMap[size]} alt="Avatar" />;
}
