import CourtsCard from "./CourtsCard.tsx";

interface CourtsDataField {
  address: string;
  address_detail: string;
  id: number;
  latitude: string;
  longitude: string;
  name: string;
}
interface CourtsListContainerProps {
  courstDataPage: CourtsDataField[];
}

const CourtsListContainer = ({ courstDataPage }: CourtsListContainerProps) => {
  return (
    <ul className="p-6 flex flex-col gap-2 h-[698px] overlflow-y-auto">
      {courstDataPage?.map((courtData) => {
        return (
          <CourtsCard
            title={courtData.name}
            address={courtData.address}
            address_detail={courtData.address_detail}
            distance={800.0}
          />
        );
      })}
    </ul>
  );
};

export default CourtsListContainer;
