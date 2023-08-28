import style from "./table.module.css";
import { getAllUsers } from "./table.services";

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
                {name}
              </td>
              <td className={style.Cell}>{position} LSC</td>
              <td className={style.Cell}>{created_at}</td>
              <td className={`${style.TableRowLastChild} ${style.Cell}`}>
                <button>DEL</button>
                <button>UPD</button>
                <button>DET</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
