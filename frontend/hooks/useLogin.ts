import { AuthResponse, UserAuthorized, UserInfo } from "@/types/types";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { getUserInfo } from "@/functions/login";

const useLogin = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userAuth, setUserAuth] = useState<UserAuthorized>();
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    const authInfo = sessionStorage.getItem("authInfo");
    if (authInfo) {
      const authInfoParse = JSON.parse(authInfo as string) as AuthResponse;
      const infoToken = jwt_decode(
        authInfoParse.access_token
      ) as UserAuthorized;
      setUserAuth(infoToken);
      setIsLogin(true);
      getUserInfo(authInfoParse).then((res) => setUserInfo(res as UserInfo));
    } else {
      router.push("/login");
    }
  }, []);

  return {
    isLogin,
    userAuth,
    userInfo,
  };
};

export default useLogin;
