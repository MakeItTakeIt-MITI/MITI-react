import { useMutation } from "@tanstack/react-query";
import { postDeleteAccount } from "../api/user.ts";

export const useDeleteAccountHook = (setStatus: (arg: number) => void) => {
  return useMutation({
    mutationFn: postDeleteAccount,
    onSuccess: (res) => {
      // console.log(res);
      setStatus(res?.status_code);
      localStorage.clear();
    },
  });
};
