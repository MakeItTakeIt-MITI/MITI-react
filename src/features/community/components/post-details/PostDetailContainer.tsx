import PostUserInfo from "./PostUserInfo.tsx";
import like_button_medium from "../../../../assets/v1.3/icon/like-icon-md.svg";

import share_button from "../../../../assets/v1.3/icon/share-icon-md.svg";
import { CategoryType, CommunityPostDetail } from "../../interface/post.ts";
// import LikeCommentFeatures from "./LikeCommentFeatures.tsx";
import CommentsContainer from "./CommentsContainer.tsx";
import { UserCommentsField } from "../../interface/comments.ts";
import PostCategoryChip from "../PostCategoryChip.tsx";

interface PostDetailContainerProps {
  postDetails: CommunityPostDetail;
  postComments: any;
  handleSharePost?: () => void;
}

const PostDetailContainer = ({
  postDetails,
  postComments,
  handleSharePost,
}: PostDetailContainerProps) => {
  return (
    <article className="w-full flex flex-col gap-6">
      {/* <SearchBar paramKey="search" title="게시글" /> */}
      <div className="space-y-4">
        {/* Uploaded Post */}
        <div className="space-y-4">
          <PostCategoryChip category={postDetails?.category as CategoryType} />

          {/* Post User Info */}
          <PostUserInfo
            size="s"
            nickname={postDetails?.writer.nickname}
            date={postDetails?.created_at}
          />
          {/* Post Content */}
          <p
            style={{ whiteSpace: "pre-line" }}
            className="font-base text-white font-normal"
          >
            {postDetails?.content}
          </p>
          <div className="flex flex-col gap-2">
            {postDetails?.images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Post Image ${index + 1}`}
                className="w-full max-w-[700px] h-auto "
              />
            ))}
          </div>
          {/* LIKES & SHARE */}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5 text-base text-[#737373] font-[500]">
            <div className="flex items-center gap-2">
              <img src={like_button_medium} alt={like_button_medium} />

              <div className="flex gap-[2px]">
                <span>좋아요</span>
                <span>{postDetails?.liked_users.length}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSharePost}
              className="flex items-center gap-2"
            >
              <img src={share_button} alt={share_button} />
              <span>공유하기</span>
            </button>
          </div>
          <h4 className="font-bold text-sm text-white">댓글</h4>
          {/* COMMENTS */}
          {postComments?.data.map((comment: UserCommentsField) => (
            <CommentsContainer key={comment.id} postComments={comment} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default PostDetailContainer;
