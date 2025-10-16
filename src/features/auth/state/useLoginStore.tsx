import { create } from "zustand";
import { UserDataField } from "../interface/auth.ts";

interface LoginStoreField {
  isLogged: boolean;
  user: null | UserDataField;
  setIsLogged: (arg: boolean) => void;
  setUser: (arg: UserDataField) => void;
}

export const useLoginStore = create<LoginStoreField>((set) => ({
  isLogged: false,
  user: null,
  setIsLogged: (value: boolean) => set({ isLogged: value }),
  setUser: (user: UserDataField) => set({ user }),
}));
