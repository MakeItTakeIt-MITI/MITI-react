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
      {fee !== 0 ? fee + " 원" : "무료"}
    </p>
  );
}
