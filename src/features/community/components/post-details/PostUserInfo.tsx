import Avatar from "../../../common/components(renewal)/avatar/Avatar.tsx";

const PostUserInfo = ({
  nickname,
  date,
  size,
}: {
  nickname: string;
  date: string;
  size: "xs" | "s" | "m" | "l" | "xl";
}) => {
  const formatDate = (iso: string) => {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    const pad = (n: number) => String(n).padStart(2, "0");
    const yyyy = d.getFullYear();
    const mm = pad(d.getMonth() + 1);
    const dd = pad(d.getDate());
    const hh = pad(d.getHours());
    const min = pad(d.getMinutes());
    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
  };
  return (
    <div className="flex items-center gap-2.5">
      <Avatar size={size} />
      <div className="space-y-1">
        <span className="text-sm font-bold text-white">{nickname}</span>
        <p className="text-xs text-[#707070]">{formatDate(date)}</p>
      </div>
    </div>
  );
};

export default PostUserInfo;
