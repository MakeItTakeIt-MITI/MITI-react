import CourtsCard from "./CourtsCard.tsx";

const CourtsListContainer = () => {
  return (
    <ul className="p-6 flex flex-col gap-2 h-[698px] overlflow-y-auto">
      <CourtsCard />

      <CourtsCard />

      <CourtsCard />

      <CourtsCard />
    </ul>
  );
};

export default CourtsListContainer;
