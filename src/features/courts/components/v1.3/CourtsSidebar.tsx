import RegionField from "../../../games/components/sidebar/ProvinceField.tsx";

const CourtsSidebar = () => {
  return (
    <aside
      className=" sm:hidden md:flex flex-col gap-5 p-4 "
      style={{ width: "238px" }}
    >
      <h1 className="text-white font-bold text-base">필터</h1>
      <RegionField />
    </aside>
  );
};

export default CourtsSidebar;
