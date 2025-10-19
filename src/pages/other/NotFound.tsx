import MoveToAppBanner from "../../features/common/components/MoveToAppBanner.tsx";

const NotFound = () => {
  return (
    <section className="bg-secondary-black h-screen pt-[60px] pb-[60px] ">
      <div className="md:w-[768px] sm:w-full md:px-0 sm:px-5 space-y-[42px] mx-auto ">
        <div className="space-y-[25px] py-[50px] h-[530px]">
          <h1 className="text-[#7feef0] md:text-[120px] sm:text-[60px] font-bold ">
            404
          </h1>
          <div className="space-y-3">
            <h2 className=" text-white md:text-4xl sm:text-md font-bold">
              페이지를 찾을 수 없습니다.
            </h2>
            <p className=" text-white md:text-2xl sm:text-smfont-normal ">
              요청하신 페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
              <br />
              입력하신 주소를 다시 한 번 확인해주세요.
            </p>
          </div>
        </div>
        <MoveToAppBanner />
      </div>
    </section>
  );
};

export default NotFound;
