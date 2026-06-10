interface GameFeeProps {
  fee: number;
  size: "md" | "lg" | "xl";
}

export default function GameFee({ fee, size }: GameFeeProps) {
  return (
    <span
      style={{
        fontSize: size === "xl" ? "20px" : size === "lg" ? "18px" : "16px",
      }}
      className="text-[#7FEEF0] font-bold"
    >
      {fee !== 0 ? fee.toLocaleString("kr") + " 원" : "무료"}
    </span>
  );
}
