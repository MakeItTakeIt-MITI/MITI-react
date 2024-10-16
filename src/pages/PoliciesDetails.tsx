import { useParams } from "react-router-dom";
import Footer from "../components/common/Footer";
import { usePolicyDetailHook } from "../hooks/usePolicyDetailHook";

const PoliciesDetails = () => {
  const { id } = useParams();
  const policyId = Number(id);

  const { data } = usePolicyDetailHook({ policyId: policyId });
  return (
    <>
      <section className="bg-secondary-black h-screen  md:pt-[3.75rem] md:pb-[6.25rem] sm:pt-5 sm:pb-10 sm:px-5 md:px-0">
        <div className="md:w-[768px] sm:w-full mx-auto space-y-[7.62rem]">
          <div className="space-y-[20px]">
            <h1 className=" text-[26px] font-bold text-white">
              {data?.data.name}
            </h1>
            <p className="text-base text-white font-[500]">
              {`${data?.data.created_at.slice(0, 4)}년 ${data?.data.created_at.slice(5, 7).padStart(2, "0")}월 ${data?.data.created_at.slice(8, 10).padStart(2, "0")}일`}
            </p>
            <p
              style={{ scrollbarWidth: "thin" }}
              className="text-sm text-[#d5d5d5] font-[400] h-[600px] overflow-y-auto "
            >
              {data?.data.content}
            </p>
          </div>
          {/* bottom */}
          <div
            style={{
              background:
                "linear-gradient(97deg, #DAFEFF 11.57%, #9EEFF0 88.43%)",
            }}
            className="w-full h-[100px] rounded-xl px-10 sm:hidden md:flex items-center justify-between"
          >
            <p className="font-bold">
              편하게 농구게임에 참여하고 싶다면 <br />
              MITI를 이용해보세요!
            </p>
            <button
              style={{
                background:
                  "linear-gradient(94deg, rgba(255, 255, 255, 0.42) 4.64%, rgba(255, 255, 255, 0.60) 96.13%)",
              }}
              className="px-4 py-3 rounded-lg text-sm font-[700] text-dark-card  "
            >
              MITI 앱으로 열기
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PoliciesDetails;
