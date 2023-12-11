import { deleteUser } from "@/functions/users";
import router from "next/router";
import styles from "./confirmation-delete.module.css";
import { MdAddAlert, MdWarning } from "react-icons/md";

interface ConfirmationWindowProps {
  nameUserToDelete: string;
  userToDelete: string;
  setShowModal: (showModal: boolean) => void;
}

const ConfirmationDelete = ({
  nameUserToDelete,
  userToDelete,
  setShowModal,
}: ConfirmationWindowProps) => {
  return (
    <article className={styles.Container}>
      <header className="flex flex-col items-center gap-4">
        <MdWarning className="w-[5rem] h-[5rem] text-red-500" />
        <h2 className="text-center text-lg">
          ¿Está seguro qué desea eliminar a {nameUserToDelete}?
        </h2>
      </header>
      <div className={styles.WrapperBtns}>
        <button
          className={`${styles.Btn} ${styles.BtnCancel}`}
          onClick={() => setShowModal(false)}>
          Cancelar
        </button>
        <button
          className={`${styles.Btn} ${styles.BtnConfirm}`}
          onClick={() => {
            deleteUser(userToDelete).then((res) => {
              router.reload();
              console.log(res);
            });
          }}>
          Eliminar
        </button>
      </div>
    </article>
  );
};

export default ConfirmationDelete;
