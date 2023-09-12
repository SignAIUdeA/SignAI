import { IconAvatarUser } from "@/icons/Icons";
import styles from "./form-add-user.module.css";

const FormAddUser = () => {
  return (
    <form method="POST" className={styles.Form}>
      <div className={styles.AvatarContainer}>
        <IconAvatarUser width="100px" height="100px" />
      </div>
      <h3 className={styles.FormTitle}>Información Personal</h3>
      <section className={styles.WrapperInputs}>
        <div className={`${styles.Side}`}>
          <label htmlFor="name">
            Nombres
            <input className={styles.Input} type="text" name="name" id="name" />
          </label>
          <label htmlFor="username">
            Usuario
            <input
              className={styles.Input}
              type="text"
              name="username"
              id="username"
            />
          </label>
          <label htmlFor="nDocument">
            N° Documento
            <input
              className={styles.Input}
              type="text"
              name="nDocument"
              id="nDocument"
            />
          </label>
          <label htmlFor="location">
            Localidad
            <input
              className={styles.Input}
              type="text"
              name="location"
              id="location"
            />
          </label>
        </div>
        <div className={`${styles.Side}`}>
          <label htmlFor="lastNames">
            Apellidos
            <input
              className={styles.Input}
              type="text"
              name="lastNames"
              id="lastNames"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              className={styles.Input}
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="position">
            Cargo
            <input
              className={styles.Input}
              type="text"
              name="position"
              id="position"
            />
          </label>
          <label htmlFor="university">
            Universidad
            <input
              className={styles.Input}
              type="text"
              name="university"
              id="university"
            />
          </label>
        </div>
      </section>
      <button className={styles.BtnForm}>Crear Usuario</button>
    </form>
  );
};

export default FormAddUser;
