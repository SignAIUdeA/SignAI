import Link from "next/link";
import style from "./info-user.module.css";
import { IconLogout, IconAvatarUser } from "@/icons/Icons";
import { UserInfo } from "./info-user.types";
import useLogin from "@/hooks/useLogin";
import { useRouter } from "next/router";

const InfoUser = ({ name, role, className = "" }: UserInfo) => {
  const router = useRouter();
  return (
    <section className={`${style.SectionInfoUser} ${className}`}>
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
        <IconAvatarUser width="2.2rem" height="2.2rem" />
      </div>
    </section>
  );
};

export default InfoUser;
