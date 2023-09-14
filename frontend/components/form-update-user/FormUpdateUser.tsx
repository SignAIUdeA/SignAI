import styles from "./form-update-user.module.css";

interface Props {
  setShowModal: (showModal: boolean) => void;
}

const FormUpdateUser = ({ setShowModal }: Props) => {
  return (
    <form method="POST" className={styles.Form}>
      <h2 className={styles.FormTitle}>Actualizar Información</h2>
      <label htmlFor="name">
        Nombres
        <input className={styles.Input} type="text" name="name" id="name" />
      </label>
      <label htmlFor="password">
        Contraseña
        <input
          className={styles.Input}
          type="password"
          name="password"
          id="password"
        />
      </label>
      <label htmlFor="confirmPassword">
        Repetir contraseña
        <input
          className={styles.Input}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
        />
      </label>
      <section className={styles.WrapperButtons}>
        <button
          onClick={() => setShowModal(false)}
          className={`${styles.Btn} ${styles.BtnCancel}`}>
          Cancelar
        </button>
        <button className={`${styles.Btn} ${styles.BtnUpdate}`}>
          Actualizar
        </button>
      </section>
    </form>
  );
};

export default FormUpdateUser;
