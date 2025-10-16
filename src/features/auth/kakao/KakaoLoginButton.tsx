import kakao_msg from "../../../assets/v11.2/auth/kakao_msg.svg";

export const KakaoLoginButton = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const KakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&prompt=login`;

  return (
    <a
      href={KakaoLoginUrl}
      className="relative flex items-center justify-center w-[333px] h-[48px] bg-[#FAE64D] rounded-lg"
    >
      <img
        src={kakao_msg}
        alt="kakao"
        className="absolute left-5 top-1/2 -translate-y-1/2"
      />
      <span className="font-[700] text-sm text-[#262626]">
        카카오로 3초 만에 시작하기
      </span>
    </a>
  );
};
