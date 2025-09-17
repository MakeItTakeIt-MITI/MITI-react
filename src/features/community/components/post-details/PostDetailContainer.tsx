import SearchBar from "../../../common/components(renewal)/search/SearchBar.tsx";
import PostUserInfo from "./PostUserInfo.tsx";
import like_button_medium from "../../../../assets/v1.3/icon/like-icon-md.svg";

import share_button from "../../../../assets/v1.3/icon/share-icon-md.svg";
import { CommunityPostDetail } from "../../interface/post.ts";
import LikeCommentFeatures from "./LikeCommentFeatures.tsx";
import CommentsContainer from "./CommentsContainer.tsx";
import { UserCommentsField } from "../../interface/comments.ts";

interface PostDetailContainerProps {
  postDetails: CommunityPostDetail;
  postComments: any;
}

const PostDetailContainer = ({
  postDetails,
  postComments,
}: PostDetailContainerProps) => {
  return (
    <article className="w-full flex flex-col gap-6">
      <SearchBar paramKey="search" title="게시글" />
      <div className="space-y-4">
        {/* Uploaded Post */}
        <div className="space-y-4">
          {/* Post User Info */}
          <PostUserInfo size="s" nickname={postDetails?.writer.nickname} />
          {/* Post Content */}
          <p className="font-base text-white font-normal">
            {postDetails?.content}
          </p>
          {/* LIKES & SHARE */}
        </div>
        <div className="flex flex-col gap-3">
          {/* Reply Section */}
          <LikeCommentFeatures
            likes_src={like_button_medium}
            likes_count={postDetails?.liked_users.length}
            comment_src={share_button}
            comments_count={postDetails?.num_of_comments}
          />
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
