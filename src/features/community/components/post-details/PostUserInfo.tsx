import Avatar from "../../../common/components(renewal)/avatar/Avatar.tsx";

const PostUserInfo = ({
  size,
  nickname,
  year,
  month,
  day,
  time,
}: {
  size: "xs" | "s" | "m" | "l" | "xl";
}) => {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar size={size} />
      <div className="space-y-1">
        <span className="text-sm font-bold text-white">{nickname}</span>
        <p className="text-xs text-[#707070]">2023.10.01 12:00</p>
      </div>
    </div>
  );
};

export default PostUserInfo;
