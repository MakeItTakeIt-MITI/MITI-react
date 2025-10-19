import { Link } from "react-router-dom";
import Footer from "../../features/common/components/Footer.tsx";
import { useServiceTermsDataHook } from "../../features/policies/hooks/useServiceTermsDataHook.tsx";
import { PoliciesField } from "../../interfaces/support.ts";
import MoveToAppBanner from "../../features/common/components/MoveToAppBanner.tsx";

const Policies = () => {
  const { data } = useServiceTermsDataHook();

  return (
    <>
      <section className="bg-secondary-black h-screen  md:pt-[3.75rem] md:pb-[6.25rem] sm:pt-5 sm:pb-10 sm:px-5 md:px-0">
        <div className="md:w-[768px] sm:w-full mx-auto sm:space-y-[24px] md:space-y-[40px] mb-[40px]">
          <h1 className=" sm:text-[26px] text-white md:text-5xl font-bold">
            서비스 약관
          </h1>
          <div className="md:py-10 sm:py-5 border-t border-b  border-[#525252] ">
            <ul className="space-y-5">
              {data?.data.map((service: PoliciesField) => (
                <li
                  key={service.id}
                  className="text-white md:text-base sm:text-xs cursor-pointer"
                >
                  <Link to={`${service.id}`}> {service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <MoveToAppBanner />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Policies;
