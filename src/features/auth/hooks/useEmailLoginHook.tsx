import { useMutation } from "@tanstack/react-query";
import { postEmailLogin } from "../api/auth.ts";
import { EmailLoginField } from "../interface/auth.ts";

export const useEmailLoginHook = () => {
  return useMutation({
    mutationFn: (data: EmailLoginField) => postEmailLogin(data),
  });
};
