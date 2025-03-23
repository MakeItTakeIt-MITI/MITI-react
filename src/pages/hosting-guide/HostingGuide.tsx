import Footer from "../../components/common/Footer.tsx";
import { Navbar } from "../../components/navigation/Navbar.tsx";

import first_1_1 from "../../assets/v11.2/hosting-guide/web-first-1-1.svg";

const HostingGuide = () => {
  return (
    <>
      <Navbar />
      <section>
        <article className="w-full h-[800px] bg-[#262626] flex items-center justify-center">
          <div className="w-[1114px] h-[700px]  flex md:flex-row sm:flex-col-reverse  items-center  justify-center md:gap-[60px] sm:gap-5">
            {/* left */}
            <div className="md:space-y-[60px] sm:space-y-5 sm:px-[21px] md:px-0">
              <h1 className="text-[#9EEFF0] font-bold md:text-[32px] sm:text-xl">
                이제 MITI로 간편하게 게스트 모집하기!
              </h1>
              <div className="space-y-5 text-[#fff] md:text-[20px] sm:text-sm font-[400] ">
                <p className="leading-[1.5]">
                  온라인 카페, 단체 채팅방.. <br />
                  다양한 커뮤니티에 경기 모집글을 작성하기, <br />
                  게스트 참가비 확인하기, 안내 문자 전송하기..
                </p>

                <p className="leading-[1.5]">
                  그동안 게스트 모집하기 참 번거로우셨죠? <br />
                  MITI를 통해 클릭 몇번으로 농구 게스트들을 간편하게
                  모집해보세요!
                </p>
              </div>
            </div>
            {/* right */}
            <div className="md:h-[594px] md:w-[484px] sm:h-[400px] sm:w-[325px]">
              <img src={first_1_1} alt="" className="w-full h-full" />
            </div>
          </div>
        </article>
        <article className="w-full h-[800px] m-auto   bg-[#404040]"></article>
        <article className="w-full h-[800px] m-auto bg-[#262626]"></article>
        <article className="w-full h-[800px] m-auto   bg-[#404040]"></article>
        {/* <article className="w-[1114px] h-[700px]  bg-[#262626]"></article> */}
        {/* <article className="w-[1114px] h-[700px]  bg-[#404040]"></article> */}
      </section>
      <Footer />
    </>
  );
};

export default HostingGuide;
