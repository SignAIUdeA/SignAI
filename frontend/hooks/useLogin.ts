import { AuthResponse, UserAuthorized } from "@/types/types";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

const useLogin = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userAuth, setUserAuth] = useState<UserAuthorized>();

  useEffect(() => {
    const authInfo = sessionStorage.getItem("authInfo");
    if (authInfo) {
      const authInfoParse = JSON.parse(authInfo as string) as AuthResponse;
      const infoToken = jwt_decode(
        authInfoParse.access_token
      ) as UserAuthorized;
      setUserAuth(infoToken);
      setIsLogin(true);
    } else {
      router.push("/login");
    }
  }, []);

  return {
    isLogin,
    userAuth,
  };
};

export default useLogin;
