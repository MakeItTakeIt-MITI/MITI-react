interface LikeCommentFeaturesProps {
  likes_src?: string;
  likes_count?: number;
  comment_src?: string;
  comments_count?: number;
}

const LikeCommentFeatures = ({
  likes_src,
  likes_count,
  comment_src,
  comments_count,
}: LikeCommentFeaturesProps) => {
  return (
    <div className="flex items-center gap-1.5 text-xs text-[#737373] font-[500]">
      <div className="flex items-center gap-1">
        <button type="button">
          <img src={likes_src} alt={likes_src} />
        </button>
        <div className="flex gap-[2px]">
          <span>좋아요</span>
          <span>{likes_count}</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button type="button">
          <img src={comment_src} alt={comment_src} />
        </button>
        <div className="flex gap-[2px]">
          <span>댓글</span>
          <span>{comments_count}</span>
        </div>
      </div>
    </div>
  );
};

export default LikeCommentFeatures;
