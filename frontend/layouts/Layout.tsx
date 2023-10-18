import InfoUser from "@/components/info-user/InfoUser";
import styles from "./layout.module.css";
import Aside from "@/components/aside/Aside";
import { RoleType } from "@/types/types";
import useLogin from "@/hooks/useLogin";
import { ROLES } from "@/constants/roles";
import { useRouter } from "next/router";
import { USER_VALID_ROUTES } from "@/constants/routes";
import { useEffect } from "react";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { isLogin, userRole, userInfo } = useLogin();
  const rolename = userRole as RoleType;
  const roleUser = ROLES[rolename];
  useEffect(() => {
    if (!router.isReady) return;
    if (!isLogin) {
      return;
    } else {
      const actualUserPath = router.pathname;
      const listValidRoutesUser = USER_VALID_ROUTES[rolename];
      const existRoute = listValidRoutesUser.includes(actualUserPath);
      if (!existRoute) {
        router.push("/403");
      }
    }
  }, [router, isLogin]);

  if (!isLogin)
    return (
      <main>
        <h1>Cargando...</h1>
      </main>
    );

  return (
    <main className={styles.Layout}>
      <InfoUser
        name={userInfo?.name as string}
        role={roleUser}
        className={styles.InfoUser}
      />
      <Aside role={rolename} className={styles.Aside} />
      <section className={styles.ChildrenSection}>{children}</section>
    </main>
  );
};

export default Layout;
