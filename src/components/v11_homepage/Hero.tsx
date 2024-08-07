import hero from "../../assets/v11/hero.png";

const Hero = () => {
  return (
    <section className="w-full h-[20rem] bg-primary-green">
      <div className="  flex justify-end items-center pr-[11rem]">
        <div className=" w-[511px] h-[120px] flex flex-col gap-4 text-[#fff]">
          <span className="font-bold">MITI 서비스 런칭</span>
          <h1 className="text-[44px] font-bold">
            오늘 퇴근하고 농구 어떠세요?{" "}
          </h1>
          <span className="text-5 font-[400]">
            당신 근처의 경기를 지금 찾아보세요.
          </span>
        </div>
        <div className="w-[549px]">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import Slider from "react-slick";

// import MITI_BG_MAIN from "../../assets/banner-2.svg";
// import MITI_HERO_COURT_BG from "../../assets/MITI_Hero_Court.svg";

// export const HeroCarousel = () => {
//   const data = [
//     {
//       id: 1,
//       src: MITI_BG_MAIN,
//       header: "MITI 서비스 런칭",
//       bodyOne: "MITI와 함께, 경기 모집부터",
//       bodyTwo: " 관리, 결제, 매칭까지 한번에",
//     },
//     {
//       id: 2,
//       src: MITI_HERO_COURT_BG,
//       header: "MITI 서비스 런칭",
//       bodyOne: "MITI로 주변의 경기를 찾아보고",
//       bodyTwo: "경기에 참여해보세요",
//     },
//   ];
//   const settings = {
//     dots: true,
//     waitForAnimate: true,
//     fade: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 7000,
//     cssEase: "linear",
//   };
//   return (
//     <section className="mb-10 relative laptop:block tablet:block mobile:hidden">
//       <Slider {...settings}>
//         {data.map((hero) => {
//           return (
//             <div className="space-x-4 relative" key={hero.id}>
//               <img
//                 src={hero.src}
//                 className="laptop:rounded-3xl tablet:rounded-sm "
//               />
//               <div className="absolute left-6 bottom-6 ">
//                 <h2 className="text-[#FFCF0A] text-[1rem] font-bold">
//                   {hero.header}
//                 </h2>
//                 <p className="text-white text-[2rem] font-extrabold ">
//                   {hero.bodyOne}
//                 </p>
//                 <p className="text-white text-[2rem] font-extrabold ">
//                   {hero.bodyTwo}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </Slider>
//     </section>
//   );
// };
