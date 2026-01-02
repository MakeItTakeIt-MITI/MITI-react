import { useParams } from "react-router-dom";
import Footer from "../../features/common/components(renewal)/common/Footer.tsx";
import { usePolicyDetailHook } from "../../features/policies/hooks/usePolicyDetailHook.tsx";
import "../../features/policies/css/policy-detail.css";
import MoveToAppBanner from "../../features/common/components(renewal)/common/MoveToAppBanner.tsx";

const PoliciesDetails = () => {
  const { id } = useParams();
  const policyId = Number(id);

  const { data } = usePolicyDetailHook({ policyId: policyId });
  return (
    <>
      <section className="bg-secondary-black min-h-screen  md:pt-[3.75rem] md:pb-[6.25rem] sm:pt-5 sm:pb-10 sm:px-5 md:px-0">
        <div className="md:w-[768px] sm:w-full mx-auto space-y-[7.62rem]">
          <div className="space-y-[20px]">
            <h1 className=" md:text-[26px] sm:text-[20px] font-bold text-white">
              {data?.data.name}
            </h1>
            <p className="md:text-base sm:text-sm text-white font-[500]">
              {`${data?.data.created_at.slice(0, 4)}년 ${data?.data.created_at
                .slice(5, 7)
                .padStart(2, "0")}월 ${data?.data.created_at
                .slice(8, 10)
                .padStart(2, "0")}일`}
            </p>
            <p
              dangerouslySetInnerHTML={{ __html: `${data?.data.content}` }}
              style={{ scrollbarWidth: "thin" }}
              className="md:text-sm sm:text-sm text-[#d4d4d4] font-[400]  h-[600px] overflow-y-auto px-2"
            ></p>
          </div>
          {/* bottom */}
          <MoveToAppBanner />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PoliciesDetails;
