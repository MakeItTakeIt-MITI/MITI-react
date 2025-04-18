import { useMutation } from "@tanstack/react-query";
import { oAuthKakaoLogin } from "../api/kakao.ts";

export const useKakaoLoginHook = () => {
  return useMutation({
    mutationFn: oAuthKakaoLogin,
  });
};
