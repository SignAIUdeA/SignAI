import InfoUser from "@/components/info-user/InfoUser";
import styles from "./layoutp.module.css";
import Aside from "@/components/aside/Aside";
import { RoleType } from "@/types/types";
import { useEffect } from "react";
import useLogin from "@/hooks/useLogin";
import { useUserStore } from "@/store/userStore";

interface Props {
  children: JSX.Element;
  role: RoleType;
}

const Layoutp = ({ children, role }: Props) => {
  // const { isLogin } = useLogin();

  // if (!isLogin) {
  //   return null;
  // }

  return (
    <main className={styles.Layout}>
      <InfoUser
        name="Jose Waldo"
        role="Administrador"
        className={styles.InfoUser}
      />
      <Aside role={role} className={styles.Aside} />
      <section className={styles.ChildrenSection}>{children}</section>
    </main>
  );
};

export default Layoutp;
