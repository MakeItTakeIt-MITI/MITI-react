import RegionField from "../../../games/components/sidebar/ProvinceField.tsx";

interface CourtsSidebarProps {
  toggleProvince: (arg: string) => void;
  selectedProvince: string[];
}

const CourtsSidebar = ({
  toggleProvince,
  selectedProvince,
}: CourtsSidebarProps) => {
  return (
    <aside
      className=" sm:hidden md:flex flex-col gap-5 p-4 "
      style={{ width: "238px" }}
    >
      <h1 className="text-white font-bold text-base">필터</h1>
      <RegionField
        toggleProvince={toggleProvince}
        selectedProvince={selectedProvince}
      />
    </aside>
  );
};

export default CourtsSidebar;
