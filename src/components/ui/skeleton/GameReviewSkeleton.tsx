import { NavigateToPrevContainer } from "../../NavigateToPrevContainer";

export const GameReviewSkeleton = () => {
  return (
    <section className="laptop:my-5 mobile:mb-16 laptop:block mobile:hidden">
      <NavigateToPrevContainer children="리뷰 작성하기" />

      <h1 className=" laptop:w-[981px] mx-auto mobile:hidden laptop:block px-3 mb-[32px] text-[26px] font-bold"></h1>
      <div className="flex laptop:flex-row mobile:flex-col gap-5 laptop:px-3 mobile:px-1 laptop:w-[981px] laptop:h-[745px]  mx-auto ">
        <div className="laptop:max-w-[431px]  mobile:w-full space-y-5">
          <div className="w-full h-[303px] border border-gray-200 rounded-lg flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="h-[170px] rounded-lg border border-gray-200 p-3 flex flex-col gap-4 ">
            {" "}
          </div>
        </div>
        <div className="space-y-5">
          <div className="laptop:w-[464px] space-y-2.5">
            {/* <h2 className="text-xl font-[600]">호스트 리뷰</h2> */}
            <div className="space-y-5 w-full h-[97px] p-3 rounded-lg border border-gray-200 ">
              <div className="border border-gray-200 rounded-lg p-3 h-[73px] space-y-2">
                {" "}
              </div>
            </div>
          </div>
          <div className="space-y-2.5">
            {/* <h2 className="text-xl font-[600]">게스트 리뷰</h2> */}
            <div
              style={{ scrollbarWidth: "thin" }}
              className="space-y-5 h-[509px] p-3 rounded-lg border border-gray-200 overflow-y-auto"
            >
              <div className=" p-3 rounded-lg border border-gray-200 h-[73px] space-y-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
