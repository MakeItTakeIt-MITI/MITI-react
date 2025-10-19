import { useMutation } from "@tanstack/react-query";
import { InquiryDetailField } from "../../../interfaces/support.ts";
import { privateInquiryDetails } from "../api/inquiry.ts";

export const useInquiryDetailsHook = (
  inquiryId: number,
  password: InquiryDetailField,
  setErrorStatus: (arg: number) => void
) => {
  return useMutation({
    mutationFn: () =>
      privateInquiryDetails(inquiryId, password, setErrorStatus),
  });
};
