import TagPosition from "../tag-position/TagPosition";
import style from "./table.module.css";
import { getAllUsers } from "./table.services";
import {
  IconDelete,
  IconDetails,
  IconEdit,
  IconAvatarUser,
} from "@/icons/Icons";

function Table() {
  const users = getAllUsers();

  return (
    <table className={style.Table}>
      <thead className={style.TableHead}>
        <tr>
          <th className={style.CellHead}>Nombre</th>
          <th className={style.CellHead}>Cargo</th>
          <th className={style.CellHead}>Creado</th>
          <th className={style.CellHead}>Acciones</th>
        </tr>
      </thead>
      <tbody className={style.TableBody}>
        {users.map(({ name, position, created_at }, index) => {
          return (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#EBF4ED]" : "bg-white"}>
              <td className={`${style.TableRowFirstChild} ${style.Cell}`}>
                <div className="flex gap-[0.625rem] items-center">
                  <IconAvatarUser />
                  {name}
                </div>
              </td>
              <td className={style.Cell}>
                <TagPosition />
              </td>
              <td className={style.Cell}>{created_at}</td>
              <td className={`${style.TableRowLastChild} ${style.Cell}`}>
                <div className={style.WrapperButtons}>
                  <button className={style.Button}>
                    <IconDelete />
                  </button>
                  <button className={style.Button}>
                    <IconEdit />
                  </button>
                  <button className={style.Button}>
                    <IconDetails />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
