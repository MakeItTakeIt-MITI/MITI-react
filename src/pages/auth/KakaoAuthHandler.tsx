import axios from "axios";
import { useEffect } from "react";
import { useKakaoLoginHook } from "../../features/auth/hooks/useKakaoLoginHook.tsx";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../../features/auth/state/useLoginStore.tsx";

export const KakaoAuthHandler = () => {
  const AUTHORIZE_CODE = new URL(document.location.toString()).searchParams.get(
    "code"
  );
  const GRANT_TYPE: string = "authorization_code";
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const { mutate } = useKakaoLoginHook();
  const { setIsLogged, setUser } = useLoginStore();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          {
            grant_type: GRANT_TYPE,
            redirect_uri: REDIRECT_URI,
            client_id: REST_API_KEY,
            code: AUTHORIZE_CODE,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        const accessToken = response?.data.access_token;
        mutate(
          { access_token: accessToken },
          {
            onSuccess: (res) => {
              console.log(res);
              if (res.status_code == 200) {
                localStorage.setItem("accessToken", res?.data.token.access);
                localStorage.setItem("refreshToken", res?.data.token.refresh);
                setUser(res?.data);
                setIsLogged(true);
                navigate("/withdraw");
              } else {
                alert(res);
              }

              if (res.status_code == 403) {
                alert("다른 방법으로 로그인 시도해주세요.");
              }
            },
            onError() {
              alert(
                "카카오톡 로그인에 실패했습니다.\n카카오 계정으로 가입하신 사용자이신가요?\n계속해서 문제가 발생한다면 고객센터로 문의 부탁드립니다."
              );

              setIsLogged(false);
              navigate("/auth");
            },
          }
        );

        return response;
      } catch (error) {
        throw new Error();
      }
    };

    fetchData();
  }, []);
  return <></>;
};
