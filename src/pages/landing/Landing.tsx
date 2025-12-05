import "../../index.css";
import landing from "../../assets/v1.3/landing-header.png";
import landing_sm from "../../assets/v1.3/landing/sm_header.png";

import main_bg from "../../assets/v1.3/landing/main_bg_v2.jpg";
import main_bg_sm from "../../assets/v1.3/landing/main_bg_mobile.jpg";

const Landing = () => {
  return (
    <section
      style={{
        background: `sm:url(${main_bg_sm}) md:url(${main_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative overflow-hidden min-h-screen   "
    >
      <div className="sm:w-full md:w-[1074px] mx-auto py-[176.5px] flex flex-col gap-12 relative z-20 md:px-0 sm:px-4">
        <div className="flex items-center justify-center">
          <img src={landing} alt={landing} className="sm:hidden md:block" />
          <img
            src={landing_sm}
            alt={landing_sm}
            className="md:hidden sm:block"
          />
        </div>
        {/* <CardsContainer /> */}
      </div>
    </section>
  );
};

export default Landing;
