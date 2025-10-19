interface PostTopicProps {
  content: string;
  img?: string;
  onClick?: () => void;
  selected?: boolean;
}

export default function PostTopic({
  content,
  img,
  onClick,
  selected,
}: PostTopicProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3.5 py-2.5 text-xs rounded-[100px] flex items-center justify-center gap-2 whitespace-nowrap border
        transition duration-300 ease-in-out
        ${
          selected
            ? "bg-[#A3F1F2] text-black border-none "
            : "bg-transparent text-[#999] border-[#5C5C5C]"
        }
      `}
    >
      <span>{content}</span>
      {img && <img src={img} alt={content} className="w-3 h-3" />}
    </button>
  );
}
