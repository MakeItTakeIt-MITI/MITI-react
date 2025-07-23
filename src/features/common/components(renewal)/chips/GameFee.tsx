interface GameFeeProps {
  fee: number;
  size: "md" | "lg";
}

export default function GameFee({ fee, size }: GameFeeProps) {
  return (
    <p
      style={{
        fontSize: size === "lg" ? "18px" : "16px",
      }}
      className="text-[#7FEEF0] font-bold "
    >
      {fee === 0
        ? "무료"
        : fee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}
    </p>
  );
}
