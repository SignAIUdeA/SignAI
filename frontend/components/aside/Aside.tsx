import { IconMenuHamburger } from "@/icons/Icons";
import styles from "./aside.module.css";
import { RoleType } from "@/types/types";
import { getSidebar } from "./aside.services";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  role: RoleType;
  className?: string;
}

const Aside = ({ role, className = "" }: Props) => {
  const SidebarData = getSidebar(role);
  const router = useRouter();

  return (
    <aside
      className={`hidden w-64 md:flex flex-col gap-12 pt-12 pl-12 ${className}`}>
      <div className=" flex gap-4 items-center px-[1rem]">
        <button className={styles.Button}>
          <IconMenuHamburger width="1.5rem" height="1.5rem" />
        </button>
        <h1 className="text-[var(--green-dark)] font-bold text-[2rem]">
          SignAI
        </h1>
      </div>

      <ul className="flex flex-col gap-6">
        {SidebarData.map((item) => (
          <li key={item.title} onClick={() => router.push(item.link)}>
            <Link
              href={item.link}
              className={
                router.pathname === item.link
                  ? `${styles.Link} background-active`
                  : `${styles.Link} background text-[var(--grey-light)]`
              }>
              {item.icon}
              <span className="text-sm">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
