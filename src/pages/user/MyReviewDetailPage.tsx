import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import groupIcon from "../../assets/people.svg";
import { Link } from "react-router-dom";

export const MyReviewDetailPage = () => {
  return (
    <section className="laptop:my-4 mobile:my-0">
      <NavigateToPrevContainer children="" />
      <hr className="mobile:block tablet:hidden h-[7px] bg-[#F6F6F6]" />
      <div className="flex flex-col gap-4 laptop:w-[500px] min-h-[735px]    mobile:w-full mx-auto laptop:border laptop:border-gray-300  laptop:py-10 laptop:px-6 mobile:p-4 rounded-lg">
        <h2 className="font-bold">경기 정보</h2>
        {/* game detail box */}
        <Link
          to="/"
          className="flex flex-col justify-evenly  border border-gray-300 p-2 rounded-xl  h-[120px]"
        >
          <h2 className="font-bold">수원 매탄 공원 4 vs 4 (주차 12자리)</h2>
          <div className="flex items-center gap-2">
            <img src={groupIcon} alt="group icon" />
            <p className="text-[14px]">총 18명중 15명 모집</p>
          </div>
          <p className="text-[12px] text-[#999]">
            2023. 11. 15 15:30~ 2023. 11. 15 18:00{" "}
          </p>
          <div className="flex items-center justify-between">
            <span className="mobile:text-[10px] tablet:text-[14px] text-[#999]">
              서울특별시 한국동 한국로 123-456
            </span>
            <span className="font-bold text-[#4065F6]">₩10,000</span>
          </div>
        </Link>

        <hr className="mobile:block tablet:hidden h-[7px] bg-[#F6F6F6]" />
        <div className="p-4 flex flex-col gap-1">
          <h2 className="font-bold">작성 리뷰</h2>
          <h3 className="text-[14px] font-bold">평점</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="248"
            height="40"
            viewBox="0 0 248 40"
            fill="none"
          >
            <path
              d="M19.5245 1.46352C19.6741 1.00287 20.3259 1.00287 20.4755 1.46353L24.378 13.4742C24.445 13.6802 24.6369 13.8197 24.8536 13.8197H37.4823C37.9667 13.8197 38.168 14.4395 37.7762 14.7242L27.5593 22.1472C27.3841 22.2745 27.3107 22.5002 27.3777 22.7062L31.2802 34.7168C31.4299 35.1775 30.9026 35.5605 30.5108 35.2758L20.2939 27.8528C20.1186 27.7255 19.8814 27.7255 19.7061 27.8528L9.48924 35.2758C9.09739 35.5605 8.57015 35.1775 8.71982 34.7168L12.6223 22.7062C12.6893 22.5002 12.6159 22.2745 12.4407 22.1472L2.22382 14.7242C1.83196 14.4395 2.03335 13.8197 2.51771 13.8197H15.1464C15.3631 13.8197 15.555 13.6802 15.622 13.4742L19.5245 1.46352Z"
              fill="#FADD0C"
            />
            <path
              d="M123.524 1.46352C123.674 1.00287 124.326 1.00287 124.476 1.46353L128.378 13.4742C128.445 13.6802 128.637 13.8197 128.854 13.8197H141.482C141.967 13.8197 142.168 14.4395 141.776 14.7242L131.559 22.1472C131.384 22.2745 131.311 22.5002 131.378 22.7062L135.28 34.7168C135.43 35.1775 134.903 35.5605 134.511 35.2758L124.294 27.8528C124.119 27.7255 123.881 27.7255 123.706 27.8528L113.489 35.2758C113.097 35.5605 112.57 35.1775 112.72 34.7168L116.622 22.7062C116.689 22.5002 116.616 22.2745 116.441 22.1472L106.224 14.7242C105.832 14.4395 106.033 13.8197 106.518 13.8197H119.146C119.363 13.8197 119.555 13.6802 119.622 13.4742L123.524 1.46352Z"
              fill="#FADD0C"
            />
            <path
              d="M227.524 1.46352C227.674 1.00287 228.326 1.00287 228.476 1.46353L232.378 13.4742C232.445 13.6802 232.637 13.8197 232.854 13.8197H245.482C245.967 13.8197 246.168 14.4395 245.776 14.7242L235.559 22.1472C235.384 22.2745 235.311 22.5002 235.378 22.7062L239.28 34.7168C239.43 35.1775 238.903 35.5605 238.511 35.2758L228.294 27.8528C228.119 27.7255 227.881 27.7255 227.706 27.8528L217.489 35.2758C217.097 35.5605 216.57 35.1775 216.72 34.7168L220.622 22.7062C220.689 22.5002 220.616 22.2745 220.441 22.1472L210.224 14.7242C209.832 14.4395 210.033 13.8197 210.518 13.8197H223.146C223.363 13.8197 223.555 13.6802 223.622 13.4742L227.524 1.46352Z"
              fill="#F6F6F6"
            />
            <path
              d="M228 1.61803L231.902 13.6287C232.036 14.0407 232.42 14.3197 232.854 14.3197H245.482L235.265 21.7426C234.915 21.9973 234.768 22.4487 234.902 22.8607L238.805 34.8713L228.588 27.4483C228.237 27.1937 227.763 27.1937 227.412 27.4483L217.195 34.8713L221.098 22.8607C221.232 22.4487 221.085 21.9973 220.735 21.7426L210.518 14.3197H223.146C223.58 14.3197 223.964 14.0407 224.098 13.6287L228 1.61803Z"
              stroke="black"
              stroke-opacity="0.2"
            />
            <path
              d="M71.5245 1.46352C71.6741 1.00287 72.3259 1.00287 72.4755 1.46353L76.378 13.4742C76.445 13.6802 76.6369 13.8197 76.8536 13.8197H89.4823C89.9667 13.8197 90.168 14.4395 89.7762 14.7242L79.5593 22.1472C79.3841 22.2745 79.3107 22.5002 79.3777 22.7062L83.2802 34.7168C83.4299 35.1775 82.9026 35.5605 82.5108 35.2758L72.2939 27.8528C72.1186 27.7255 71.8814 27.7255 71.7061 27.8528L61.4892 35.2758C61.0974 35.5605 60.5701 35.1775 60.7198 34.7168L64.6223 22.7062C64.6893 22.5002 64.6159 22.2745 64.4407 22.1472L54.2238 14.7242C53.832 14.4395 54.0334 13.8197 54.5177 13.8197H67.1464C67.3631 13.8197 67.555 13.6802 67.622 13.4742L71.5245 1.46352Z"
              fill="#FADD0C"
            />
            <path
              d="M175.524 1.46352C175.674 1.00287 176.326 1.00287 176.476 1.46353L180.378 13.4742C180.445 13.6802 180.637 13.8197 180.854 13.8197H193.482C193.967 13.8197 194.168 14.4395 193.776 14.7242L183.559 22.1472C183.384 22.2745 183.311 22.5002 183.378 22.7062L187.28 34.7168C187.43 35.1775 186.903 35.5605 186.511 35.2758L176.294 27.8528C176.119 27.7255 175.881 27.7255 175.706 27.8528L165.489 35.2758C165.097 35.5605 164.57 35.1775 164.72 34.7168L168.622 22.7062C168.689 22.5002 168.616 22.2745 168.441 22.1472L158.224 14.7242C157.832 14.4395 158.033 13.8197 158.518 13.8197H171.146C171.363 13.8197 171.555 13.6802 171.622 13.4742L175.524 1.46352Z"
              fill="#F6F6F6"
            />
            <path
              d="M176 1.61803L179.902 13.6287C180.036 14.0407 180.42 14.3197 180.854 14.3197H193.482L183.265 21.7426C182.915 21.9973 182.768 22.4487 182.902 22.8607L186.805 34.8713L176.588 27.4483C176.237 27.1937 175.763 27.1937 175.412 27.4483L165.195 34.8713L169.098 22.8607C169.232 22.4487 169.085 21.9973 168.735 21.7426L158.518 14.3197H171.146C171.58 14.3197 171.964 14.0407 172.098 13.6287L176 1.61803Z"
              stroke="black"
              stroke-opacity="0.2"
            />
          </svg>
          <div className="flex flex-col gap-1">
            <h3 className="text-[14px] font-bold">한줄평</h3>
            <p className="font-[12px]">
              감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다.
              군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다.
              체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의
              신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만,
              현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피
              또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.
              선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서
              하되, 균등한 기회가 보장되어야 한다. 이 헌법시행 당시의 법령과
              조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다.
              국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의
              구성원으로서 국정을 심의한다. 대법원장과 대법관이 아닌 법관은
              대법관회의의 동의를 얻어 대법원장이 임명한다. 신청에 의하여 법관이
              z
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};