interface GameTitleProps {
  title: string;
}

export default function GameTitle({ title }: GameTitleProps) {
  return (
    <h1
      className={`font-bold text-base ${title.length > 64 ? "truncate" : ""}`}
    >
      {title}
    </h1>
  );
}
