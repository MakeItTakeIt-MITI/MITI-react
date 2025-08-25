import CardsContainer from "../../features/landing/components/CardsContainer";
import landing_header from "../../assets/v1.3/landing-header.png";
import landing_basketball_bg from "../../assets/v1.3/landing-basketball-bg.png";

const Landing = () => {
  return (
    <section className="w-[1074px] mx-auto py-[116.5px] flex flex-col gap-12">
      <div>
        <img src={landing_header} alt={landing_header} />
      </div>
      <CardsContainer />
      {/* 
      <img
        src={landing_basketball_bg}
        alt={landing_basketball_bg}
        className=" z-[-1px] absolute left-[85px] bottom-[-120px] w-[900px] transform-[90px]"
      /> */}
    </section>
  );
};

export default Landing;
