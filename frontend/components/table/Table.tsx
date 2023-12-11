import { RoleType, UserTableInfo } from "@/types/types";
import TagPosition from "../tag-position/TagPosition";
import style from "./table.module.css";
import { formatDate } from "./table.services";
import {
  IconDelete,
  IconDetails,
  IconEdit,
  IconAvatarUser,
} from "@/icons/Icons";
import { deleteUser, getUserInformationById } from "@/functions/users";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "../modal/Modal";
import InfoUser from "../info-user/InfoUser";
import DetailUser from "../detail-user/DetailUser";
import ConfirmationDelete from "../confirmation-delete/ConfirmationDelete";

interface Props {
  className?: string;
  listUsers: UserTableInfo[];
}

function Table({ className = "", listUsers }: Props) {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
  const [userSearch, setUserSearch] = useState<UserTableInfo>();
  const [userToDelete, setUserToDelete] = useState<string>("");
  const [nameUserToDelete, setNameUserToDelete] = useState<string>("");
  return (
    <>
      <table className={`${style.Table} ${className}`}>
        <thead className={style.TableHead}>
          <tr>
            <th className={style.CellHead}>Nombre</th>
            <th className={style.CellHead}>Cargo</th>
            <th className={style.CellHead}>Creado</th>
            <th className={style.CellHead}>Acciones</th>
          </tr>
        </thead>
        <tbody className={style.TableBody}>
          {listUsers.map(({ name, role, creation_date, id }, index) => {
            return (
              <tr
                key={id}
                className={index % 2 === 0 ? "bg-[#EBF4ED]" : "bg-white"}>
                <td className={`${style.TableRowFirstChild} ${style.Cell}`}>
                  <div className="flex gap-[0.625rem] items-center">
                    <IconAvatarUser />
                    {name}
                  </div>
                </td>
                <td className={style.Cell}>
                  <TagPosition position={role as RoleType} />
                </td>
                <td className={style.Cell}>{formatDate(creation_date)}</td>
                <td className={`${style.TableRowLastChild} ${style.Cell}`}>
                  <div className={style.WrapperButtons}>
                    <button
                      className={style.Button}
                      onClick={() => {
                        setUserToDelete(id);
                        setNameUserToDelete(name);
                        setShowModalConfirm(true);
                      }}>
                      <IconDelete />
                    </button>
                    {/* <button className={style.Button}>
                    <IconEdit />
                  </button> */}
                    <button
                      className={style.Button}
                      onClick={() => {
                        getUserInformationById(id).then((res) => {
                          setUserSearch(res.data);
                          setShowModal(true);
                        });
                      }}>
                      <IconDetails />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {!showModal || (
        <Modal setShowModal={setShowModal} closeButton={true}>
          <DetailUser user={userSearch as UserTableInfo} />
        </Modal>
      )}

      {!showModalConfirm || (
        <Modal setShowModal={setShowModalConfirm} closeButton={true}>
          <ConfirmationDelete
            setShowModal={setShowModalConfirm}
            nameUserToDelete={nameUserToDelete}
            userToDelete={userToDelete}
          />
        </Modal>
      )}
    </>
  );
}

export default Table;
