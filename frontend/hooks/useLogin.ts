import {
  AuthResponse,
  RoleType,
  UserAuthorized,
  UserInfo,
} from "@/types/types";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { getUserInfo } from "@/functions/login";
import { useUserStore } from "@/store/userStore";

const useLogin = () => {
  const router = useRouter();
  const actions = useUserStore((state) => state.actions);
  const isLogin = useUserStore((state) => state.isLogin);
  const { setIsLogin } = actions;
  // const [isLogin, setIsLogin] = useState<boolean>(false);
  // const [userAuth, setUserAuth] = useState<UserAuthorized>();
  // const [userInfo, setUserInfo] = useState<UserInfo>();
  // const [userRole, setUserRole] = useState<RoleType>();

  useEffect(() => {
    const authInfo = sessionStorage.getItem("authInfo");
    if (authInfo) {
      const authInfoParse = JSON.parse(authInfo as string) as AuthResponse;
      const infoToken = jwt_decode(
        authInfoParse.access_token
      ) as UserAuthorized;
      // setUserAuth(infoToken);
      // setIsLogin(true);
      // setUserRole(infoToken.role);
      // getUserInfo(authInfoParse).then((res) => setUserInfo(res as UserInfo));
      setIsLogin(true);
    } else {
      router.push("/login");
    }
  }, []);

  return { isLogin };
};

export default useLogin;