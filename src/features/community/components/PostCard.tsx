import { Link } from "react-router-dom";
import { PostField } from "../interface/community";
import PostCategoryChip from "./PostCategoryChip";
import { CategoryType } from "../interface/post";

interface PostcardProps {
  post: PostField;
}

export const PostCard = ({ post }: PostcardProps) => {
  const getDaysAgo = (createdAt: string): string => {
    const createdDate = new Date(createdAt);
    const today = new Date();

    const msPerDay = 1000 * 60 * 60 * 24;
    const diffTime = today.getTime() - createdDate.getTime();
    const diffDays = Math.floor(diffTime / msPerDay);

    if (diffDays === 0) return "오늘";
    if (diffDays === 1) return "1일전";
    return `${diffDays}일전`;
  };

  return (
    <li className="">
      <Link to={`/community/${post.id}`}>
        <div className=" flex flex-col gap-3">
          <div className="flex items-center justify-between text-[10px] font-[400] text-[#525252]">
            <PostCategoryChip category={post.category as CategoryType} />
            <span>{getDaysAgo(post.created_at.slice(0, 10))}</span>
          </div>
          <div className="flex justify-between gap-4">
            <div className="space-y-4">
              <div className="space-y-3">
                <h1 className="font-bold text-white ">{post.title}</h1>
                <p className={`text-xs font-[400] text-white  `}>
                  {post.content.length > 52
                    ? post.content.slice(0, 52)
                    : post.content}
                </p>
              </div>
              <div className="space-x-[3px] text-xs text-[#5C5C5C] font-[400]">
                <span>{post.writer.nickname}</span>
                <span>댓글 {post.num_of_comments}</span>
                <span>좋아요 {post.liked_users.length}</span>
              </div>
            </div>
            <div className="size-[60px] bg-white rounded-lg">
              <img
                className="h-full w-full "
                src={post.writer.profile_image_url}
                alt="profile img"
              />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
