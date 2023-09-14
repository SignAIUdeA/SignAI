import styles from "./modal.module.css";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Modal = ({ children }: Props) => {
  return (
    <main className={styles.ModalContainer}>
      <section className={styles.Modal}>{children}</section>
    </main>
  );
};

export default Modal;
