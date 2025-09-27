import like_button_small from "../../../../assets/v1.3/icon/like-icon-sm.svg";
import comment_button from "../../../../assets/v1.3/icon/comment-icon-sm.svg";
import LikeCommentFeatures from "./LikeCommentFeatures";
import Avatar from "../../../common/components(renewal)/avatar/Avatar";
import { UserCommentsField } from "../../interface/comments";
import ReplyComment from "./ReplyComment";

interface CommentsContainerProps {
  postComments: UserCommentsField;
}

const CommentsContainer = ({ postComments }: CommentsContainerProps) => {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    const mm = (date.getMonth() + 1).toString().padStart(2, "0");
    const dd = date.getDate().toString().padStart(2, "0");
    const hh = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");
    return `${yyyy}.${mm}.${dd} ${hh}:${min}`;
  }
  return (
    <div className="flex items-start gap-3 pb-3">
      <Avatar size="xs" />
      <div className="space-y-3">
        <div>
          <span className="text-sm font-bold text-white">
            {postComments?.writer.nickname}
          </span>
          <p className="text-xs text-[#707070]">
            {" "}
            {formatDate(postComments?.created_at)}
          </p>
        </div>
        <p className="text-white text-xs">{postComments?.content}</p>
        <LikeCommentFeatures
          likes_src={like_button_small}
          likes_count={postComments?.liked_users.length}
          comment_src={comment_button}
          comments_count={postComments?.reply_comments.length}
        />
        {/* <hr className="bg-[#5C5C5C] h-[1px]  w-full" /> */}
        {/* Reply Section   */}
        {postComments.reply_comments.length >= 1 &&
          postComments.reply_comments.map((reply) => (
            <ReplyComment reply={reply} formatDate={formatDate} />
          ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
