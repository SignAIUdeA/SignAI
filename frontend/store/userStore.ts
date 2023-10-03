import { RoleType, UserAuthorized, UserInfo } from "@/types/types";
import { create } from "zustand";

interface UserStore {
  isLogin: boolean;
  userAuth?: UserAuthorized;
  userInfo?: UserInfo;
  userRole?: RoleType;
  actions: {
    setIsLogin: (login: boolean) => void;
    setUserAuth: (userAuth: UserAuthorized) => void;
    setUserRole: (setRole: RoleType) => void;
    setUserInfo: (userInfo: UserInfo) => void;
  };
}

export const useUserStore = create<UserStore>((set) => ({
  isLogin: false,
  userAuth: undefined,
  userInfo: undefined,
  userRole: undefined,
  actions: {
    setIsLogin: (login) => set({ isLogin: login }),
    setUserAuth: (userAuth) => set({ userAuth }),
    setUserRole: (setRole) => set({ userRole: setRole }),
    setUserInfo: (userInfo) => set({ userInfo }),
  },
}));
