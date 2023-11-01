import { IconClose } from "@/icons/Icons";
import styles from "./modal.module.css";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  closeButton?: boolean;
  setShowModal: (showModal: boolean) => void;
}

const Modal = ({ children, closeButton = true, setShowModal }: Props) => {
  return (
    <main className={styles.ModalContainer}>
      <section className={styles.Modal}>
        {!closeButton || (
          <button
            className={styles.BtnClose}
            onClick={() => setShowModal(false)}>
            <IconClose width="1rem" height="1rem" />
          </button>
        )}
        {children}
      </section>
    </main>
  );
};

export default Modal;
