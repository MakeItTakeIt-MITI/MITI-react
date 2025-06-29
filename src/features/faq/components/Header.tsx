const Header = () => {
  return (
    <div className="sm:bg-faq_mobile md:bg-faq_web bg-center bg-cover bg-no-repeat sm:h-[16.125rem] md:h-[20rem] flex justify-center items-center bg-[#000] relative">
      <div className="absolute md:w-[768px] flex flex-col sm:items-center md:items-start justify-center gap-[1.25rem] text-[#fff] ">
        <p className="text-base font-bold text-primary-teal">
          MITI 서비스 런칭
        </p>
        <h1 className="font-bold  sm:text-[24px] md:text-[44px]">
          무엇을 도와드릴까요?{" "}
        </h1>
        <p className="sm:font-[300] md:font-[400] sm:text-[14px] md:text-[20px]">
          궁금한 내용을 해결해드려요.
        </p>
      </div>
    </div>
  );
};

export default Header;
