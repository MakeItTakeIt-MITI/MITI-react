import { useMutation } from "@tanstack/react-query";
import { privateInquiryDetails } from "../../../api/support.ts";
import { InquiryDetailField } from "../../../interfaces/support.ts";

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
