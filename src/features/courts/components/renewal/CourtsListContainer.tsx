import CourtsCard from "./CourtsCard.tsx";

const CourtsListContainer = () => {
  return (
    <ul className="p-6 flex flex-col gap-2 h-[698px] overlflow-y-auto">
      <CourtsCard
        title="COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1"
        address="COUT ADDRESS"
        address_detail="COUT ADDRESS DETAIL"
        distance={800.0}
      />
      <CourtsCard
        title="COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1"
        address="COUT ADDRESS"
        address_detail="COUT ADDRESS DETAIL"
        distance={800.0}
      />{" "}
      <CourtsCard
        title="COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1"
        address="COUT ADDRESS"
        address_detail="COUT ADDRESS DETAIL"
        distance={800.0}
      />{" "}
      <CourtsCard
        title="COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1"
        address="COUT ADDRESS"
        address_detail="COUT ADDRESS DETAIL"
        distance={800.0}
      />
      <CourtsCard
        title="COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1"
        address="COUT ADDRESS"
        address_detail="COUT ADDRESS DETAIL"
        distance={800.0}
      />{" "}
      <CourtsCard
        title="COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1"
        address="COUT ADDRESS"
        address_detail="COUT ADDRESS DETAIL"
        distance={800.0}
      />{" "}
      <CourtsCard
        title="COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1"
        address="COUT ADDRESS"
        address_detail="COUT ADDRESS DETAIL"
        distance={800.0}
      />
      <CourtsCard
        title="COURT NCOURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1AME LINE TRUNCATE : TRUE / MAX LINE : 1"
        address="COUT ADDRESS"
        address_detail="COUT ADDRESS DETAIL"
        distance={800.0}
      />{" "}
      <CourtsCard
        title="COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1"
        address="COUT ADDRESS"
        address_detail="COUT ADDRESS DETAIL"
        distance={800.0}
      />
    </ul>
  );
};

export default CourtsListContainer;
