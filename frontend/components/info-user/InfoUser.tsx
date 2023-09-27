import Link from "next/link";
import style from "./info-user.module.css";
import { IconLogout, IconAvatarUser } from "@/icons/Icons";
import { UserInfo } from "./info-user.types";
import { useUserStore } from "@/store/userStore";
import useLogin from "@/hooks/useLogin";
import { useRouter } from "next/router";

const InfoUser = ({ name, role }: UserInfo) => {
  const router = useRouter();
  return (
    <section className={`${style.SectionInfoUser} debug`}>
      <Link
        className={style.BtnLogout}
        href={"/login"}
        onClick={() => {
          sessionStorage.removeItem("authInfo");
          router.push("/login");
        }}>
        <IconLogout width="1.6rem" height="1.6rem" />
        <span>SALIR</span>
      </Link>
      <div className={style.WrapperDataUser}>
        <h3 className={style.NameUser}>{name}</h3>
        <span className={style.RoleUser}>{role}</span>
      </div>
      <div className={style.WrapperAvatar}>
        <IconAvatarUser />
      </div>
    </section>
  );
};

export default InfoUser;
