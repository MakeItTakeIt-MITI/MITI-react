import { useMutation } from "@tanstack/react-query";
import { addPrivateInquiry } from "../api/inquiry";
import { useNavigate } from "react-router-dom";

export const usePrivateInquiryHook = (reset: () => void) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: addPrivateInquiry,
    onSuccess: (data) => {
      const statusCode = data?.status_code;
      if (statusCode === 201) {
        reset();
        navigate(`/inquiries/${data?.data.id}`);
      }
    },
  });
};
