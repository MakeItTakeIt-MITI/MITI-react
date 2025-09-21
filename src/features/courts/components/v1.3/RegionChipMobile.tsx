interface RegionChipMobileProps {
  region: string;
  isSelected: boolean;
  onClick?: (region: string) => void | undefined;
}

const RegionChipMobile = ({
  region,
  isSelected,
  onClick,
}: RegionChipMobileProps) => (
  <li
    onClick={() => onClick && onClick(region)}
    className={`
       whitespace-nowrap py-2 px-2.5 text-xs rounded-[50px] border cursor-pointer flex items-center justify-center
      ${
        isSelected
          ? "bg-[#1ADCDF] border-none text-[#000]"
          : "bg-transparent border-[#707070] text-[#999]"
      }
    `}
  >
    {region}
  </li>
);

export default RegionChipMobile;
