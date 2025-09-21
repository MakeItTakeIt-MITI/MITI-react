import like_button_small from "../../../../assets/v1.3/icon/like-icon-sm.svg";
import Avatar from "../../../common/components(renewal)/avatar/Avatar";
import { UserCommentsField } from "../../interface/comments";

interface ReplyCommentProps {
  reply: UserCommentsField;
  formatDate: (date: string) => React.ReactNode;
}

const ReplyComment = ({ reply, formatDate }: ReplyCommentProps) => {
  return (
    <div key={reply.id} className="flex items-start gap-3 pb-3">
      <Avatar size="xs" />
      <div className="space-y-3 text-[10px]">
        <div>
          <span className=" font-bold text-white">{reply.writer.nickname}</span>
          <p className=" text-[#707070]">{formatDate(reply.created_at)}</p>
        </div>
        <p style={{ whiteSpace: "pre-line" }} className="text-white text-xs">
          {reply.content}
        </p>
        <div className="flex items-center gap-1.5 text-[10px] text-[#737373] font-[500]">
          <div className="flex items-center gap-1">
            <img src={like_button_small} alt={like_button_small} />
            <div className="flex gap-[2px]">
              <span>좋아요</span>
              <span>{reply.liked_users.length}</span>
            </div>
          </div>
        </div>
        <hr className="bg-[#5C5C5C] h-[1px]  w-full block" />
      </div>
    </div>
  );
};

export default ReplyComment;
