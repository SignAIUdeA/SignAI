import { RoleType, UserTableInfo } from "@/types/types";
import { formatDate } from "../table/table.services";
import TagPosition from "../tag-position/TagPosition";
import style from "./detail-user.module.css";

interface Props {
  user: UserTableInfo;
}

const DetailUser = ({ user }: Props) => {
  return (
    <article className={style.InfoUser}>
      <h1 className={style.Title}>{user?.name}</h1>
      <div>
        <strong className={style.Subtitle}>Correo: </strong>
        <p>{user?.email}</p>
      </div>
      <div>
        <strong className={style.Subtitle}>Localidad: </strong>
        <p>{user?.location}</p>
      </div>
      <div>
        <strong className={style.Subtitle}>Universidad: </strong>
        <p>{user?.university}</p>
      </div>
      <div>
        <strong className={style.Subtitle}>Creado el: </strong>
        <p>{formatDate(user?.creation_date as string)}</p>
      </div>
      <TagPosition position={user?.role as RoleType} />
    </article>
  );
};

export default DetailUser;
