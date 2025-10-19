export const Fee = ({ fee }: { fee: number }) => {
  return (
    <h2 className="text-primary-teal font-bold text-lg">
      {fee === 0
        ? "무료"
        : fee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}
    </h2>
  );
};