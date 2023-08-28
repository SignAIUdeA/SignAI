import style from "./table.module.css";
import { getAllUsers } from "./table.services";

function Table() {
  const users = getAllUsers();

  return (
    <table className={style.Table}>
      <thead className={style.TableHead}>
        <tr>
          <th>Nombre</th>
          <th>Cargo</th>
          <th>Creado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className={style.TableBody}>
        {users.map(({ name, position, created_at }, index) => {
          return (
            <tr>
              <td>{name}</td>
              <td>{position}</td>
              <td>{created_at}</td>
              <td>
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
