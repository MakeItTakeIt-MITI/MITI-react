import { useMutation } from "@tanstack/react-query";
import { privateInquiry } from "../api/support";

export const usePrivateInquiryHook = (reset: () => void) => {
  return useMutation({
    mutationFn: privateInquiry,
    onSuccess: (data) => {
      const statusCode = data?.status_code;
      if (statusCode == 201) {
        alert(" 문의가 성공적으로 제출되었습니다! (테스트모드)");
        reset();
      } else {
        alert(" 문의가 제출을 실패하셨습니다! (테스트모드)");
      }
    },
  });
};