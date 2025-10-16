import closeIcon from "../../../../assets/v1.3/chip/status_close.svg";

interface StatusProps {
  status: string;
}

export default function Status({ status }: StatusProps) {
  return (
    <span className="bg-[#292929] text-[#1ADCDF] text-sm font-[500] flex items-center gap-1 px-4 py-2  rounded-[50px] border border-[#292929]">
      <span>{status}</span>
      <img src={closeIcon} alt="status icon" className="ml-1" />
    </span>
  );
}
