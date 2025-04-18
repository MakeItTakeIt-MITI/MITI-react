import { useMutation } from "@tanstack/react-query";
import { postDeleteAccount } from "../api/user.ts";

export const useDeleteAccountHook = () => {
  return useMutation({
    mutationFn: postDeleteAccount,
    onSuccess: (res) => {
      console.log(res);
      localStorage.clear();
    },
  });
};
